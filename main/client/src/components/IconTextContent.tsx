import { Component } from "solid-js";

interface IconTextProps {
  icon: any;
  title: string | HTMLElement;
  desc: string | HTMLElement;
}

const IconTextComponent: Component<IconTextProps> = (props: any) => {
  return (
    <section class="space-y-2">
      <div class="flex flex-row gap-2 items-center">
        <img
          class="brightness-30 dark:brightness-100"
          src={props.icon}
          alt="train"
        />
        <p class="font-bold">{props.title}</p>
      </div>
      <div class="px-2">{props.desc}</div>
    </section>
  );
};

export default IconTextComponent;
