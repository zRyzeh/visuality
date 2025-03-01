import type { PexelsPhoto } from "@interfaces/api/photos";
import { HeartOutline } from "./icons/HeartIcons";

interface PhotoInterface {
  photo: PexelsPhoto
}

export const Photo = ({ photo }: PhotoInterface) => (
  <article className="relative overflow-hidden rounded-xl before:content-[''] before:absolute before:bottom-0 before:bg-black/20 before:w-full before:h-full before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-100 group">
    <img alt={photo.alt} src={photo.src.large2x} className="w-full min-h-[550px] object-cover" />
    <button
      className="absolute right-0 top-0 p-4 -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-200"
      type="button"
    >
      <HeartOutline className="h-8 w-8" />
    </button>
    <div className="absolute bottom-0 flex items-center justify-between gap-2 w-full p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-200">
      <a
        href={photo.photographer_url}
        target="_blank"
        className="text-white font-semibold"
      >
        {photo.photographer}
      </a>
      <button
        type="button"
        className="bg-green-light text-white font-semibold px-4 py-2 rounded-md"
      >
        Download
      </button>
    </div>
  </article>
);