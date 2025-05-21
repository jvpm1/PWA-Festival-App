const TitleComponent = (props: any) => {
  return (
    <span class="font-bold text-3xl flex flex-row gap-1">
      <p class="text-primary-text dark:text-primary-text-dark">
        {props.children}
      </p>
      <p class="text-accent">.</p>
    </span>
  );
};

export default TitleComponent;
