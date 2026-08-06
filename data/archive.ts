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
      content: {
        image: string;
      };
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
    paper: "#f1e6d7",
    rotation: -4,
    offset: "19%",
    records: [
      {
        id: "demo-day",
        kind: "photo",
        title: "ON:TRACK",
        date: "2026.07.18",
        place: "Seolleung",
        caption:
          "Every late night, every review, every small improvement led to this table.",
        content: {
          image: "/photographs/IMG_3978.webp",
          width: 1400,
          height: 1400,
        },
      },
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
        place: "Campus",
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
        title: "Waiting in jars",
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
      {
        id: "ggrapefruit-note",
        kind: "photo",
        title: "Something citrus",
        date: "2025.09.26",
        place: "Cafe",
        caption: "The drink was new, but the music already felt like home.",
        content: {
          image: "/photographs/IMG_4442.webp",
          width: 1013,
          height: 1800,
        },
      },
      {
        id: "moving-together",
        kind: "photo",
        title: "Sunset Practice",
        date: "2025.04.30",
        place: "Campus",
        caption: "The studio wasn't big enough, so the sky became our ceiling.",
        content: {
          image: "/photographs/IMG_5402.webp",
          width: 1800,
          height: 1350,
        },
      },
      {
        id: "after-dark",
        kind: "photo",
        title: "Carousel light",
        date: "2025.01.21",
        place: "LotteWorld",
        caption:
          "The brightest thing in the room wasn't the ride—it was the moment.",
        content: {
          image: "/photographs/IMG_2470.webp",
          width: 1080,
          height: 1440,
        },
      },
      {
        id: "small-surprise",
        kind: "photo",
        title: "The smallest snowman",
        date: "2024.11.24",
        place: "Neighborhood",
        caption: "A tiny snowman quietly waiting by the stairs.",
        content: {
          image: "/photographs/IMG_9381.webp",
          width: 1004,
          height: 1784,
        },
      },
    ],
  },
  {
    slug: "journeys",
    title: "Journeys",
    image: "/journeys/IMG_3105.webp",
    description: "Places remembered through small moments.",
    presentation: "filmstrip",
    paper: "#e8eadb",
    rotation: 3,
    offset: "35%",
    records: [
      {
        id: "always-together",
        kind: "journey",
        title: "Together, as always",
        date: "2026.07.29 ~ 2026.07.30",
        place: "Yangpyeong",
        caption:
          "The shirts matched, the laughter did too, and the day slipped by before we noticed.",
        content: {
          image: "/journeys/IMG_4309.webp",
        },
      },
      {
        id: "old-friend-new-city",
        kind: "journey",
        title: "Old friend, new city",
        date: "2026.07.02 ~ 2026.07.03",
        place: "Jeonju",
        caption:
          "We had known each other for years, but there were still new places waiting for us.",
        content: {
          image: "/journeys/IMG_3315.webp",
        },
      },
      {
        id: "across-the-vltava",
        kind: "journey",
        title: "Across the Vltava",
        date: "2026.02.12 ~ 2026.02.13",
        place: "Prague",
        caption:
          "Crossing Charles Bridge, the city unfolded one rooftop and one tower at a time.",
        content: {
          image: "/journeys/IMG_0102.webp",
        },
      },
      {
        id: "yellow-lines",
        kind: "journey",
        title: "Waiting for the tram",
        date: "2026.02.09 ~ 2026.02.11",
        place: "Budapest",
        caption:
          "Just another tram stop, until it became one of the places we kept remembering.",
        content: {
          image: "/journeys/IMG_0372.webp",
        },
      },
      {
        id: "after-the-lifts",
        kind: "journey",
        title: "After the lifts",
        date: "2026.01.22 ~ 2026.01.23",
        place: "Ski Resort",
        caption:
          "Back from the snow, we traded gloves for chopsticks, gathering around a warm table.",
        content: {
          image: "/journeys/IMG_8871.webp",
        },
      },
      {
        id: "between-years",
        kind: "journey",
        title: "The last trip of the year",
        date: "2025.12.29 ~ 2025.12.30",
        place: "Sokcho",
        caption:
          "Cold waves, a roll of film, and six friends sharing one last memory before the year came to an end.",
        content: {
          image: "/journeys/IMG_1230.webp",
        },
      },
      {
        id: "lido-afternoon",
        kind: "journey",
        title: "Beyond the canals",
        date: "2025.08.24 ~ 2025.08.25",
        place: "Venice",
        caption:
          "Just another beach, until it became one of the memories worth keeping.",
        content: {
          image: "/journeys/IMG_4013.webp",
        },
      },
      {
        id: "city-of-rooftops",
        kind: "journey",
        title: "Above the red roofs",
        date: "2025.08.22 ~ 2025.08.23",
        place: "Florence",
        caption:
          "Red roofs, distant hills, and an afternoon that asked for nothing else.",
        content: {
          image: "/journeys/IMG_0694.webp",
        },
      },
      {
        id: "roman-afternoon",
        kind: "journey",
        title: "Beneath the Pantheon",
        date: "2025.08.19 ~ 2025.08.21",
        place: "Rome",
        caption:
          "One of those places where even a short pause became part of the journey.",
        content: {
          image: "/journeys/IMG_4365.webp",
        },
      },
      {
        id: "night-cheomseongdae",
        kind: "journey",
        title: "Where the light stayed",
        date: "2025.07.29 ~ 2025.07.31",
        place: "Gyeongju",
        caption:
          "An evening spent following old streets, with one conversation carrying us farther than the map.",
        content: {
          image: "/journeys/IMG_8370.webp",
        },
      },
      {
        id: "first-break",
        kind: "journey",
        title: "Every break after this",
        date: "2025.02.19 ~ 2025.02.20",
        place: "Gapyeong",
        caption:
          "Six friends, and the trip that quietly became our tradition every school break.",
        content: {
          image: "/journeys/IMG_4362.webp",
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
