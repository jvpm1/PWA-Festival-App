import defaultActorImage from "../imgs/events/actor1.webp";

export enum Category {
  LINEUP = "lineup",
  FESTIVAL_INFO = "festival-info",
  ARTIST_SPOTLIGHT = "artist-spotlight",
  GENERAL = "general",
  ANNOUNCEMENT = "announcement",
  SAFETY = "safety",
  SUSTAINABILITY = "sustainability",
}

export interface EventType {
  title: string;
  description: null | string;
  mapPosition: [number, number];
  events: {
    title: string;
    location: string;
    desc: null | string;
    img?: any;
    beginDate: Date;
    endDate: Date;
  }[];
  news: {
    id: number;
    title: string;
    summary: string;
    content: string;
    author: string;
    publishDate: Date;
    category: Category;
    img?: any;
    tags: string[];
  }[];
}

export const GetDay = (day: number) => {
  switch (day) {
    case 1:
      return "Maandag";
    case 2:
      return "Dinsdag";
    case 3:
      return "Woensdag";
    case 4:
      return "Donderdag";
    case 5:
      return "Vrijdag";
    case 6:
      return "Zaterdag";
    case 0:
      return "Zondag";
    default:
      return "Ongeldig";
  }
};

function tempEventMaking(hour: number, min: number, day: number): Date {
  let date = new Date();
  date.setHours(hour, min, 0, 0);
  const daysUntilTarget = (day - date.getDay() + 7) % 7;
  date.setDate(date.getDate() + daysUntilTarget);
  return date;
}

