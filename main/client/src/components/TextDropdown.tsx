import { createSignal, onMount } from "solid-js";
import ArrowDownIcon from "../assets/icons/arrowDown.svg";

const TextDropDownComponent = (props: any) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [contentHeight, setContentHeight] = createSignal(0);
  let textRef: HTMLParagraphElement | undefined;

  const toggleOpen = () => {
    if (props.notoggle) return;
    setIsOpen(!isOpen());
  };

  if (props.notoggle) {
    setIsOpen(true);
  }

  onMount(() => {
    if (!textRef) return;
    setContentHeight(textRef.scrollHeight);
  });

  return (
    <button
      class="w-full rounded-2xl p-4 text-left flex flex-col gap-2 bg-white dark:bg-black shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-200 dark:border-neutral-800"
      onClick={toggleOpen}
    >
      <div class="flex items-center justify-between">
        <h3 class="font-medium text-lg text-neutral-900 dark:text-neutral-100">
          {props.header}
        </h3>
        {props.notoggle ? null : (
          <div
            class={`w-6 h-6 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 transition-transform duration-300 ${isOpen() ? "rotate-180" : ""}`}
          >
            <img
              class="brightness-50 dark:brightness-100"
              src={ArrowDownIcon}
              alt="arrowdown"
            />
          </div>
        )}
      </div>

      <div class="relative overflow-hidden">
        <p
          ref={textRef}
          class="font-normal text-sm text-neutral-700 dark:text-neutral-300 p-2"
          style={{
            "max-height": isOpen() ? `${contentHeight()}px` : "1.5rem",
            transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {props.children}
        </p>

        {props.notoggle ? null : (
          <div
            class="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white dark:to-black transition-opacity duration-500"
            classList={{ "opacity-0": isOpen(), "opacity-100": !isOpen() }}
          ></div>
        )}
      </div>
    </button>
  );
};

export default TextDropDownComponent;
