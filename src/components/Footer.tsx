import profile from "../data/profile";
import { surface, text } from "./ui";

function Footer() {
  return (
    <footer className={`relative border-t py-8 ${surface.divider}`}>
      <div className={`max-w-6xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm ${text.muted}`}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.footerNote}</p>
      </div>
    </footer>
  );
}

export default Footer;
