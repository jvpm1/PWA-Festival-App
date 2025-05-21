import { Component } from "solid-js";

const hourSize = 500;

let currentTime = new Date();
let startingTime = null;
let events = [
  {
    title: "Spinvis",

    desc: null,
    timeStart: new Date(currentTime.getTime() + 5 * 60 * 1000), // Adds 5 mins
  },
];

const init = () => {
  const firstEvent = events[0];
  const timeStart = firstEvent.timeStart;

  console.log(timeStart.getHours());
};

const Event: Component = () => {
  init();

  return (
    <div class="w-full h-full flex flex-col">
      <nav class="w-full h-fit p-4">
        <h2 class="font-medium text-2xl">Events</h2>

        <div class="w-full h-fit p-2 flex justify-between gap-2">
          <button class="p-2 w-full rounded-3xl bg-accent text-white border border-primary-border">
            Zaterdag
          </button>

          <button class="p-2 w-full rounded-3xl bg-primary-container-bg border border-primary-border">
            Zondag
          </button>
        </div>
      </nav>

      <div class="w-full h-full flex flex-col p-2">
        <section class="w-full h-fit">
          <div class="bg-accent text-white p-2" style={`width: ${hourSize}`}>
            <p>1:00</p>
          </div>
        </section>
        <section class="w-full h-full flex">
          <div class="w-full h-full">
            Hello
            <br />
            Hello
          </div>

          <div class="w-full h-full">
            Hello
            <br />
            Hello
          </div>

          <div class="w-full h-full">
            Hello
            <br />
            Hello
          </div>
        </section>
      </div>
    </div>
  );
};

export default Event;
