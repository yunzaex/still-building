import Link from "next/link";

import type { ArchiveCategory } from "@/data/archive";

import PostcardArtwork from "./PostcardArtwork";

type EnvelopeArchiveProps = {
  categories: ArchiveCategory[];
};

export default function EnvelopeArchive({ categories }: EnvelopeArchiveProps) {
  return (
    <section className="archive-stage" aria-label="Archive categories">
      <div className="archive-envelope">
        <div className="envelope-back" aria-hidden="true" />
        <div className="envelope-pocket" aria-hidden="true" />
        <div className="envelope-flap" aria-hidden="true" />
        <p className="envelope-address" aria-hidden="true">
          YOONJAE ARCHIVE
          <br />
          SEOUL / 2026
        </p>

        {categories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/archive/${category.slug}`}
            className={`postcard postcard-${index + 1}`}
            style={
              {
                "--postcard-accent": category.accent,
                "--postcard-paper": category.paper,
                "--postcard-rotation": `${category.rotation}deg`,
                "--postcard-offset": category.offset,
              } as React.CSSProperties
            }
            aria-label={`${category.title} archive category`}
          >
            <span className="postcard-topline">
              <span>{category.number} / 05</span>
              <span>{category.stamp}</span>
            </span>
            <PostcardArtwork slug={category.slug} label={category.subtitle} />
            <span className="postcard-title">{category.title}</span>
            <span className="postcard-date">ARCHIVE / {category.number}</span>
            <span className="postcard-stamp">✳</span>
          </Link>
        ))}
      </div>

      <p className="archive-stage-note type-meta">
        Five drawers for things that happened outside the project list.
      </p>
    </section>
  );
}
