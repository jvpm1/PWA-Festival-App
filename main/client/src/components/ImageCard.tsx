import { Component } from "solid-js";

interface ImageCardProps {
  image: string | HTMLElement;
  title: string | HTMLElement;
  desc: string | HTMLElement | null;
  onclick: any;
}

const ImageCard: Component<ImageCardProps> = (props) => {
  // Extract src from HTMLElement if it's an img element, otherwise use as string
  const getImageSrc = () => {
    if (typeof props.image === "string") {
      return props.image;
    } else if (props.image instanceof HTMLImageElement) {
      return props.image.src;
    }
    // Handle other HTMLElement types or return a fallback
    return ""; // or some default image
  };

  return (
    <button class="w-full rounded-3xl overflow-hidden " onClick={props.onclick}>
      <div class="w-full aspect-square">
        <img
          src={getImageSrc()}
          alt=""
          class="w-full h-full object-cover rounded-b-3xl"
        />
      </div>
      {/* rest of your component */}
    </button>
  );
};

export default ImageCard;
