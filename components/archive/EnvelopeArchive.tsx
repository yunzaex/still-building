import type { ArchiveCategory } from "@/data/archive";
import Image from "next/image";

import PostcardLink from "./PostcardLink";

type EnvelopeArchiveProps = {
  categories: ArchiveCategory[];
};

export default function EnvelopeArchive({ categories }: EnvelopeArchiveProps) {
  return (
    <section className="archive-stage" aria-label="Archive categories">
      <div className="archive-envelope">
        <div className="envelope-back" aria-hidden="true" />
        <div className="envelope-flap" aria-hidden="true" />
        <p className="envelope-address" aria-hidden="true">
          YOONJAE ARCHIVE
          <br />
          SEOUL / 2026
        </p>

        <div className="envelope-insert">
          {categories.map((category, index) => (
            <PostcardLink
              key={category.slug}
              className={`postcard postcard-${index + 1}`}
              href={`/archive/${category.slug}`}
              label={`${category.title} archive category`}
              style={
                {
                  "--postcard-paper": category.paper,
                  "--postcard-rotation": `${category.rotation}deg`,
                  "--postcard-offset": category.offset,
                } as React.CSSProperties
              }
            >
              <div className="postcard-image-frame">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 21rem"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <span className="postcard-title">{category.title}</span>
            </PostcardLink>
          ))}

          <div className="envelope-pocket" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
