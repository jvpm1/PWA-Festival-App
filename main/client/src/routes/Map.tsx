import { Component, onMount, createSignal, For, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { EventData, EventType } from "../assets/db/Database";
import MapImg from "../assets/imgs/map.png";

declare global {
  interface Window {
    L: any;
  }
}

interface LocationEvent {
  title: string;
  location: string;
  desc: string | null;
  img?: any;
  beginDate: Date;
  endDate: Date;
}

interface LocationData {
  title: string;
  description: string | null;
  position: [number, number];
  events: LocationEvent[];
  newsCount: number;
}

const Map: Component = () => {
  let mapContainer: HTMLDivElement | undefined; // Make it explicitly undefined initially
  let leafletMap: any = null;
  const [selectedLocation, setSelectedLocation] =
    createSignal<LocationData | null>(null);
  const [isPopupOpen, setIsPopupOpen] = createSignal(false);
  const [leafletLoaded, setLeafletLoaded] = createSignal(false);

  const getLocationData = (): LocationData[] => {
    return EventData.map((eventType: EventType) => ({
      title: eventType.title,
      description: eventType.description,
      position: eventType.mapPosition,
      events: eventType.events,
      newsCount: eventType.news.length,
    }));
  };

  const formatTime = (date: Date) =>
    `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
  const formatDate = (date: Date) => date.toLocaleDateString();

  const openLocationPopup = (location: LocationData) => {
    setSelectedLocation(location);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedLocation(null);
  };

  const loadLeaflet = () => {
    return new Promise<void>((resolve) => {
      if (window.L) {
        resolve();
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  };

  const initializeMap = async () => {
    // Add a guard to ensure mapContainer exists
    if (!mapContainer) {
      console.error("Map container not found");
      return;
    }

    const img = new Image();

    return new Promise<void>((resolve) => {
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const mapHeight = 800;
        const mapWidth = mapHeight * aspectRatio;

        leafletMap = window.L.map(mapContainer!, {
          // Use non-null assertion since we've checked above
          crs: window.L.CRS.Simple,
          minZoom: -1,
          maxZoom: 2,
          zoomControl: false,
          attributionControl: false,
        });

        const imageBounds = [
          [0, 0],
          [mapHeight, mapWidth],
        ];
        window.L.imageOverlay(MapImg, imageBounds).addTo(leafletMap);
        leafletMap.fitBounds(imageBounds);

        // Add markers ig
        getLocationData().forEach((location) => {
          const marker = window.L.marker(location.position, {
            icon: window.L.divIcon({
              html: `<div class="relative cursor-pointer flex flex-col items-center">
                       <div class="bg-white dark:bg-neutral-900 px-3 py-1 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 mb-2 whitespace-nowrap">
                         <span class="text-sm font-medium text-neutral-900 dark:text-white">${location.title}</span>
                       </div>
                       <div class="relative w-10 h-10">
                         <div class="absolute inset-0 bg-red-500/30 rounded-full animate-ping"></div>
                         <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
                       </div>
                     </div>`,
              className: "bg-transparent border-none",
              iconSize: [120, 60],
              iconAnchor: [60, 50],
            }),
          }).addTo(leafletMap);

          marker.on("click", () => openLocationPopup(location));
        });

        resolve();
      };
      img.src = MapImg;
    });
  };

  onMount(async () => {
    await loadLeaflet();
    setLeafletLoaded(true);
    setTimeout(async () => {
      await initializeMap();
    }, 0);
  });

  return (
    <div class="h-full w-full relative bg-green-800">
      <Show when={leafletLoaded()}>
        <style>
          {`
            .leaflet-control-zoom { display: none !important; }
          `}
        </style>
      </Show>
      <div
        ref={mapContainer!}
        class="h-full w-full rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-900"
      />
      <Show when={isPopupOpen() && selectedLocation()}>
        <Portal>
          <div
            class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && closePopup()}
          >
            <div class="h-full w-full bg-white dark:bg-black overflow-hidden flex flex-col">
              {/* Header */}
              <div class="flex justify-between items-start p-6 border-b border-neutral-200 dark:border-neutral-700 bg-white/95 dark:bg-black/95 backdrop-blur-lg">
                <div class="flex-1 pr-4">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Location
                    </span>
                    <span class="text-neutral-600 dark:text-neutral-400 text-sm">
                      {selectedLocation()?.events.length} Events •{" "}
                      {selectedLocation()?.newsCount} News
                    </span>
                  </div>
                  <h1 class="text-3xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
                    {selectedLocation()?.title}
                  </h1>
                  <Show when={selectedLocation()?.description}>
                    <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {selectedLocation()?.description}
                    </p>
                  </Show>
                </div>
                <button
                  class="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-red-500 text-neutral-600 dark:text-neutral-400 hover:text-white transition-all duration-200 flex-shrink-0"
                  onClick={closePopup}
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

              {/* Events */}
              <div class="flex-1 overflow-y-auto">
                <div class="p-6 space-y-6 max-w-4xl mx-auto">
                  <h3 class="font-semibold text-neutral-900 dark:text-white text-xl">
                    Upcoming Events
                  </h3>

                  <Show
                    when={selectedLocation()?.events.length! > 0}
                    fallback={
                      <div class="text-center py-20 text-neutral-500 dark:text-neutral-400">
                        <p class="text-lg">
                          No events scheduled for this location.
                        </p>
                      </div>
                    }
                  >
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <For each={selectedLocation()?.events}>
                        {(event) => (
                          <div class="rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-lg transition-all duration-200">
                            <div class="flex justify-between items-start mb-4">
                              <h4 class="font-semibold text-xl text-neutral-900 dark:text-white leading-tight flex-1 pr-4">
                                {event.title}
                              </h4>
                              <div class="text-right text-sm text-neutral-600 dark:text-neutral-400 flex-shrink-0">
                                <div class="font-medium">
                                  {formatDate(event.beginDate)}
                                </div>
                                <div>
                                  {formatTime(event.beginDate)} -{" "}
                                  {formatTime(event.endDate)}
                                </div>
                              </div>
                            </div>

                            <Show when={event.desc}>
                              <p class="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                                {event.desc}
                              </p>
                            </Show>

                            <div class="flex items-center">
                              <span class="inline-flex items-center gap-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm px-4 py-2 rounded-full">
                                {event.location}
                              </span>
                            </div>
                          </div>
                        )}
                      </For>
                    </div>
                  </Show>
                </div>
              </div>

              {/* Footer */}
              <div class="p-6 border-t border-neutral-200 dark:border-neutral-700 bg-white/95 dark:bg-black/95 backdrop-blur-lg">
                <div class="max-w-4xl mx-auto">
                  <button
                    class="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
                    onClick={closePopup}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      </Show>
    </div>
  );
};

export default Map;
