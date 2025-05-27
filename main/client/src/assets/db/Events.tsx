export interface Event {
  title: string;
  location: string;
  desc: null | any;
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
    desc: null,
    beginDate: tempEventMaking(10, 30, 6),
    endDate: tempEventMaking(11, 45, 6),
  },
  {
    title: "Kensington",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(12, 30, 6),
    endDate: tempEventMaking(13, 45, 6),
  },
  {
    title: "De Staat",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(14, 30, 6),
    endDate: tempEventMaking(16, 15, 6),
  },
  {
    title: "Navarone",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(17, 0, 6),
    endDate: tempEventMaking(18, 15, 6),
  },
  {
    title: "Dotan",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(19, 15, 6),
    endDate: tempEventMaking(21, 0, 6),
  },
  {
    title: "Froukje",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(22, 0, 6),
    endDate: tempEventMaking(23, 45, 6),
  },

  // Saturday - The Lake (Talent sets)
  {
    title: "Talent set 1",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(10, 15, 6),
    endDate: tempEventMaking(11, 30, 6),
  },
  {
    title: "Talent set 2",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(11, 45, 6),
    endDate: tempEventMaking(13, 0, 6),
  },
  {
    title: "Talent set 3",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(13, 15, 6),
    endDate: tempEventMaking(14, 30, 6),
  },
  {
    title: "Talent set 4",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(15, 30, 6),
    endDate: tempEventMaking(16, 45, 6),
  },
  {
    title: "Talent set 5",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(17, 30, 6),
    endDate: tempEventMaking(18, 45, 6),
  },
  {
    title: "Talent set 6",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(19, 30, 6),
    endDate: tempEventMaking(20, 45, 6),
  },
  {
    title: "Talent set 7",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(21, 30, 6),
    endDate: tempEventMaking(22, 45, 6),
  },

  // Saturday - The Club
  {
    title: "Comedy",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(11, 45, 6),
    endDate: tempEventMaking(13, 0, 6),
  },
  {
    title: "Lecture",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(13, 15, 6),
    endDate: tempEventMaking(14, 30, 6),
  },
  {
    title: "Theater",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(15, 30, 6),
    endDate: tempEventMaking(16, 45, 6),
  },
  {
    title: "Movie",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(17, 30, 6),
    endDate: tempEventMaking(19, 15, 6),
  },
  {
    title: "Performance",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(19, 30, 6),
    endDate: tempEventMaking(21, 15, 6),
  },
  {
    title: "Illusionist",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(21, 30, 6),
    endDate: tempEventMaking(22, 45, 6),
  },

  // Saturday - Hangaar (DJ sets)
  {
    title: "DJ set 1",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(10, 0, 6),
    endDate: tempEventMaking(10, 45, 6),
  },
  {
    title: "DJ set 2",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(11, 0, 6),
    endDate: tempEventMaking(11, 45, 6),
  },
  {
    title: "DJ set 3",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(12, 0, 6),
    endDate: tempEventMaking(13, 15, 6),
  },
  {
    title: "DJ set 4",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(13, 30, 6),
    endDate: tempEventMaking(14, 45, 6),
  },
  {
    title: "DJ set 5",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(15, 0, 6),
    endDate: tempEventMaking(16, 15, 6),
  },
  {
    title: "DJ set 6",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(17, 0, 6),
    endDate: tempEventMaking(18, 15, 6),
  },
  {
    title: "DJ set 7",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(19, 0, 6),
    endDate: tempEventMaking(20, 15, 6),
  },
  {
    title: "DJ set 8",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(21, 0, 6),
    endDate: tempEventMaking(22, 15, 6),
  },

  // Sunday - Poton
  {
    title: "Martin Garrix",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(10, 30, 7),
    endDate: tempEventMaking(11, 45, 7),
  },
  {
    title: "Within Temptation",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(12, 30, 7),
    endDate: tempEventMaking(13, 45, 7),
  },
  {
    title: "Chef Special",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(14, 30, 7),
    endDate: tempEventMaking(16, 15, 7),
  },
  {
    title: "Beige de Visser",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(17, 0, 7),
    endDate: tempEventMaking(18, 45, 7),
  },
  {
    title: "Spinvis",
    location: "Poton",
    desc: null,
    beginDate: tempEventMaking(19, 15, 7),
    endDate: tempEventMaking(21, 0, 7),
  },

  // Sunday - The Lake (Talent sets)
  {
    title: "Talent set 1",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(10, 15, 7),
    endDate: tempEventMaking(11, 30, 7),
  },
  {
    title: "Talent set 2",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(11, 45, 7),
    endDate: tempEventMaking(13, 0, 7),
  },
  {
    title: "Talent set 3",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(13, 15, 7),
    endDate: tempEventMaking(14, 30, 7),
  },
  {
    title: "Talent set 4",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(15, 30, 7),
    endDate: tempEventMaking(16, 45, 7),
  },
  {
    title: "Talent set 5",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(17, 30, 7),
    endDate: tempEventMaking(18, 45, 7),
  },
  {
    title: "Talent set 6",
    location: "The Lake",
    desc: null,
    beginDate: tempEventMaking(19, 30, 7),
    endDate: tempEventMaking(20, 45, 7),
  },

  // Sunday - The Club
  {
    title: "Comedy",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(11, 45, 7),
    endDate: tempEventMaking(13, 0, 7),
  },
  {
    title: "Lecture",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(13, 15, 7),
    endDate: tempEventMaking(14, 30, 7),
  },
  {
    title: "Theater",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(15, 30, 7),
    endDate: tempEventMaking(16, 45, 7),
  },
  {
    title: "Movie",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(17, 30, 7),
    endDate: tempEventMaking(19, 15, 7),
  },
  {
    title: "Magic Show",
    location: "The Club",
    desc: null,
    beginDate: tempEventMaking(19, 30, 7),
    endDate: tempEventMaking(20, 45, 7),
  },

  // Sunday - Hangaar (DJ sets)
  {
    title: "DJ set 1",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(10, 0, 7),
    endDate: tempEventMaking(10, 45, 7),
  },
  {
    title: "DJ set 2",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(11, 0, 7),
    endDate: tempEventMaking(11, 45, 7),
  },
  {
    title: "DJ set 3",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(12, 0, 7),
    endDate: tempEventMaking(13, 15, 7),
  },
  {
    title: "DJ set 4",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(13, 30, 7),
    endDate: tempEventMaking(14, 45, 7),
  },
  {
    title: "DJ set 5",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(15, 0, 7),
    endDate: tempEventMaking(16, 15, 7),
  },
  {
    title: "DJ set 6",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(17, 0, 7),
    endDate: tempEventMaking(18, 15, 7),
  },
  {
    title: "DJ set 7",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(19, 0, 7),
    endDate: tempEventMaking(20, 15, 7),
  },
  {
    title: "DJ set 8",
    location: "Hangaar",
    desc: null,
    beginDate: tempEventMaking(21, 0, 7),
    endDate: tempEventMaking(22, 15, 7),
  },
];
