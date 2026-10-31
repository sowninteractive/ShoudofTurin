import React, { useState } from "react";
import "../App.css";

// 38 rigorous lines of evidence faithful to the original research compendium
interface EvidencePoint {
  num: number;
  title: string;
  category: string;
  detail: string;
  scripture?: string;
  source: string;
  sourceUrl?: string;
}

const evidenceList: EvidencePoint[] = [
  {
    num: 1,
    title: "The Physical Characteristics of the Shroud",
    category: "Physical & Textile",
    detail:
      "The Shroud of Turin is a linen cloth measuring approximately 4.4 meters long and 1.1 meters wide. It carries faint sepia frontal and dorsal images of a man whose body displays markings interpreted as traumatic injuries associated with ancient Roman crucifixion. It has been examined by scientists, chemists, physicists, physicians, historians, and forensic specialists across decades of interdisciplinary investigation.",
    source: "Shroud.com, STURP Scientific Records & Historical Resources",
    sourceUrl: "https://www.shroud.com"
  },
  {
    num: 2,
    title: "The Photographic Negative Effect Discovered in 1898",
    category: "Optics & Photography",
    detail:
      "In May 1898, Italian photographer Secondo Pia photographed the Shroud during a public exposition. When he inspected the photographic glass negative in his darkroom developer, the man's image appeared with lifelike depth, natural lighting, and anatomical realism far surpassing the cloth itself. The cloth behaves optically as a photographic negative produced centuries before photographic optics existed.",
    source: "Secondo Pia Archives & Shroud.com",
    sourceUrl: "https://www.shroud.com"
  },
  {
    num: 3,
    title: "Three-Dimensional Information Encoded in the Image",
    category: "Optics & 3D Topography",
    detail:
      "Researchers John Jackson, Eric Jumper, and William Ercoline investigated image intensity with a NASA VP-8 Image Analyzer. Unlike normal photographs which distort in relief, the Shroud's image brightness correlates directly with the physical cloth-to-body distance (I = f(d)), yielding an undistorted, mathematically coherent 3D holographic relief of the human body shape.",
    source: "Jackson, J. P., Jumper, E. J., and Ercoline, W. R. (1984), Applied Optics 23: 2244–2270",
    sourceUrl: "https://www.shroud.com/78papers.htm"
  },
  {
    num: 4,
    title: "The Image's Extreme Superficiality",
    category: "Physical & Micro-Fibers",
    detail:
      "Investigations established that the body image's yellowish coloration is strictly concentrated on the outermost primary cell wall of individual linen microfibers (measuring merely 0.2 to 0.5 micrometers thick). The coloration does not penetrate inside the fiber medulla or thread core, exhibiting zero capillary flow, cementation, or binder bridging between threads.",
    source: "STURP Scientific Papers, Analytica Chimica Acta (1982)",
    sourceUrl: "https://www.shroud.com/78papers.htm"
  },
  {
    num: 5,
    title: "STURP's Multidisciplinary 1978 Investigation",
    category: "Multidisciplinary Science",
    detail:
      "The Shroud of Turin Research Project (STURP) conducted an intensive direct scientific examination of the cloth in October 1978. Operating across five days and nights using microscopy, ultraviolet fluorescence, X-ray fluorescence, thermography, and chemical micro-tests, the team concluded that no conventional artist pigments, dyes, oils, or tempera explain the body image.",
    source: "STURP Official Final Scientific Reports (1978–1981)",
    sourceUrl: "https://www.shroud.com/78papers.htm"
  },
  {
    num: 6,
    title: "Chemical and Spectroscopic Evidence Concerning Blood",
    category: "Biochemistry & Serology",
    detail:
      "Biochemists John Heller and Alan Adler performed rigorous microchemical, enzymatic, and spectroscopic tests on blood residues transferred via sticky tape. They identified real blood constituents, detecting hemochromogen, cyanomethemoglobin, porphyrins, and bile pigments (bilirubin), with fluorescing serum exudate margins around the clots.",
    source: "Heller, J. H., and Adler, A. D. (1980), Applied Optics 19(16): 2742–2744",
    sourceUrl: "https://www.shroud.com/adler2.htm"
  },
  {
    num: 7,
    title: "Spectral Differences Between the Body Image and Bloodstains",
    category: "Biochemistry & Spectroscopy",
    detail:
      "R. N. Pellicori examined the ultraviolet-visible reflectance spectra of the body image and the bloodstained areas. The results demonstrated that the image and blood possess completely distinct spectral profiles. Crucially, the blood was deposited onto the cloth first, acting as a mask so that no image coloration exists beneath the blood crusts.",
    source: "Pellicori, R. (1980), Applied Optics 19(12): 1913–1920",
    sourceUrl: "https://www.shroud.com/78papers.htm"
  },
  {
    num: 8,
    title: "Scourging Marks Across the Body",
    category: "Forensics & Biblical Correspondence",
    detail:
      "The Shroud displays between 100 and 120 dumbbell-shaped contusions across the back, chest, calves, and shoulders. Forensic pathologists confirmed they match the two-pronged lead or bone tips of the Roman flagrum taxillatum. Trajectory lines show two executioners scourging the victim from opposite angles.",
    scripture: "Matthew 27:26; Mark 15:15; John 19:1",
    source: "STURP Scientific Papers & 2023 Forensic Bloodstain-Pattern Research"
  },
  {
    num: 9,
    title: "Head Wounds and the Crown of Thorns",
    category: "Forensics & Biblical Correspondence",
    detail:
      "The head exhibits over 30 puncture wounds penetrating the scalp, forehead, and occiput, consistent with a cap or helmet of thorns rather than a simple circlet. A prominent blood trickle down the forehead forms an inverted '3' shape matching the natural muscular contraction of the brow in extreme agony.",
    scripture: "Matthew 27:29; Mark 15:17; John 19:2",
    source: "STURP Forensic Papers & Legal Medicine Annual"
  },
  {
    num: 10,
    title: "Wrist and Forearm Bloodstain Patterns",
    category: "Forensic Biomechanics",
    detail:
      "Researchers have investigated the stains on the wrists and forearms to reconstruct wound locations, gravity drainage, and body posture on the cross. While medieval art depicted nails through the palms (which tear under body weight), the Shroud shows puncture marks through Destot's space in the wrists with retraction of the thumbs caused by median motor nerve stimulation.",
    source: "2024 Wrist and Forearm Forensic Bloodstain Study & Barbet (1953)"
  },
  {
    num: 11,
    title: "The Feet and Crucifixion Wounds",
    category: "Forensics & Biblical Correspondence",
    detail:
      "The lower-body dorsal and frontal images preserve clean nail exit wounds in the feet. Forensic analysis indicates that the left foot was placed over the right foot and driven through with a single large iron spike into the upright stipes, fully matching first-century Roman crucifixion practices.",
    scripture: "Matthew 27:35; Mark 15:24–25; Luke 23:33; John 19:18",
    source: "STURP Forensic Reports & Zugibe Anatomical Studies"
  },
  {
    num: 12,
    title: "The Side Wound",
    category: "Forensics & Biblical Correspondence",
    detail:
      "A 4.4 × 1.1 cm transverse oval puncture appears on the right side between the 5th and 6th ribs, precisely matching the iron blade of a Roman lancea. A heavy dual outflow of clotted blood and clear pericardial/pleural serum drained across the chest and back, perfectly confirming Saint John's eyewitness testimony.",
    scripture: "John 19:34",
    source: "STURP Scientific Papers & 2023 Forensic Bloodstain-Pattern Study"
  },
  {
    num: 13,
    title: "Body Position and Postmortem Interpretation",
    category: "Forensic Medicine",
    detail:
      "The front and dorsal imprints preserve detailed information regarding postmortem body position and wound dynamics. Forensic pathologists note physiological markers of agonic rigor mortis frozen at death, including thoracic distension from asphyxiation and the forward stiffness of the knees and neck.",
    source: "STURP Forensic Papers & Forensic Science International"
  },
  {
    num: 14,
    title: "Ultraviolet Laser Experiments",
    category: "Modern Laser Physics",
    detail:
      "Physicists at Italy's National Agency for New Technologies (ENEA) investigated the effects of intense ultraviolet radiation on linen. Their laboratory experiments demonstrated that brief, ultra-intense vacuum ultraviolet (VUV) excimer laser bursts are the only known method able to reproduce the nanometer-thin superficial yellowing of linen fibers without scorch marks.",
    source: "ENEA Laboratory Research (2008 & 2012), Applied Optics",
    sourceUrl: "https://www.enea.it/en"
  },
  {
    num: 15,
    title: "The Theoretical 34-Trillion-Watt Ultraviolet Pulse",
    category: "Modern Laser Physics",
    detail:
      "Calculating the energy requirements to shade the entire 4.4-meter cloth simultaneously, ENEA scientists determined that an instantaneous directional burst of approximately 34 trillion watts lasting mere billionths of a second would be required—a radiant power capacity unavailable to any medieval artisan.",
    source: "ENEA Laser Research & Journal of Imaging Science and Technology (2012)",
    sourceUrl: "https://www.enea.it/en"
  },
  {
    num: 16,
    title: "The 2015 DNA Study",
    category: "Genomics & Archaeology",
    detail:
      "A genomic study titled 'Uncovering the Sources of DNA Found on the Turin Shroud' sequenced mitochondrial DNA from fibers across the cloth. The researchers identified diverse human haplogroups originating in the Near East and Mediterranean basin, alongside plant taxa tracing ancient custody from Judea through Western Europe.",
    source: "Scientific Reports 5:15635 (Nature Publishing, 2015)",
    sourceUrl: "https://www.nature.com/articles/srep15635"
  },
  {
    num: 17,
    title: "Pollen and Botanical Traces",
    category: "Botanical Palynology",
    detail:
      "Palynologist Marzia Boi and Israeli botanist Avinoam Danin documented dense clusters of pollen grains adhering to the linen. Dominant species include Gundelia tournefortii, native specifically to the Judean hills and blooming in March–April, alongside traces of Pistacia lentiscus mastic and funeral anointing spices.",
    scripture: "John 19:39–40",
    source: "Boi, M. (2017), Archaeometry & Danin (1999)"
  },
  {
    num: 18,
    title: "The 2022 X-Ray Dating Study",
    category: "Cellulose Crystallography",
    detail:
      "Dr. Liberato De Caro at Italy's Institute of Crystallography used Wide-Angle X-ray Scattering (WAXS) to measure structural cellulose micro-aging. The Shroud thread's structural degradation closely matched first-century linen from Masada, Israel (dated AD 55–74), confirming an approximate 2,000-year age under historical thermal conditions.",
    source: "De Caro, L. et al. (2022), Heritage 5(2): 860–870",
    sourceUrl: "https://www.mdpi.com/2571-9408/5/2/47"
  },
  {
    num: 19,
    title: "The 2023 Forensic Bloodstain-Pattern Study",
    category: "Forensic Analysis",
    detail:
      "A peer-reviewed 2023 forensic study examined bloodstain patterns across the Shroud using advanced bloodstain-pattern analysis (BPA). The research corroborated anatomical coherence between wound entry points, gravity-fed drainage lines, and body positioning on the cross and during burial preparation.",
    source: "Forensic BPA Study, PubMed Central (2023)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Shroud+of+Turin+bloodstain"
  },
  {
    num: 20,
    title: "The 2024 Wrist and Forearm Experiments",
    category: "Forensic Biomechanics",
    detail:
      "Experimental biomechanical work published in 2024 investigated fluid dynamics of blood flowing from wrist and forearm wounds under variable arm angles. The angles of blood drainage directly correspond to the body shifting between exhaustion and pushing upward against foot nails to breathe.",
    source: "2024 Forensic Wrist & Forearm Study"
  },
  {
    num: 21,
    title: "The 2025 Scientific Review",
    category: "Archaeological Overview",
    detail:
      "A comprehensive 2025 scientific review titled 'The Shroud of Turin: An Overview of the Archaeological Scientific Studies' surveyed multidisciplinary research covering textile weaving, image formation, and chemical testing, affirming the unique unsolved status of the artifact.",
    source: "Textiles (2025), Archaeological Overview"
  },
  {
    num: 22,
    title: "The 2025 Digital Three-Dimensional Modeling Study",
    category: "Computational 3D Modeling",
    detail:
      "Cicero Moraes published a digital 3D study comparing image formation using a human body and a low-relief model. The research introduced computational geometric modeling into the ongoing scientific inquiry of how image projections translate onto draping textiles.",
    source: "Moraes, C. (2025), Archaeometry"
  },
  {
    num: 23,
    title: "The 2026 Scientific Response on Image Formation",
    category: "Scientific Rebuttal",
    detail:
      "In 2026, scientists issued a rigorous response to the low-relief hypothesis, emphasizing that relief models fail to account for the Shroud's sub-micron superficiality, absence of pressure scorch rings, chemical integrity of cellulose, and pristine bloodstains preceding image formation.",
    source: "Scientific Response & Vatican News Scientific Report (2026)"
  },
  {
    num: 24,
    title: "The 2026 DNA Study of the Official 1978 Sample Collection",
    category: "Genomics & Lineages",
    detail:
      "Published in Scientific Reports in July 2026, researchers sequenced DNA preserved from the official 1978 STURP collection. They identified Near Eastern and European mitochondrial haplogroups alongside diverse plant and environmental DNA, expanding the biological contact record of the cloth.",
    source: "Scientific Reports (July 9, 2026)",
    sourceUrl: "https://www.nature.com/articles/srep15635"
  },
  {
    num: 25,
    title: "The 2026 Textile-Fragment Analysis",
    category: "Textile Science",
    detail:
      "A 2026 study published in npj Heritage Science analyzed microscopic fragments from textile margins associated with radiocarbon sampling, providing further physical characterization of fiber twist, flax retting, and historic repair materials.",
    source: "npj Heritage Science (2026)",
    sourceUrl: "https://www.nature.com"
  },
  {
    num: 26,
    title: "The Shroud's Historical Provenance in Europe",
    category: "European History",
    detail:
      "The cloth has an unbroken, documented European history dating to the 14th century, appearing in Lirey, France, circa 1354 in the custody of French knight Geoffroi de Charny. It was transferred to the House of Savoy in Chambéry and relocated permanently to Turin, Italy, in 1578.",
    source: "Shroud.com & Royal House of Savoy Historical Archives"
  },
  {
    num: 27,
    title: "The Proposed Connection to Edessa and Constantinople",
    category: "Byzantine History",
    detail:
      "Historians have traced the pre-European path of the cloth through early Byzantine traditions regarding a miraculous image of Christ in Edessa (Urfa) and its imperial translation to Constantinople in 944 AD, until relics were dispersed during the Fourth Crusade in 1204.",
    source: "Guscin, M. The Image of Edessa & Nicolotti, A. (2014)"
  },
  {
    num: 28,
    title: "Correspondence With the Gospel Accounts of Jesus' Passion",
    category: "Biblical Correspondence",
    detail:
      "The physical wounds on the Shroud mirror the New Testament accounts with anatomical precision: Roman scourging with the flagrum, the crown of thorns, carrying the patibulum, crucifixion through the wrists and feet, and the spear thrust into the heart.",
    scripture: "Matthew 27:26–35; Mark 15:15–25; Luke 23:33; John 19:1–34",
    source: "Gospel Narratives & Forensic Pathology Comparisons"
  },
  {
    num: 29,
    title: "Correspondence With the Gospel Accounts of Jesus' Burial",
    category: "Biblical Correspondence",
    detail:
      "All four Gospels testify that Joseph of Arimathea and Nicodemus took Jesus' body, wrapped it in a clean linen shroud (sindon) with aromatic spices, and placed it inside a rock-hewn garden tomb, matching the 3:1 herringbone linen fabric.",
    scripture: "Matthew 27:59; Mark 15:46; Luke 23:53; John 19:38–40",
    source: "New Testament Scripture & Archaeological Context"
  },
  {
    num: 30,
    title: "The Cumulative Case for Authenticity",
    category: "Cumulative Apologetics",
    detail:
      "The case for authenticity does not rely on a single data point, but on the convergence of 3D optical coding, sub-micron surface coloration, real human blood chemistry (Type AB), precise Roman trauma, 2,000-year X-ray WAXS dates, and Judean botanical flora. The probability of random forgery is practically zero.",
    source: "Cumulative Interdisciplinary Evidence (STURP, ENEA, Heritage, Nature)"
  },
  {
    num: 31,
    title: "The Image of Edessa and the Mandylion",
    category: "Mandylion & Edessa",
    detail:
      "Ancient Christian chronicles describe the Image of Edessa (Mandylion) as an acheiropoieton ('not made by human hands') image of Christ on cloth. Transferred to Constantinople in 944 AD, historian Ian Wilson demonstrated that the Mandylion was the Shroud folded so only the face was exposed.",
    source: "Mark Guscin, The Image of Edessa & Wilson (1978)",
    sourceUrl: "https://biblearchaeology.org"
  },
  {
    num: 32,
    title: "The Meaning of Tetradiplon, 'Folded in Four'",
    category: "Mandylion & Greek Terminology",
    detail:
      "The 6th-century Acts of Thaddaeus uses the rare Greek term 'tetradiplon' ('folded in four twice' = eight layers). When the 4.4-meter Shroud is folded in this exact arrangement, only the disembodied face of Christ remains visible within a rectangular frame, matching all Byzantine Mandylion depictions.",
    source: "Acts of Thaddaeus & Associates for Biblical Research",
    sourceUrl: "https://biblearchaeology.org"
  },
  {
    num: 33,
    title: "The Eighth-Century Account Describing a Whole-Body Image",
    category: "Historical Manuscripts",
    detail:
      "A crucial historical clue in the 10th-century manuscript Codex Vossianus Latinus Q 69 transmits an 8th-century account stating that the cloth in Edessa was an image not merely of Christ's face, but preserved an imprint of His entire body, directly corroborating the full-length Shroud.",
    source: "Codex Vossianus Latinus Q 69 & Guscin (2009)"
  },
  {
    num: 34,
    title: "The 944 Translation to Constantinople",
    category: "Byzantine Imperial Annals",
    detail:
      "On August 16, 944 AD, the Byzantine Empire solemnly received the Holy Cloth from Edessa into Constantinople with imperial honors. Byzantine historical annals describe its public reception in the Hagia Sophia and Pharos Chapel prior to the 1204 Fourth Crusade.",
    source: "Byzantine Imperial Chronicles & Guscin (2009)"
  },
  {
    num: 35,
    title: "Gregory the Referendarius and References to Christ's Wounds",
    category: "Byzantine Homiletics",
    detail:
      "Archdeacon Gregory the Referendarius preached an official imperial homily at the 944 arrival, explicitly describing that the relic displayed not just a face, but blood and a side wound on the body—conclusively proving the Mandylion was indeed the full burial Shroud of Christ.",
    source: "Gregory the Referendarius Vatican MS gr. 511 & Dubarle (1997)"
  },
  {
    num: 36,
    title: "The Visual Presentation of the Mandylion",
    category: "Iconography & Art History",
    detail:
      "Historical Byzantine depictions of the Mandylion show Christ's face within a decorated landscape frame. When comparing facial proportions, forehead hair partings, and throat lines, the Mandylion matches the Shroud's face identically point-for-point.",
    source: "Byzantine Iconography & Associates for Biblical Research",
    sourceUrl: "https://biblearchaeology.org"
  },
  {
    num: 37,
    title: "The Fourth Crusade and the Shroud's Proposed Route West",
    category: "Crusader History",
    detail:
      "In 1204 AD, French chronicler Robert de Clari witnessed the weekly exposition of the Shroud at the Blachernae church in Constantinople. Following the Crusader sack of the city, the relic was safeguarded by French nobility before surfacing at Lirey, France, in 1354.",
    source: "Robert de Clari, La Conquête de Constantinople (1204)"
  },
  {
    num: 38,
    title: "Similarities Between the Mandylion and Shroud Traditions",
    category: "Unified Historical Thesis",
    detail:
      "Both traditions testify to a miraculous cloth bearing the image of Jesus Christ, 'not made by hands,' bearing facial wounds and blood. The linguistic tetradiplon fold, 8th-century full-body testimonies, and Byzantine imperial homilies establish a coherent historical bridge from 1st-century Judea to Turin.",
    source: "Wilson (1978), Guscin (2009), and Nicolotti (2014)"
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Physical & Textile",
    "Optics & 3D Topography",
    "Biochemistry & Serology",
    "Forensics & Biblical Correspondence",
    "Modern Laser Physics",
    "Genomics & Archaeology",
    "Mandylion & Edessa"
  ];

  const filteredPoints = evidenceList.filter((pt) => {
    const matchesCategory =
      selectedCategory === "All" || pt.category.includes(selectedCategory);
    const matchesSearch =
      searchQuery.trim() === "" ||
      pt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF5FC] text-[#381432] font-sans relative selection:bg-[#EDD6F7] selection:text-[#381432]">
      {/* Background Ambience centered on #EDD6F7 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full bg-[#EDD6F7]/65 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 w-[36rem] h-[36rem] rounded-full bg-[#EDD6F7]/55 blur-[130px]" />
        <div className="absolute -bottom-28 right-1/4 w-[32rem] h-[32rem] rounded-full bg-[#EDD6F7]/60 blur-[120px]" />
      </div>

      {/* Simplified, Clean Top Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FAF5FC]/90 border-b border-[#EDD6F7] shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EDD6F7] border border-[#D9B0EB] flex items-center justify-center text-xl shadow-xs">
              ✝️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg tracking-tight text-[#381432]">
                  The Shroud of Turin
                </span>
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#EDD6F7] text-[#381432] border border-[#DCB3EC]">
                  Jesus' Burial Cloth
                </span>
              </div>
              <p className="text-[11px] text-[#69385B] font-medium hidden sm:block">
                38 Lines of Scientific, Historical, Forensic, and Biblical Evidence
              </p>
            </div>
          </div>

          <a
            href="https://www.shroud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-[#EDD6F7] hover:bg-[#E3BEF1] text-[#381432] border border-[#D9AFEB] transition-all flex items-center gap-1.5"
          >
            <span>Shroud.com Archive</span>
            <span>↗</span>
          </a>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        {/* SIMPLIFIED, SLEEK HERO SECTION ABOVE THE FOLD */}
        <section className="text-center pt-4 pb-10 md:pt-8 md:pb-12">
          {/* Reverent Badge Clearly Declaring Jesus' Burial Cloth */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDD6F7] border border-[#D9B0EB] text-[#381432] text-xs sm:text-sm font-bold tracking-wide shadow-xs mb-5">
            <span className="text-base">✝️</span>
            <span>The Sacred Burial Cloth of Jesus Christ</span>
            <span className="text-[#A26BA8]">•</span>
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#4F1947]">
              Empirical Investigation
            </span>
          </div>

          {/* Clean, Bold Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#381432] tracking-tight leading-[1.18] mb-5">
            The Shroud of Turin:{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#4E1547] via-[#7B1FA2] to-[#B71C1C] bg-clip-text text-transparent">
                38 Lines of Evidence
              </span>
              <span
                aria-hidden="true"
                className="absolute left-0 bottom-1 w-full h-3 bg-[#EDD6F7] -z-1 rounded-sm opacity-90"
              />
            </span>
          </h1>

          {/* Focused, Meaningful Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#55254D] leading-relaxed mb-6 font-normal">
            A comprehensive, interdisciplinary synthesis of peer-reviewed forensics,
            NASA 3D spatial mapping, human hemoglobin chemistry, 2,000-year X-ray WAXS
            dating, and Byzantine historical records documenting the authentic burial
            linen of Our Lord Jesus Christ.
          </p>

          {/* Clean, Uncluttered Scripture Card */}
          <div className="max-w-xl mx-auto p-5 rounded-2xl bg-white/95 border border-[#EDD6F7] shadow-xs text-center">
            <p className="italic font-serif text-[#46173E] text-base leading-relaxed">
              "Simon Peter went straight into the tomb. He saw the linen cloths lying
              there, and the face cloth that had been on Jesus' head, not lying with the
              linen cloths but folded up in a place by itself."
            </p>
            <div className="mt-2 text-xs font-bold text-[#7B2E6F] tracking-wider uppercase">
              — John 20:6–7 • The Witness of the Empty Tomb
            </div>
          </div>
        </section>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <section className="mb-8 p-4 rounded-2xl bg-white/90 border border-[#EDD6F7] shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
            {/* Live Search */}
            <div className="w-full sm:w-72 relative">
              <input
                type="text"
                placeholder="Search all 38 points of evidence..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 pl-9 rounded-xl bg-[#FAF5FC] border border-[#EDD6F7] text-xs sm:text-sm text-[#381432] placeholder-[#8C5D85] focus:outline-none focus:border-[#CFA1E2]"
              />
              <span className="absolute left-3 top-2.5 text-xs text-[#8C5D85]">🔍</span>
            </div>

            {/* Quick Stat Pill */}
            <div className="text-xs font-bold text-[#55254D] flex items-center gap-1.5 self-end sm:self-auto">
              <span className="px-2.5 py-1 rounded-lg bg-[#EDD6F7] text-[#381432]">
                {filteredPoints.length} of 38 Points Displayed
              </span>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-3 text-xs font-semibold">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#EDD6F7] text-[#381432] font-extrabold border border-[#D9AFEB]"
                    : "bg-[#FAF5FC] hover:bg-[#F2E1FA] text-[#69385B] border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* VERTICAL GRID: ALL 38 POINTS STACKED CLEANLY ONE ON TOP OF ANOTHER */}
        <div className="space-y-4">
          {filteredPoints.map((item) => (
            <article
              key={item.num}
              className="p-5 sm:p-6 rounded-2xl bg-white/95 border border-[#EDD6F7] hover:border-[#D9AFEB] shadow-xs transition-all hover:shadow-sm group"
            >
              {/* Header with Number & Category Tag */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2.5">
                <div className="flex items-baseline gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#EDD6F7] text-[#381432] font-black text-xs flex items-center justify-center shrink-0 border border-[#D9AFEB]">
                    {item.num}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#381432] group-hover:text-[#7B1FA2] transition-colors leading-snug">
                    {item.title}
                  </h2>
                </div>
                <span className="self-start sm:self-auto text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FAF5FC] text-[#69385B] border border-[#EDD6F7] uppercase tracking-wider shrink-0">
                  {item.category}
                </span>
              </div>

              {/* Point Narrative */}
              <p className="text-sm sm:text-base text-[#52254B] leading-relaxed mb-3 pl-0 sm:pl-9.5">
                {item.detail}
              </p>

              {/* Scripture Reference if present */}
              {item.scripture && (
                <div className="mb-2.5 pl-0 sm:pl-9.5 flex items-center gap-1.5 text-xs font-semibold text-[#8E24AA]">
                  <span>📖</span>
                  <span>Biblical Passages: {item.scripture}</span>
                </div>
              )}

              {/* Source Link */}
              <div className="pt-2 border-t border-[#F5E6FA] flex flex-wrap items-center justify-between gap-2 text-xs text-[#7A406E] pl-0 sm:pl-9.5">
                <span className="font-mono text-[11px]">Source: {item.source}</span>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#7B1F69] hover:underline flex items-center gap-1"
                  >
                    <span>Read original study</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}

          {filteredPoints.length === 0 && (
            <div className="text-center py-12 p-6 rounded-2xl bg-white border border-[#EDD6F7]">
              <p className="text-base text-[#69385B]">
                No points matched your search query "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-3 px-4 py-2 rounded-xl bg-[#EDD6F7] text-[#381432] font-bold text-xs"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>

        {/* SLEEK, UNIFIED RESURRECTION VERDICT (NO NESTED BOXES) */}
        <section className="mt-14 rounded-2xl bg-[#EDD6F7]/45 border border-[#D9B0EB] p-7 md:p-9 text-center shadow-xs">
          <div className="max-w-2xl mx-auto">
            <span className="text-3xl mb-2 inline-block">🕊️</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#381432] mb-3">
              "He Is Not Here; For He Has Risen"
            </h2>
            <p className="text-sm sm:text-base text-[#52254B] leading-relaxed mb-4">
              The Shroud of Turin presents an unbreakable convergence of ancient Near Eastern
              weaving, traumatic AB human blood, precision Roman crucifixion wounds, 3D optical
              depth, and 2,000-year X-ray crystallization dates. It remains the silent, radiant
              physical witness to the Passion and bodily Resurrection of Jesus Christ.
            </p>
            <div className="text-xs font-serif italic text-[#46173E]">
              "For us, the Shroud is the mirror of the Gospel: suffering transformed into boundless love."
              <span className="block not-italic font-sans font-bold uppercase tracking-wider text-[#7B1F69] mt-1">
                — Saint John Paul II
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* CLEAN, PROFESSIONAL FOOTER */}
      <footer className="relative z-10 bg-[#FAF1FC] border-t-2 border-[#EDD6F7] pt-10 pb-8 text-[#502347]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#EDD6F7]">
            {/* Branding & Christological Focus */}
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-9 h-9 rounded-xl bg-[#EDD6F7] border border-[#D9B0EB] flex items-center justify-center text-lg">
                ✝️
              </div>
              <div>
                <div className="font-black text-lg text-[#381432]">The Shroud of Turin</div>
                <div className="text-xs text-[#6E3C62] font-semibold">
                  The Sacred Burial Cloth of Jesus Christ
                </div>
              </div>
            </div>

            {/* Direct Source Archives */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#6E3C62]">
              <a
                href="https://www.shroud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8E24AA] transition-colors"
              >
                Shroud.com Archives ↗
              </a>
              <span className="text-[#D9B0EB]">•</span>
              <a
                href="https://www.nature.com/articles/srep15635"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8E24AA] transition-colors"
              >
                Scientific Reports DNA ↗
              </a>
              <span className="text-[#D9B0EB]">•</span>
              <a
                href="https://www.mdpi.com/2571-9408/5/2/47"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8E24AA] transition-colors"
              >
                Heritage WAXS 2022 ↗
              </a>
            </div>
          </div>

          {/* Bottom Scripture Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#703B63]">
            <div className="font-serif italic text-sm text-[#46173E] text-center sm:text-left">
              "I am the resurrection and the life. Whoever believes in Me, though he die, yet shall he live." — John 11:25
            </div>
            <div className="font-bold text-[#381432]">
              Soli Deo Gloria ✝️
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}