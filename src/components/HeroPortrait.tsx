import profile from "../data/profile";
import { surface } from "./ui";

/** Intrinsic size of the portrait file, so the browser reserves its space before it loads. */
const PHOTO_SIZE = 640;

export function HeroPortrait() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-purple-500/30 to-fuchsia-500/10 blur-2xl" />
      <img
        src={profile.photoUrl}
        alt={`Portrait of ${profile.name}`}
        width={PHOTO_SIZE}
        height={PHOTO_SIZE}
        decoding="async"
        className="relative w-44 h-44 md:w-72 md:h-80 object-cover rounded-full md:rounded-[2rem] ring-1 ring-purple-500/40"
      />

      <div className="hidden sm:block absolute -top-4 -right-10 md:-left-12 md:right-auto md:top-8 animate-float-gentle motion-reduce:animate-none">
        <div className="bg-purple-500 text-white px-4 py-2 rounded-2xl rounded-br-sm md:rounded-br-2xl md:rounded-tl-sm text-sm font-medium shadow-lg shadow-purple-500/30 whitespace-nowrap">
          {profile.greeting}
        </div>
      </div>

      {profile.location && (
        <div
          className={`absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:-right-6 md:translate-x-0 flex items-center gap-2 px-3 py-2 rounded-xl text-xs whitespace-nowrap ${surface.floating}`}
        >
          <span aria-hidden>📍</span>
          <span className="text-gray-700 dark:text-gray-300 font-medium">{profile.location}</span>
        </div>
      )}
    </div>
  );
}
