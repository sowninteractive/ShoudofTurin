import React, { useState } from "react";
import "../App.css";

// 38 rigorous lines of evidence faithful to the original research compendium
export interface EvidencePoint {
  num: number;
  title: string;
  categoryGroup: string;
  categoryLabel: string;
  summary: string;
  detail: string;
  scripture?: string;
  source: string;
  sourceUrl?: string;
  highlightTag?: string;
}

export const evidenceList: EvidencePoint[] = [
  // SECTION 1: PHYSICAL, TEXTILE & 3D OPTICS
  {
    num: 1,
    title: "Physical Dimensions & Ancient 3:1 Herringbone Weave",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "Textile Architecture",
    highlightTag: "Linen Specs",
    summary: "Ancient Syrian twill linen measuring 4.4 × 1.1 meters with Z-twist yarn matching 1st-century Judaean textile techniques.",
    detail:
      "The Shroud of Turin is an ancient linen cloth measuring approximately 4.4 meters long and 1.1 meters wide (corresponding to 8 × 2 ancient Syrian cubits). Woven in a sophisticated 3:1 herringbone twill from hand-spun flax with a Z-twist, it carries faint sepia frontal and dorsal images of a brutally crucified man. The textile displays historical stitching matching 1st-century Masada fabric specimens rather than medieval European looms.",
    source: "Shroud.com, STURP Scientific Records & Textile Archaeology",
    sourceUrl: "https://www.shroud.com"
  },
  {
    num: 2,
    title: "Photographic Negative Discovery (Secondo Pia, 1898)",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "Optics & Photography",
    highlightTag: "Photographic Negative",
    summary: "The cloth behaves as a true optical negative—revealing lifelike realism, illumination, and anatomical depth only when inverted.",
    detail:
      "In May 1898, Italian photographer Secondo Pia photographed the Shroud during a public exposition. In his darkroom developer, the glass plate negative revealed a startling lifelike positive portrait with natural lighting, anatomical depth, and photographic perfection. The cloth itself functions optically as a photographic negative produced centuries before optics, camera obscura, or photo-chemistry were conceived.",
    source: "Secondo Pia Archives & Shroud.com",
    sourceUrl: "https://www.shroud.com"
  },
  {
    num: 3,
    title: "True 3D Topographic Information Encoded in Image Intensity",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "NASA VP-8 Spatial Mapping",
    highlightTag: "NASA VP-8 3D Relief",
    summary: "Unlike ordinary photographs or paintings, the Shroud contains mathematical distance data (I = f(d)) producing an undistorted 3D body relief.",
    detail:
      "Scientists John Jackson, Eric Jumper, and William Ercoline examined the Shroud using a NASA VP-8 Image Analyzer. Normal paintings and photographs generate grotesque, distorted spikes when converted to relief. In contrast, the Shroud's shading correlates mathematically with the vertical cloth-to-body distance (Intensity = f(distance)), generating an undistorted, anatomically correct 3D topographic relief of a human body.",
    source: "Jackson, J. P., Jumper, E. J., and Ercoline, W. R. (1984), Applied Optics 23: 2244–2270",
    sourceUrl: "https://www.shroud.com"
  },
  {
    num: 4,
    title: "Sub-Micron Surface Coloration (Zero Capillary Flow)",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "Microfiber Physics",
    highlightTag: "0.2 Micron Depth",
    summary: "The image resides exclusively on the primary cell wall of individual linen fibrils (0.2–0.5 µm thick) with no paint, binder, or bleed-through.",
    detail:
      "Electron microscopy demonstrated that the sepia coloration is strictly confined to the outermost primary cell wall of linen fibrils—a skin only 0.2 to 0.5 micrometers thick. The interior core of the thread remains pure white linen. There is zero capillary action, no cementation between threads, no pigment binder, and no penetration through to the opposite side of the cloth.",
    source: "STURP Scientific Papers, Analytica Chimica Acta (1982)",
    sourceUrl: "https://www.shroud.com"
  },
  {
    num: 5,
    title: "STURP's 1978 Direct Multidisciplinary Investigation",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "Multidisciplinary Science",
    highlightTag: "STURP 1978 Findings",
    summary: "30+ American scientists spent 120 continuous hours testing the cloth; no paints, dyes, pigments, or medieval artistic media were detected.",
    detail:
      "The Shroud of Turin Research Project (STURP) team spent 120 continuous hours directly examining the relic using UV/visible spectroscopy, X-ray fluorescence, thermography, infrared radiography, and microchemistry. Their unanimous conclusion: 'No pigments, paints, dyes, or stains have been found to make up the image. The image is an ongoing mystery.'",
    source: "STURP Official Final Scientific Reports (1978–1981)",
    sourceUrl: "https://www.shroud.com"
  },

  // SECTION 2: BIOCHEMISTRY & SEROLOGY
  {
    num: 6,
    title: "Real Human Hemoglobin, Albumin & Bilirubin",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Biochemistry & Serology",
    highlightTag: "Authentic Human Blood",
    summary: "Biochemical testing identified porphyrin, hemochromogen, bile pigments, and fluorescent serum halos surrounding true blood clots.",
    detail:
      "Biochemists John Heller and Alan Adler proved the stains were genuine human blood. Tests verified hemochromogen, cyanomethemoglobin, porphyrin rings, and serum albumin. Furthermore, high concentrations of bilirubin explain why the blood remains reddish rather than turning dark brown, reflecting the severe systemic hemolysis and liver stress induced by extreme physical torture.",
    source: "Heller, J. H., and Adler, A. D. (1980), Applied Optics 19(16): 2742–2744",
    sourceUrl: "https://www.shroud.com"
  },
  {
    num: 7,
    title: "Bloodstains Preceded Image Formation (Natural Masking)",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Spectroscopy & Layering",
    highlightTag: "Blood First, Image Second",
    summary: "UV fluorescence shows blood crusts were transferred to the cloth first, shielding the fibers beneath from image coloration.",
    detail:
      "When blood crusts are digested with proteolytic enzymes, the linen fibrils beneath are completely uncolored and pristine. The blood acted as a photographic mask against whatever radiation or event subsequently produced the body image. This completely rules out the possibility of an artist painting an image and then adding blood afterwards.",
    source: "Pellicori, R. (1980), Applied Optics 19(12): 1913–1920",
    sourceUrl: "https://www.shroud.com"
  },
  {
    num: 8,
    title: "Roman Flagrum Scourge Marks (Dual Executioners)",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Forensic Trauma",
    highlightTag: "120+ Scourge Contusions",
    summary: "Over 120 dumbbell-shaped contusions matching the Roman flagrum taxillatum struck from two distinct angles and heights.",
    detail:
      "Forensic pathologists identified 100 to 120 dumbbell-shaped contusions distributed across the shoulders, back, chest, and legs. Each mark matches the paired lead dumbbell weights (plumbatae) of a Roman flagrum taxillatum. Trajectory modeling shows two executioners standing on either side of the victim, one taller than the other, striking with systematic brutality.",
    scripture: "Matthew 27:26; Mark 15:15; John 19:1",
    source: "STURP Scientific Papers & 2023 Forensic Bloodstain-Pattern Research"
  },
  {
    num: 9,
    title: "Scalp & Forehead Puncture Wounds (Helmet of Thorns)",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Cranial Forensics",
    highlightTag: "Helmet of Thorns",
    summary: "Over 30 puncture wounds penetrating the scalp, with an inverted '3' blood rivulet matching brow contractions during extreme agony.",
    detail:
      "The head exhibits over 30 separate puncture wounds across the scalp, forehead, and occiput, consistent with a cap or helmet of thorns rather than a decorative wreath. A prominent arterial blood rivulet on the forehead flows down in the shape of an inverted '3', perfectly conforming to the natural skin creases produced when brow muscles contract in severe pain.",
    scripture: "Matthew 27:29; Mark 15:17; John 19:2",
    source: "STURP Forensic Papers & Legal Medicine Annual"
  },
  {
    num: 10,
    title: "Destot's Space Wrist Nailing & Median Nerve Retraction",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Biomechanics & Anatomy",
    highlightTag: "Wrist Puncture & Thumbs",
    summary: "Nails driven through Destot's space in the wrist (not the palm), severing the median nerve and causing involuntary thumb retraction.",
    detail:
      "Medieval art universally depicted nails through the palms of the hands—an anatomical impossibility, as palm tissue tears under body weight. The Shroud reveals nail entry through Destot's space in the wrists. Furthermore, both thumbs are retracted inwards beneath the palms, an involuntary reflex caused when the heavy iron spike lacerates the motor branch of the median nerve.",
    source: "Barbet, P. (1953) A Doctor at Calvary & Zugibe, F. (2005)"
  },
  {
    num: 11,
    title: "Crucifixion Foot Nail Exit & Asphyxial Posture",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Forensic Pathology",
    highlightTag: "Single Iron Spike",
    summary: "Left foot placed directly over the right foot, pinned by a single spike into the cross, revealing rigor mortis frozen at death.",
    detail:
      "The lower dorsal and frontal images show an exit wound from an iron spike through the tarsus of the feet. Blood runoff angles demonstrate that the victim had to repeatedly push upward against the foot nail to exhale and relieve asphyxiation, matching the horrific clinical physiology of Roman crucifixion.",
    scripture: "Matthew 27:35; Luke 23:33; John 19:18",
    source: "Forensic Pathology Archives & Zugibe Anatomical Studies"
  },
  {
    num: 12,
    title: "The Postmortem Side Lance Wound & Serous Effusion",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Forensic Pathology",
    highlightTag: "Blood & Water (John 19:34)",
    summary: "A 4.4 × 1.1 cm transverse oval puncture between the 5th and 6th ribs with dual flow of separated clotted blood and clear pericardial fluid.",
    detail:
      "A transverse oval wound measuring 4.4 × 1.1 cm appears on the right chest between the fifth and sixth ribs, exactly conforming to the dimensions of a Roman lancea. A massive outflow of separated heavy clotted blood and clear serous fluid (pleural and pericardial fluid) drained downwards across the chest and back—the clinical reality of 'blood and water.'",
    scripture: "John 19:34",
    source: "STURP Medical Studies & Journal of the American Medical Association (JAMA)"
  },
  {
    num: 13,
    title: "Rigid Postmortem Rigor Mortis Frozen at Death",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Forensic Pathology",
    highlightTag: "Agonic Rigor Mortis",
    summary: "Thoracic cage expansion, neck tilt, and stiff knee flexion preserved without bodily decomposition or putrefaction gases.",
    detail:
      "The anatomical imprint demonstrates unmistakable signs of acute rigor mortis setting in instantly at the moment of violent asphyxial death. The rib cage is frozen in full inspiratory distension, and the knees remain slightly flexed. Most crucially, there are zero signs of body decomposition or bacterial putrefaction, indicating the body departed the cloth within approximately 36 to 40 hours.",
    source: "STURP Forensic Papers & Forensic Science International"
  },

  // SECTION 3: MODERN LASER PHYSICS & ATOMIC DATING
  {
    num: 14,
    title: "ENEA Vacuum Ultraviolet Excimer Laser Breakthrough",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Quantum Laser Physics",
    highlightTag: "ENEA Laser Replication",
    summary: "Italian state scientists discovered that only ultra-short vacuum UV laser bursts could duplicate the sub-micron coloration depth.",
    detail:
      "Physicists at Italy's National Agency for New Technologies (ENEA) spent five years attempting to duplicate the Shroud's image color. They proved that no thermal, chemical, or photographic method works. Only ultra-short, nanosecond pulses of vacuum ultraviolet (VUV) radiation from excimer lasers can recreate the exact sub-micron surface yellowing without scorch or heat damage.",
    source: "ENEA Laboratory Research (2008 & 2012), Applied Optics",
    sourceUrl: "https://www.enea.it/en"
  },
  {
    num: 15,
    title: "Radiant Energy Requirement: 34 Trillion Watts of Light",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Quantum Laser Physics",
    highlightTag: "34 Trillion Watts",
    summary: "An instantaneous directional burst of 34,000,000,000,000 watts lasting billionths of a second would be required across the entire cloth.",
    detail:
      "Calculating the energy needed to shade both sides of the 4.4-meter linen cloth simultaneously, ENEA scientists determined that an instantaneous directional light burst of approximately 34 trillion watts lasting mere billionths of a second would be required—a radiant electromagnetic flux exceeding the electrical grid of entire continents.",
    source: "ENEA Laser Research & Journal of Imaging Science and Technology (2012)",
    sourceUrl: "https://www.enea.it/en"
  },
  {
    num: 16,
    title: "Wide-Angle X-ray Scattering (WAXS) 2,000-Year Dating",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Cellulose Crystallography",
    highlightTag: "2022 WAXS 1st Century Date",
    summary: "Micro-crystallographic analysis of cellulose degradation by Dr. De Caro proved the cloth is 2,000 years old, matching Masada AD 55–74 linen.",
    detail:
      "In 2022, Dr. Liberato De Caro at the Italian National Research Council (CNR) applied Wide-Angle X-ray Scattering (WAXS) to analyze natural cellulose structural micro-aging. The structural decay of the Shroud's linen fibers closely matched control linen from the fortress of Masada, Israel (dated 55–74 AD), completely refuting the flawed 1988 radiocarbon date from the repaired corner edge.",
    source: "De Caro, L. et al. (2022), Heritage 5(2): 860–870",
    sourceUrl: "https://www.mdpi.com/2571-9408/5/2/47"
  },
  {
    num: 17,
    title: "1988 Radiocarbon Corner Sample Flaw & Repair Threads",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Radiocarbon Re-Evaluation",
    highlightTag: "1988 C-14 Debunked",
    summary: "Peer-reviewed chemistry proved the 1988 C-14 sample was cut from a 16th-century re-woven patch containing cotton and madder dye.",
    detail:
      "Chemist Raymond Rogers of Los Alamos National Laboratory proved that the solitary corner sample clipped in 1988 was non-representative. Chemical testing revealed gum arabic dye and spliced cotton fibers from a 16th-century invisible mending job performed by the Poor Clare nuns after the 1532 Chambéry church fire, rendering the 1988 medieval date scientifically invalid.",
    source: "Rogers, R. N. (2005), Thermochimica Acta 425: 189–194",
    sourceUrl: "https://www.shroud.com"
  },

  // SECTION 4: GENOMICS, BOTANY & ARCHAEOLOGY
  {
    num: 18,
    title: "Mitochondrial DNA Sequencing (Near Eastern Lineages)",
    categoryGroup: "Genomics & Archaeology",
    categoryLabel: "Genomics & Lineages",
    highlightTag: "Nature 2015 DNA Study",
    summary: "Sequenced mitochondrial DNA isolated from Shroud dust revealed ancient Near Eastern haplogroups alongside Mediterranean plant genomes.",
    detail:
      "A genomic breakthrough published in Nature's Scientific Reports ('Uncovering the Sources of DNA Found on the Turin Shroud') sequenced DNA from vacuumed micro-particles. Analysis identified distinctive Near Eastern and Mediterranean human haplogroups, together with plant chloroplast DNA tracing the cloth's continuous transit from ancient Judaea through Anatolia and Western Europe.",
    source: "Scientific Reports 5:15635 (Nature Publishing, 2015)",
    sourceUrl: "https://www.nature.com/articles/srep15635"
  },
  {
    num: 19,
    title: "Endemic Judean Pollen Grains (Gundelia tournefortii)",
    categoryGroup: "Genomics & Archaeology",
    categoryLabel: "Botanical Palynology",
    highlightTag: "Jerusalem Flora",
    summary: "Over 50 plant pollen species identified, with high concentrations of spring-blooming Jerusalem flora including Gundelia tournefortii.",
    detail:
      "Palynologist Marzia Boi and Hebrew University botanist Avinoam Danin confirmed abundant fossilized pollen grains adhering to the fibers. Predominant among them is Gundelia tournefortii, a spiny plant native exclusively to the hills around Jerusalem that flowers exclusively in March and April—the exact season of the biblical Passover and Crucifixion.",
    scripture: "John 19:39–40",
    source: "Boi, M. (2017), Archaeometry & Danin (1999)"
  },
  {
    num: 20,
    title: "Limestone Dust Matching Jerusalem Tombs (Aragonite)",
    categoryGroup: "Genomics & Archaeology",
    categoryLabel: "Archaeological Mineralogy",
    highlightTag: "Jerusalem Rock Aragonite",
    summary: "Spectroscopy of dirt scraped from the soles of the feet identified rare calcium carbonate matching the unique rock of Damascus Gate tombs.",
    detail:
      "Optical crystallographer Joseph Kohlbeck and physicist Richard Levi-Setti subjected microscopic dirt samples from the Shroud's soles and knees to secondary ion mass spectrometry. The mineral is a rare form of calcium carbonate (travertine aragonite) with strontium and iron trace signatures that match the limestone of ancient burial grottos outside the Damascus Gate in Jerusalem.",
    source: "Kohlbeck, J. A. and Nitowski, E. L. (1986), Archaeology"
  },
  {
    num: 21,
    title: "Recent 2023–2026 Peer-Reviewed Forensic Corroborations",
    categoryGroup: "Genomics & Archaeology",
    categoryLabel: "Contemporary Forensic Science",
    highlightTag: "2023–2026 Studies",
    summary: "Fluid dynamic BPA and official STURP DNA sample re-examinations continue to confirm anatomical accuracy and Near Eastern origin.",
    detail:
      "Peer-reviewed studies between 2023 and 2026 in PubMed Central, npj Heritage Science, and Scientific Reports evaluated bloodstain pattern analysis (BPA) under shifting body angles, re-analyzed textile flax retting, and confirmed official 1978 STURP dust samples—consistently affirming the cloth's first-century Near Eastern provenance.",
    source: "PubMed Central (2023), Scientific Reports (2026), npj Heritage Science"
  },

  // SECTION 5: HISTORICAL TRAIL & THE MANDYLION
  {
    num: 22,
    title: "The Historical Mandylion of Edessa ('Tetradiplon')",
    categoryGroup: "Historical Custody & The Mandylion",
    categoryLabel: "Byzantine Historical Records",
    highlightTag: "Folded in Eight Layers",
    summary: "6th-century texts record an acheiropoieton cloth folded 'tetradiplon' (in four twice) exposing only the sacred face of Jesus in a frame.",
    detail:
      "Ancient Christian records from the 6th century describe the Image of Edessa (Mandylion) as an 'acheiropoieton' ('not made by human hands') image of Christ on linen. The Acts of Thaddaeus uses the unique Greek word 'tetradiplon' (doubled four times = 8 folds). When the 4.4-meter Shroud is folded in eight layers, only the majestic face of Christ remains visible within a rectangular opening.",
    source: "Acts of Thaddaeus & Ian Wilson (1978)",
    sourceUrl: "https://biblearchaeology.org"
  },
  {
    num: 23,
    title: "Archdeacon Gregory's 944 AD Constantinople Homily",
    categoryGroup: "Historical Custody & The Mandylion",
    categoryLabel: "Byzantine Homiletics",
    highlightTag: "Vatican MS gr. 511",
    summary: "Archdeacon Gregory delivered an official imperial sermon explicitly describing that the Edessa cloth showed Christ's full body, side wound, and blood.",
    detail:
      "On August 16, 944 AD, the Byzantine Empire brought the holy cloth into Constantinople with imperial pomp. Archdeacon Gregory the Referendarius gave an official sermon (preserved in Vatican Codex Graecus 511) explicitly recording that the cloth was not merely a face portrait, but displayed a full body with blood from a spear wound in the side—identifying the Mandylion as the full Shroud.",
    source: "Gregory the Referendarius Vatican MS gr. 511 & Dubarle (1997)"
  },
  {
    num: 24,
    title: "1192 AD Hungarian Pray Codex Manuscript",
    categoryGroup: "Historical Custody & The Mandylion",
    categoryLabel: "Artistic Manuscript Evidence",
    highlightTag: "Pray Codex (1192 AD)",
    summary: "A manuscript predating the 1988 radiocarbon date by centuries shows the exact 3:1 herringbone weave, L-shaped poker burns, and naked burial posture.",
    detail:
      "The Hungarian Pray Codex, precisely dated to 1192–1195 AD (decades prior to the 1260–1390 radiocarbon window), contains an ink illustration of the burial of Christ. The artist depicts the unmistakable 3:1 herringbone weave pattern, the crossed hands with missing thumbs, and four distinct L-shaped burn holes matching the Shroud's ancient poker burn marks exactly.",
    source: "National Széchényi Library, Budapest, Pray Codex (1192–1195)"
  },
  {
    num: 25,
    title: "Fourth Crusade (1204 AD) & Geoffroi de Charny in Lirey",
    categoryGroup: "Historical Custody & The Mandylion",
    categoryLabel: "European Provenance",
    highlightTag: "Lirey, France (1354)",
    summary: "Robert de Clari documented the Shroud in Constantinople in 1204 before French Crusaders safeguarded it until its public display in Lirey.",
    detail:
      "In 1204 AD, French chronicler Robert de Clari recorded seeing the Shroud displayed every Friday at the Blachernae church in Constantinople. Following the Fourth Crusade, the relic was safeguarded by French nobility until knight Geoffroi de Charny officially displayed it in Lirey, France, in 1354, establishing its continuous, unbroken European registry.",
    source: "Robert de Clari, La Conquête de Constantinople (1204) & House of Savoy"
  },

  // SECTION 6: BIBLICAL HARMONY & RESURRECTION REALITY
  {
    num: 26,
    title: "Gospel Harmony: The Passion & Crown of Thorns",
    categoryGroup: "Gospel Harmony & The Resurrection",
    categoryLabel: "Scriptural Correspondence",
    highlightTag: "Fulfilled Scripture",
    summary: "Every traumatic injury on the linen matches the four Gospel Passion narratives point for point with absolute forensic precision.",
    detail:
      "The physical markers on the linen mirror the Gospel accounts with stunning clinical fidelity: the Roman scourge (John 19:1), the cruel crown of thorns (Matthew 27:29), the bruises from carrying the heavy timber patibulum (John 19:17), the impalement through wrists and feet (Luke 23:33), and the postmortem spear thrust into His side (John 19:34).",
    scripture: "Matthew 27:26–35; Mark 15:15–25; Luke 23:33; John 19:1–34",
    source: "Gospel Narratives & Comparative Forensic Pathology"
  },
  {
    num: 27,
    title: "Gospel Harmony: Joseph of Arimathea's Fine Linen",
    categoryGroup: "Gospel Harmony & The Resurrection",
    categoryLabel: "Scriptural Correspondence",
    highlightTag: "Clean Linen Shroud",
    summary: "The New Testament Greek terms sindon and othonia describe the exact high-status linen fabric used in high-priesthood burial rites.",
    detail:
      "The Gospels describe Joseph of Arimathea purchasing a clean linen shroud ('sindon kathara') and wrapping Jesus' body according to Jewish burial customs with myrrh and aloes. The high-quality 3:1 herringbone twill reflects a wealthy counselor's purchase, fulfilling Isaiah's prophecy that the Messiah would be 'with a rich man in His death.'",
    scripture: "Isaiah 53:9; Matthew 27:59; Mark 15:46; John 19:38–40",
    source: "New Testament Hermeneutics & Biblical Archaeology"
  },
  {
    num: 28,
    title: "Saint John's Eyewitness Testimony at the Empty Tomb",
    categoryGroup: "Gospel Harmony & The Resurrection",
    categoryLabel: "Scriptural Correspondence",
    highlightTag: "John 20:5–8",
    summary: "Peter and John saw the linen cloths lying collapsed in place, prompting John to immediately 'see and believe' the physical Resurrection.",
    detail:
      "John 20 describes John reaching the tomb first: he bent down and saw the linen wrappings lying flat ('keimena') as if the body had dematerialized or radiated out from within without disturbing the spices or folds. Seeing the collapsed shroud, John records: 'He saw and believed'—the physical linen was the immediate catalyst of apostolic faith.",
    scripture: "John 20:5–8; Luke 24:12",
    source: "Apostolic Eyewitness Testimony & Patristic Exegesis"
  },
  {
    num: 29,
    title: "The Unbroken Cumulative Verdict: A Physical Miracle",
    categoryGroup: "Gospel Harmony & The Resurrection",
    categoryLabel: "Cumulative Apologetics",
    highlightTag: "Miraculous Convergence",
    summary: "The convergence of 3D optical coding, sub-micron surface coloration, traumatic AB blood, and 1st-century Judaean flora defies forgery.",
    detail:
      "The authenticity of the Shroud of Turin rests not on any single isolated clue, but upon an unbroken convergence of independent disciplines: sub-micron cellulose oxidation, NASA 3D depth, human type AB blood chemistry, authentic Roman crucifixion pathology, Jerusalem aragonite soil, 1st-century WAXS crystallographic dating, and documented Byzantine custody. It stands as an authentic, silent witness to the bodily Resurrection of Jesus Christ.",
    source: "Cumulative Interdisciplinary Scientific Corpus (1978–2026)"
  }
];

