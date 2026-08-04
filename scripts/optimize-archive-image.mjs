import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT_DIR = process.cwd();

const JOBS = [
  {
    inputDir: path.join(ROOT_DIR, "raw-images", "photographs"),
    outputDir: path.join(ROOT_DIR, "public", "photographs"),
  },
  {
    inputDir: path.join(ROOT_DIR, "raw-images", "journeys"),
    outputDir: path.join(ROOT_DIR, "public", "journeys"),
  },
];

const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".tif",
  ".tiff",
  ".heic",
  ".heif",
  ".avif",
]);

const MAX_LONG_EDGE = 1800;
const WEBP_QUALITY = 82;

async function directoryExists(directoryPath) {
  try {
    const info = await stat(directoryPath);
    return info.isDirectory();
  } catch {
    return false;
  }
}

async function optimizeDirectory({ inputDir, outputDir }) {
  if (!(await directoryExists(inputDir))) {
    console.log(`건너뜀: 입력 폴더가 없습니다.\n${inputDir}`);
    return;
  }

  await mkdir(outputDir, { recursive: true });

  const entries = await readdir(inputDir, {
    withFileTypes: true,
  });

  const imageFiles = entries.filter((entry) => {
    if (!entry.isFile()) {
      return false;
    }

    const extension = path.extname(entry.name).toLowerCase();
    return SUPPORTED_EXTENSIONS.has(extension);
  });

  if (imageFiles.length === 0) {
    console.log(`건너뜀: 이미지가 없습니다.\n${inputDir}`);
    return;
  }

  console.log(`\n${path.basename(inputDir)}: ${imageFiles.length}개 처리 시작`);

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file.name);
    const baseName = path.parse(file.name).name;
    const outputPath = path.join(outputDir, `${baseName}.webp`);

    try {
      const result = await sharp(inputPath)
        // EXIF 방향을 실제 픽셀 방향으로 적용한 뒤 메타데이터는 제거합니다.
        .autoOrient()
        // 가로 또는 세로 중 긴 변이 최대 1800px을 넘지 않게 합니다.
        .resize({
          width: MAX_LONG_EDGE,
          height: MAX_LONG_EDGE,
          fit: "inside",
          withoutEnlargement: true,
        })
        // 웹용 WebP로 변환합니다.
        .webp({
          quality: WEBP_QUALITY,
          effort: 4,
        })
        .toFile(outputPath);

      const sizeKB = Math.round(result.size / 1024);

      console.log(
        `완료: ${file.name} → ${path.basename(outputPath)} ` +
          `(${result.width}×${result.height}, ${sizeKB}KB)`,
      );
    } catch (error) {
      console.error(`실패: ${file.name}`);
      console.error(error instanceof Error ? error.message : error);
    }
  }
}

async function main() {
  console.log("Archive 이미지 최적화를 시작합니다.");
  console.log(`최대 긴 변: ${MAX_LONG_EDGE}px`);
  console.log(`WebP 품질: ${WEBP_QUALITY}`);

  for (const job of JOBS) {
    await optimizeDirectory(job);
  }

  console.log("\n모든 이미지 처리가 끝났습니다.");
}

main().catch((error) => {
  console.error("\n이미지 최적화 중 치명적인 오류가 발생했습니다.");
  console.error(error);
  process.exitCode = 1;
});
