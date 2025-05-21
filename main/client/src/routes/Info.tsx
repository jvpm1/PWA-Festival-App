import { Component } from "solid-js";
import TitleComponent from "../components/Title";
import TextDropDownComponent from "../components/TextDropdown";
import IconTextComponent from "../components/IconTextContent";

import TrainIcon from "../assets/icons/train.svg";
import CarIcon from "../assets/icons/car.svg";
import BikeIcon from "../assets/icons/bike.svg";
import TaxiIcon from "../assets/icons/taxi.svg";
import BusIcon from "../assets/icons/bus.svg";

const Info: Component = () => {
  return (
    <div class="h-full w-full p-8 space-y-12">
      <section id="algemeen" class="space-y-4">
        <TitleComponent children={<p>Algemeen & contact</p>} />
        <div class="px-4 text-secondary-text dark:text-neutral-300">
          Het ❤️ U Festival is voor (nieuwe) studenten in de regio Utrecht en is
          een aanvulling op UIT.
        </div>
        <TextDropDownComponent
          header="Adres"
          notoggle={true}
          position={1}
          children={
            <div class="text-left space-y-4">
              Locatie: Strijkviertel, Utrecht Navigatieadres: Strijkviertelweg,
              Utrecht
            </div>
          }
        />
        <TextDropDownComponent
          header="Datum & Openingstijden"
          notoggle={true}
          position={3}
          children={
            <div class="text-left space-y-4">
              Zaterdag 6 september 2025 - 12:00 tot 23:00 uur
            </div>
          }
        />
      </section>

      <section id="bereikbaarheid" class="space-y-4">
        <TitleComponent children={<p>Bereikbaarheid</p>} />

        <TextDropDownComponent
          header="Wat ga ik dit noemen?"
          position={1}
          children={
            <div class="text-left space-y-6">
              <IconTextComponent
                icon={BikeIcon}
                title="Fiets"
                desc="Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de gehele dag kunt stallen."
              />

              <IconTextComponent
                icon={CarIcon}
                title="Auto"
                desc={
                  <div>
                    Je kunt een parkingticket aanschaffen.
                    <br />
                    Parkeren kan op P+R Papendorp, volg hiervoor de borden 'P
                    online ticket'.
                    <br />
                    Heb je geen ticket van te voren gekocht? Dan kun je bij de
                    parkeerwachter op locatie een parkeerticket aanschaffen (PIN
                    ONLY).
                    <br />
                    Let wel op: VOL=VOL
                  </div>
                }
              />
            </div>
          }
        />

        <TextDropDownComponent
          header="Openbaar vervoer"
          position={3}
          children={
            <div class="text-left space-y-6">
              <IconTextComponent
                icon={TrainIcon}
                title="OV"
                desc={
                  <div>
                    Kom je met het openbaar vervoer naar Lief?
                    <br />
                    Plan dan je trip via <a href="https://9292.nl">9292.nl</a>.
                  </div>
                }
              />

              <IconTextComponent
                icon={BusIcon}
                title="Shuttlebus"
                desc={
                  <div>
                    Vanaf Utrecht Centraal kun je onze gratis shuttlebus
                    richting het festivalterrein pakken.
                    <br />
                    Je vindt deze bus op het centraal station aan de
                    Mineurslaan.
                    <br />
                    Volg de witte bordjes met zwarte pijlen én ' ❤️U Festival'.
                    <br />
                    De bus rijdt tussen 12:00 uur & 19:00 uur richting het
                    festival en vanaf 21:00 uur kun je weer instappen om
                    richting het station te gaan.
                  </div>
                }
              />

              <IconTextComponent
                icon={TaxiIcon}
                title="Taxi + Kiss & Ride"
                desc={
                  <div>
                    Navigeer naar Strijkviertel, De Meern (Utrecht).
                    <br />
                    Volg de borden "Kiss & Ride ❤️U Festival", zodra je in de
                    buurt bent van het festivalterrein.
                  </div>
                }
              />
            </div>
          }
        />
      </section>

      <section id="faq" class="space-y-4">
        <TitleComponent children={<p>FAQ</p>} />

        <TextDropDownComponent
          header="Ik gebruik medicatie. Wat nu?"
          position={1}
          children={
            <div class="text-left space-y-6">
              Het is toegestaan om medicijnen mee te nemen in een dosis die je
              maximaal nodig hebt op 1 dag.
              <br />
              Een doktersverklaring/medicatiepaspoort is noodzakelijk.
              <br />
              De beveiliging zal jouw documentatie beoordelen en de medicijnen
              controleren.
              <br />
              Het kan zijn dat de EHBO jouw medicijnen (bijvoorbeeld als deze
              gevaarlijk zijn i.c.m. alcohol) in bewaring neemt en je deze enkel
              kan innemen bij de EHBO.
            </div>
          }
        />
        <TextDropDownComponent
          header="Mag ik het festivalterrein tussentijds verlaten?"
          position={2}
          children={
            <div class="text-left space-y-6">
              Nee, helaas is dat niet mogelijk.
              <br />
              Om de veiligheid van alle bezoekers te kunnen waarborgen, kunnen
              we het niet toestaan dat het festivalterrein tussentijds verlaten
              wordt.
              <br />
              Wij hebben namelijk geen zicht op hetgeen wat een bezoeker buiten
              het festivalterrein doet en ik welke staat deze het terrein weer
              betreedt.
              <br />
              Hier kunnen dan ook geen uitzonderingen voor gemaakt worden.
              <br />
              Wij hebben genoeg loungeplekken, foodstands & barren om het een
              hele dag uit te kunnen houden.
            </div>
          }
        />
        <TextDropDownComponent
          header="Zijn er lockers?"
          position={3}
          notoggle={true}
          children="Yes, deze zijn er! Op het terrein kun je medium & grote lockers huren."
        />
      </section>

      <section id="lockers" class="space-y-4">
        <TitleComponent children={<p>Lockers</p>} />

        <div class="px-4 text-secondary-text dark:text-neutral-300">
          Op het festivalterrein zijn kluisjes aanwezig waar je je spullen
          veilig kunt opbergen!
          <br />
          Hier passen 3 à 4 jassen in. Goed om te weten: je kunt je kluisje
          gedurende de hele dag openen en sluiten zo vaak je wilt.
          <br />
          Het is niet mogelijk om online een kluisje te reserveren.
        </div>
      </section>

      <section id="golden-glu" class="space-y-4">
        <TitleComponent children={<p>Golden-GLU</p>} />

        <div class="px-4 text-secondary-text dark:text-neutral-300">
          Studenten van het GLU hebben tijdens het festival speciale privileges
          en zijn herkenbaar aan een gouden armbandje.
          <br />
          Met dit gouden armbandje kunnen ze tijdens het festival gebruik maken
          van de gouden toiletten en met goud gemarkeerde bestelpunten aan de
          bars zonder in een rij te hoeven staan.
        </div>
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
        class="text-red-500 mb-32"
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
