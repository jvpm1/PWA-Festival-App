import { Component } from "solid-js";

interface ImageCardProps {
  image: string | HTMLElement;
  title: string | HTMLElement;
  desc: string | HTMLElement;
  onclick: any;
}

const ImageCard: Component<ImageCardProps> = (props) => {
  return (
    <button class="w-full rounded-3xl overflow-hidden " onClick={props.onclick}>
      <div class="w-full aspect-square">
        <img
          src={props.image}
          alt=""
          class="w-full h-full object-cover rounded-b-3xl"
        />
      </div>

      <div class="py-2 *:text-left">
        <h3 class="font-bold text-xl text-primary-text dark:text-primary-text-dark">
          {props.title}
        </h3>

        <p class="text-sm text-secondary-text dark:text-secondary-text-dark">
          {props.desc}
        </p>
      </div>
    </button>
  );
};

export default ImageCard;
