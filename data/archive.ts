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
      content: { image: string; width: number; height: number };
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
  title: string;
  image: string;
  description: string;
  presentation: ArchivePresentation;
  accent: string;
  paper: string;
  rotation: number;
  offset: string;
  records: ArchiveRecord[];
};

export const archiveCategories: ArchiveCategory[] = [
  {
    slug: "photographs",
    title: "Photographs",
    image: "/photographs/IMG_0701.webp",
    description: "Small frames of light, weather, and whatever stayed in view.",
    presentation: "gallery",
    accent: "#b36d55",
    paper: "#f1e6d7",
    rotation: -4,
    offset: "19%",
    records: [
      {
        id: "first-taste-of-break",
        kind: "photo",
        title: "The first taste of summer",
        date: "2026.06.23",
        place: "Seongsu",
        caption:
          "Wine, gelato, and a combination that somehow made perfect sense.",
        content: {
          image: "/photographs/IMG_2993.webp",
          width: 1350,
          height: 1800,
        },
      },
      {
        id: "after-class",
        kind: "photo",
        title: "On the way down",
        date: "2026.06.11",
        place: "School",
        caption:
          "The day faded slowly, somewhere between studying and going home.",
        content: {
          image: "/photographs/IMG_0757.webp",
          width: 1350,
          height: 1800,
        },
      },
      {
        id: "blue-bloom",
        kind: "photo",
        title: "Evening blossoms",
        date: "2026.04.02",
        place: "Yeouinaru",
        caption: "The blossoms borrowed their glow from the evening sky.",
        content: {
          image: "/photographs/IMG_0611.webp",
          width: 1350,
          height: 1800,
        },
      },
      {
        id: "ttukseom-sunset",
        kind: "photo",
        title: "Where the light shimmered",
        date: "2026.03.28",
        place: "ttukseom",
        caption: "The river held the last light of the day in its reflection.",
        content: {
          image: "/photographs/IMG_0450.webp",
          width: 1800,
          height: 1350,
        },
      },
      {
        id: "room-for-wonder",
        kind: "photo",
        title: "Room for Wonder",
        date: "2026.03.17",
        place: "GROUNDSEESAW",
        caption: "In case of love at first sight, break the glass.",
        content: {
          image: "/photographs/IMG_0218.webp",
          width: 1350,
          height: 1800,
        },
      },
      {
        id: "shared-birthday",
        kind: "photo",
        title: "Shared candles",
        date: "2026.03.08",
        place: "Gangnam",
        caption:
          "One date, two birthdays, and a table that felt a little fuller than usual.",
        content: {
          image: "/photographs/IMG_0871.webp",
          width: 1012,
          height: 1800,
        },
      },
      {
        id: "gathered-ingredients",
        kind: "photo",
        title: "Before the pour",
        date: "2026.02.19",
        place: "Hongdae",
        caption:
          "A place where fruit, herbs, and time were all part of the recipe.",
        content: {
          image: "/photographs/IMG_0483.webp",
          width: 1350,
          height: 1800,
        },
      },
    ],
  },
  {
    slug: "journeys",
    title: "Journeys",
    image: "/journeys/IMG_3105.webp",
    description: "Routes, detours, and the details that make a place return.",
    presentation: "filmstrip",
    accent: "#6f877a",
    paper: "#e8eadb",
    rotation: 3,
    offset: "35%",
    records: [
      {
        id: "coastline-bus",
        kind: "journey",
        title: "The coastline bus",
        date: "2025.08.04",
        place: "Jeju",
        caption: "A slow ride with the window open and nowhere urgent to be.",
        content: {
          route: "Aewol → Hyeopjae",
          stops: ["09:20", "10:45", "12:10"],
        },
      },
      {
        id: "three-stations",
        kind: "journey",
        title: "Three stations west",
        date: "2024.03.22",
        place: "Tokyo",
        caption: "A notebook map assembled between small stations.",
        content: {
          route: "Shibuya → Setagaya",
          stops: ["coffee", "bookshop", "rain"],
        },
      },
    ],
  },
  {
    slug: "performances",
    title: "Performances",
    image: "/photographs/IMG_4431.webp",
    description:
      "Tickets, setlists, and the particular electricity of a live room.",
    presentation: "tickets",
    accent: "#9a6a7f",
    paper: "#efe3eb",
    rotation: -1,
    offset: "51%",
    records: [
      {
        id: "small-theatre",
        kind: "performance",
        title: "A small theatre in spring",
        date: "2025.04.19",
        place: "Daehangno",
        caption: "The kind of performance that makes the walk home quiet.",
        content: {
          venue: "Daehangno Art Center",
          ticket: "B-17",
          time: "19:30",
        },
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
    title: "Listening",
    image: "/photographs/IMG_4433.webp",
    description:
      "Albums, single tracks, and the sounds attached to certain days.",
    presentation: "playlist",
    accent: "#687b9a",
    paper: "#e4ebf4",
    rotation: 5,
    offset: "67%",
    records: [
      {
        id: "november-loop",
        kind: "track",
        title: "November loop",
        date: "2025.11.03",
        caption: "One album, repeated on the walk between two places.",
        content: {
          artist: "Hiroshi Yoshimura",
          album: "Green",
          duration: "43:12",
        },
      },
      {
        id: "morning-mix",
        kind: "track",
        title: "A morning mix",
        date: "2025.01.15",
        caption: "Soft starts for a new notebook and an empty desk.",
        content: {
          artist: "Various artists",
          album: "First Light",
          duration: "38:06",
        },
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
    title: "Everyday",
    image: "/photographs/IMG_2542.webp",
    description:
      "Receipts, objects, meals, and the small rituals that make a life.",
    presentation: "field-notes",
    accent: "#aa8a52",
    paper: "#f1ead1",
    rotation: -3,
    offset: "83%",
    records: [
      {
        id: "desk-reset",
        kind: "daily",
        title: "The desk reset",
        date: "2025.12.31",
        caption: "A little order before starting again.",
        content: {
          mood: "clear / ready",
          objects: ["blue tape", "one pen", "empty cup"],
        },
      },
      {
        id: "market-bag",
        kind: "daily",
        title: "Saturday market bag",
        date: "2025.05.10",
        caption: "The groceries looked better than the plan.",
        content: {
          mood: "bright / hungry",
          objects: ["tomatoes", "bread", "flowers"],
        },
      },
      {
        id: "rainy-laundry",
        kind: "daily",
        title: "Rainy laundry",
        date: "2024.08.16",
        caption: "A domestic weather report from the living room.",
        content: {
          mood: "slow / soft",
          objects: ["linen", "window", "warm tea"],
        },
      },
    ],
  },
];

export function getArchiveCategoryBySlug(slug: string) {
  return archiveCategories.find((category) => category.slug === slug);
}
