import links from "../data/links";
import profile from "../data/profile";
import { CopyStatus, useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { CheckIcon, CopyIcon } from "./icons";
import { Section, Container, button, text } from "./ui";

const COPY_LABEL: Record<CopyStatus, string> = {
  idle: "Copy email",
  copied: "Copied!",
  failed: "Couldn't copy",
};

function Contact() {
  const { status, copy } = useCopyToClipboard();

  return (
    <Section id="contact">
      <Container maxWidth="4xl">
        <div className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-600/15 via-transparent to-fuchsia-600/10 p-8 md:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />
          <div className="relative">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${text.heading}`}>
              Let's build something
              <br />
              <span className="text-purple-500">that lasts.</span>
            </h2>
            <p className={`text-lg max-w-xl mx-auto mb-8 ${text.body}`}>
              Hiring for a senior or backend-leaning role? I'd love to talk. I usually reply within a day.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <a href={`mailto:${profile.email}`} className={button.primary}>
                Email me
              </a>
              <button
                type="button"
                onClick={() => copy(profile.email)}
                className={button.outline}
                aria-live="polite"
              >
                {status === "copied" ? <CheckIcon /> : <CopyIcon />}
                {COPY_LABEL[status]}
              </button>
            </div>

            <div className={`flex justify-center gap-6 text-sm font-medium ${text.body}`}>
              {links.map((link) => (
                <a key={link.key} href={link.link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
                  {link.name} ↗
                </a>
              ))}
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
                  Résumé ↓
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
