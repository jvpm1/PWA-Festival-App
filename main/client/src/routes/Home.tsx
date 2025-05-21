import { Component, For } from "solid-js";
import ImageCard from "../components/ImageCard";
import TitleComponent from "../components/Title";

const Home: Component = () => {
  return (
    <div class="relative h-full w-full space-y-4 p-4">
      <TitleComponent children="Lorem ipsum dolor" />
      <section
        id="images-slider"
        class="relative flex flex-row gap-4 hide-scroll overflow-x-scroll rounded-3xl"
      >
        <For each={[0, 0, 0, 0]}>
          {(a, b) => (
            <div>
              <div class="w-64">
                <ImageCard
                  image="https://picsum.photos/200/300"
                  onclick={null}
                  title="Lorem ipsum dolor"
                  desc="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                />
              </div>
            </div>
          )}
        </For>
      </section>
    </div>
  );
};

export default Home;
