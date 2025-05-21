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
      class={`w-full ${
        props.position == 1
          ? "rounded-t-2xl rounded-b-sm"
          : props.position == 2
          ? "rounded-sm"
          : "rounded-b-2xl rounded-t-sm"
      } p-4 text-left flex flex-col gap-2 bg-primary-container-bg dark:bg-primary-container-bg-dark border border-primary-border dark:border-primary-border-dark`}
      onClick={toggleOpen}
    >
      <div class="flex items-center justify-between">
        <h3 class="font-medium text-lg text-primary-text dark:text-primary-text-dark">
          {props.header}
        </h3>
        {props.notoggle ? null : (
          <div
            class={`w-6 h-6 flex items-center justify-centertransition-transform duration-300 ${
              isOpen() ? "rotate-180" : ""
            }`}
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
          class="font-normal text-sm text-secondary-text dark:text-secondary-text-dark p-2"
          style={{
            "max-height": isOpen() ? `${contentHeight()}px` : "1.5rem",
            transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {props.children}
        </p>

        {props.notoggle ? null : (
          <div
            class="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-b from-transparent to-primary-container-bg dark:to-primary-container-bg-dark transition-opacity duration-500"
            classList={{ "opacity-0": isOpen(), "opacity-100": !isOpen() }}
          ></div>
        )}
      </div>
    </button>
  );
};

export default TextDropDownComponent;
