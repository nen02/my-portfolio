import services from "../data/services";
import { Section, Container, SectionHeader, GlowOrb, ServiceCard } from "./ui";

// ============================================================================
// Service Icons
// ============================================================================

function DesignIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <path
        d="M12 52 L24 28 L40 36 L52 20"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-purple-400"
      />
      <circle cx="52" cy="20" r="6" className="fill-purple-500" />
      <path
        d="M8 56 L16 48 M56 12 L60 8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        className="text-purple-300"
      />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <rect
        x="4"
        y="8"
        width="56"
        height="48"
        rx="6"
        stroke="currentColor"
        strokeWidth="4"
        className="text-purple-400"
      />
      <path
        d="M4 20 L60 20"
        stroke="currentColor"
        strokeWidth="3"
        className="text-purple-300"
      />
      <circle cx="16" cy="14" r="2" className="fill-purple-500" />
      <circle cx="24" cy="14" r="2" className="fill-purple-500" />
      <circle cx="32" cy="14" r="2" className="fill-purple-500" />
      <path
        d="M14 32 L24 42 L38 28 L50 38"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-purple-300"
      />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <rect
        x="16"
        y="4"
        width="32"
        height="56"
        rx="6"
        stroke="currentColor"
        strokeWidth="4"
        className="text-purple-400"
      />
      <path
        d="M24 12 Q32 8 40 12"
        stroke="currentColor"
        strokeWidth="3"
        className="text-purple-300"
      />
      <rect
        x="20"
        y="20"
        width="24"
        height="32"
        rx="2"
        className="fill-purple-500/20"
      />
      <path
        d="M22 28 L42 28 M22 36 L36 36 M22 44 L42 44"
        stroke="currentColor"
        strokeWidth="2"
        className="text-purple-300"
      />
      <circle cx="32" cy="54" r="3" className="fill-purple-500" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <path
        d="M22 16 L8 32 L22 48"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-purple-400"
      />
      <path
        d="M42 16 L56 32 L42 48"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-purple-400"
      />
      <path
        d="M28 12 L36 52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-purple-300"
      />
    </svg>
  );
}

function getServiceIcon(url: string): React.FC {
  if (url.includes("creative-design")) return DesignIcon;
  if (url.includes("website")) return WebsiteIcon;
  if (url.includes("mobile-app")) return MobileIcon;
  return CodeIcon;
}

// ============================================================================
// Services Component
// ============================================================================

function Services() {
  return (
    <Section>
      <GlowOrb className="top-20 left-20 w-96 h-96" />
      <GlowOrb className="bottom-20 right-20 w-80 h-80" color="violet" />
      <GlowOrb className="top-1/2 left-1/3 w-64 h-64" color="fuchsia" />
      <GlowOrb className="bottom-40 left-10 w-48 h-48" />
      <GlowOrb className="top-10 right-1/4 w-56 h-56" color="violet" />

      <Container>
        <SectionHeader title="Services" subtitle="What I can do for you" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(service.url);
            return (
              <ServiceCard
                key={service.key}
                icon={<IconComponent />}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default Services;
