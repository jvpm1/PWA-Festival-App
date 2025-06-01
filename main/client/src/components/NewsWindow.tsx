import { Component, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { NewsArticle, Category } from "../assets/db/News";

interface NewsModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

const NewsModal: Component<NewsModalProps> = (props) => {
  const categoryLabels = {
    [Category.LINEUP]: "Lineup",
    [Category.FESTIVAL_INFO]: "Festival Info",
    [Category.ARTIST_SPOTLIGHT]: "Artist Spotlight",
    [Category.GENERAL]: "General",
    [Category.ANNOUNCEMENT]: "Announcement",
    [Category.SAFETY]: "Safety",
    [Category.SUSTAINABILITY]: "Sustainability",
  };

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  return (
    <Portal>
      <Show when={props.isOpen && props.article}>
        <div
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div class="w-full max-w-2xl max-h-[90vh] bg-white/90 dark:bg-black/80 backdrop-blur-lg rounded-3xl border border-neutral-200 dark:border-neutral-900 overflow-hidden">
            <div class="flex justify-between items-start p-6 border-b border-neutral-200 dark:border-neutral-700">
              <div class="flex-1 pr-4">
                <div class="flex items-center gap-3 mb-3">
                  <span class="bg-red-500 dark:bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {categoryLabels[props.article!.category]}
                  </span>
                  <span class="text-neutral-600 dark:text-neutral-400 text-sm">
                    {props.article!.publishDate.toLocaleDateString()}
                  </span>
                </div>
                <h1 class="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  {props.article!.title}
                </h1>
                <p class="text-neutral-600 dark:text-neutral-400">
                  By {props.article!.author}
                </p>
              </div>
              <button
                class="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-red-500 hover:dark:bg-red-600 text-neutral-600 dark:text-neutral-400 hover:text-white transition-colors duration-300 flex-shrink-0"
                onClick={props.onClose}
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="p-6 overflow-y-auto max-h-[60vh]">
              <div class="mb-6 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-2xl">
                <h3 class="font-semibold text-neutral-900 dark:text-white mb-2">
                  Summary
                </h3>
                <p class="text-neutral-700 dark:text-neutral-300">
                  {props.article!.summary}
                </p>
              </div>

              <div class="prose prose-neutral dark:prose-invert max-w-none">
                <div class="text-neutral-800 dark:text-neutral-200 leading-relaxed whitespace-pre-wrap">
                  {props.article!.content}
                </div>
              </div>

              <Show when={props.article!.tags.length > 0}>
                <div class="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <h4 class="font-semibold text-neutral-900 dark:text-white mb-3">
                    Tags
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    {props.article!.tags.map((tag) => (
                      <span class="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Show>
            </div>

            <div class="p-6 border-t border-neutral-200 dark:border-neutral-700">
              <button
                class="w-full py-3 bg-red-500 dark:bg-red-600 text-white rounded-full hover:bg-red-600 hover:dark:bg-red-700 transition-colors duration-300 font-medium"
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Show>
    </Portal>
  );
};

export default NewsModal;