export const EventData: EventType[] = [
  {
    title: "Poton",
    description: "All events happening at Poton.",
    mapPosition: [310, 280],
    events: [
      {
        title: "Armin van Buuren",
        location: "Poton",
        img: defaultActorImage,
        desc: 'Five-time "World\'s No. 1 DJ" and trance icon, Armin delivers euphoric, high-energy sets that have headlined festivals from Tomorrowland to Ultra. His uplifting melodies and impeccable mixing keep crowds dancing for hours.',
        beginDate: tempEventMaking(10, 30, 6),
        endDate: tempEventMaking(11, 45, 6),
      },
      {
        title: "Kensington",
        location: "Poton",
        img: defaultActorImage,
        desc: 'Rotterdam-born indie rock quintet known for soaring choruses and driving guitar riffs. Hits like "Streets" and "Riddles" showcase their knack for arena-ready hooks and emotionally charged lyricism.',
        beginDate: tempEventMaking(12, 30, 6),
        endDate: tempEventMaking(13, 45, 6),
      },
      {
        title: "De Staat",
        location: "Poton",
        img: defaultActorImage,
        desc: 'Experimental rock outfit from Nijmegen, blending funky grooves with angular guitar work and theatrical stagecraft. Tracks like "Witch Doctor" and "Down Town" highlight their genre-bending approach and infectious energy.',
        beginDate: tempEventMaking(14, 30, 6),
        endDate: tempEventMaking(16, 15, 6),
      },
      {
        title: "Navarone",
        location: "Poton",
        img: defaultActorImage,
        desc: "Utrecht's hard-hitting rock four-piece, delivering riff-driven anthems and dynamic vocals. With a live reputation for raw intensity, they're tailor-made for late-night main stages.",
        beginDate: tempEventMaking(17, 0, 6),
        endDate: tempEventMaking(18, 15, 6),
      },
      {
        title: "Dotan",
        location: "Poton",
        img: defaultActorImage,
        desc: 'Folk-pop singer-songwriter whose intimate voice and acoustic arrangements (notably on "Home") have earned him platinum sales and sell-out shows. His heartfelt storytelling connects deeply on festival acoustic stages.',
        beginDate: tempEventMaking(19, 15, 6),
        endDate: tempEventMaking(21, 0, 6),
      },
      {
        title: "Froukje",
        location: "Poton",
        img: defaultActorImage,
        desc: "Breakthrough pop singer Froukje Veenstra combines candid lyrics with catchy, synth-driven hooks. Since her 2021 debut, she's become a voice of her generation—ideal for mid-day festival stages.",
        beginDate: tempEventMaking(22, 0, 6),
        endDate: tempEventMaking(23, 45, 6),
      },
      {
        title: "Martin Garrix",
        location: "Poton",
        img: defaultActorImage,
        desc: 'Broke through as a teenager with "Animals," Martin Garrix has become one of the biggest names in EDM. His anthemic big-room tracks and stadium-sized drops make him a festival favorite across Europe.',
        beginDate: tempEventMaking(10, 30, 7),
        endDate: tempEventMaking(11, 45, 7),
      },
      {
        title: "Within Temptation",
        location: "Poton",
        img: defaultActorImage,
        desc: 'Symphonic metal pioneers fronted by Sharon den Adel. Their cinematic soundscapes and operatic vocals (think "Ice Queen," "Mother Earth") translate into dramatic, visually stunning festival performances.',
        beginDate: tempEventMaking(12, 30, 7),
        endDate: tempEventMaking(13, 45, 7),
      },
      {
        title: "Chef Special",
        location: "Poton",
        img: defaultActorImage,
        desc: 'A four-piece from Haarlem mixing funk, pop, rock and hip-hop. Their upbeat, genre-fluid sound on songs like "Amigo" and "In Your Arms" makes for joyous, dance-floor-friendly live shows.',
        beginDate: tempEventMaking(14, 30, 7),
        endDate: tempEventMaking(16, 15, 7),
      },
      {
        title: "Eefje de Visser",
        location: "Poton",
        img: defaultActorImage,
        desc: 'Indie-pop artist crafting atmospheric, electronic-tinged songs. Her hypnotic vocals and lush production (as heard on "Ongeveer") create a dreamlike vibe perfect for twilight festival slots.',
        beginDate: tempEventMaking(17, 0, 7),
        endDate: tempEventMaking(18, 45, 7),
      },
      {
        title: "Spinvis",
        location: "Poton",
        img: defaultActorImage,
        desc: "Erik de Jong performs under the moniker Spinvis, crafting poetic, collage-like songs that blend spoken-word snippets, lo-fi electronics and wistful pop. Since his debut album in 2002—recorded in his attic—he's become a fixture of Dutch indie, renowned for narratives that feel both intimate and surreal. His live shows turn everyday observations into shared, dreamlike experiences.",
        beginDate: tempEventMaking(19, 15, 7),
        endDate: tempEventMaking(21, 0, 7),
      },
    ],
    news: [
      {
        id: 1,
        title: "Armin van Buuren Headlining Saturday Night",
        summary:
          "The trance legend returns to deliver an unforgettable set at the main stage.",
        content:
          "Five-time 'World's No. 1 DJ' Armin van Buuren is set to headline Saturday night at the Poton stage. Known for his euphoric, high-energy sets that have graced festivals from Tomorrowland to Ultra, Armin promises to deliver an experience that will keep crowds dancing for hours. His uplifting melodies and impeccable mixing have made him a festival favorite worldwide. Don't miss this legendary performance that kicks off at 10:30 PM.",
        author: "Festival Team",
        publishDate: new Date("2025-06-12T14:30:00.000Z"),
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
        publishDate: new Date("2025-06-13T16:45:00.000Z"),
        category: Category.ARTIST_SPOTLIGHT,
        img: defaultActorImage,
        tags: ["Martin Garrix", "EDM", "Sunday", "Animals"],
      },
      {
        id: 4,
        title: "Within Temptation's Cinematic Performance",
        summary:
          "Symphonic metal pioneers promise a visually stunning show with operatic vocals.",
        content:
          "Symphonic metal pioneers Within Temptation, fronted by the incomparable Sharon den Adel, are bringing their cinematic soundscapes to Sunday's lineup. Known for epic tracks like 'Ice Queen' and 'Mother Earth,' their performances translate into dramatic, visually stunning festival experiences. The band's operatic vocals combined with orchestral arrangements create an atmosphere unlike any other act on the lineup. Their Sunday afternoon slot at the Poton stage promises to be a highlight for metal and symphonic music fans alike.",
        author: "Metal Correspondent",
        publishDate: new Date("2025-06-11T11:20:00.000Z"),
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
        id: 6,
        title: "Chef'Special Brings Genre-Blending Energy",
        summary:
          "Haarlem's funk-pop masters promise a joyous, dance-floor-friendly performance.",
        content:
          "Chef'Special, the four-piece from Haarlem, are masters of mixing funk, pop, rock and hip-hop into an irresistible sonic cocktail. Their upbeat, genre-fluid sound on hits like 'Amigo' and 'In Your Arms' translates perfectly to live performances that are both joyous and dance-floor-friendly. The band's ability to seamlessly blend different musical styles has earned them a dedicated following across Europe. Their Sunday slot at the Poton stage promises to be a high-energy celebration that will have everyone moving.",
        author: "Pop Music Editor",
        publishDate: new Date("2025-06-09T13:45:00.000Z"),
        category: Category.ARTIST_SPOTLIGHT,
        img: defaultActorImage,
        tags: ["Chef'Special", "Funk-Pop", "Amigo", "Genre-Blending"],
      },
      {
        id: 3,
        title: "Festival Ground Map & Stage Locations",
        summary:
          "Complete guide to navigating the festival grounds and finding your favorite stages.",
        content:
          "With four incredible stages spread across the festival grounds, here's your complete guide to getting around. The Poton stage serves as our main stage, hosting the biggest acts including Armin van Buuren and Martin Garrix. The Lake provides an intimate setting for emerging talent sets throughout both days. The Club offers diverse entertainment from comedy to theater and magic shows. Finally, the Hangaar keeps the electronic beats pumping with continuous DJ sets. Download the festival app for real-time navigation and updates.",
        author: "Event Planning",
        publishDate: new Date("2025-06-10T10:00:00.000Z"),
        category: Category.FESTIVAL_INFO,
        tags: ["Map", "Stages", "Navigation", "Festival App"],
      },
      {
        id: 5,
        title: "Sustainability Initiatives at This Year's Festival",
        summary:
          "Our commitment to reducing environmental impact through green initiatives.",
        content:
          "This year's festival is proud to introduce several sustainability initiatives aimed at reducing our environmental footprint. We've partnered with local suppliers to source organic and locally-grown food options. All cups and plates will be biodegradable or reusable. We're implementing a comprehensive recycling program with clearly marked stations throughout the grounds. Solar panels will power select stages, and we're encouraging carpooling and public transport with special shuttle services. Together, we can enjoy great music while protecting our planet.",
        author: "Sustainability Team",
        publishDate: new Date("2025-06-08T09:15:00.000Z"),
        category: Category.SUSTAINABILITY,
        img: null,
        tags: ["Sustainability", "Environment", "Green Festival", "Recycling"],
      },
      {
        id: 7,
        title: "Safety Guidelines and Emergency Information",
        summary:
          "Important safety information to ensure everyone has a safe and enjoyable experience.",
        content:
          "Your safety is our top priority. Please familiarize yourself with these important guidelines: Stay hydrated throughout the day and take regular breaks. Emergency medical stations are located near each stage - look for the red cross signs. Lost and found is located at the main entrance. If you see something concerning, alert our security team immediately - they're identifiable by their bright yellow vests. Weather updates will be announced if conditions change. Remember to look out for fellow festival-goers and report any harassment to security. Together we can ensure everyone has an amazing and safe experience.",
        author: "Safety & Security",
        publishDate: new Date("2025-06-14T08:00:00.000Z"),
        category: Category.SAFETY,
        img: null,
        tags: ["Safety", "Emergency", "Medical", "Security"],
      },
    ],
  },
  {
    title: "The Lake",
    description: "All events happening at The Lake.",
    mapPosition: [450, 730],
    events: [
      {
        title: "Talent set 1",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(10, 15, 6),
        endDate: tempEventMaking(11, 30, 6),
      },
      {
        title: "Talent set 2",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(11, 45, 6),
        endDate: tempEventMaking(13, 0, 6),
      },
      {
        title: "Talent set 3",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(13, 15, 6),
        endDate: tempEventMaking(14, 30, 6),
      },
      {
        title: "Talent set 4",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(15, 30, 6),
        endDate: tempEventMaking(16, 45, 6),
      },
      {
        title: "Talent set 5",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(17, 30, 6),
        endDate: tempEventMaking(18, 45, 6),
      },
      {
        title: "Talent set 6",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(19, 30, 6),
        endDate: tempEventMaking(20, 45, 6),
      },
      {
        title: "Talent set 7",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(21, 30, 6),
        endDate: tempEventMaking(22, 45, 6),
      },
      {
        title: "Talent set 1",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(10, 15, 7),
        endDate: tempEventMaking(11, 30, 7),
      },
      {
        title: "Talent set 2",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(11, 45, 7),
        endDate: tempEventMaking(13, 0, 7),
      },
      {
        title: "Talent set 3",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(13, 15, 7),
        endDate: tempEventMaking(14, 30, 7),
      },
      {
        title: "Talent set 4",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(15, 30, 7),
        endDate: tempEventMaking(16, 45, 7),
      },
      {
        title: "Talent set 5",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(17, 30, 7),
        endDate: tempEventMaking(18, 45, 7),
      },
      {
        title: "Talent set 6",
        location: "The Lake",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(19, 30, 7),
        endDate: tempEventMaking(20, 45, 7),
      },
    ],
    news: [
      {
        id: 3,
        title: "Festival Ground Map & Stage Locations",
        summary:
          "Complete guide to navigating the festival grounds and finding your favorite stages.",
        content:
          "With four incredible stages spread across the festival grounds, here's your complete guide to getting around. The Poton stage serves as our main stage, hosting the biggest acts including Armin van Buuren and Martin Garrix. The Lake provides an intimate setting for emerging talent sets throughout both days. The Club offers diverse entertainment from comedy to theater and magic shows. Finally, the Hangaar keeps the electronic beats pumping with continuous DJ sets. Download the festival app for real-time navigation and updates.",
        author: "Event Planning",
        publishDate: new Date("2025-06-10T10:00:00.000Z"),
        category: Category.FESTIVAL_INFO,
        tags: ["Map", "Stages", "Navigation", "Festival App"],
      },
      {
        id: 5,
        title: "Sustainability Initiatives at This Year's Festival",
        summary:
          "Our commitment to reducing environmental impact through green initiatives.",
        content:
          "This year's festival is proud to introduce several sustainability initiatives aimed at reducing our environmental footprint. We've partnered with local suppliers to source organic and locally-grown food options. All cups and plates will be biodegradable or reusable. We're implementing a comprehensive recycling program with clearly marked stations throughout the grounds. Solar panels will power select stages, and we're encouraging carpooling and public transport with special shuttle services. Together, we can enjoy great music while protecting our planet.",
        author: "Sustainability Team",
        publishDate: new Date("2025-06-08T09:15:00.000Z"),
        category: Category.SUSTAINABILITY,
        img: null,
        tags: ["Sustainability", "Environment", "Green Festival", "Recycling"],
      },
      {
        id: 7,
        title: "Safety Guidelines and Emergency Information",
        summary:
          "Important safety information to ensure everyone has a safe and enjoyable experience.",
        content:
          "Your safety is our top priority. Please familiarize yourself with these important guidelines: Stay hydrated throughout the day and take regular breaks. Emergency medical stations are located near each stage - look for the red cross signs. Lost and found is located at the main entrance. If you see something concerning, alert our security team immediately - they're identifiable by their bright yellow vests. Weather updates will be announced if conditions change. Remember to look out for fellow festival-goers and report any harassment to security. Together we can ensure everyone has an amazing and safe experience.",
        author: "Safety & Security",
        publishDate: new Date("2025-06-14T08:00:00.000Z"),
        category: Category.SAFETY,
        img: null,
        tags: ["Safety", "Emergency", "Medical", "Security"],
      },
    ],
  },
  {
    title: "The Club",
    description: "All events happening at The Club.",
    mapPosition: [450, 975],
    events: [
      {
        title: "Comedy",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(11, 45, 6),
        endDate: tempEventMaking(13, 0, 6),
      },
      {
        title: "Lecture",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(13, 15, 6),
        endDate: tempEventMaking(14, 30, 6),
      },
      {
        title: "Theater",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(15, 30, 6),
        endDate: tempEventMaking(16, 45, 6),
      },
      {
        title: "Movie",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(17, 30, 6),
        endDate: tempEventMaking(19, 15, 6),
      },
      {
        title: "Performance",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(19, 30, 6),
        endDate: tempEventMaking(21, 15, 6),
      },
      {
        title: "Illusionist",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(21, 30, 6),
        endDate: tempEventMaking(22, 45, 6),
      },
      {
        title: "Comedy",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(11, 45, 7),
        endDate: tempEventMaking(13, 0, 7),
      },
      {
        title: "Lecture",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(13, 15, 7),
        endDate: tempEventMaking(14, 30, 7),
      },
      {
        title: "Theater",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(15, 30, 7),
        endDate: tempEventMaking(16, 45, 7),
      },
      {
        title: "Movie",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(17, 30, 7),
        endDate: tempEventMaking(19, 15, 7),
      },
      {
        title: "Magic Show",
        location: "The Club",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(19, 30, 7),
        endDate: tempEventMaking(20, 45, 7),
      },
    ],
    news: [
      {
        id: 3,
        title: "Festival Ground Map & Stage Locations",
        summary:
          "Complete guide to navigating the festival grounds and finding your favorite stages.",
        content:
          "With four incredible stages spread across the festival grounds, here's your complete guide to getting around. The Poton stage serves as our main stage, hosting the biggest acts including Armin van Buuren and Martin Garrix. The Lake provides an intimate setting for emerging talent sets throughout both days. The Club offers diverse entertainment from comedy to theater and magic shows. Finally, the Hangaar keeps the electronic beats pumping with continuous DJ sets. Download the festival app for real-time navigation and updates.",
        author: "Event Planning",
        publishDate: new Date("2025-06-10T10:00:00.000Z"),
        category: Category.FESTIVAL_INFO,
        tags: ["Map", "Stages", "Navigation", "Festival App"],
      },
      {
        id: 5,
        title: "Sustainability Initiatives at This Year's Festival",
        summary:
          "Our commitment to reducing environmental impact through green initiatives.",
        content:
          "This year's festival is proud to introduce several sustainability initiatives aimed at reducing our environmental footprint. We've partnered with local suppliers to source organic and locally-grown food options. All cups and plates will be biodegradable or reusable. We're implementing a comprehensive recycling program with clearly marked stations throughout the grounds. Solar panels will power select stages, and we're encouraging carpooling and public transport with special shuttle services. Together, we can enjoy great music while protecting our planet.",
        author: "Sustainability Team",
        publishDate: new Date("2025-06-08T09:15:00.000Z"),
        category: Category.SUSTAINABILITY,
        img: null,
        tags: ["Sustainability", "Environment", "Green Festival", "Recycling"],
      },
      {
        id: 7,
        title: "Safety Guidelines and Emergency Information",
        summary:
          "Important safety information to ensure everyone has a safe and enjoyable experience.",
        content:
          "Your safety is our top priority. Please familiarize yourself with these important guidelines: Stay hydrated throughout the day and take regular breaks. Emergency medical stations are located near each stage - look for the red cross signs. Lost and found is located at the main entrance. If you see something concerning, alert our security team immediately - they're identifiable by their bright yellow vests. Weather updates will be announced if conditions change. Remember to look out for fellow festival-goers and report any harassment to security. Together we can ensure everyone has an amazing and safe experience.",
        author: "Safety & Security",
        publishDate: new Date("2025-06-14T08:00:00.000Z"),
        category: Category.SAFETY,
        img: null,
        tags: ["Safety", "Emergency", "Medical", "Security"],
      },
    ],
  },
  {
    title: "Hangaar",
    description: "All events happening at Hangaar.",
    mapPosition: [675, 1245],
    events: [
      {
        title: "DJ set 1",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(10, 0, 6),
        endDate: tempEventMaking(10, 45, 6),
      },
      {
        title: "DJ set 2",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(11, 0, 6),
        endDate: tempEventMaking(11, 45, 6),
      },
      {
        title: "DJ set 3",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(12, 0, 6),
        endDate: tempEventMaking(13, 15, 6),
      },
      {
        title: "DJ set 4",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(13, 30, 6),
        endDate: tempEventMaking(14, 45, 6),
      },
      {
        title: "DJ set 5",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(15, 0, 6),
        endDate: tempEventMaking(16, 15, 6),
      },
      {
        title: "DJ set 6",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(17, 0, 6),
        endDate: tempEventMaking(18, 15, 6),
      },
      {
        title: "DJ set 7",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(19, 0, 6),
        endDate: tempEventMaking(20, 15, 6),
      },
      {
        title: "DJ set 8",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(21, 0, 6),
        endDate: tempEventMaking(22, 15, 6),
      },
      {
        title: "DJ set 1",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(10, 0, 7),
        endDate: tempEventMaking(10, 45, 7),
      },
      {
        title: "DJ set 2",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(11, 0, 7),
        endDate: tempEventMaking(11, 45, 7),
      },
      {
        title: "DJ set 3",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(12, 0, 7),
        endDate: tempEventMaking(13, 15, 7),
      },
      {
        title: "DJ set 4",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(13, 30, 7),
        endDate: tempEventMaking(14, 45, 7),
      },
      {
        title: "DJ set 5",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(15, 0, 7),
        endDate: tempEventMaking(16, 15, 7),
      },
      {
        title: "DJ set 6",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(17, 0, 7),
        endDate: tempEventMaking(18, 15, 7),
      },
      {
        title: "DJ set 7",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(19, 0, 7),
        endDate: tempEventMaking(20, 15, 7),
      },
      {
        title: "DJ set 8",
        location: "Hangaar",
        img: defaultActorImage,
        desc: null,
        beginDate: tempEventMaking(21, 0, 7),
        endDate: tempEventMaking(22, 15, 7),
      },
    ],
    news: [
      {
        id: 3,
        title: "Festival Ground Map & Stage Locations",
        summary:
          "Complete guide to navigating the festival grounds and finding your favorite stages.",
        content:
          "With four incredible stages spread across the festival grounds, here's your complete guide to getting around. The Poton stage serves as our main stage, hosting the biggest acts including Armin van Buuren and Martin Garrix. The Lake provides an intimate setting for emerging talent sets throughout both days. The Club offers diverse entertainment from comedy to theater and magic shows. Finally, the Hangaar keeps the electronic beats pumping with continuous DJ sets. Download the festival app for real-time navigation and updates.",
        author: "Event Planning",
        publishDate: new Date("2025-06-10T10:00:00.000Z"),
        category: Category.FESTIVAL_INFO,
        tags: ["Map", "Stages", "Navigation", "Festival App"],
      },
      {
        id: 5,
        title: "Sustainability Initiatives at This Year's Festival",
        summary:
          "Our commitment to reducing environmental impact through green initiatives.",
        content:
          "This year's festival is proud to introduce several sustainability initiatives aimed at reducing our environmental footprint. We've partnered with local suppliers to source organic and locally-grown food options. All cups and plates will be biodegradable or reusable. We're implementing a comprehensive recycling program with clearly marked stations throughout the grounds. Solar panels will power select stages, and we're encouraging carpooling and public transport with special shuttle services. Together, we can enjoy great music while protecting our planet.",
        author: "Sustainability Team",
        publishDate: new Date("2025-06-08T09:15:00.000Z"),
        category: Category.SUSTAINABILITY,
        img: null,
        tags: ["Sustainability", "Environment", "Green Festival", "Recycling"],
      },
      {
        id: 7,
        title: "Safety Guidelines and Emergency Information",
        summary:
          "Important safety information to ensure everyone has a safe and enjoyable experience.",
        content:
          "Your safety is our top priority. Please familiarize yourself with these important guidelines: Stay hydrated throughout the day and take regular breaks. Emergency medical stations are located near each stage - look for the red cross signs. Lost and found is located at the main entrance. If you see something concerning, alert our security team immediately - they're identifiable by their bright yellow vests. Weather updates will be announced if conditions change. Remember to look out for fellow festival-goers and report any harassment to security. Together we can ensure everyone has an amazing and safe experience.",
        author: "Safety & Security",
        publishDate: new Date("2025-06-14T08:00:00.000Z"),
        category: Category.SAFETY,
        img: null,
        tags: ["Safety", "Emergency", "Medical", "Security"],
      },
    ],
  },
];