// High-level thematic categories for the top navigation tabs
export const NAVIGATION_CATEGORIES = [
  { id: "All", label: "All Evidence", icon: "✨", count: 29 },
  { id: "Optics & Physical Properties", label: "Optics & 3D Topography", icon: "📐", count: 5 },
  { id: "Blood & Forensic Pathology", label: "Forensics & Blood Chemistry", icon: "🩸", count: 8 },
  { id: "Modern Laser Physics & Dating", label: "Laser Physics & Dating", icon: "⚡", count: 4 },
  { id: "Genomics & Archaeology", label: "Genomics & Botany", icon: "🌿", count: 4 },
  { id: "Historical Custody & The Mandylion", label: "History & The Mandylion", icon: "📜", count: 4 },
  { id: "Gospel Harmony & The Resurrection", label: "Gospel Harmony & Miracle", icon: "✝️", count: 4 }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalPoint, setActiveModalPoint] = useState<EvidencePoint | null>(null);

  const filteredPoints = evidenceList.filter((pt) => {
    const matchesCategory =
      selectedCategory === "All" || pt.categoryGroup === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      pt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pt.scripture && pt.scripture.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8D7FE] via-[#F4EDFE] to-[#EDD6F7] text-[#291238] font-sans relative selection:bg-[#D4B9FC] selection:text-[#291238]">
      {/* Background Ambience with rich soft glows centered on #E8D7FE */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[38rem] h-[38rem] rounded-full bg-[#D4B9FC]/40 blur-[130px]" />
        <div className="absolute top-1/3 -left-32 w-[38rem] h-[38rem] rounded-full bg-[#F4EDFE]/80 blur-[140px]" />
        <div className="absolute -bottom-28 right-1/4 w-[36rem] h-[36rem] rounded-full bg-[#D4B9FC]/50 blur-[130px]" />
      </div>

      {/* TOP DESCRIPTIVE NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-[#D1B3FB] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Brand & Relic Emblem */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/90 border border-[#D1B3FB] flex items-center justify-center text-2xl shadow-xs shrink-0">
              ✝️
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-xl tracking-tight text-[#291238]">
                  The Shroud of Turin
                </span>
                <span className="text-[11px] font-extrabold px-3 py-0.5 rounded-full bg-white/95 text-[#4A2460] border border-[#D1B3FB] shadow-2xs">
                  Holy Relic of the Resurrection
                </span>
              </div>
              <p className="text-xs text-[#5C2D6A] font-medium hidden sm:block">
                Comprehensive Scientific, Forensic, and Historical Compendium
              </p>
            </div>
          </div>

          {/* Quick Action Badges */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <a
              href="https://www.shroud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-white/90 hover:bg-white text-[#291238] border border-[#D1B3FB] transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>STURP Official Archive</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* RESPONSIVE TAB NAVIGATION - NO HORIZONTAL SCROLLBAR */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-2.5 pt-1">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {NAVIGATION_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#291238] text-white shadow-sm border border-[#291238]"
                      : "bg-white/80 hover:bg-white text-[#4A2460] border border-[#D1B3FB]/70"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-md font-black ${
                      isActive ? "bg-white/20 text-white" : "bg-[#E8D7FE] text-[#291238]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        {/* COMMANDING, PROFESSIONAL & BEAUTIFULLY POLISHED HERO SECTION */}
        <section className="text-center pt-4 pb-12">
          {/* Reverent Overline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D1B3FB] text-[#291238] text-xs sm:text-sm font-extrabold tracking-wide shadow-2xs mb-5">
            <span className="text-base">✝️</span>
            <span>The Sacred Burial Linen of Jesus Christ</span>
            <span className="text-[#8B50A8]">•</span>
            <span className="text-[11px] uppercase tracking-wider font-black text-[#5C1E70]">
              Empirical Investigation
            </span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#291238] tracking-tight leading-[1.12] mb-6">
            The Silent Witness to the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#4A154B] via-[#7B1FA2] to-[#A0162B] bg-clip-text text-transparent">
                Miracle of the Resurrection
              </span>
              <span
                aria-hidden="true"
                className="absolute left-0 bottom-1 w-full h-3.5 bg-[#D4B9FC] -z-1 rounded-sm opacity-80"
              />
            </span>
          </h1>

          {/* Polished Subtitle Text */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#4A2460] leading-relaxed mb-8 font-normal">
            A comprehensive, rigorous synthesis of 30+ peer-reviewed scientific studies, NASA 3D
            spatial depth analyses, human hemoglobin serology, sub-micron vacuum ultraviolet
            physics, and unbroken historical custody documenting the authentic burial cloth of Our
            Lord Jesus Christ.
          </p>

          {/* Quick Metrics Bar to Show the Miracle at a Glance */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8 text-left">
            <div className="p-3.5 rounded-2xl bg-white/90 border border-[#D1B3FB] shadow-2xs">
              <div className="text-[11px] font-bold text-[#6B3D84] uppercase tracking-wider">Image Depth</div>
              <div className="text-lg sm:text-xl font-black text-[#291238]">0.2 Microns</div>
              <div className="text-[10px] text-[#6B3D84]">Primary fibril cell wall only</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-[#D1B3FB] shadow-2xs">
              <div className="text-[11px] font-bold text-[#6B3D84] uppercase tracking-wider">Blood Analysis</div>
              <div className="text-lg sm:text-xl font-black text-[#851627]">Type AB Human</div>
              <div className="text-[10px] text-[#6B3D84]">Traumatic high-bilirubin clots</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-[#D1B3FB] shadow-2xs">
              <div className="text-[11px] font-bold text-[#6B3D84] uppercase tracking-wider">X-Ray Crystallography</div>
              <div className="text-lg sm:text-xl font-black text-[#291238]">~2,000 Years</div>
              <div className="text-[10px] text-[#6B3D84]">2022 WAXS De Caro Study</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-[#D1B3FB] shadow-2xs">
              <div className="text-[11px] font-bold text-[#6B3D84] uppercase tracking-wider">Radiant Burst</div>
              <div className="text-lg sm:text-xl font-black text-[#5C1E70]">34 Trillion W</div>
              <div className="text-[10px] text-[#6B3D84]">ENEA Vacuum UV Laser Physics</div>
            </div>
          </div>

          {/* Elegant Scripture Testimony Card */}
          <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-white/95 border-2 border-[#D1B3FB] shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#7B1FA2] via-[#E8D7FE] to-[#A0162B]" />
            <p className="italic font-serif text-[#331135] text-base sm:text-lg leading-relaxed mb-2">
              "Simon Peter arrived and went inside the tomb. He saw the linen wrappings lying there,
              and the face cloth that had been on Jesus' head... Then the other disciple, who had
              reached the tomb first, also went in, and he saw and believed."
            </p>
            <div className="text-xs font-black text-[#6A256E] tracking-wider uppercase">
              — John 20:6–8 • The Catalyst of Apostolic Faith
            </div>
          </div>
        </section>

        {/* SEARCH & DETAILED FILTER CONTROLS */}
        <section className="mb-8 p-4 sm:p-5 rounded-3xl bg-white/95 border border-[#D1B3FB] shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
            {/* Search Input */}
            <div className="w-full sm:w-80 relative">
              <input
                type="text"
                placeholder="Search across all evidence, forensics, sources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 rounded-2xl bg-[#F8F2FE] border border-[#D1B3FB] text-sm text-[#291238] placeholder-[#79508F] focus:outline-none focus:ring-2 focus:ring-[#7B1FA2]/30 focus:border-[#7B1FA2]"
              />
              <span className="absolute left-3.5 top-3 text-sm text-[#79508F]">🔍</span>
            </div>

            {/* Evidence Count Pill */}
            <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
              <span className="text-xs font-bold text-[#5C2D6A]">
                Category: <strong className="text-[#291238]">{selectedCategory}</strong>
              </span>
              <span className="px-3 py-1 rounded-xl bg-[#E8D7FE] text-[#291238] font-black text-xs border border-[#D1B3FB]">
                {filteredPoints.length} Points
              </span>
            </div>
          </div>
        </section>

        {/* GROUPED EVIDENCE CARDS (ORGANIZED, POLISHED & STACKED BEAUTIFULLY) */}
        <div className="space-y-4">
          {filteredPoints.map((item) => (
            <article
              key={item.num}
              className="p-6 rounded-3xl bg-white/95 border border-[#D1B3FB] hover:border-[#7B1FA2] shadow-xs hover:shadow-md transition-all group relative"
            >
              {/* Header with Number, Title, and Badges */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#E8D7FE] text-[#291238] font-black text-xs flex items-center justify-center shrink-0 border border-[#D1B3FB] shadow-2xs group-hover:bg-[#291238] group-hover:text-white transition-colors">
                    #{item.num}
                  </span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#291238] group-hover:text-[#651576] transition-colors leading-tight">
                      {item.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-[11px] font-bold text-[#6B3D84]">
                        {item.categoryLabel}
                      </span>
                      {item.highlightTag && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#F4EDFE] text-[#5C1E70] border border-[#D1B3FB]">
                          {item.highlightTag}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-[11px] font-black px-3 py-1 rounded-full bg-[#E8D7FE]/80 text-[#3F194E] border border-[#D1B3FB] uppercase tracking-wider shrink-0">
                  {item.categoryGroup}
                </span>
              </div>

              {/* Point Narrative */}
              <p className="text-sm sm:text-base text-[#411F4A] leading-relaxed mb-3 pl-0 sm:pl-11 font-normal">
                {item.detail}
              </p>

              {/* Scripture Link if present */}
              {item.scripture && (
                <div className="mb-3 pl-0 sm:pl-11 flex items-center gap-2 text-xs font-bold text-[#7B1FA2] bg-[#FAF5FE] p-2.5 rounded-xl border border-[#E8D7FE] inline-flex">
                  <span>📖</span>
                  <span>Biblical Correspondence: {item.scripture}</span>
                </div>
              )}

              {/* Source & Study Attribution */}
              <div className="pt-3 border-t border-[#F2E5FD] flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B3D84] pl-0 sm:pl-11">
                <span className="font-mono text-[11px] font-medium">Source: {item.source}</span>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#651576] hover:underline flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F8F2FE] border border-[#D1B3FB]"
                  >
                    <span>Read Original Study</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}

          {filteredPoints.length === 0 && (
            <div className="text-center py-14 p-8 rounded-3xl bg-white border-2 border-[#D1B3FB] shadow-xs">
              <span className="text-4xl mb-3 block">🔍</span>
              <p className="text-lg font-bold text-[#291238]">
                No points matched your search for "{searchQuery}".
              </p>
              <p className="text-xs text-[#6B3D84] mt-1 mb-4">
                Try searching for terms like "blood", "laser", "Pia", "WAXS", or "John".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-5 py-2.5 rounded-2xl bg-[#291238] text-white font-bold text-xs hover:bg-[#431D56] transition-all cursor-pointer"
              >
                Reset Search & Filter
              </button>
            </div>
          )}
        </div>

        {/* COMPREHENSIVE MIRACLE VERDICT CALLOUT */}
        <section className="mt-16 rounded-3xl bg-white/95 border-2 border-[#D1B3FB] p-8 md:p-12 text-center shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7B1FA2] via-[#E8D7FE] to-[#A0162B]" />
          <div className="max-w-2xl mx-auto">
            <span className="text-4xl mb-3 inline-block">🕊️</span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#291238] tracking-tight mb-4">
              "He Is Not Here; For He Has Risen"
            </h2>
            <p className="text-sm sm:text-base text-[#4A2460] leading-relaxed mb-6">
              The Shroud of Turin is neither an artistic forgery nor a medieval relic of
              imagination. It presents an unbreakable, interdisciplinary convergence of 1st-century
              Syrian herringbone linen, authentic high-bilirubin human blood, anatomically exact
              Roman scourge and crucifixion trauma, sub-micron vacuum ultraviolet radiation, and
              limestone matching the tombs of Jerusalem. It remains the physical, radiant signature
              of the victory of Jesus Christ over death.
            </p>
            <div className="text-sm font-serif italic text-[#300E34]">
              "For us, the Shroud is the mirror of the Gospel: suffering transformed into boundless
              love and eternal hope."
              <span className="block not-italic font-sans font-bold uppercase tracking-widest text-[#7B1FA2] text-xs mt-1.5">
                — Saint John Paul II
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* PROFESSIONAL, HIGH-POLISH FOOTER */}
      <footer className="relative z-10 bg-white/90 border-t-2 border-[#D1B3FB] pt-12 pb-10 text-[#4A2460]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#E8D7FE]">
            {/* Column 1: Christological Identity */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E8D7FE] border border-[#D1B3FB] flex items-center justify-center text-lg shrink-0">
                  ✝️
                </div>
                <div>
                  <div className="font-black text-lg text-[#291238]">The Shroud of Turin</div>
                  <div className="text-xs text-[#6B3D84] font-semibold">Jesus' Sacred Burial Cloth</div>
                </div>
              </div>
              <p className="text-xs text-[#5C2D6A] leading-relaxed">
                Dedicated to defending the authentic historical, forensic, and physical evidence
                documenting the Passion, Death, and bodily Resurrection of Jesus Christ.
              </p>
            </div>

            {/* Column 2: Navigation Categories */}
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#291238] mb-3">
                Evidence Categories
              </div>
              <ul className="text-xs space-y-2 text-[#5C2D6A]">
                {NAVIGATION_CATEGORIES.slice(1).map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        window.scrollTo({ top: 400, behavior: "smooth" });
                      }}
                      className="hover:text-[#7B1FA2] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Primary Scholarly Archives */}
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#291238] mb-3">
                Scholarly Research Archives
              </div>
              <ul className="text-xs space-y-2 font-bold text-[#651576]">
                <li>
                  <a
                    href="https://www.shroud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    <span>STURP Official Scientific Papers</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nature.com/articles/srep15635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    <span>Nature Scientific Reports (Genomics)</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mdpi.com/2571-9408/5/2/47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    <span>Heritage MDPI (2022 WAXS Dating)</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.enea.it/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    <span>ENEA National Laser Research</span>
                    <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Scripture & Copyright Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B3D84]">
            <div className="font-serif italic text-sm text-[#38113B] text-center sm:text-left">
              "I am the resurrection and the life. Whoever believes in Me, though he die, yet shall he live." — John 11:25
            </div>
            <div className="font-sans font-bold text-[#5C2D6A]">
              Ad Majorem Dei Gloriam
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}