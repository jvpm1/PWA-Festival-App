import defaultActorImage from "../imgs/events/actor1.webp";

export interface Event {
  title: string;
  location: string;
  desc: null | string;
  img?: any;
  beginDate: Date;
  endDate: Date;
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

// REMOVE WHEN PROPER EVENTS ARRAY LOADING HAS BEEN ADDED
function tempEventMaking(hour: any, min: any, day: any) {
  let date = new Date();
  date.setHours(hour, min);
  const daysUntilSaturday = (day - date.getDay()) % 7;
  date.setDate(date.getDate() + daysUntilSaturday);

  return date;
}

export let Events: Array<Event> = [
  // Saturday - Poton
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

  // Saturday - The Lake (Talent sets)
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

  // Saturday - The Club
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

  // Saturday - Hangaar (DJ sets)
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

  // Sunday - Poton
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

  // Sunday - The Lake (Talent sets)
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

  // Sunday - The Club
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

  // Sunday - Hangaar (DJ sets)
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
];
