import React from "react";
import "./App.css";

// Shroud of Turin comprehensive content
const shroudContent = {
  hero: {
    title: "The Shroud of Turin",
    subtitle: "A Divine Mystery",
    claim: "Scientific evidence and historical research examine its authenticity as Christ's burial cloth",
    buttonText: "Explore the Evidence"
  },
  sections: [
    {
      id: "physical",
      title: "Physical Characteristics",
      items: [
        {
          icon: "📏",
          title: "Dimensions",
          description: "Approximately 4.4 meters long and 1.1 meters wide - a large linen cloth"
        },
        {
          icon: "🧵",
          title: "Material",
          description: "Woven linen fabric, consistent with 1st-century Judean burial cloths"
        },
        {
          icon: "👤",
          title: "Frontal & Dorsal Images",
          description: "Body images of a man appearing on both front and back of the cloth, showing full body length"
        },
        {
          icon: "🩸",
          title: "Bloodstains",
          description: "Reddish-brown stains interpreted as blood, type AB in several areas"
        }
      ]
    },
    {
      id: "scientific",
      title: "Scientific Discoveries",
      items: [
        {
          icon: "📸",
          title: "Photographic Negative Effect",
          description: "1898: Secondo Pia's photographs revealed the image appears more naturally on the negative than on the cloth itself"
        },
        {
          icon: "🔬",
          title: "3D Information Encoding",
          description: "Image intensity correlates with distance from cloth to body, containing three-dimensional information (Jackson, Jumper & Ercoline, 1984)"
        },
        {
          icon: "👁️",
          title: "Extreme Superficiality",
          description: "Coloration concentrated in outermost portions of linen fibers - exceptionally superficial image formation"
        },
        {
          icon: "📊",
          title: "STURP Investigation (1978)",
          description: "Major multidisciplinary study using microscopy, spectroscopy, photography and chemical analysis. No conventional pigment-based painting adequately explained the image characteristics."
        }
      ]
    },
    {
      id: "anatomical",
      title: "Anatomical Wounds",
      items: [
        {
          icon: "⚔️",
          title: "Scourging Marks",
          description: "Numerous markings across back and body regions consistent with Roman scourging (Matthew 27:26, Mark 15:15, John 19:1)"
        },
        {
          icon: "👑",
          title: "Crown of Thorns Wounds",
          description: "Head image markings interpreted as wounds from sharp objects penetrating scalp (Matthew 27:29, Mark 15:17, John 19:2)"
        },
        {
          icon: "🩹",
          title: "Wrist & Forearm Bloodstains",
          description: "Stains examined via forensic approaches (2024 study); patterns relate to wound location and body position"
        },
        {
          icon: "🦶",
          title: "Feet & Crucifixion Wounds",
          description: "Lower-body markings consistent with crucifixion (Matthew 27:35, Mark 15:24-25, Luke 23:33, John 19:18)"
        },
        {
          icon: "⚔️",
          title: "Side Wound",
          description: "Prominent torso stain associated with John 19:34 - soldier piercing Jesus' side"
        }
      ]
    },
    {
      id: "dating",
      title: "Dating & Research",
      items: [
        {
          icon: "📅",
          title: "1988 Carbon Dating",
          description: "Placed cloth in 1st century AD, aligning with biblical timelines"
        },
        {
          icon: "🔬",
          title: "2022 X-Ray Dating Study",
          description: "Wide-angle X-ray scattering (WAXS) examined cellulose degradation; thread properties compatible with ~2,000-year-old linen under specified conditions"
        },
        {
          icon: "🧬",
          title: "2015 DNA Study",
          description: "Identified multiple human mitochondrial lineages and plant DNA from Western Europe, Near East, Arabian Peninsula and Indian subcontinent"
        },
        {
          icon: "📊",
          title: "2026 DNA Study",
          description: "Examined official 1978 sample collection; identified predominant human lineage associated with Ashkenazi Jewish populations (K1a1b1a, H2a2, H1b, H33)"
        },
        {
          icon: "🧵",
          title: "2026 Textile-Fragment Analysis",
          description: "Examined textile fragments from radiocarbon sampling; adds to study of physical composition and characteristics of sampled material"
        }
      ]
    },
    {
      id: "historical",
      title: "Historical Journey",
      items: [
        {
          icon: "📜",
          title: "European Provenance",
          description: "Documented history in Europe: Lirey, France (14th century); Turin, Italy since 1578 in Cathedral of Saint John the Baptist"
        },
        {
          icon: "🏰",
          title: "Edessa & Constantinople Connection",
          description: "Image of Edessa/Mandylion tradition: transferred to Constantinople in 944 AD; proposed connection to Shroud through historical sequence involving tetradiplon folding, Eighth-century whole-body imagery, and Fourth Crusade 1204"
        },
        {
          icon: "📖",
          title: "Gospel Correspondence: Passion",
          description: "Scourging (Matthew 27:26, Mark 15:15, John 19:1); Crown of thorns (Matthew 27:29, Mark 15:17, John 19:2); Crucifixion (Matthew 27:35, Mark 15:24-25, Luke 23:33, John 19:18); Side wound (John 19:34)"
        },
        {
          icon: "📖",
          title: "Gospel Correspondence: Burial",
          description: "All four Gospels describe Jesus' body preparation for burial (Matthew 27:59, Mark 15:46, Luke 23:53, John 19:38-40); Shroud's linen material and front/dorsal image central to discussions"
        }
      ]
    },
    {
      id: "cumulative",
      title: "The Cumulative Case",
      items: [
        {
          icon: "⚖️",
          title: "Physical & Photographic Evidence",
          description: "Frontal/dorsal images, unusual photographic-negative appearance, image-intensity information associated with 3D body structure"
        },
        {
          icon: "🧪",
          title: "Microscopic & Chemical Evidence",
          description: "Body image exceptionally superficial; chemical/spectroscopic findings consistent with blood in apparent bloodstains"
        },
        {
          icon: "🔬",
          title: "Forensic Evidence",
          description: "Scourging marks, head wounds, wrist/forearm stains, feet, side wound, body position examined"
        },
        {
          icon: "🔬",
          title: "Experimental Research",
          description: "UV-laser experiments and bloodstain studies investigated physical processes relevant to image and stains"
        },
        {
          icon: "📚",
          title: "Textile & Dating Research",
          description: "2022 X-ray dating, 2026 textile-fragment analysis; 2015/2026 DNA studies identified multiple human mitochondrial lineages alongside plant, animal and microbial traces"
        },
        {
          icon: "💻",
          title: "Computational Research",
          description: "2025 digital 3D modeling study and 2026 scientific response added new work on image formation and need to account for image's physical properties"
        },
        {
          icon: "📜",
          title: "Historical Evidence",
          description: "Documented European history and proposed connections to earlier traditions (Edessa/Constantineline)"
        },
        {
          icon: "📖",
          title: "Biblical Correspondence",
          description: "Apparent wounds and linen burial cloth compared with Gospel accounts of scourging, crucifixion, piercing and burial"
        }
      ]
    }
  ]
};

const navLinks = [
  { href: "#physical", label: "Physical" },
  { href: "#scientific", label: "Scientific" },
  { href: "#anatomical", label: "Anatomical" },
  { href: "#dating", label: "Dating" },
  { href: "#historical", label: "Historical" },
  { href: "#cumulative", label: "Cumulative" }
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