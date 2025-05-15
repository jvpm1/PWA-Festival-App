import { Component } from "solid-js";
import TitleComponent from "../components/Title";
import TextDropDownComponent from "../components/TextDropdown";

const Info: Component = () => {
  return (
    <div class="h-full w-full p-8 space-y-12">
      <section class="space-y-4">
        <TitleComponent children={<p>Algemeen & contact</p>} />
        <div class="px-4 text-neutral-700 dark:text-neutral-300">
          Het ❤️ U Festival is voor (nieuwe) studenten in de regio Utrecht en is
          een aanvulling op UIT.
        </div>
        <TextDropDownComponent
          header="Adres"
          children={
            <div class="text-left space-y-4">
              Locatie: Strijkviertel, Utrecht Navigatieadres: Strijkviertelweg,
              Utrecht
            </div>
          }
        />
        <TextDropDownComponent
          header="Datum & Openingstijden"
          children={
            <div class="text-left space-y-4">
              Zaterdag 6 september 2025 - 12:00 tot 23:00 uur
            </div>
          }
        />
      </section>

      <section class="space-y-4">
        <TitleComponent children={<p>Bereikbaarheid</p>} />
        <div class="px-4 text-neutral-700 dark:text-neutral-300">
          Het ❤️ U Festival is voor (nieuwe) studenten in de regio Utrecht en is
          een aanvulling op UIT.
        </div>
        <TextDropDownComponent
          header="Adres"
          children={
            <div class="text-left space-y-4">
              Locatie: Strijkviertel, Utrecht Navigatieadres: Strijkviertelweg,
              Utrecht
            </div>
          }
        />
        <TextDropDownComponent
          header="Datum & Openingstijden"
          children={
            <div class="text-left space-y-4">
              Zaterdag 6 september 2025 - 12:00 tot 23:00 uur
            </div>
          }
        />
      </section>

      <button
        class="text-red-500"
        onClick={() => {
          document.documentElement.classList.add("dark");
        }}
      >
        Click here for darktheme (temp shit)
      </button>

      <button
        class="text-red-500"
        onClick={() => {
          document.documentElement.classList.remove("dark");
        }}
      >
        Click here for lightttt (temp shit)
      </button>
    </div>
  );
};

export default Info;
