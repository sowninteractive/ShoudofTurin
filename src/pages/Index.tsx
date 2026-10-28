import React from "react";
import "./App.css";

// Shroud of Turin quotes and information
const shroudContent = {
  hero: {
    title: "The Shroud of Turin",
    subtitle: "A Divine Mystery",
    claim: "Scientific evidence confirms its authenticity as Christ's burial cloth",
    buttonText: "Explore the Evidence"
  },
  sections: [
    {
      id: "scientific",
      title: "Scientific Evidence",
      items: [
        {
          icon: "🔬",
          title: "Blood Type AB",
          description: "The bloodstains on the shroud all match type AB, rare and consistent with Middle Eastern populations"
        },
        {
          icon: "🧪",
          title: "Pollen Analysis",
          description: "Pollen grains unique to the Jerusalem region were found, indicating the cloth's origin"
        },
        {
          icon: "📊",
          title: "Carbon Dating",
          description: "1988 carbon dating placed the cloth in the 1st century AD, aligning with biblical timelines"
        }
      ]
    },
    {
      id: "history",
      title: "Historical Journey",
      items: [
        {
          icon: "📜",
          title: "First Century",
          description: "Early church fathers described a cloth bearing Jesus' image, consistent with shroud features"
        },
        {
          icon: "🏛️",
          title: "1354 Exhibition",
          description: "The shroud first appeared publicly in Lirey, France, and was later transferred to Turin, Italy"
        },
        {
          icon: "📍",
          title: "Turin, Italy",
          description: "Since 1578, the shroud has been housed in the Cathedral of Saint John the Baptist in Turin"
        }
      ]
    },
    {
      id: "faith",
      title: "Religious Significance",
      items: [
        {
          icon: "✝️",
          title: "Papal Endorsements",
          description: "Multiple popes have recognized the shroud as a powerful symbol of faith and resurrection"
        },
        {
          icon: "🙏",
          title: "Resurrection Symbol",
          description: "The image on the shroud depicts a man who suffered crucifixion, aligning with Gospel accounts"
        },
        {
          icon: "🕯️",
          title: "Pilgrimage Destination",
          description: "Millions of pilgrims visit the shroud annually, finding spiritual comfort and inspiration"
        }
      ]
    }
  ]
};

const navLinks = [
  { href: "#scientific", label: "Evidence" },
  { href: "#history", label: "History" },
  { href: "#faith", label: "Faith" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-[#F8E8F5] relative">
      {/* Floating sakura petals background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5" viewBox="0 0 100 100">
          <path d="M50 10 L45 30 L55 30 L50 10 Z M50 90 L45 70 L55 70 L50 90 Z" fill="#FFB6C1" />
          <path d="M30 30 L20 50 L40 50 L30 30 Z M70 30 L60 50 L80 50 L70 30 Z" fill="#FF69B4" />
          <path d="M10 50 L5 70 L95 70 L10 50 Z M20 10 L80 10 L80 90 L20 90 Z" fill="#DA70D6" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D8B4E2] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                <path d="M12 7L19 13H5L12 7ZM12 3L2 12h3v8H12V3ZM12 19H5l7 6V19H12V19Z" />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-[#6B2A5A]">ShroudSakura</h1>
          </div>
          <ul className="flex gap-8 text-sm text-[#6B2A5A]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-[#FF69B4] transition-colors"> {link.label} </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B2A5A] mb-4">
            {shroudContent.hero.title}
          </h2>
          <p className="text-lg text-[#7D3A73] mb-8 max-w-2xl mx-auto leading-relaxed">
            {shroudContent.hero.subtitle}
          </p>
          <blockquote className="inline-block border-l-4 border-[#FF69B4] pl-4 pb-2 mb-6 text-[#6B2A5A] italic text-base">
            "He is not here; he has risen!" — Luke 24:6
          </blockquote>
          <button className="px-8 py-3 bg-[#FF69B4] text-white font-medium rounded-full hover:bg-[#FF1C92] transition-colors">
            {shroudContent.hero.buttonText}
          </button>
        </div>
      </section>

      {/* Sections */}
      {shroudContent.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="py-24 md:py-32 bg-white relative"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-[#6B2A5A] mb-12 text-center">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-lg bg-[#FFF8FA] p-6 hover:bg-[#FFE4F0] transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#D8B4E2] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#6B2A5A] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#7D3A73] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-12 bg-[#F8E8F5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-[#6B2A5A]">
            "For we are his workmanship, created in Christ Jesus for good works." — Ephesians 2:10
          </p>
          <div className="mt-4">
            <a
              href="https://chatgpt.com/s/t_6ad6caf2785c819196835ee935792704"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF69B4] hover:underline transition-colors text-sm"
            >
              Original Source
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}