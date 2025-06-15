import { Component, For, createSignal } from "solid-js";
import ImageCard from "../components/ImageCard";
import TitleComponent from "../components/Title";
import NewsModal from "../components/NewsWindow";
import { EventData, EventType, Category } from "../assets/db/Database"; // Updated import
import defaultActorImage from "../assets/imgs/events/actor1.webp";

const Home: Component = () => {
  const [selectedCategory, setSelectedCategory] = createSignal<
    Category | "all"
  >("all");
  const [selectedArticle, setSelectedArticle] = createSignal<any | null>(null); // Updated type
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const openModal = (article: any) => {
    // Updated type
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  // Extract all events from all EventType objects
  const getAllEvents = () => {
    return EventData.flatMap((eventType: EventType) =>
      eventType.events.filter((event) => event.desc !== null)
    ).slice(0, 10);
  };

  // Extract all news articles from all EventType objects
  const getAllNews = () => {
    return EventData.flatMap((eventType: EventType) => eventType.news);
  };

  const filteredNews = () => {
    const allNews = getAllNews();
    if (selectedCategory() === "all") return allNews;
    return allNews.filter((article) => article.category === selectedCategory());
  };

  const categoryLabels = {
    [Category.LINEUP]: "Lineup",
    [Category.FESTIVAL_INFO]: "Festival Info",
    [Category.ARTIST_SPOTLIGHT]: "Artist Spotlight",
    [Category.GENERAL]: "General",
    [Category.ANNOUNCEMENT]: "Announcement",
    [Category.SAFETY]: "Safety",
    [Category.SUSTAINABILITY]: "Sustainability",
  };

  // Get only categories that have articles
  const availableCategories = () => {
    const allNews = getAllNews();
    const categoriesWithArticles = new Set(
      allNews.map((article) => article.category)
    );
    return Object.values(Category).filter((category) =>
      categoriesWithArticles.has(category)
    );
  };

  return (
    <div class="relative h-full w-full space-y-4 p-4">
      <TitleComponent children="Featured Artists" />
      <section
        id="images-slider"
        class="relative flex flex-row gap-4 hide-scroll overflow-x-scroll rounded-3xl"
      >
        <For each={getAllEvents()}>
          {(event) => (
            <div>
              <div class="w-64">
                <ImageCard
                  image={event.img || defaultActorImage}
                  onclick={null}
                  title={event.title}
                  desc={event.desc}
                />
              </div>
            </div>
          )}
        </For>
      </section>

      <div class="pt-8">
        <TitleComponent children="Festival News" />

        <div class="flex gap-2 mb-6 hide-scroll overflow-x-scroll pb-2">
          <button
            class={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-300 ${
              selectedCategory() === "all"
                ? "bg-red-500 dark:bg-red-600 text-white"
                : "bg-white/80 dark:bg-black/50 text-neutral-900 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-900 hover:bg-red-500 hover:dark:bg-red-600 hover:text-white"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <For each={availableCategories()}>
            {(category) => (
              <button
                class={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-300 ${
                  selectedCategory() === category
                    ? "bg-red-500 dark:bg-red-600 text-white"
                    : "bg-white/80 dark:bg-black/50 text-neutral-900 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-900 hover:bg-red-500 hover:dark:bg-red-600 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {categoryLabels[category]}
              </button>
            )}
          </For>
        </div>

        <section class="space-y-4">
          <For each={filteredNews()}>
            {(article) => (
              <div class="w-full rounded-3xl overflow-hidden bg-white/80 dark:bg-black/50 border border-neutral-200 dark:border-neutral-900 hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-colors duration-300">
                <div class="p-6 *:text-left">
                  <div class="flex justify-between items-start mb-2">
                    <span class="inline-block bg-red-500 dark:bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                      {categoryLabels[article.category]}
                    </span>
                    <span class="text-neutral-600 dark:text-neutral-400 text-sm">
                      {article.publishDate.toLocaleDateString()}
                    </span>
                  </div>
                  <h3 class="font-bold text-xl text-neutral-900 dark:text-white mb-2">
                    {article.title}
                  </h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {article.summary}
                  </p>
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-sm text-neutral-600 dark:text-neutral-400">
                      By {article.author}
                    </span>
                    <button
                      class="px-4 py-2 bg-red-500 dark:bg-red-600 text-white rounded-full hover:bg-red-600 hover:dark:bg-red-700 transition-colors duration-300 text-sm font-medium"
                      onClick={() => openModal(article)}
                    >
                      Read More
                    </button>
                  </div>
                  {article.tags.length > 0 && (
                    <div class="flex gap-2">
                      <For each={article.tags}>
                        {(tag) => (
                          <span class="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs px-2 py-1 rounded-full">
                            #{tag}
                          </span>
                        )}
                      </For>
                    </div>
                  )}
                </div>
              </div>
            )}
          </For>
        </section>

        {filteredNews().length === 0 && (
          <div class="text-center py-8 text-neutral-600 dark:text-neutral-400">
            No news articles found for this category.
          </div>
        )}
      </div>

      <NewsModal
        article={selectedArticle()}
        isOpen={isModalOpen()}
        onClose={closeModal}
      />

      <div class="h-32"></div>
    </div>
  );
};

export default Home;
