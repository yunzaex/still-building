import type { ArchiveCategory, ArchiveRecord } from "@/data/archive";
import Image from "next/image";

function RecordMeta({ record }: { record: ArchiveRecord }) {
  return (
    <div className="archive-record-meta">
      <span className="type-meta text-(--brown-light)">{record.date}</span>
      {record.place ? (
        <span className="type-meta text-(--brown-light)">{record.place}</span>
      ) : null}
    </div>
  );
}

function ArchiveRecordCard({ record }: { record: ArchiveRecord }) {
  if (record.kind === "track") {
    return (
      <article className="archive-track">
        <div className="archive-track-index">♫</div>
        <div>
          <h2 className="type-title text-(--brown)">{record.title}</h2>
          <p className="type-body-small mt-2 text-(--text)">
            {record.content.artist} · {record.content.album}
          </p>
        </div>
        <span className="type-meta text-(--brown-light)">
          {record.content.duration}
        </span>
        <RecordMeta record={record} />
      </article>
    );
  }

  if (record.kind === "performance") {
    return (
      <article className="archive-ticket">
        <div className="archive-ticket-main">
          <RecordMeta record={record} />
          <h2 className="type-title mt-6 text-(--brown)">{record.title}</h2>
          <p className="type-body-small mt-3 max-w-md text-(--text)">
            {record.caption}
          </p>
        </div>
        <div className="archive-ticket-stub">
          <span className="type-label">{record.content.ticket}</span>
          <span className="type-meta">{record.content.time}</span>
          <span className="type-meta">{record.content.venue}</span>
        </div>
      </article>
    );
  }

  if (record.kind === "journey") {
    return (
      <article className="archive-film-frame">
        <div className="film-image" aria-hidden="true">
          <span>{record.content.route}</span>
        </div>
        <div className="film-copy">
          <RecordMeta record={record} />
          <h2 className="type-title mt-5 text-(--brown)">{record.title}</h2>
          <p className="type-body-small mt-3 text-(--text)">{record.caption}</p>
          <p className="type-meta mt-5 text-(--brown-light)">
            {record.content.stops.join(" / ")}
          </p>
        </div>
      </article>
    );
  }

  if (record.kind === "daily") {
    return (
      <article className="archive-daily-note">
        <RecordMeta record={record} />
        <h2 className="type-title mt-5 text-(--brown)">{record.title}</h2>
        <p className="type-body-small mt-3 text-(--text)">{record.caption}</p>
        <div className="archive-object-list">
          {record.content.objects.map((object) => (
            <span key={object} className="type-meta">
              {object}
            </span>
          ))}
        </div>
        <span className="archive-mood type-label">{record.content.mood}</span>
      </article>
    );
  }

  return (
    <article className="archive-photo">
      {" "}
      <div className="archive-photo-art">
        <Image
          src={record.content.image}
          alt={record.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <RecordMeta record={record} />
      <h2 className="type-title mt-4 text-(--brown)">{record.title}</h2>
      <p className="type-body-small mt-3 text-(--text)">{record.caption}</p>
    </article>
  );
}

export default function ArchiveRecords({
  category,
}: {
  category: ArchiveCategory;
}) {
  return (
    <div className={`archive-records archive-records-${category.presentation}`}>
      {category.records.map((record) => (
        <ArchiveRecordCard key={record.id} record={record} />
      ))}
    </div>
  );
}
