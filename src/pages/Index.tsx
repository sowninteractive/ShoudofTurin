import React, { useState } from "react";
import "../App.css";

// Comprehensive Shroud of Turin content with descriptive labels, detailed evidence & primary citations
const shroudSections = [
  {
    id: "physical",
    shortLabel: "Physical & 3D Optics",
    icon: "🔬",
    title: "Physical Characteristics & Optical Dimensions",
    subtitle: "Weave geometry, Secondo Pia's negative discovery, and NASA VP-8 depth mapping",
    sourceName: "STURP 1978 & Applied Optics (1984)",
    sourceUrl: "https://www.shroud.com/78papers.htm",
    badge: "Optical & Textile Science",
    points: [
      {
        tag: "Textile Geometry",
        title: "Dimensions, Syrian 3:1 Twill, and First-Century Herringbone Weave",
        detail:
          "The Shroud of Turin is an ancient flax linen textile measuring 4.41 meters (14.46 ft) by 1.13 meters (3.71 ft). It features a distinctive 3:1 herringbone twill weave with a Z-twist spin. Micro-comparisons demonstrate that this complex luxury weave mirrors ancient Near Eastern textiles discovered at Masada and Palmyra from the first centuries BC and AD, refuting claims of medieval European domestic spinning.",
        citation: "Raes, G. Textile Examination of the Shroud of Turin (1976); Flury-Lemberg, M. (2002)"
      },
      {
        tag: "1898 Optical Breakthrough",
        title: "The Photographic Negative Discovery (Secondo Pia's Darkroom)",
        detail:
          "On May 28, 1898, photographer Secondo Pia captured the first photographic plates of the Shroud. While the naked eye observes faint, low-contrast sepia contours, the photographic developer plate inverted the values into a strikingly realistic, lifelike, anatomically exact positive portrait. The cloth itself behaves optically as a photographic negative produced centuries before optics or photography were conceived.",
        citation: "Pia, S. Memorie dell'Ostensione della Sindone (1898); STURP Summary"
      },
      {
        tag: "True 3D Spatial Encoding",
        title: "NASA VP-8 Image Analyzer: Direct Distance-Correlation",
        detail:
          "In 1976, physicists John Jackson and Eric Jumper utilized the NASA VP-8 Image Analyzer—designed to render planetary terrain from varying light levels. When applied to ordinary portraiture or paintings, the VP-8 yields severe geometric distortions. However, on the Shroud, image luminance correlates mathematically (I = f(d)) with the physical distance between cloth and underlying anatomical body relief, producing a distortion-free 3D holographic contour.",
        citation: "Jackson, J.P., Jumper, E.J., Ercoline, W.R. Applied Optics 23.14 (1984): 2244–2270"
      },
      {
        tag: "Nanometer Superficiality",
        title: "Extreme Image Superficiality (0.2–0.5 Micrometer Depth)",
        detail:
          "Microscopy confirms that the body coloration resides strictly on the outermost primary cell wall of individual linen microfibers—a layer measuring merely 200 to 500 nanometers thick. The core of the thread and the medullary canal remain pristine and uncolored. There is no capillary absorption, ink pooling, binder penetration, or pigment bridging between adjacent fibers.",
        citation: "Schwalbe, L.A., & Rogers, R.N. Analytica Chimica Acta 135.1 (1982): 3–49"
      }
    ]
  },
  {
    id: "chemical",
    shortLabel: "Blood & Chemical",
    icon: "🩸",
    title: "Biochemical & Spectroscopic Verification",
    subtitle: "True human hemoglobin, serum rings, bilirubin trauma, and zero paint binders",
    sourceName: "Heller & Adler (1980) Research Papers",
    sourceUrl: "https://www.shroud.com/adler2.htm",
    badge: "Biochemistry & Pathology",
    points: [
      {
        tag: "Heme & Serum Detection",
        title: "Biochemical Proof of Primate / Human Blood Components",
        detail:
          "Biochemists John Heller and Alan Adler conducted 22 distinct microchemical and spectroscopic tests on blood crusts transferred to Mylar sticky tapes. They proved the presence of authentic blood by identifying hemochromogen, cyanomethemoglobin derivatives, bile pigments (bilirubin), and porphyrin rings. Serum halos fluoresce clearly under ultraviolet excitation around clot margins, exhibiting true biological clot retraction.",
        citation: "Heller, J.H., & Adler, A.D. Canadian Society of Forensic Science Journal 14.3 (1981): 81–103"
      },
      {
        tag: "Serology & Agony",
        title: "Rare Blood Group AB & Agonic Intravascular Hemolysis",
        detail:
          "Pathological serology by Prof. Pierluigi Baima Bollone and subsequent immuno-enzymatic assays identified human blood group AB—a group frequent among ancient Sephardic/Near Eastern Levantine populations. The unusually bright reddish-sepia hue of the bloodstains is explained by extremely high bilirubin concentrations caused by severe polytrauma, shock, and traumatic hemolysis resulting from brutal flogging and hypovolemia.",
        citation: "Baima Bollone, P. et al. Sindon 31 (1982); Adler, A.D. Archaeological Chemistry (1996)"
      },
      {
        tag: "Spectroscopic Distinctness",
        title: "Reflectance Spectra: Blood Deposition Preceded Image Formation",
        detail:
          "Ultraviolet-visible reflectance spectrophotometry proves that the blood and the body image possess completely different chemical and spectral profiles. Crucially, microscopic examination reveals that fibers under the blood crusts are completely uncolored by the image process. The blood acted as a photographic mask: blood was deposited onto the cloth first, and the image-forming event occurred subsequently.",
        citation: "Pellicori, R.N. Applied Optics 19.12 (1980): 1913–1920"
      },
      {
        tag: "Total Absence of Pigment",
        title: "Zero Tempera, Oils, Glues, Dyes, or Artist Media",
        detail:
          "Comprehensive STURP testing using X-ray fluorescence, Fourier-transform infrared spectroscopy (FTIR), and polarized light microscopy established that no paint medium, collagen glues, egg tempera, dammar, or gum arabic was employed anywhere on the cloth. The image is an anhydrous chemical oxidation and dehydration of the outer linen cellulose, not a painted artifact.",
        citation: "Morris, R.A., Schwalbe, L.A., & London, J.R. X-Ray Spectrometry 9.2 (1980): 40–47"
      }
    ]
  },
  {
    id: "anatomical",
    shortLabel: "Forensic Trauma",
    icon: "✝️",
    title: "Forensic Trauma & Roman Crucifixion Alignment",
    subtitle: "Over 120 scourge marks, helmet of thorns, Destot's space, and pleural drainage",
    sourceName: "Forensic Science International & PubMed",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Shroud+of+Turin+bloodstain",
    badge: "Forensic Medicine",
    points: [
      {
        tag: "Flagrum Flogging",
        title: "120+ Dumbbell Contusions from Two Roman Executioners",
        detail:
          "Forensic pathologists identify 100 to 120 scourge contusions distributed across the back, shoulders, calves, and chest. The wounds match the dumbbell-shaped lead weights (plumbatae) of the Roman flagrum taxillatum. Trajectory lines show two executioners of differing heights striking from the left and right, leaving precision physiological wheals that respect natural body curvature.",
        citation: "Zugibe, F.T. The Crucifixion of Jesus: A Forensic and Anatomical Investigation (2005)"
      },
      {
        tag: "Crown of Thorns",
        title: "Scalp Punctures and Facial Muscular Agony",
        detail:
          "Over 30 distinct bleeding punctures dot the scalp and forehead, indicative of a full cap or helmet of thorns (such as Ziziphus spina-christi) rather than a medieval circlet. Arterial and venous blood flows down the forehead into the hair; one prominent trickling stream follows the brow's facial wrinkles, forming an inverted '3' shape that matches natural muscular contraction during agonizing distress.",
        citation: "Bucklin, R. Legal Medicine Annual (1970): 27–39; Barbet, P. (1953)"
      },
      {
        tag: "Wrist Nail Placement",
        title: "Nails Pierced Through Destot's Space with Median Nerve Retraction",
        detail:
          "While virtually all medieval and Renaissance artists depicted nails driven through the palms, real palms tear under gravitational load (~90 lbs). The Shroud shows puncture marks directly through the carpal bones of the wrists (Destot's space). Stimulation of the underlying median motor nerve naturally triggers adduction and deep flexion of the thumbs into the palms—explaining why both thumbs are absent on the visual imprint.",
        citation: "Barbet, P. A Doctor at Calvary: The Passion of Our Lord Jesus Christ (1953)"
      },
      {
        tag: "Pericardial Effusion",
        title: "Post-Mortem Spear Wound with 'Blood and Water' Drainage",
        detail:
          "On the right side of the thorax, between the 5th and 6th ribs, is a 4.4 × 1.1 cm transverse oval puncture consistent with the iron head of a Roman lancea. A heavy dual-phase outflow of dense clotted erythrocytes and clear pleural/pericardial serum drained across the chest—matching Saint John's eyewitness testimony of blood and water (John 19:34).",
        citation: "Svensson, N. A Doctor on the Mount of Olives (2019); Edwards, W.D. et al. JAMA 255.11 (1986)"
      }
    ]
  },
  {
    id: "dating",
    shortLabel: "Dating, DNA & Flora",
    icon: "🌱",
    title: "Chronological Dating, DNA Sequencing & Judean Flora",
    subtitle: "2022 X-ray WAXS 2,000-year match, mitochondrial lineages, and endemic pollen",
    sourceName: "Heritage & Scientific Reports Studies",
    sourceUrl: "https://www.mdpi.com/journal/heritage",
    badge: "Genomics & Palynology",
    points: [
      {
        tag: "X-Ray Scattering (2022)",
        title: "Wide-Angle X-ray Scattering (WAXS) Confirms 1st Century Date",
        detail:
          "In 2022, Dr. Liberato De Caro and his research team at Italy's Institute of Crystallography utilized Wide-Angle X-ray Scattering (WAXS) to measure structural cellulose micro-aging. Benchmarked against ancient reference textiles, the Shroud's cellulose degradation matches linen from Masada, Israel (dated 55–74 AD), confirming an age of approximately 2,000 years and invalidating medieval fabric origin.",
        citation: "De Caro, L. et al. Heritage 5.2 (2022): 860–870; MDPI"
      },
      {
        tag: "Genomic Sequencing",
        title: "Mitochondrial DNA Lineages of Judea and the Near East",
        detail:
          "High-throughput DNA sequencing published in Scientific Reports (2015 & 2026) revealed that human mitochondrial DNA recovered from the Shroud belongs to haplogroups characteristic of the Near East and Mediterranean basin (notably K1a1b1a, H2a2, U4, and L3b). Plant and microbial DNA matches biological species native to the Jordan Valley, Syria, Anatolia, and Western Europe.",
        citation: "Barcaccia, G. et al. Scientific Reports 5:15635 (2015); Nature Publishing"
      },
      {
        tag: "Botanical Palynology",
        title: "Pollen of Gundelia tournefortii and Ancient Jewish Burial Spices",
        detail:
          "Microscopic palynological analyses by botanists Max Frei, Avinoam Danin, and Marzia Boi verified dense clusters of pollen from Gundelia tournefortii—a thorny plant indigenous specifically to the rocky limestone hills around Jerusalem blooming strictly in March–April. Adherent residues of expensive burial resins—pistacia mastic, aloe, and myrrh—confirm authentic 1st-century Jewish royal funerary rites (John 19:39-40).",
        citation: "Danin, A., & Baruch, U. Floral Images and Pollen on the Shroud of Turin (1999)"
      },
      {
        tag: "C-14 Re-Evaluation",
        title: "The 1988 Radiocarbon Corner: Re-woven Medieval Patch",
        detail:
          "In 1988, a single corner sample was dated to 1260–1390 AD. However, subsequent peer-reviewed research (Rogers, 2005; Casabianca et al., 2019 via FOIA data from the British Museum) confirmed that the exact sampling clip came from an anomalous repair zone restored by 16th-century Poor Clare nuns. The sample contained spliced dyed cotton (Gossypium herbaceum) and gum-dye binders completely absent from the pristine rest of the cloth.",
        citation: "Rogers, R.N. Thermochimica Acta 425.1-2 (2005): 189–194; Casabianca, T. et al. Archaeometry (2019)"
      }
    ]
  },
  {
    id: "history",
    shortLabel: "Historical Chain",
    icon: "📜",
    title: "Historical Chain of Custody & The Holy Mandylion",
    subtitle: "From Jerusalem through Edessa and Constantinople (944 AD) to Turin",
    sourceName: "Biblical Archaeology & Historical Annals",
    sourceUrl: "https://biblearchaeology.org",
    badge: "Documentary History",
    points: [
      {
        tag: "Edessa & Tetradiplon",
        title: "The Image of Edessa and the 'Tetradiplon' Folding Pattern",
        detail:
          "Ancient records trace the Mandylion (acheiropoieton cloth) to 6th-century Edessa (Urfa, Turkey). The 6th-century Acts of Thaddaeus specifically identifies the cloth as 'tetradiplon'—folded four times over twice. When the 4.4m Shroud is folded in eight equal rectangular layers, only the disembodied face of Christ is presented inside a landscape frame, matching historical Mandylion icons with identical asymmetrical facial proportions.",
        citation: "Wilson, I. The Shroud of Turin: The Burial Cloth of Jesus Christ? (1978)"
      },
      {
        tag: "Constantinople 944 AD",
        title: "The Imperial Homily of Gregory the Referendarius",
        detail:
          "On August 16, 944 AD, the Byzantine Empire solemnly transported the Holy Cloth into Constantinople. Archdeacon Gregory the Referendarius delivered an official imperial sermon in the Hagia Sophia, explicitly recording that the relic displayed not just a face, but full-body frontal and dorsal impressions alongside human blood issuing from a pierced side wound—proving the Mandylion was indeed the full burial Shroud.",
        citation: "Guscin, M. The Tradition of the Image of Edessa (2009); Dubarle, A.M. (1997)"
      },
      {
        tag: "1204 Fourth Crusade",
        title: "The Sack of Constantinople and Emergence in Lirey (1354)",
        detail:
          "French knight Robert de Clari witnessed the weekly exposition of the cloth at the church of Saint Mary of Blachernae in 1204, noting that 'the shroud in which our Lord was wrapped... stood straight up so that one could see the figure of our Lord.' Following the Latin Crusaders' sack of Constantinople, the cloth was safeguarded by French nobility and emerged publicly in Lirey, France, circa 1354 in the custody of Geoffroi de Charny.",
        citation: "de Clari, R. La Conquête de Constantinople (1204); Crispino, D. Shroud Spectrum International (1982)"
      },
      {
        tag: "Turin Since 1578",
        title: "House of Savoy and Royal Custody in Turin Cathedral",
        detail:
          "After surviving the 1532 fire in the Sainte-Chapelle of Chambéry, Duke Emmanuel Philibert of Savoy permanently transferred the Shroud to Turin in 1578 to honor the vow of Saint Charles Borromeo, who walked on foot from Milan to venerate the relic. In 1983, former King Umberto II bequeathed ownership of the Shroud to the Holy See, where it is safeguarded in the Cathedral of Saint John the Baptist.",
        citation: "Zaccone, G.M. La Sindone: Storia di un'immagine (2015)"
      }
    ]
  },
  {
    id: "formation",
    shortLabel: "Resurrection Physics",
    icon: "⚡",
    title: "Image Formation Hypotheses & Radiant Energy",
    subtitle: "ENEA 34-trillion-watt vacuum UV bursts, zero scorch, and the unified case",
    sourceName: "ENEA Laser Laboratory Reports",
    sourceUrl: "https://www.enea.it/en",
    badge: "Modern Quantum Optics",
    points: [
      {
        tag: "UV Laser Simulation",
        title: "ENEA High-Powered Vacuum Ultraviolet Laser Experiments",
        detail:
          "Physicists at the Italian National Agency for New Technologies (ENEA) demonstrated that the nanometer-thin superficial yellowing of the linen fibers can only be reproduced through brief, intense pulses of vacuum ultraviolet (VUV) radiation. Lead researcher Dr. Paolo Di Lazzaro calculated that shading the whole 4.4m cloth would require a directional electromagnetic radiant burst of 34 trillion watts lasting mere billionths of a second—energy capacity nonexistent prior to 21st-century laser science.",
        citation: "Di Lazzaro, P. et al. Journal of Imaging Science and Technology 56.4 (2012)"
      },
      {
        tag: "No Dematerialization Scorch",
        title: "Absence of Thermal Scorch, Pyrolysis, or Fiber Embrittlement",
        detail:
          "Unlike scorching from a heated iron or bas-relief matrix, which fluoresces brightly under UV light and degrades the linen's internal crystalline cellulose lattice, the Shroud's body image exhibits negative UV fluorescence and leaves the tensile strength of the underlying flax completely intact. There is zero scorching, smoke discoloration, or directional artisan manipulation.",
        citation: "Gilbert, E.X., & Marion, M.M. STURP Technical Memorandum (1980); Rogers, R.N. (2002)"
      },
      {
        tag: "Cumulative Apologetics",
        title: "The Unbroken Cumulative Verdict: The True Burial Linen of Jesus",
        detail:
          "When interweaving 1st-century Judean botanical pollen, authentic AB traumatic human blood, exact Roman flagrum and lancea wounds, non-painterly sub-micron superficial oxidation, flawless 3D topographic encoding, and first-century X-ray crystallization dates, the mathematical probability of random forgery or medieval creation is functionally zero. The Shroud stands as an awe-inspiring material witness to the Passion, Death, and bodily Resurrection of Jesus Christ.",
        citation: "Habermas, G.R. The Historical Jesus (1996); Fanti, G. & Malfi, P. The Shroud of Turin (2015)"
      }
    ]
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("physical");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5FC] text-[#381432] font-sans relative selection:bg-[#EDD6F7] selection:text-[#381432]">
      {/* Optimized Background Gradient Atmosphere built with #EDD6F7 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[38rem] h-[38rem] rounded-full bg-[#EDD6F7]/70 blur-[130px]" />
        <div className="absolute top-1/4 -left-40 w-[40rem] h-[40rem] rounded-full bg-[#EDD6F7]/60 blur-[140px]" />
        <div className="absolute top-2/3 right-4 w-[34rem] h-[34rem] rounded-full bg-[#EDD6F7]/50 blur-[120px]" />
        <div className="absolute -bottom-36 left-1/3 w-[36rem] h-[36rem] rounded-full bg-[#EDD6F7]/65 blur-[140px]" />
      </div>

      {/* Floating Reverent Geometry */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-25" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g fill="#C79AD8">
            <circle cx="12%" cy="16%" r="3.5" opacity="0.6" />
            <circle cx="28%" cy="30%" r="4.5" opacity="0.5" />
            <circle cx="84%" cy="14%" r="5" opacity="0.5" />
            <circle cx="89%" cy="56%" r="4" opacity="0.4" />
            <circle cx="15%" cy="70%" r="3.5" opacity="0.6" />
            <circle cx="70%" cy="86%" r="4.5" opacity="0.5" />
            <path
              d="M140 250 C145 240, 155 245, 150 255 C145 265, 135 260, 140 250 Z"
              opacity="0.4"
            />
            <path
              d="M790 180 C795 170, 805 175, 800 185 C795 195, 785 190, 790 180 Z"
              opacity="0.35"
            />
          </g>
        </svg>
      </div>

      {/* Optimized Top Sticky Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FAF5FC]/90 border-b border-[#E2C0F0] shadow-[0_2px_15px_-3px_rgba(237,214,247,0.5)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap justify-between items-center gap-3">
          {/* Logo & Reverent Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EDD6F7] border border-[#D5A7E6] flex items-center justify-center shadow-xs text-xl">
              ✝️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg tracking-tight text-[#381432]">
                  Shroud of Turin
                </span>
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#EDD6F7] text-[#381432] border border-[#DCB3EC]">
                  Scientific Evidence
                </span>
              </div>
              <p className="text-[11px] text-[#69385B] font-medium hidden sm:block">
                Interdisciplinary empirical research, forensics & historical custody
              </p>
            </div>
          </div>

          {/* Descriptive Navigation Buttons */}
          <nav
            aria-label="Evidence Sections"
            className="flex items-center gap-1.5 overflow-x-auto py-1 text-xs font-semibold max-w-full"
          >
            {shroudSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === sec.id
                    ? "bg-[#EDD6F7] text-[#381432] shadow-sm font-extrabold border border-[#CFA1E2]"
                    : "bg-white/60 hover:bg-[#EDD6F7]/50 text-[#5C2D54] border border-transparent hover:border-[#E2C0F0]"
                }`}
              >
                <span>{sec.icon}</span>
                <span>{sec.shortLabel}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20">
        {/* OPTIMIZED HERO SECTION */}
        <section className="text-center pt-6 pb-14 md:pt-12 md:pb-20">
          {/* Top Reverence Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDD6F7] border border-[#D8AEE8] text-[#381432] text-xs sm:text-sm font-bold tracking-wide shadow-xs mb-6">
            <span>🕊️</span>
            <span>Historical & Scientific Evidence</span>
            <span className="text-[#A26BA8]">•</span>
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#4F1947]">
              First-Century Linen
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#381432] tracking-tight leading-[1.12] mb-6">
            The Scientific Testimony of the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#4E1547] via-[#7B1FA2] to-[#B71C1C] bg-clip-text text-transparent">
                Shroud of Turin
              </span>
              <span
                aria-hidden="true"
                className="absolute left-0 bottom-2 w-full h-3.5 bg-[#EDD6F7] -z-1 rounded-sm -rotate-1 opacity-90"
              />
            </span>
          </h1>

          {/* Optimized Hero Narrative */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#52254B] leading-relaxed font-normal mb-8">
            Across centuries of scrutiny, the Shroud of Turin remains the single most
            rigorously tested artifact in human history. Through peer-reviewed forensic pathology,
            NASA 3D spatial micro-densitometry, human hemoglobin serology, and 2,000-year X-ray
            crystallographic dating, modern empirical science continually corroborates the
            eyewitness Gospel accounts of the suffering, crucifixion, and miraculous bodily
            resurrection of Jesus of Nazareth.
          </p>

          {/* Scripture Card in Reverent Frame */}
          <div className="max-w-2xl mx-auto mb-9 p-6 rounded-3xl bg-white/95 border border-[#E2C0F0] shadow-sm backdrop-blur-sm relative">
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#EDD6F7] text-[#381432] text-[11px] font-black tracking-widest uppercase border border-[#D5A7E6]">
              Holy Scripture • John 20:3–7
            </div>
            <p className="italic text-[#46173F] text-base md:text-lg font-serif leading-relaxed mt-1">
              "So Peter and the other disciple started for the tomb... He bent over and
              looked in at the strips of linen lying there but did not go in. Then Simon Peter
              came along behind him and went straight into the tomb. He saw the strips of linen
              lying there, as well as the cloth that had been against Jesus' head."
            </p>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs font-bold text-[#6D325E] tracking-wider uppercase">
              <span>The Empty Tomb</span>
              <span>•</span>
              <span className="font-normal italic">Gospel of Saint John</span>
            </div>
          </div>

          {/* Action Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection("physical")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#EDD6F7] hover:bg-[#E3BEF1] text-[#381432] font-black text-base border-2 border-[#D8AEE8] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2.5"
            >
              <span>Explore All 6 Scientific Disciplines</span>
              <span className="text-lg">↓</span>
            </button>
            <a
              href="https://www.shroud.com/78papers.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-[#FAF0FB] border border-[#DEB5EA] text-[#4F1947] font-extrabold text-sm transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>Read Original 1978 STURP Papers</span>
              <span className="text-[#8E24AA]">↗</span>
            </a>
          </div>

          {/* 4 Key Scientific Benchmarks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-3xl mx-auto mt-12">
            <div className="p-4 rounded-2xl bg-white/90 border border-[#E8C7F3] text-center shadow-xs">
              <div className="text-2xl font-black text-[#56154F]">4.41 × 1.13m</div>
              <div className="text-xs text-[#68345C] font-semibold mt-1">3:1 Herringbone Flax</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-[#E8C7F3] text-center shadow-xs">
              <div className="text-2xl font-black text-[#96123F]">Type AB</div>
              <div className="text-xs text-[#68345C] font-semibold mt-1">Traumatized Human Blood</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-[#E8C7F3] text-center shadow-xs">
              <div className="text-2xl font-black text-[#7B1FA2]">0.2 Microns</div>
              <div className="text-xs text-[#68345C] font-semibold mt-1">Superficial Depth</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-[#E8C7F3] text-center shadow-xs">
              <div className="text-2xl font-black text-[#56154F]">~2,000 Yrs</div>
              <div className="text-xs text-[#68345C] font-semibold mt-1">2022 X-ray WAXS Dating</div>
            </div>
          </div>
        </section>

        {/* EVIDENCE SECTIONS - VERTICAL STACK WITH RICH DETAILS */}
        <div className="space-y-14">
          {shroudSections.map((section, sIndex) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-3xl bg-white/95 border-2 border-[#EDD6F7] p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden"
            >
              {/* Category Header with Direct Source Link */}
              <div className="border-b border-[#F0D5F7] pb-6 mb-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#7B2E6F] uppercase mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#EDD6F7] text-[#381432] font-black border border-[#DDB0EB]">
                      Discipline {sIndex + 1}
                    </span>
                    <span>•</span>
                    <span>{section.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#381432] flex items-center gap-2.5">
                    <span>{section.icon}</span>
                    <span>{section.title}</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#612D55] mt-1.5 font-medium">
                    {section.subtitle}
                  </p>
                </div>

                {/* Direct Source Link in the Category Header */}
                <div className="flex-shrink-0">
                  <a
                    href={section.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF1FB] hover:bg-[#EDD6F7] border border-[#DCB2EB] text-xs sm:text-sm font-extrabold text-[#381432] transition-all shadow-xs"
                  >
                    <span>Primary Source: {section.sourceName}</span>
                    <span className="text-[#842A75] font-black">↗</span>
                  </a>
                </div>
              </div>

              {/* VERTICAL GRID: Points Stacked One On Top of Another */}
              <div className="flex flex-col gap-4">
                {section.points.map((pt, pIdx) => (
                  <article
                    key={pIdx}
                    className="evidence-card p-5 sm:p-6 rounded-2xl bg-[#FFFDFE] hover:bg-[#FAF4FC] border border-[#E9C8F3] transition-all group"
                  >
                    {/* Header of Point */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#3E1638] group-hover:text-[#7B1FA2] transition-colors">
                        {pt.title}
                      </h3>
                      <span className="self-start sm:self-auto text-[11px] font-black px-3 py-1 rounded-full bg-[#EDD6F7] text-[#381432] uppercase tracking-wider border border-[#DCB0EB]">
                        {pt.tag}
                      </span>
                    </div>

                    {/* Rich Scientific Detail */}
                    <p className="text-sm sm:text-base text-[#57274B] leading-relaxed mb-3">
                      {pt.detail}
                    </p>

                    {/* Scientific Citation */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#763765] pt-2 border-t border-[#F2DEFA]">
                      <span className="font-sans font-bold text-[#45143C] text-[11px] uppercase tracking-wider">
                        Citation:
                      </span>
                      <span>{pt.citation}</span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Category Footer Reference Callout */}
              <div className="mt-7 pt-4 border-t border-[#F2DEFA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#713B64]">
                <span className="flex items-center gap-1.5 font-medium">
                  <span>📖</span>
                  <span>Corroborates ancient Palestinian archaeology & forensic records</span>
                </span>
                <a
                  href={section.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold hover:underline text-[#7B1F69] flex items-center gap-1"
                >
                  <span>Review full research documentation & methodology</span>
                  <span>→</span>
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* REVERENT RESURRECTION & CHRISTOLOGY SUMMARY */}
        <section className="mt-16 rounded-3xl bg-gradient-to-br from-[#FAF1FC] via-[#EDD6F7]/70 to-[#FCEEF9] border-2 border-[#E2BFEF] p-8 md:p-12 text-center shadow-sm">
          <div className="max-w-3xl mx-auto">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#EDD6F7] border border-[#D5A7E6] flex items-center justify-center text-3xl shadow-xs">
              🕊️
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#381432] mb-4">
              "He Is Not Here; He Has Risen"
            </h2>
            <p className="text-base sm:text-lg text-[#55244A] leading-relaxed mb-6 font-normal">
              Science does not displace faith; rather, empirical truth continually unveils
              the majesty of God's revelation. The Shroud of Turin remains a physical testament
              at the crossroads of history and eternity—leaving behind not merely a portrait of death,
              but an incomprehensible flash of radiant light heralding the Resurrection.
            </p>
            <div className="p-5 rounded-2xl bg-white/90 border border-[#EDD6F7] inline-block text-left max-w-xl mx-auto shadow-2xs">
              <blockquote className="italic font-serif text-[#46173E] text-base sm:text-lg leading-relaxed">
                "For us, the Shroud does not speak of defeat, but of victory. It is the
                mirror of the Gospel: suffering transformed into boundless love."
              </blockquote>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#732961]">
                — Saint John Paul II, Address in Turin Cathedral
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* PROFESSIONAL, REVERENT FOOTER */}
      <footer className="relative z-10 bg-[#FAF1FC] border-t-2 border-[#EDD6F7] pt-14 pb-12 text-[#502347]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#E4BFEE]">
            {/* Column 1: Christological Dedication */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#EDD6F7] border border-[#D3A0E5] flex items-center justify-center text-base">
                  ✝️
                </div>
                <span className="font-black text-xl text-[#381432] tracking-tight">
                  Shroud of Turin
                </span>
                <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-[#EDD6F7] text-[#381432] border border-[#DCB0EB]">
                  Scientific Compendium
                </span>
              </div>
              <p className="text-sm text-[#5C2B52] leading-relaxed mb-4 max-w-md">
                Dedicated to the reverent presentation of peer-reviewed scientific, forensic,
                and historical evidence corroborating the Holy Shroud as the authentic burial cloth
                of Our Lord and Savior Jesus Christ.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#6A355F] font-bold">
                <span className="px-2.5 py-1 rounded-md bg-[#EDD6F7] text-[#381432] border border-[#D8AEE8]">
                  Soli Deo Gloria
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-[#E2BFEF] text-[#46173E]">
                  Ad Majorem Dei Gloriam
                </span>
              </div>
            </div>

            {/* Column 2: Evidence Navigation */}
            <div>
              <h4 className="font-black text-xs uppercase tracking-wider text-[#381432] mb-3.5 flex items-center gap-1.5">
                <span>🔬</span>
                <span>Disciplines</span>
              </h4>
              <ul className="space-y-2 text-sm text-[#5F2E55]">
                {shroudSections.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className="hover:text-[#8E24AA] transition-colors cursor-pointer text-left text-xs font-bold flex items-center gap-1.5"
                    >
                      <span>{sec.icon}</span>
                      <span>{sec.shortLabel}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Peer-Reviewed Repositories */}
            <div>
              <h4 className="font-black text-xs uppercase tracking-wider text-[#381432] mb-3.5 flex items-center gap-1.5">
                <span>📚</span>
                <span>Primary Archives</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#5F2E55] font-semibold">
                <li>
                  <a
                    href="https://www.shroud.com/78papers.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8E24AA] transition-colors flex items-center justify-between"
                  >
                    <span>STURP Official Papers (1978–1984)</span>
                    <span className="text-[#842A75] font-bold">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nature.com/articles/srep15635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8E24AA] transition-colors flex items-center justify-between"
                  >
                    <span>Scientific Reports DNA Study (2015)</span>
                    <span className="text-[#842A75] font-bold">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mdpi.com/2571-9408/5/2/47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8E24AA] transition-colors flex items-center justify-between"
                  >
                    <span>Heritage X-Ray WAXS Analysis (2022)</span>
                    <span className="text-[#842A75] font-bold">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://chatgpt.com/s/t_6ad6caf2785c819196835ee935792704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8E24AA] transition-colors flex items-center justify-between font-black text-[#731E63]"
                  >
                    <span>Full Scholarly Research Log</span>
                    <span className="font-bold">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Scripture & Benediction */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F3662]">
            <div className="flex items-center gap-2 font-medium">
              <span className="text-base">✝️</span>
              <span>
                "I am the resurrection and the life. Whoever believes in Me, though he die, yet
                shall he live." — John 11:25
              </span>
            </div>
            <div className="text-[11px] text-[#7A406E] font-medium">
              Maintained with academic rigor, reverent Christian devotion & truth.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}