import React from "react";
import "../App.css";

// Comprehensive Shroud of Turin content with detailed points and sources
const shroudSections = [
  {
    id: "physical",
    title: "1. Physical Characteristics & Discoveries",
    subtitle: "Dimensions, weave, and unique image properties",
    sourceName: "Shroud.com & STURP Scientific Records",
    sourceUrl: "https://www.shroud.com",
    points: [
      {
        tag: "Dimensions & Weave",
        title: "Dimensions and Unique Herringbone Weave",
        detail:
          "The Shroud of Turin is an ancient linen cloth measuring approximately 4.4 meters (14.4 feet) long and 1.1 meters (3.6 feet) wide. It is woven in a distinctive 3:1 herringbone twill pattern, characteristic of luxury textiles in the ancient Near East. The cloth carries faint, sepia-toned frontal and dorsal impressions of a crucified man."
      },
      {
        tag: "1898 Discovery",
        title: "The Photographic Negative Discovery (Secondo Pia)",
        detail:
          "In May 1898, amateur Italian photographer Secondo Pia produced the first photographic negative of the Shroud. In his darkroom developer, the negative revealed an extraordinarily lifelike, anatomically perfect positive image with realistic light, depth, and human relief. The cloth itself functions like an optical photographic negative centuries before photography existed."
      },
      {
        tag: "3D Encoding",
        title: "True Three-Dimensional Information (VP-8 Image Analyzer)",
        detail:
          "In the late 1970s, John Jackson, Eric Jumper, and William Ercoline analyzed the Shroud using a NASA VP-8 Image Analyzer. Normal 2D photographs distort or flatten when rendered in 3D relief, but the Shroud's intensity correlates directly with cloth-to-body distance (I = f(d)). The result is a mathematically coherent, undistorted 3D relief of a human form (Applied Optics, 1984)."
      },
      {
        tag: "Fiber Depth",
        title: "Extreme Image Superficiality",
        detail:
          "The yellowish coloration that constitutes the body image resides exclusively on the primary cell wall of individual linen microfibers—approximately 0.2 to 0.5 micrometers thick. The coloration does not penetrate the medulla or inside the thread, nor is there any capillary flow, cementing, brush strokes, or binder typical of paint, ink, dye, or scorches."
      }
    ]
  },
  {
    id: "chemical",
    title: "2. Chemical & Spectroscopic Evidence",
    subtitle: "Testing on blood, fibers, and microscopic residues",
    sourceName: "Heller & Adler (1980) & STURP Findings",
    sourceUrl: "https://www.shroud.com/78papers.htm",
    points: [
      {
        tag: "Blood Chemistry",
        title: "Identification of Human Heme & Porphyrins",
        detail:
          "Biochemists John Heller and Alan Adler (Applied Optics, 1980) performed rigorous microchemical, enzymatic, and spectroscopic tests on the bloodstain fibers. They confirmed real primate/human blood by detecting hemochromogen, cyanomethemoglobin, bile pigments (bilirubin), and porphyrin rings. Blood transfer preceded image formation: no body image coloration exists beneath blood deposits."
      },
      {
        tag: "Blood Type",
        title: "High-Bilirubin Serum & Rare Blood Group AB",
        detail:
          "Studies conducted by forensic pathologist Pierluigi Baima Bollone and subsequent Italian researchers identified human blood group AB, which is statistically rare globally but notably present in historic Middle Eastern and Mediterranean populations. The high bilirubin concentration reflects severe physiologic trauma, intravascular hemolysis, and extensive mechanical torture prior to death."
      },
      {
        tag: "Spectroscopy",
        title: "Distinct Spectral Properties (Image vs. Blood)",
        detail:
          "Physicist R.N. Pellicori (Applied Optics, 1980) proved through ultraviolet-visible reflectance spectroscopy that the body image and the bloodstains possess completely different absorption bands and chemical profiles. The image is an oxidation, dehydration, and conjugation of the linen's surface cellulose, while the blood is authentic coagulated exudate."
      },
      {
        tag: "No Pigments",
        title: "Absence of Artist Pigments, Binders, or Scorch Rings",
        detail:
          "STURP's 1978 testing using X-ray fluorescence, thermography, polarized light microscopy, and mass spectrometry found no organic or inorganic binding agents, collagen, animal glues, tempera, or oil media. The image is strictly non-directional, displaying no artist brushmarks, outlines, or saturation patterns."
      }
    ]
  },
  {
    id: "anatomical",
    title: "3. Forensic & Anatomical Trauma",
    subtitle: "Precision alignment with ancient Roman crucifixion practices",
    sourceName: "Forensic Studies & Gospel Passages",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Shroud+of+Turin+bloodstain",
    points: [
      {
        tag: "Scourging",
        title: "Over 120 Flagrum Scourge Marks",
        detail:
          "Forensic pathologists identified between 100 and 120 dumbbell-shaped contusions across the back, chest, calves, and buttocks. These precisely match the two-pronged lead or bone tips of the Roman flagrum taxillatum. Markings diverge at two angles, indicating two executioners flogging the victim from opposite sides (Matthew 27:26, Mark 15:15)."
      },
      {
        tag: "Crown of Thorns",
        title: "Scalp Punctures & 'Helmet of Thorns'",
        detail:
          "Rather than a neat woven circlet, the head displays dozens of deep puncture wounds across the forehead, crown, and occiput, indicating a full cap or helmet of thorns. Blood trickling across the forehead forms an inverted '3' shape caused by the natural wrinkling of brow muscles in agonizing facial contraction (Matthew 27:29, John 19:2)."
      },
      {
        tag: "Wrists & Nails",
        title: "Nails Driven Through the Wrists (Destot's Space)",
        detail:
          "Medieval art universally depicted nails through the palms, which forensic tests show would tear through flesh under body weight. The Shroud depicts puncture wounds cleanly through the wrists (Destot's space). Furthermore, the thumbs are naturally retracted into the palms due to stimulation of the median motor nerve—an anatomical detail unknown until modern neurology."
      },
      {
        tag: "Torso & Heart",
        title: "Post-Mortem Spear Wound in the Side",
        detail:
          "A 4.4 cm oval puncture between the 5th and 6th ribs on the right side matches the blade of a Roman lancea. The wound released separated blood and clear pleural/pericardial fluid ('blood and water'), corresponding directly to John 19:34. Gravity-fed drainage tracks show distinct pre- and post-mortem blood coagulation dynamics."
      }
    ]
  },
  {
    id: "dating",
    title: "4. Dating, DNA & Botanical Investigations",
    subtitle: "Modern scientific dating techniques and geographic trace analysis",
    sourceName: "Heritage, Scientific Reports & Nature Studies",
    sourceUrl: "https://www.mdpi.com/journal/heritage",
    points: [
      {
        tag: "X-Ray Dating (2022)",
        title: "Wide-Angle X-ray Scattering (WAXS) 2,000-Year Date",
        detail:
          "In 2022, Dr. Liberato De Caro and colleagues at Italy's Institute of Crystallography used WAXS to measure structural cellulose aging and micro-degradation. Under natural thermal and relative humidity parameters, the measurements matched 1st-century linen samples from Masada (55–74 AD), suggesting the cloth is ~2,000 years old, while refuting medieval origins."
      },
      {
        tag: "DNA Profiling (2015 & 2026)",
        title: "Mitochondrial DNA Lineages of Near East & Mediterranean",
        detail:
          "Genomic analyses published in Scientific Reports (2015 and 2026) revealed diverse human mitochondrial haplogroups on the cloth, notably K1a1b1a, H2a2, H1b, and Near Eastern lineages. Plant and microbial DNA recovered spans the Mediterranean, Judea, the Arabian Peninsula, and Central Europe, tracing historical custody and geographic presence over centuries."
      },
      {
        tag: "Botanical Pollen",
        title: "Indigenous Judean Pollen & Anointing Spices",
        detail:
          "Palynologist Max Frei and later botanist Marzia Boi (Archaeometry, 2017) cataloged numerous pollen grains adhering to the fibers. Dominant species include Gundelia tournefortii and Pistacia lentiscus, native specifically to the Judean hills and Dead Sea Basin, alongside remnants of aromatic funeral balms (myrrh, aloes) used in ancient Jewish burial rituals (John 19:39-40)."
      },
      {
        tag: "C-14 Controversy",
        title: "1988 Radiocarbon Dating & Medieval Patch Sampling",
        detail:
          "In 1988, three laboratories dated a corner clipping to 1260–1390 AD. However, extensive peer-reviewed re-analyses (e.g., Raymond Rogers, 2005) demonstrated that the test sample came from a corner repaired by 16th-century Poor Clare nuns following the 1532 Chambéry fire, containing cotton fibers, gum-dye binders, and unequal isotopic distributions not found on the main body of the cloth."
      }
    ]
  },
  {
    id: "history",
    title: "5. Historical Chain of Custody & The Mandylion",
    subtitle: "Tracing the sacred cloth from 1st-century Judea to Turin",
    sourceName: "Historical Society & Academic Overviews",
    sourceUrl: "https://biblearchaeology.org",
    points: [
      {
        tag: "Jerusalem to Edessa",
        title: "The Mandylion Tradition & The 'Tetradiplon'",
        detail:
          "Early Christian accounts recount a miraculous acheiropoieton ('not made by human hands') image in Edessa (modern Urfa, Turkey). Ancient texts specifically describe it as 'tetradiplon' (folded four times over twice). When the 4.4-meter Shroud is folded in eight equal layers, only the disembodied face is framed in a landscape orientation, exactly matching historical depictions of the Mandylion."
      },
      {
        tag: "Constantinople 944 AD",
        title: "Imperial Translation & Gregory the Referendarius",
        detail:
          "In 944 AD, the Byzantine Empire negotiated the triumphant transfer of the cloth to Constantinople. In a preserved homily, archdeacon Gregory the Referendarius explicitly noted that the cloth displayed not merely a face, but full bodily imprints with blood pouring from a pierced side wound, demonstrating it was a full burial shroud."
      },
      {
        tag: "1204 to France",
        title: "The Fourth Crusade & Arrival in Lirey (1354)",
        detail:
          "During the 1204 sack of Constantinople by Western Crusaders, the relic vanished from the imperial Pharos chapel. Robert de Clari wrote of a cloth displaying the figure of Christ that was exhibited weekly. Decades later, the Shroud re-emerged publicly in the custody of French knight Geoffroi de Charny in Lirey, France, around 1354."
      },
      {
        tag: "Turin Since 1578",
        title: "House of Savoy & Cathedral of Saint John the Baptist",
        detail:
          "After surviving the 1532 fire in Chambéry, the House of Savoy relocated their capital and the Shroud to Turin, Italy, in 1578 to shorten the pilgrimage of Saint Charles Borromeo. The relic has remained safeguarded in the Royal Chapel of the Cathedral of Saint John the Baptist for over 440 years."
      }
    ]
  },
  {
    id: "formation",
    title: "6. Image Formation Hypotheses & The Resurrection",
    subtitle: "Modern physics and the radiant pulse mystery",
    sourceName: "ENEA Laser Research & Applied Optics",
    sourceUrl: "https://www.enea.it/en",
    points: [
      {
        tag: "UV Laser Pulse",
        title: "ENEA Vacuum Ultraviolet Radiation Experiments",
        detail:
          "Scientists at Italy's National Agency for New Technologies (ENEA) demonstrated that brief, ultra-high-power vacuum ultraviolet (VUV) excimer laser bursts could replicate the Shroud fiber's microscopically thin superficial yellowing without scorch marks. They calculated that to shade the entire cloth simultaneously would demand a 34-trillion-watt burst of directional light lasting mere fractions of a second—technology nonexistent in the ancient or medieval worlds."
      },
      {
        tag: "No Dematerialization Scorch",
        title: "Absence of Heat Decay or Organic Degradation",
        detail:
          "Unlike scorching from a hot bronze or iron plate, which fluoresces brightly under UV illumination and damages internal fiber micro-fibrils, the Shroud's body image displays negative UV fluorescence and leaves underlying linen crystalline lattices chemically intact."
      },
      {
        tag: "The Cumulative Verdict",
        title: "The Interdisciplinary Affirmative Case",
        detail:
          "No modern laboratory has successfully replicated all physical, chemical, optical, biological, and forensic characteristics of the Shroud simultaneously. The confluence of 1st-century Jewish funerary customs, authentic traumatic human blood chemistry, microscopic superficial coloration, true 3D topography, and Gospel congruence provides a robust cumulative argument for authenticity."
      }
    ]
  }
];

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9FB] text-[#4A2D40] font-sans relative selection:bg-[#F3C4FB] selection:text-[#5B2149]">
      {/* Anime Pastel Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFD1DC]/40 to-[#E8C5E5]/30 blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-[#E3D5FF]/40 to-[#FFD8E2]/30 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-gradient-to-t from-[#FEE1E8]/50 to-[#E8C5E5]/20 blur-3xl" />
      </div>

      {/* Floating Sakura Petals SVG */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFB7C5">
            <circle cx="10%" cy="15%" r="4" opacity="0.6" />
            <circle cx="25%" cy="35%" r="6" opacity="0.4" />
            <circle cx="85%" cy="20%" r="5" opacity="0.5" />
            <circle cx="90%" cy="60%" r="7" opacity="0.4" />
            <circle cx="15%" cy="75%" r="5" opacity="0.5" />
            <circle cx="70%" cy="85%" r="4" opacity="0.6" />
            <path
              d="M120 250 C125 240, 135 245, 130 255 C125 265, 115 260, 120 250 Z"
              opacity="0.5"
            />
            <path
              d="M750 180 C755 170, 765 175, 760 185 C755 195, 745 190, 750 180 Z"
              opacity="0.4"
            />
            <path
              d="M820 450 C825 440, 835 445, 830 455 C825 465, 815 460, 820 450 Z"
              opacity="0.35"
            />
          </g>
        </svg>
      </div>

      {/* Top Floating Pastel Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FFF9FB]/85 border-b border-[#F3D7E8]">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#D8B4E2] to-[#FFB7C5] flex items-center justify-center shadow-sm text-white font-bold text-lg">
              ✨
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-[#5A2D4F]">
                ShroudSakura
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-[#F5DEED] text-[#7A3E6D]">
                Scientific Authenticity Compendium
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-2 overflow-x-auto py-1 text-xs sm:text-sm font-medium text-[#7D456F]">
            {shroudSections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="px-3 py-1.5 rounded-full hover:bg-[#F7E1EF] hover:text-[#5B2149] transition-all cursor-pointer whitespace-nowrap"
              >
                Part {idx + 1}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        {/* IMPROVED HERO SECTION */}
        <section className="text-center pt-8 pb-16 md:pt-16 md:pb-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE5F0] border border-[#F5C7E0] text-[#78285C] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm mb-6">
            <span>🌸 Holy Relic Investigation</span>
            <span className="text-[#D8B4E2]">•</span>
            <span>Peer-Reviewed Science</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4F1D43] tracking-tight leading-[1.15] mb-6">
            The Truth & Authenticity of the{" "}
            <span className="bg-gradient-to-r from-[#8E44AD] via-[#D81B60] to-[#E91E63] bg-clip-text text-transparent">
              Shroud of Turin
            </span>
          </h1>

          {/* Detailed Subtitle Paragraph */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#6D3D60] leading-relaxed mb-8">
            An elegant, evidence-based exploration into the world's most
            intensively studied archaeological textile. Decades of
            forensics, 3D optical analyses, blood chemistry, X-ray dating, and
            ancient history confirm the singular mystery of Christ's burial linen.
          </p>

          {/* Gospel Quote Card */}
          <div className="max-w-2xl mx-auto mb-10 p-5 rounded-2xl bg-white/80 border border-[#F3D1E6] shadow-sm backdrop-blur-sm">
            <p className="italic text-[#682D57] text-base md:text-lg font-serif">
              "Then Simon Peter came, following him, and went into the tomb; he saw
              the linen cloths lying there, and the face cloth, which had been on Jesus'
              head, not lying with the linen cloths but folded up in a place by itself."
            </p>
            <span className="block mt-2 text-xs font-semibold text-[#964B80] tracking-wider uppercase">
              — John 20:6–7
            </span>
          </div>

          {/* Call to Action Button Under the Text with Proper Spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <button
              onClick={() => scrollToSection("physical")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D8B4E2] to-[#FF8DA1] hover:from-[#CD9DDA] hover:to-[#FF758F] text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore All 6 Evidence Categories</span>
              <span>↓</span>
            </button>
            <a
              href="https://www.shroud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#FFF0F5] border border-[#EAC2DB] text-[#6E335C] font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Visit Shroud.com Archives</span>
              <span>↗</span>
            </a>
          </div>

          {/* Quick Stats Pill Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-14">
            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#F7DBEC] text-center shadow-xs">
              <div className="text-xl md:text-2xl font-bold text-[#8E44AD]">4.4 × 1.1m</div>
              <div className="text-xs text-[#7B4D70] font-medium mt-0.5">Linen Dimensions</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#F7DBEC] text-center shadow-xs">
              <div className="text-xl md:text-2xl font-bold text-[#D81B60]">Type AB</div>
              <div className="text-xs text-[#7B4D70] font-medium mt-0.5">Human Blood Group</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#F7DBEC] text-center shadow-xs">
              <div className="text-xl md:text-2xl font-bold text-[#FF6584]">0.2 µm</div>
              <div className="text-xs text-[#7B4D70] font-medium mt-0.5">Image Thickness</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#F7DBEC] text-center shadow-xs">
              <div className="text-xl md:text-2xl font-bold text-[#8E44AD]">VP-8 3D</div>
              <div className="text-xs text-[#7B4D70] font-medium mt-0.5">Topographic Depth</div>
            </div>
          </div>
        </section>

        {/* EVIDENCE SECTIONS - VERTICAL GRID (ONE ON TOP OF ANOTHER) */}
        <div className="space-y-16">
          {shroudSections.map((section, sIndex) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-3xl bg-white/95 border border-[#F3D7E8] p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden"
            >
              {/* Category Header with Direct Source Link */}
              <div className="border-b border-[#F6E1EE] pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#B55998] uppercase mb-1">
                    <span>Category {sIndex + 1}</span>
                    <span>•</span>
                    <span>Documented Analysis</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4F1D43]">
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#7B476F] mt-1">
                    {section.subtitle}
                  </p>
                </div>

                {/* Direct Source Link in the Category Header */}
                <div className="flex-shrink-0">
                  <a
                    href={section.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FBF0F7] hover:bg-[#F5DEEE] border border-[#ECD1E2] text-xs sm:text-sm font-semibold text-[#73295B] transition-colors"
                  >
                    <span>Source: {section.sourceName}</span>
                    <span className="text-[#A25087]">↗</span>
                  </a>
                </div>
              </div>

              {/* VERTICAL GRID: Points Stacked One on Top of Another */}
              <div className="flex flex-col gap-5">
                {section.points.map((pt, pIdx) => (
                  <article
                    key={pIdx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#FFF9FC] hover:bg-[#FFF3F8] border border-[#F8E3EF] transition-all hover:shadow-xs group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#56224A] group-hover:text-[#8E44AD] transition-colors">
                        {pt.title}
                      </h3>
                      <span className="self-start sm:self-auto text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F5E1EF] text-[#7F386E] uppercase tracking-wider">
                        {pt.tag}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-[#6C3F61] leading-relaxed">
                      {pt.detail}
                    </p>
                  </article>
                ))}
              </div>

              {/* Category Footer Reference Reminder */}
              <div className="mt-8 pt-4 border-t border-[#F8E8F2] flex items-center justify-between text-xs text-[#8E5A81]">
                <span>Corroborates ancient Palestinian burial & forensic records</span>
                <a
                  href={section.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline text-[#AA3F85]"
                >
                  Read original research paper & archive →
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* SUMMARY / CUMULATIVE CASE BANNER */}
        <section className="mt-16 rounded-3xl bg-gradient-to-br from-[#FDE8F3] via-[#F8EDF8] to-[#EBDCF8] border border-[#E9C8E4] p-8 md:p-12 text-center shadow-sm">
          <div className="max-w-3xl mx-auto">
            <span className="text-3xl mb-3 inline-block">🕊️</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4F1D43] mb-4">
              The Mystery of the Resurrection
            </h2>
            <p className="text-base sm:text-lg text-[#6C3C60] leading-relaxed mb-6">
              While science cannot prove a theological miracle in a laboratory, the
              Shroud of Turin presents an interconnected web of medical, physical,
              chemical, and botanical data that no artist or medieval forger could
              have synthesized. It remains an enduring sign of faith, sacrifice, and
              hope.
            </p>
            <blockquote className="italic font-serif text-[#783063] text-lg mb-6">
              "We do not look at the Shroud as a simple object of curiosity, but we
              see in it the icon of the suffering of the innocent in every age."
              <span className="block not-italic text-xs font-bold uppercase tracking-wider text-[#984E82] mt-2">
                — Pope Benedict XVI
              </span>
            </blockquote>
          </div>
        </section>
      </main>

      {/* GREATLY IMPROVED FOOTER */}
      <footer className="relative z-10 bg-gradient-to-b from-[#FDF0F6] to-[#F7DEED] border-t border-[#ECC6DF] pt-14 pb-12 text-[#68365B]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#EAC2DC]">
            {/* Branding Column */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-2xl">🌸</span>
                <span className="font-extrabold text-xl text-[#522146]">
                  ShroudSakura
                </span>
              </div>
              <p className="text-sm text-[#733F65] leading-relaxed mb-4">
                A serene pastel anime-themed Christian apologetics and scientific
                resource dedicated to presenting peer-reviewed research on the
                Shroud of Turin.
              </p>
              <div className="text-xs text-[#955484]">
                Ad Majorem Dei Gloriam • For the Greater Glory of God
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#4E1E41] mb-3">
                Evidence Navigation
              </h4>
              <ul className="space-y-2 text-sm text-[#733F65]">
                {shroudSections.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className="hover:text-[#B23886] transition-colors cursor-pointer text-left"
                    >
                      {sec.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Scholarly Sources Column */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#4E1E41] mb-3">
                Primary Scholarly Sources
              </h4>
              <ul className="space-y-2 text-sm text-[#733F65]">
                <li>
                  <a
                    href="https://www.shroud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B23886] transition-colors flex items-center justify-between"
                  >
                    <span>STURP Official Papers (1978–Present)</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nature.com/articles/srep15635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B23886] transition-colors flex items-center justify-between"
                  >
                    <span>Scientific Reports DNA Analysis (2015)</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mdpi.com/2571-9408/5/2/47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B23886] transition-colors flex items-center justify-between"
                  >
                    <span>De Caro et al. X-Ray WAXS Study (2022)</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://chatgpt.com/s/t_6ad6caf2785c819196835ee935792704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B23886] transition-colors flex items-center justify-between font-medium text-[#922F6E]"
                  >
                    <span>Original Research Summary Link</span>
                    <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Scripture Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#874A76]">
            <div>
              © {new Date().getFullYear()} ShroudSakura • Built with reverence,
              scientific diligence & cute pastel warmth.
            </div>
            <div className="font-serif italic text-sm text-[#5B2149]">
              "The truth will set you free." — John 8:32
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}