const TitleComponent = (props: any) => {
  return (
    <span class="font-bold text-3xl flex flex-row gap-1">
      <p class="text-neutral-800 dark:text-neutral-300">{props.children}</p>
      <p class="text-red-500">.</p>
    </span>
  );
};

export default TitleComponent;
