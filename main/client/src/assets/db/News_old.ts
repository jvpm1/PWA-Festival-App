import defaultActorImage from "../imgs/events/actor1.webp";

export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishDate: Date;
  category: Category;
  img?: string;
  tags: string[];
}

export enum Category {
  LINEUP = "lineup",
  FESTIVAL_INFO = "festival-info",
  ARTIST_SPOTLIGHT = "artist-spotlight",
  GENERAL = "general",
  ANNOUNCEMENT = "announcement",
  SAFETY = "safety",
  SUSTAINABILITY = "sustainability",
}

function createNewsDate(
  daysAgo: number,
  hour: number = 12,
  minute: number = 0
) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hour, minute, 0, 0);
  return date;
}

export const newsArticles: Array<NewsArticle> = [
  {
    id: 1,
    title: "Armin van Buuren Headlining Saturday Night",
    summary:
      "The trance legend returns to deliver an unforgettable set at the main stage.",
    content:
      "Five-time 'World's No. 1 DJ' Armin van Buuren is set to headline Saturday night at the Poton stage. Known for his euphoric, high-energy sets that have graced festivals from Tomorrowland to Ultra, Armin promises to deliver an experience that will keep crowds dancing for hours. His uplifting melodies and impeccable mixing have made him a festival favorite worldwide. Don't miss this legendary performance that kicks off at 10:30 PM.",
    author: "Festival Team",
    publishDate: createNewsDate(3, 14, 30),
    category: Category.LINEUP,
    img: defaultActorImage,
    tags: ["Armin van Buuren", "Poton", "Trance", "Headliner"],
  },
  {
    id: 2,
    title: "Martin Garrix Opens Sunday with EDM Spectacular",
    summary:
      "The Dutch EDM superstar brings his stadium-sized drops to Sunday's opening slot.",
    content:
      "Martin Garrix, who broke through as a teenager with 'Animals,' has become one of the biggest names in EDM. His anthemic big-room tracks and stadium-sized drops make him a festival favorite across Europe. Opening Sunday at the Poton stage, Martin will set the tone for an incredible day of music. His energetic performance style and chart-topping hits are guaranteed to get the crowd moving from the very first beat.",
    author: "Music Desk",
    publishDate: createNewsDate(2, 16, 45),
    category: Category.ARTIST_SPOTLIGHT,
    img: defaultActorImage,
    tags: ["Martin Garrix", "EDM", "Sunday", "Animals"],
  },
  {
    id: 3,
    title: "Festival Ground Map & Stage Locations",
    summary:
      "Complete guide to navigating the festival grounds and finding your favorite stages.",
    content:
      "With four incredible stages spread across the festival grounds, here's your complete guide to getting around. The Poton stage serves as our main stage, hosting the biggest acts including Armin van Buuren and Martin Garrix. The Lake provides an intimate setting for emerging talent sets throughout both days. The Club offers diverse entertainment from comedy to theater and magic shows. Finally, the Hangaar keeps the electronic beats pumping with continuous DJ sets. Download the festival app for real-time navigation and updates.",
    author: "Event Planning",
    publishDate: createNewsDate(5, 10, 0),
    category: Category.FESTIVAL_INFO,
    tags: ["Map", "Stages", "Navigation", "Festival App"],
  },
  {
    id: 4,
    title: "Within Temptation's Cinematic Performance",
    summary:
      "Symphonic metal pioneers promise a visually stunning show with operatic vocals.",
    content:
      "Symphonic metal pioneers Within Temptation, fronted by the incomparable Sharon den Adel, are bringing their cinematic soundscapes to Sunday's lineup. Known for epic tracks like 'Ice Queen' and 'Mother Earth,' their performances translate into dramatic, visually stunning festival experiences. The band's operatic vocals combined with orchestral arrangements create an atmosphere unlike any other act on the lineup. Their Sunday afternoon slot at the Poton stage promises to be a highlight for metal and symphonic music fans alike.",
    author: "Metal Correspondent",
    publishDate: createNewsDate(4, 11, 20),
    category: Category.ARTIST_SPOTLIGHT,
    img: "within-temptation-news.webp",
    tags: [
      "Within Temptation",
      "Symphonic Metal",
      "Sharon den Adel",
      "Ice Queen",
    ],
  },
  {
    id: 5,
    title: "Sustainability Initiatives at This Year's Festival",
    summary:
      "Our commitment to reducing environmental impact through green initiatives.",
    content:
      "This year's festival is proud to introduce several sustainability initiatives aimed at reducing our environmental footprint. We've partnered with local suppliers to source organic and locally-grown food options. All cups and plates will be biodegradable or reusable. We're implementing a comprehensive recycling program with clearly marked stations throughout the grounds. Solar panels will power select stages, and we're encouraging carpooling and public transport with special shuttle services. Together, we can enjoy great music while protecting our planet.",
    author: "Sustainability Team",
    publishDate: createNewsDate(7, 9, 15),
    category: Category.SUSTAINABILITY,
    tags: ["Sustainability", "Environment", "Green Festival", "Recycling"],
  },
  {
    id: 6,
    title: "Chef'Special Brings Genre-Blending Energy",
    summary:
      "Haarlem's funk-pop masters promise a joyous, dance-floor-friendly performance.",
    content:
      "Chef'Special, the four-piece from Haarlem, are masters of mixing funk, pop, rock and hip-hop into an irresistible sonic cocktail. Their upbeat, genre-fluid sound on hits like 'Amigo' and 'In Your Arms' translates perfectly to live performances that are both joyous and dance-floor-friendly. The band's ability to seamlessly blend different musical styles has earned them a dedicated following across Europe. Their Sunday slot at the Poton stage promises to be a high-energy celebration that will have everyone moving.",
    author: "Pop Music Editor",
    publishDate: createNewsDate(6, 13, 45),
    category: Category.ARTIST_SPOTLIGHT,
    tags: ["Chef'Special", "Funk-Pop", "Amigo", "Genre-Blending"],
  },
  {
    id: 7,
    title: "Safety Guidelines and Emergency Information",
    summary:
      "Important safety information to ensure everyone has a safe and enjoyable experience.",
    content:
      "Your safety is our top priority. Please familiarize yourself with these important guidelines: Stay hydrated throughout the day and take regular breaks. Emergency medical stations are located near each stage - look for the red cross signs. Lost and found is located at the main entrance. If you see something concerning, alert our security team immediately - they're identifiable by their bright yellow vests. Weather updates will be announced if conditions change. Remember to look out for fellow festival-goers and report any harassment to security. Together we can ensure everyone has an amazing and safe experience.",
    author: "Safety & Security",
    publishDate: createNewsDate(1, 8, 0),
    category: Category.SAFETY,
    tags: ["Safety", "Emergency", "Medical", "Security"],
  },
];
