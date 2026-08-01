export type ArchivePresentation =
  | "gallery"
  | "filmstrip"
  | "tickets"
  | "playlist"
  | "field-notes";

type ArchiveRecordBase = {
  id: string;
  title: string;
  date: string;
  caption: string;
  place?: string;
};

export type ArchiveRecord =
  | (ArchiveRecordBase & {
      kind: "photo";
      content: { tone: string; detail: string };
    })
  | (ArchiveRecordBase & {
      kind: "journey";
      content: { route: string; stops: string[] };
    })
  | (ArchiveRecordBase & {
      kind: "performance";
      content: { venue: string; ticket: string; time: string };
    })
  | (ArchiveRecordBase & {
      kind: "track";
      content: { artist: string; album: string; duration: string };
    })
  | (ArchiveRecordBase & {
      kind: "daily";
      content: { mood: string; objects: string[] };
    });

export type ArchiveCategory = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  presentation: ArchivePresentation;
  accent: string;
  paper: string;
  rotation: number;
  offset: string;
  stamp: string;
  records: ArchiveRecord[];
};

export const archiveCategories: ArchiveCategory[] = [
  {
    slug: "photographs",
    number: "01",
    title: "Photographs",
    subtitle: "light, held still",
    description: "Small frames of light, weather, and whatever stayed in view.",
    presentation: "gallery",
    accent: "#b36d55",
    paper: "#f1e6d7",
    rotation: -4,
    offset: "8%",
    stamp: "PHOTO",
    records: [
      {
        id: "late-sun",
        kind: "photo",
        title: "Late sun on the table",
        date: "2025.09.18",
        place: "Seoul",
        caption: "The room turned gold for about seven minutes.",
        content: { tone: "sunset", detail: "07 MINUTES OF LIGHT" },
      },
      {
        id: "blue-hour",
        kind: "photo",
        title: "Blue hour, twice",
        date: "2025.06.02",
        place: "Busan",
        caption: "A horizon that looked like a screen loading slowly.",
        content: { tone: "blue", detail: "AFTER THE LAST TRAIN" },
      },
      {
        id: "window-study",
        kind: "photo",
        title: "Window study no. 03",
        date: "2024.11.11",
        place: "Home",
        caption: "Clouds, glass, and the soft geometry of a Sunday.",
        content: { tone: "cloud", detail: "SUNDAY / 11:14" },
      },
    ],
  },
  {
    slug: "journeys",
    number: "02",
    title: "Journeys",
    subtitle: "routes remembered",
    description: "Routes, detours, and the details that make a place return.",
    presentation: "filmstrip",
    accent: "#6f877a",
    paper: "#e8eadb",
    rotation: 3,
    offset: "25%",
    stamp: "ROUTE",
    records: [
      {
        id: "coastline-bus",
        kind: "journey",
        title: "The coastline bus",
        date: "2025.08.04",
        place: "Jeju",
        caption: "A slow ride with the window open and nowhere urgent to be.",
        content: { route: "Aewol → Hyeopjae", stops: ["09:20", "10:45", "12:10"] },
      },
      {
        id: "three-stations",
        kind: "journey",
        title: "Three stations west",
        date: "2024.03.22",
        place: "Tokyo",
        caption: "A notebook map assembled between small stations.",
        content: { route: "Shibuya → Setagaya", stops: ["coffee", "bookshop", "rain"] },
      },
    ],
  },
  {
    slug: "performances",
    number: "03",
    title: "Performances",
    subtitle: "rooms in the dark",
    description: "Tickets, setlists, and the particular electricity of a live room.",
    presentation: "tickets",
    accent: "#9a6a7f",
    paper: "#efe3eb",
    rotation: -1,
    offset: "43%",
    stamp: "LIVE",
    records: [
      {
        id: "small-theatre",
        kind: "performance",
        title: "A small theatre in spring",
        date: "2025.04.19",
        place: "Daehangno",
        caption: "The kind of performance that makes the walk home quiet.",
        content: { venue: "Daehangno Art Center", ticket: "B-17", time: "19:30" },
      },
      {
        id: "summer-festival",
        kind: "performance",
        title: "Summer festival / side stage",
        date: "2024.07.27",
        place: "Seoul",
        caption: "A set caught from the edge of the crowd.",
        content: { venue: "River Stage", ticket: "S-04", time: "21:10" },
      },
    ],
  },
  {
    slug: "listening",
    number: "04",
    title: "Listening",
    subtitle: "songs with a season",
    description: "Albums, single tracks, and the sounds attached to certain days.",
    presentation: "playlist",
    accent: "#687b9a",
    paper: "#e4ebf4",
    rotation: 5,
    offset: "60%",
    stamp: "SIDE A",
    records: [
      {
        id: "november-loop",
        kind: "track",
        title: "November loop",
        date: "2025.11.03",
        caption: "One album, repeated on the walk between two places.",
        content: { artist: "Hiroshi Yoshimura", album: "Green", duration: "43:12" },
      },
      {
        id: "morning-mix",
        kind: "track",
        title: "A morning mix",
        date: "2025.01.15",
        caption: "Soft starts for a new notebook and an empty desk.",
        content: { artist: "Various artists", album: "First Light", duration: "38:06" },
      },
      {
        id: "night-drive",
        kind: "track",
        title: "Night drive home",
        date: "2024.09.09",
        caption: "The city becoming abstract through a wet windshield.",
        content: { artist: "Nils Frahm", album: "Spaces", duration: "51:28" },
      },
    ],
  },
  {
    slug: "everyday",
    number: "05",
    title: "Everyday",
    subtitle: "ordinary, kept",
    description: "Receipts, objects, meals, and the small rituals that make a life.",
    presentation: "field-notes",
    accent: "#aa8a52",
    paper: "#f1ead1",
    rotation: -3,
    offset: "77%",
    stamp: "DAILY",
    records: [
      {
        id: "desk-reset",
        kind: "daily",
        title: "The desk reset",
        date: "2025.12.31",
        caption: "A little order before starting again.",
        content: { mood: "clear / ready", objects: ["blue tape", "one pen", "empty cup"] },
      },
      {
        id: "market-bag",
        kind: "daily",
        title: "Saturday market bag",
        date: "2025.05.10",
        caption: "The groceries looked better than the plan.",
        content: { mood: "bright / hungry", objects: ["tomatoes", "bread", "flowers"] },
      },
      {
        id: "rainy-laundry",
        kind: "daily",
        title: "Rainy laundry",
        date: "2024.08.16",
        caption: "A domestic weather report from the living room.",
        content: { mood: "slow / soft", objects: ["linen", "window", "warm tea"] },
      },
    ],
  },
];

export function getArchiveCategoryBySlug(slug: string) {
  return archiveCategories.find((category) => category.slug === slug);
}
