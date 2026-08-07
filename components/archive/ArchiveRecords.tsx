import type { ArchiveCategory, ArchiveRecord } from "@/data/archive";
import Image from "next/image";

function TicketBarcode({ code }: { code: string }) {
  const bars = Array.from({ length: 30 }, (_, index) => {
    const character = code.charCodeAt(index % code.length);
    return 2 + ((character + index * 3) % 3);
  });

  return (
    <div
      className="archive-ticket-barcode"
      style={{
        alignSelf: "stretch",
        justifyContent: "space-between",
        gap: 0,
        marginBlock: "1rem",
      }}
      aria-hidden="true"
    >
      {bars.map((height, index) => (
        <span key={index} style={{ height: `${height}px` }} />
      ))}
    </div>
  );
}

function TicketDatum({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="archive-ticket-datum">
      <span className="archive-ticket-label text-(--brown-light)">{label}</span>
      <div className="archive-ticket-value">{children}</div>
    </li>
  );
}

function RecordMeta({ record }: { record: ArchiveRecord }) {
  return (
    <div className="archive-record-meta">
      <span className="type-meta mt-2 text-(--brown-light)">{record.date}</span>
      {record.place ? (
        <span className="type-meta mt-2 text-(--brown-light)">
          {record.place}
        </span>
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
    const songColumnLength = Math.ceil(record.content.songs.length / 2);
    const songColumns =
      record.content.songs.length >= 4
        ? [
            record.content.songs.slice(0, songColumnLength),
            record.content.songs.slice(songColumnLength),
          ]
        : [record.content.songs];

    return (
      <article className="archive-ticket">
        <div className="archive-ticket-main">
          <h2 className="archive-ticket-title type-heading">{record.title}</h2>
          <div className="archive-ticket-details type-body text-(--text)">
            <ul className="archive-ticket-facts">
              <TicketDatum label="Date">{record.date}</TicketDatum>
              <TicketDatum label="Genre">
                {record.content.performanceType}
              </TicketDatum>
              <TicketDatum label="Credits">
                {record.content.roles.join(" · ")}
              </TicketDatum>
              <TicketDatum label="Type">{record.content.stageType}</TicketDatum>
              <TicketDatum label="Location">{record.content.venue}</TicketDatum>
            </ul>
            <div className="archive-ticket-setlist-group grid min-w-0 grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-5">
              <span className="archive-ticket-label text-(--brown-light)">
                Track
              </span>
              <div
                className={`archive-ticket-setlist-columns grid grid-cols-1 gap-y-[0.28rem]${
                  songColumns.length > 1
                    ? " md:grid-cols-[max-content_max-content] md:gap-x-4 md:gap-y-0"
                    : ""
                }`}
              >
                {songColumns.map((songs, columnIndex) => (
                  <ul
                    key={columnIndex}
                    className="m-0 grid list-none gap-y-[0.62rem] p-0 text-(--text)"
                  >
                    {songs.map((song) => (
                      <li key={song.title}>
                        <a
                          href={song.url}
                          className="text-(--text) no-underline underline-offset-[0.2em] hover:text-(--brown) hover:underline focus-visible:text-(--brown) focus-visible:underline"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Watch ${song.title} performance (opens in a new tab)`}
                        >
                          {song.title} <span aria-hidden="true">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="archive-ticket-stub"
          style={{ padding: "0.5rem 0.75rem" }}
        >
          <TicketBarcode code={record.content.code} />
          <span className="archive-ticket-code type-meta">
            {record.content.code}
          </span>
        </div>
      </article>
    );
  }

  if (record.kind === "journey") {
    return (
      <article className="archive-film-frame">
        <div className="film-image">
          <Image
            src={record.content.image}
            alt={`${record.title} — ${record.place ?? "Journey"}`}
            fill
            sizes="(max-width: 767px) calc(100vw - 4rem), 55vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="film-copy">
          <RecordMeta record={record} />
          <h2 className="type-title mt-5 text-(--brown)">{record.title}</h2>
          <p className="type-body-small mt-3 text-(--text)">{record.caption}</p>
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

  const { image, width, height } = record.content;
  const orientation =
    width > height ? "landscape" : width < height ? "portrait" : "square";

  return (
    <article className={`archive-photo archive-photo-${orientation}`}>
      <div
        className="archive-photo-art"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={image}
          alt={record.title}
          fill
          sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1152px) 58vw, 640px"
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
