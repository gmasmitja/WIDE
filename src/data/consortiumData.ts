import { Subproject, Institution, TeamMember, ParticipatingMember, Publication, NewsItem, Equipment, SemiconductorMaterial, GrantInfo } from '../types';

export const grantInfo: GrantInfo = {
  projectAcronym: "WIDE",
  fullTitle: "Wide-bandgap materials for Integrated Development of green Energy systems",
  fullTitleCa: "Wide-bandgap materials for Integrated Development of green Energy systems",
  reference: "PID2025-171824OB-C41/C42/C43/C44",
  callName: "Proyectos de Generación de Conocimiento - 2025",
  callCode: "PID2025",
  callYear: 2025,
  callUrl: "https://www.aei.gob.es/convocatorias/buscador-convocatorias/proyectos-generacion-conocimiento-2025",
  agencyName: "Agencia Estatal de Investigación (AEI)",
  ministryName: "Ministerio de Ciencia, Innovación y Universidades (MICIU)",
  fundingProgram: "Plan estatal de Investigación Científica, Técnica y de Innovación 2024-2027",
  coordinatorInstitution: "Universitat Politècnica de Catalunya · BarcelonaTech (UPC)",
  totalFunding: "1,006,250.00 €",
  durationMonths: 36,
  startDate: "01/09/2026",
  endDate: "31/08/2029",
  officialFundingClause: "Coordinated project PID2025-171824OB-C41/C42/C43/C44 funded by MICIU/AEI/10.13039/501100011033 and by the European Union (ESF+) through the Proyectos de Generación de conocimiento 2025 call.",
  officialFundingClauseCa: "Coordinated project PID2025-171824OB-C41/C42/C43/C44 funded by MICIU/AEI/10.13039/501100011033 and by the European Union through the Proyectos de Generación de conocimiento 2025 call."
};

export const institutions: Institution[] = [
  {
    id: "upc",
    code: "UPC",
    name: "Universitat Politècnica de Catalunya · BarcelonaTech",
    nameCa: "Universitat Politècnica de Catalunya",
    role: "Coordinating Institution & SP1 Lead",
    subprojectId: "sp1",
    city: "Barcelona",
    address: "UPC Campus Barcelona Diagonal Nord, C/ Jordi Girona, 1-3, Building C4, 08034 Barcelona, Spain",
    website: "https://www.upc.edu",
    mapQuery: "UPC Campus Nord",
    accentColor: "#2E6B4E"
  },
  {
    id: "irec",
    code: "IREC",
    name: "Catalonia Institute for Energy Research (IREC)",
    nameCa: "Institut de Recerca en Energia de Catalunya",
    role: "SP2 Lead",
    subprojectId: "sp2",
    city: "Sant Adrià de Besòs / Barcelona",
    address: "Jardins de les Dones de Negre 1, 2nd Floor, 08930 Sant Adrià de Besòs, Barcelona, Spain",
    website: "https://www.irec.cat",
    mapQuery: "Institut de Recerca en Energia de Catalunya IREC",
    accentColor: "#1E6088"
  },
  {
    id: "ub",
    code: "UB",
    name: "Universitat de Barcelona",
    nameCa: "Universitat de Barcelona",
    role: "SP3 Lead",
    subprojectId: "sp3",
    city: "Barcelona",
    address: "Faculty of Physics, Carrer de Martí i Franquès 1, 08028 Barcelona, Spain",
    website: "https://www.ub.edu",
    mapQuery: "Facultat de Fisica Universitat de Barcelona",
    accentColor: "#B56B24"
  },
  {
    id: "cl-upm",
    code: "CL-UPM",
    name: "Centro Láser — Universidad Politécnica de Madrid",
    nameCa: "Centro Láser — Universidad Politécnica de Madrid",
    role: "SP4 Lead",
    subprojectId: "sp4",
    city: "Madrid",
    address: "Centro Láser UPM, Campus Sur, Ctra. de Valencia km 7.3, 28031 Madrid, Spain",
    website: "https://www.centrolaser.upm.es",
    mapQuery: "Centro Laser UPM Campus Sur Madrid",
    accentColor: "#6E4991"
  }
];

export const subprojects: Subproject[] = [
  {
    id: "sp1",
    code: "SP1",
    referenceCode: "PID2025-171824OB-C41",
    title: "Wide-bandgap materials for Integrated Development of green Energy systems (WIDE)",
    titleCa: "Wide-bandgap materials for Integrated Development of green Energy systems (WIDE)",
    institution: "UPC",
    institutionFull: "Universitat Politècnica de Catalunya · BarcelonaTech",
    leadPi: "Dr. Gerard Masmitja (UPC)",
    pi1: "Dr. Gerard Masmitja",
    pi1Role: "PI1 · General Project Coordinator",
    pi2: "Dr. Cristobal Voz",
    pi2Role: "PI2 · Co-Principal Investigator",
    fundingAmount: "225,000 €",
    fundingBudgetEur: 225000,
    durationMonths: 36,
    color: "#2E6B4E",
    bgLight: "#F0F7F3",
    borderAccent: "#2E6B4E",
    summary: "Consortium coordination and integration of the wide-bandgap materials developed in WP1 and the laser-assisted methodologies from WP3 into functional optoelectronic devices. Continuous feedback from WP2 will guide iterative optimization and provide a deeper understanding of device operation. The objective is to validate the scientific and technological work of the project through three representative demonstrators: semi-transparent solar cells, UV photodetectors, and photoelectrochemical cells. Strong cross-WP interaction will enable identification of performance bottlenecks and definition of optimization cycles for both material development and device fabrication workflows.",
    objectives: [
      "Semi-transparent photovoltaic devices.",
      "UV photodetectors and active filters based on wide-bandgap materials.",
      "Wide-bandgap photoelectrochemical cells.",
      "Development of selective contacts and transparent electrodes."
    ],
    keyMaterials: ["V₂Oₓ", "MoOₓ", "a-SiCₓ:H", "Metal-doped ZnO", "PAMAM"],
    workPackages: [
      { code: "WP1", name: "Development of wide-bandgap materials", leader: "IREC" },
      { code: "WP4", name: "Integration of wide-bandgap materials in optoelectronic devices", leader: "UPC" },
      { code: "WP5", name: "Disemination, communication and project management", leader: "UPC" }
    ]
  },
  {
    id: "sp2",
    code: "SP2",
    referenceCode: "PID2025-171824OB-C42",
    title: "Automated research of Wide-bandgap materials for Integrated Development of green Energy systems (A-WIDE)",
    titleCa: "Automated research of Wide-bandgap materials for Integrated Development of green Energy systems (A-WIDE)",
    institution: "IREC",
    institutionFull: "Catalonia Institute for Energy Research",
    leadPi: "Dr. Maxim Guc (IREC)",
    pi1: "Dr. Maxim Guc",
    pi1Role: "PI1 · Principal Investigator",
    pi2: "Dr. Robert Fonoll",
    pi2Role: "PI2 · Co-Principal Investigator",
    fundingAmount: "312,500 €",
    fundingBudgetEur: 312500,
    durationMonths: 36,
    color: "#1E6088",
    bgLight: "#EFF6FA",
    borderAccent: "#1E6088",
    summary: "New fabrication strategies will be developed to produce active layers of wide-bandgap materials, including light absorbers, selective contacts, and transparent electrodes. Precise control of composition, microstructure, and optoelectronic properties will be essential, as well as compatibility among processing steps and stability under operating conditions. A dedicated task will develop and validate an automated high-throughput synthesis platform for screening wide-bandgap material libraries.",
    objectives: [
      "Development of wide-bandgap absorbers.",
      "Automated synthesis of sample libraries for materials screening.",
      "Automated multimodal high-throughput characterization."
    ],
    keyMaterials: ["CZGS", "CZTS", "Sb₂S₃","ZnOₓSₓ₋₁"],
    workPackages: [
      { code: "WP1", name: "Development of wide-bandgap materials", leader: "IREC" },
      { code: "WP2", name: "Advanced modelling and characterization", leader: "UB" }
    ]
  },
  {
    id: "sp3",
    code: "SP3",
    referenceCode: "PID2025-171824OB-C43",
    title: "Modelling and advanced characterisation of Wide-bandgap materials for Integrated Development of green Energy systems (M-WIDE)",
    titleCa: "Modelling and advanced characterisation of Wide-bandgap materials for Integrated Development of green Energy systems (M-WIDE)",
    institution: "UB",
    institutionFull: "Universitat de Barcelona",
    leadPi: "Dr. Julià Vidrier (UB)",
    pi1: "Dr. Julià Vidrier",
    pi1Role: "PI1 · Principal Investigator",
    pi2: "Dr. Joan Bertomeu",
    pi2Role: "PI2 · Co-Principal Investigator",
    fundingAmount: "225,000 €",
    fundingBudgetEur: 225000,
    durationMonths: 36,
    color: "#B56B24",
    bgLight: "#FAF4EC",
    borderAccent: "#B56B24",
    summary: "Advanced device modelling combined with comprehensive material characterization will provide insights into the physical processes governing wide-bandgap materials and devices. This knowledge will guide the optimization of absorber composition and device architectures. The development of an automated multimodal characterization platform will enable analysis of the samples from WP1. Results from WP2 will feed into the other work packages to refine absorbers and selective contacts (WP1), optimize laser-based processes (WP3), and guide device fabrication (WP4). Ultimately, this work package will identify figures-of-merit for wide-bandgap optoelectronic devices in different applications.",
    objectives: [
      "Microstructural and compositional analysis.",
      "Optical and electrical characterisation of wide-bangap materials.",
      "Optoelectronic characterisation and modelling of wide-bandgap devices."
    ],
    keyMaterials: ["PL/PLE and PDS characterisations", "AVT, CRI and LUE analisies", "TEM, EDX, XPS, XRD techniques"],
    workPackages: [
      { code: "WP2", name: "Advanced modelling and characterization", leader: "UB" }
    ]
  },
  {
    id: "sp4",
    code: "SP4",
    referenceCode: "PID2025-171824OB-C44",
    title: "Laser processing of Wide-bandgap materials for Integrated Development of green Energy systems (L-WIDE)",
    titleCa: "Laser processing of Wide-bandgap materials for Integrated Development of green Energy systems (L-WIDE)",
    institution: "CL-UPM",
    institutionFull: "Centro Láser — Universidad Politécnica de Madrid",
    leadPi: "Dr. David Muñoz (CL-UPM)",
    pi1: "Dr. David Muñoz",
    pi1Role: "PI1 · Principal Investigator",
    pi2: "Dr. David Canteli",
    pi2Role: "PI2 · Co-Principal Investigator",
    fundingAmount: "243,750 €",
    fundingBudgetEur: 243750,
    durationMonths: 36,
    color: "#6E4991",
    bgLight: "#F7F3FA",
    borderAccent: "#6E4991",
    summary: "The development of advanced laser-assisted methodologies essential for next-generation wide-bandgap optoelectronic devices. The materials (WP1) and device architectures (WP4) require processing techniques compatible with scalable, dry fabrication routes. Laser ablation and LIFT offer an effective alternative to time-consuming conventional photolithography while avoiding potential degradation caused by chemical etchants. These laser-based processes are highly valuable for STPV (e.g., agrivoltaics) and for enhanced surface functionalization in PEC cells.",
    objectives: [
      "Laser ablation of wide-bandgap materials.",
      "Laser-induced-forward-transfer of metallic contacts and catalysts.",
      "Patterning of wide-bandgap optoelectronic devices."
    ],
    keyMaterials: ["femto- and nanosecond lasers", "selective laser ablation", "nanoparticle deposition by LIFT"],
    workPackages: [
      { code: "WP3", name: "Laser-processing of wide-bandgap materials", leader: "CL-UPM" }
    ]
  }
];

export const semiconductorMaterials: SemiconductorMaterial[] = [
  {
    id: "si",
    name: "Silicon (Reference standard)",
    formula: "Si",
    bandgapEg: 1.12,
    bandgapType: "Indirect",
    breakdownField: 0.3,
    electronMobility: 1400,
    thermalConductivity: 150,
    color: "#64748B",
    description: "Conventional semiconductor baseline. Strictly limited at high operating temperatures and high breakdown voltages.",
    applications: "Legacy microelectronics, baseline ICs"
  },
  {
    id: "sic",
    name: "Silicon Carbide (4H-SiC)",
    formula: "4H-SiC",
    bandgapEg: 3.26,
    bandgapType: "Indirect",
    breakdownField: 2.8,
    electronMobility: 900,
    thermalConductivity: 490,
    color: "#1E6088",
    description: "High thermal conductivity and high breakdown field; industrial benchmark for EV inverters and high-power grid converters.",
    applications: "Electric vehicles, grid power inverters, high-voltage traction"
  },
  {
    id: "gan",
    name: "Gallium Nitride",
    formula: "GaN",
    bandgapEg: 3.42,
    bandgapType: "Direct",
    breakdownField: 3.3,
    electronMobility: 2000,
    thermalConductivity: 130,
    color: "#2E6B4E",
    description: "Direct wide bandgap with exceptional 2DEG mobility; ideal for high-efficiency RF power amplifiers, compact chargers, and LEDs.",
    applications: "High-frequency 5G/6G RF, ultra-compact power supplies, optoelectronics"
  },
  {
    id: "ga2o3",
    name: "Gallium Oxide (Beta phase)",
    formula: "β-Ga₂O₃",
    bandgapEg: 4.85,
    bandgapType: "Direct",
    breakdownField: 8.0,
    electronMobility: 300,
    thermalConductivity: 27,
    color: "#B56B24",
    description: "Ultra-wide bandgap material with enormous critical breakdown field and scalable melt-growth bulk wafer feasibility.",
    applications: "Ultra-high-voltage power switching (>10 kV), solar-blind deep-UV detectors"
  },
  {
    id: "diamond",
    name: "Diamond (CVD Single Crystal)",
    formula: "C (Diamond)",
    bandgapEg: 5.47,
    bandgapType: "Indirect",
    breakdownField: 10.0,
    electronMobility: 2200,
    thermalConductivity: 2200,
    color: "#6E4991",
    description: "The ultimate semiconductor matrix for extreme thermal management, radiation tolerance, and ultra-high frequency power.",
    applications: "Extreme environment electronics, nuclear/space instrumentation, quantum optics"
  },
  {
    id: "aln",
    name: "Aluminium Nitride",
    formula: "AlN",
    bandgapEg: 6.20,
    bandgapType: "Direct",
    breakdownField: 12.0,
    electronMobility: 300,
    thermalConductivity: 285,
    color: "#0F766E",
    description: "Ultra-wide direct bandgap enabling deep ultraviolet (UVC) emission and high-voltage dielectric insulation layers.",
    applications: "Deep-UV optoelectronics, dielectric insulation barriers"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "m1",
    name: "Dr. Gerard Masmitja",
    subproject: "sp1",
    institution: "Universitat Politècnica de Catalunya (UPC)",
    role: "General Project Coordinator & PI1 (SP1 · UPC)",
    isPi: true,
    avatarInitials: "GM",
    email: "gerard.masmitja@upc.edu",
    specialty: "Optoelectronic Device Integration & Semi-Transparent PV"
  },
  {
    id: "m2",
    name: "Dr. Cristobal Voz",
    subproject: "sp1",
    institution: "Universitat Politècnica de Catalunya (UPC)",
    role: "Co-Principal Investigator PI2 (SP1 · UPC)",
    isPi: true,
    avatarInitials: "CV",
    email: "cristobal.voz@upc.edu",
    specialty: "Carrier-Selective Contacts, Metal Oxides & Thin Films"
  },
  {
    id: "m3",
    name: "Dr. Maxim Guc",
    subproject: "sp2",
    institution: "Catalonia Institute for Energy Research (IREC)",
    role: "Principal Investigator PI1 (SP2 · IREC)",
    isPi: true,
    avatarInitials: "MG",
    email: "mguc@irec.cat",
    specialty: "Automated Combinatorial Synthesis & High-Throughput Screening"
  },
  {
    id: "m4",
    name: "Dr. Robert Fonoll",
    subproject: "sp2",
    institution: "Catalonia Institute for Energy Research (IREC)",
    role: "Co-Principal Investigator PI2 (SP2 · IREC)",
    isPi: true,
    avatarInitials: "RF",
    email: "rfonoll@irec.cat",
    specialty: "Wide-Bandgap Absorbers & Solar Energy Materials"
  },
  {
    id: "m5",
    name: "Dr. Julià Vidrier",
    subproject: "sp3",
    institution: "Universitat de Barcelona (UB)",
    role: "Principal Investigator PI1 (SP3 · UB)",
    isPi: true,
    avatarInitials: "JV",
    email: "julia.vidrier@ub.edu",
    specialty: "Multimodal Characterization, PL/PLE & PDS Spectroscopy"
  },
  {
    id: "m6",
    name: "Dr. Joan Bertomeu",
    subproject: "sp3",
    institution: "Universitat de Barcelona (UB)",
    role: "Co-Principal Investigator PI2 (SP3 · UB)",
    isPi: true,
    avatarInitials: "JB",
    email: "jbertomeu@ub.edu",
    specialty: "Microstructural Analysis, Advanced Modelling & Optical Metrics"
  },
  {
    id: "m7",
    name: "Dr. David Muñoz",
    subproject: "sp4",
    institution: "Centro de Láseres y Materiales — UPM (CL-UPM)",
    role: "Principal Investigator PI1 (SP4 · CL-UPM)",
    isPi: true,
    avatarInitials: "DM",
    email: "david.munoz@upm.es",
    specialty: "Femto- and Nanosecond Laser Processing & Selective Ablation"
  },
  {
    id: "m8",
    name: "Dr. David Canteli",
    subproject: "sp4",
    institution: "Centro de Láseres y Materiales — UPM (CL-UPM)",
    role: "Co-Principal Investigator PI2 (SP4 · CL-UPM)",
    isPi: true,
    avatarInitials: "DC",
    email: "david.canteli@upm.es",
    specialty: "Laser-Induced-Forward-Transfer (LIFT) & Device Patterning"
  }
];

export const participatingMembers: ParticipatingMember[] = [
  // --- SUBPROJECT 1: UPC ---
  {
    id: "upc-part-1",
    name: "Dr. Delfina Muñoz",
    subproject: "sp1",
    institution: "INES - CEA (International Expert & Collaborator)",
    category: "International Experts",
    role: "Senior Researcher & Strategic Project Manager (INES - CEA)",
    affiliation: "Institut National de l'Énergie Solaire (INES - CEA)",
    specialty: "Silicon and wide-bandgap PV technologies, international patents & strategic roadmaps",
    details: "Maintains a fruitful scientific collaboration with Dr. Gerard Masmitja, including joint high-impact publications and an international patent.",
    avatarInitials: "DM"
  },
  {
    id: "upc-part-2",
    name: "Dr. Thomas Tom",
    subproject: "sp1",
    institution: "IPVF (International Expert & Collaborator)",
    category: "International Experts",
    role: "Postdoctoral Researcher & PV Selective Contacts Specialist",
    affiliation: "Institut Photovoltaïque d'Île-de-France (IPVF)",
    specialty: "Polymer-based dipole structures for selective contacts applied to PV devices",
    details: "Completed his PhD at UB in close collaboration with the UPC microelectronics group.",
    avatarInitials: "TT"
  },
  {
    id: "upc-part-3",
    name: "M. Anglada",
    subproject: "sp1",
    institution: "Universitat Politècnica de Catalunya (UPC)",
    category: "Predoctoral Researchers",
    role: "Predoctoral Researcher (PhD Candidate)",
    affiliation: "Electronic Engineering Department · UPC",
    specialty: "Hydrogen technologies, electrochemical systems & technology transfer (H2CAT Network)",
    details: "Innovation Manager of an IdC-2025 technology-transfer project on green hydrogen production at UPC, in collaboration with Dr. Masmitja.",
    avatarInitials: "MA"
  },
  {
    id: "upc-part-4",
    name: "G. Álvarez",
    subproject: "sp1",
    institution: "Universitat Politècnica de Catalunya (UPC)",
    category: "Predoctoral Researchers",
    role: "Predoctoral Researcher (PhD Candidate)",
    affiliation: "Electronic Engineering Department · UPC",
    specialty: "Photovoltaic materials, carrier-selective contacts and optoelectronic device characterisation",
    avatarInitials: "GA"
  },
  {
    id: "upc-part-5",
    name: "P. Estarlich",
    subproject: "sp1",
    institution: "Universitat Politècnica de Catalunya (UPC)",
    category: "Predoctoral Researchers",
    role: "Predoctoral Researcher (PhD Candidate)",
    affiliation: "Electronic Engineering Department · UPC",
    specialty: "Photovoltaic device fabrication, thin films and semi-transparent solar cells",
    avatarInitials: "PE"
  },
  {
    id: "upc-part-6",
    name: "J. Castillo",
    subproject: "sp1",
    institution: "Universitat Politècnica de Catalunya (UPC)",
    category: "Technical & Cleanroom Staff",
    role: "Cleanroom Laboratory Technician & Microfabrication Specialist",
    affiliation: "Electronic Engineering Department Cleanroom · UPC",
    specialty: "Cleanroom operation, thin-film deposition systems, and microfabrication environments",
    avatarInitials: "JC"
  },

  // --- SUBPROJECT 2: IREC ---
  {
    id: "irec-part-1",
    name: "Dr. Diouldé Sylla",
    subproject: "sp2",
    institution: "Catalonia Institute for Energy Research (IREC)",
    category: "Senior Faculty",
    role: "Senior Researcher (Solar Energy Materials & Systems)",
    affiliation: "Solar Energy Materials and Systems (SEMS) Department · IREC",
    avatarInitials: "DS"
  },
  {
    id: "irec-part-2",
    name: "M. Garshasbi",
    subproject: "sp2",
    institution: "Catalonia Institute for Energy Research (IREC)",
    category: "Predoctoral Researchers",
    role: "Predoctoral Researcher (PhD Candidate)",
    affiliation: "Solar Energy Materials and Systems (SEMS) Department · IREC",
    avatarInitials: "MG"
  },
  {
    id: "irec-part-3",
    name: "D. Nistal",
    subproject: "sp2",
    institution: "Catalonia Institute for Energy Research (IREC)",
    category: "Predoctoral Researchers",
    role: "Predoctoral Researcher (PhD Candidate)",
    affiliation: "Solar Energy Materials and Systems (SEMS) Department · IREC",
    avatarInitials: "DN"
  },
  {
    id: "irec-part-4",
    name: "G. Soracá",
    subproject: "sp2",
    institution: "Catalonia Institute for Energy Research (IREC)",
    category: "Predoctoral Researchers",
    role: "Predoctoral Researcher (PhD Candidate)",
    affiliation: "Solar Energy Materials and Systems (SEMS) Department · IREC",
    avatarInitials: "GS"
  },

  // --- SUBPROJECT 3: UB ---
  {
    id: "ub-part-1",
    name: "Dr. José Miguel Asensi",
    subproject: "sp3",
    institution: "Universitat de Barcelona (UB)",
    category: "Senior Faculty",
    role: "Associate Professor (Professor Agregat)",
    affiliation: "Department of Applied Physics / Faculty of Physics · Universitat de Barcelona",
    specialty: "Semiconductor physics, numerical simulation, and optoelectronic device modeling",
    avatarInitials: "JA"
  },
  {
    id: "ub-part-2",
    name: "Dr. Sergi Hernández",
    subproject: "sp3",
    institution: "Universitat de Barcelona (UB)",
    category: "Senior Faculty",
    role: "Full Professor (Catedràtic d'Universitat)",
    affiliation: "Department of Applied Physics / Faculty of Physics · Universitat de Barcelona",
    specialty: "Nanostructured semiconductors, photonics, and advanced optical spectroscopy",
    avatarInitials: "SH"
  },
  {
    id: "ub-part-3",
    name: "Dr. Ana Luz Muñoz",
    subproject: "sp3",
    institution: "Universitat de Barcelona (UB)",
    category: "Research Personnel",
    role: "Postdoctoral Researcher",
    affiliation: "Department of Applied Physics · Universitat de Barcelona",
    specialty: "Optical characterization, Photothermal Deflection Spectroscopy (PDS), and photoluminescence",
    avatarInitials: "AM"
  },
  {
    id: "ub-part-4",
    name: "U. Aziz",
    subproject: "sp3",
    institution: "Universitat de Barcelona (UB)",
    category: "Predoctoral Researchers",
    role: "Predoctoral Researcher (FPI – PhD Student)",
    affiliation: "Department of Applied Physics · Universitat de Barcelona",
    specialty: "Advanced modeling, defect spectroscopy, and optoelectronic characterization",
    avatarInitials: "UA"
  },
  {
    id: "ub-part-5",
    name: "E. Tormos",
    subproject: "sp3",
    institution: "Universitat de Barcelona (UB)",
    category: "Technical & Cleanroom Staff",
    role: "Cleanroom Specialist & Technical Support",
    affiliation: "Department of Applied Physics / Cleanroom · Universitat de Barcelona",
    specialty: "Cleanroom fabrication processes, substrate preparation, and specialized technical operations",
    avatarInitials: "ET"
  },

  // --- SUBPROJECT 4: CL-UPM ---
  {
    id: "cl-part-1",
    name: "Dr. Carlos Molpeceres",
    subproject: "sp4",
    institution: "Centro de Láseres y Materiales — UPM (CL-UPM)",
    category: "Senior Faculty",
    role: "Full Professor (Catedrático de Universidad)",
    affiliation: "Centro de Láseres y Materiales · Universidad Politécnica de Madrid",
    specialty: "Laser technology, laser microprocessing, laser-material interaction, and solar cells",
    details: "Well-established international track record in laser technology and advanced manufacturing.",
    avatarInitials: "CM"
  },
  {
    id: "cl-part-2",
    name: "Dr. Miguel Morales",
    subproject: "sp4",
    institution: "Centro de Láseres y Materiales — UPM (CL-UPM)",
    category: "Senior Faculty",
    role: "Full Professor (Catedrático de Universidad)",
    affiliation: "Centro de Láseres y Materiales · Universidad Politécnica de Madrid",
    specialty: "Laser technology, ultrafast laser micro-patterning, LIFT, and surface functionalization",
    details: "Well-established international track record in laser processing and optoelectronic device micro-structuring.",
    avatarInitials: "MM"
  },
  {
    id: "cl-part-3",
    name: "X. J. Rodríguez",
    subproject: "sp4",
    institution: "Centro de Láseres y Materiales — UPM (CL-UPM)",
    category: "Technical & Cleanroom Staff",
    role: "Laboratory Technician & Laser Systems Engineer",
    affiliation: "Centro de Láseres y Materiales · Universidad Politécnica de Madrid",
    specialty: "Laser workstations operation, optical alignments, and advanced metrology laboratory",
    avatarInitials: "XR"
  },
  {
    id: "cl-part-4",
    name: "S. Zhang",
    subproject: "sp4",
    institution: "Centro de Láseres y Materiales — UPM (CL-UPM)",
    category: "Predoctoral Researchers",
    role: "Predoctoral Researcher (PhD Student)",
    affiliation: "Centro de Láseres y Materiales · Universidad Politécnica de Madrid",
    specialty: "Laser-induced processes, micromachining, and device patterning (supervised by Dr. Morales)",
    avatarInitials: "SZ"
  }
];

export const publications: Publication[] = [
  {
    id: "pub-article-1",
    year: 2026,
    title: "[Article Title / Forthcoming Scientific Paper]",
    authors: "Author 1, Author 2, Author 3, et al. (WIDE Consortium)",
    venue: "Journal Name / Scientific Review (In Preparation / Under Review)",
    type: "journal",
    doi: "10.xxxx/journal.wide.2026.xxxxx",
    highlight: true
  },
  {
    id: "pub-conf-1",
    year: 2026,
    title: "[Conference Presentation / Oral Contribution Title]",
    authors: "Author 1, Author 2, et al. (WIDE Consortium)",
    venue: "Conference Name (e.g. European Materials Research Society / EU PVSEC) · City, Country",
    type: "conference",
    doi: "10.xxxx/conf.wide.2026.xxxxx",
    highlight: true
  },
  {
    id: "pub-conf-2",
    year: 2027,
    title: "[Conference Poster / Proceedings Paper Title]",
    authors: "Author 1, Author 2, et al. (WIDE Consortium)",
    venue: "Conference Name (e.g. International Conference on Optoelectronics) · City, Country",
    type: "conference",
    doi: "10.xxxx/conf.wide.2027.xxxxx"
  }
];

export const newsItems: NewsItem[] = [
  {
    id: "news-provisional-resolution",
    date: "15/07/2026",
    title: "Provisional Resolution Published for PID2025 Grants Call (AEI / MICIU)",
    summary: "The Agencia Estatal de Investigación (AEI) has published the Propuesta de Resolución Provisional for the 2025 'Proyectos de Generación de Conocimiento' call, confirming the provisional grant award for the WIDE coordinated project (PID2025) and its 4 subprojects across UPC, IREC, UB, and CL-UPM.",
    category: "Milestone",
    badgeColor: "#059669",
    linkUrl: "https://www.aei.gob.es/sites/default/files/convocatory_info/file/2026-07/PID2025-PRP-Texto%2BAnexos-firmado.pdf",
    linkText: "View Official AEI Resolution (PDF)"
  },
  {
    id: "news-kickoff",
    date: "Upcoming · September 2026",
    title: "WIDE Consortium Official Kick-Off Meeting (PID-2025)",
    summary: "Principal investigators and research teams from UPC, IREC, UB, and CL-UPM will convene in the upcoming Kick-Off Meeting scheduled for September to officially launch the coordinated project and coordinate technical workflows across all subprojects.",
    category: "Meeting",
    badgeColor: "#4F46E5"
  }
];

export const equipments: Equipment[] = [
  {
    id: "eq-upc",
    name: "UPC Research Infrastructure & Laboratories",
    institution: "UPC",
    institutionFull: "Universitat Politècnica de Catalunya",
    subproject: "sp1",
    locationInfo: "Electronic Engineering Department (Buildings C4 & C5 at Campus Nord, Barcelona), PV Laboratory at Campus Est, UPC Hydrogen Lab, and CCEM-Barcelona",
    description: "UPC’s infrastructure relevant to this project is primarily located in the Electronic Engineering Department (buildings C4 and C5 at Campus Nord, Barcelona), complemented by specialized laboratories at Campus Est, the UPC Hydrogen Lab, and CCEM-Barcelona.",
    facilities: [
      {
        facilityTitle: "Electronic Engineering Department (Buildings C4 & C5, Campus Nord)",
        facilityDescription: "Core microelectronics, thin-film deposition, laser processing and optoelectronic test facilities.",
        items: [
          "Cleanroom facilities (chemical benches, lithography equipment, furnaces, etc.).",
          "Plasma-Enhanced Chemical Vapour Deposition ElettroRava S.p.A (13.56 MHz direct plasma) for large-area substrates (up to 8 inches).",
          "RF Magnetron Sputtering (Leybold) with 3” and 4” targets.",
          "Thermal and electron-beam evaporation systems.",
          "Thermal Atomic Layer Deposition system (Savannah S200, Veeco/CNT) with precursors of DI-water, TMA, TDMAT, DEZ, and VTIP.",
          "Solid-state Nd:YAG laser system (1064 nm, lamp-pumped), with a pulse time of 100/400 ns (Starmark SMP100 II Rofin-Baasel).",
          "Spectral response / External Quantum Efficiency measurement system (QEX10 PV).",
          "Quasi-Steady-State Photoconductance Sinton instrument (WCT-120).",
          "Solar Simulator (Newport) with digital multimeter (Keithley) for I-V measurements."
        ]
      },
      {
        facilityTitle: "PV Laboratory (Campus Est, led by Dr. Edgardo Saucedo)",
        items: [
          "Glovebox MBraun with Nitrogen atmosphere and Thermal evaporation chamber.",
          "Thermal ALD system (Savannah S200).",
          "RF Magnetron Sputtering system."
        ]
      },
      {
        facilityTitle: "UPC Hydrogen Lab (In collaboration with Dr. Lluis Soler, UPC NEMEN-Group)",
        items: [
          "Thermogravimetric analyzer.",
          "Chronoamperometry setups.",
          "Electrochemical impedance spectroscopy instrumentation.",
          "Complete photoelectrochemical performance workstation with a standard three-electrode configuration."
        ]
      },
      {
        facilityTitle: "Barcelona Research Center in Multiscale Science and Engineering (CCEM-Barcelona)",
        facilityDescription: "Advanced multiscale characterization platforms accessible as a host research team.",
        items: [
          "UV-Vis-IR spectrophotometer (Shimadzu 3600).",
          "Veeco Wyko 9300NT confocal microscope.",
          "Veeco Dektak150 profilometer.",
          "X-ray photoelectron spectroscopy (XPS) systems.",
          "X-ray diffraction (XRD) systems."
        ]
      }
    ],
    specs: [
      "Cleanroom facilities with PECVD (up to 8''), RF Sputtering, e-beam & thermal evaporators, ALD (Savannah S200)",
      "Solar Simulator (Newport), Keithley I-V, QEX10 EQE/Spectral Response & Sinton WCT-120 Photoconductance",
      "Glovebox MBraun (N₂), Hydrogen Lab Photoelectrochemical workstation & CCEM-Barcelona XRD/XPS/UV-Vis-IR"
    ],
    category: "Integration"
  },
  {
    id: "eq-irec",
    name: "IREC Research Infrastructure & Laboratories",
    institution: "IREC",
    institutionFull: "Catalonia Institute for Energy Research",
    subproject: "sp2",
    locationInfo: "Solar Energy Materials & Systems Laboratory, Cleanroom Suite and Systems Workshops (Sant Adrià de Besòs / Barcelona)",
    description: "IREC has implemented a Laboratory with facilities for the production and characterization of materials and solar cells prototypes, as well as for the design and manufacturing of automated systems.",
    facilities: [
      {
        facilityTitle: "Synthesis of Chalcogenide Absorbers & Solar Cells Device Preparation",
        items: [
          "2 DC Sputtering systems for the deposition of metallic layers, including the deposition of the Mo back contact and metallic precursors (Cu, Zn, Sn, Sb…) for chalcogenide absorbers.",
          "1 DC pulsed and RF sputtering system for the deposition of oxides including: ZnO:Al, In2O3:Sn, SnO2:F and intrinsic oxides (i-ZnO, i-SnO2, etc.).",
          "1 thermal and e-beam evaporator system and an ALD system for the deposition of metals, oxides, fluorides, oxisulfides (e.g., Zn,(O,S)), etc.",
          "Chemical bath deposition systems including a SILAR system for the synthesis of buffer layers: CdS, Zn(O,OH)S, In2S3.",
          "Electrochemical workshops for electrodeposition of metals and chalcogenide compounds, spin coating machine and screen printing workshop for the deposition of metallic, organic and nanoparticle-based inks.",
          "Chemical laboratory including three fume bells for general chemical processes, ultrasonic baths, magnetic stirring hot plates, microbalances.",
          "Four chalcogenization/annealing tubular furnaces (1100 ºC): one for samples up to 3x3 cm², another for up to 5x5 cm², and two for up to 10x10 cm², working under different atmospheres.",
          "One rapid thermal process system for selenization of samples up to 10x10 cm².",
          "Ball milling system."
        ]
      },
      {
        facilityTitle: "Characterization (Including Device Characterization)",
        items: [
          "Tungsten point scriber for delineation of cells and soldering station.",
          "AAA class solar simulator (Abet Technologies, 6” x 6”) for the determination of dark and illuminated IV curves including a reference calibration Si cell.",
          "Spectral response system for EQE/IQE/reflectance measurements (Bentham PVE300).",
          "X-ray fluorescence equipment (Fisherscope XDV-SDD) for elemental composition determination.",
          "4-points probe system & I(V) equipment.",
          "Raman/Photoluminescence setups for characterization and process monitoring with several excitation sources (325, 355, 405, 442, 532, 633, 785, 850 and 1064 nm) compatible with in-situ/on-line applications.",
          "X-ray diffraction system (Bruker) with several capabilities: low-angle diffraction, temperature and atmosphere analysis, etc.",
          "Scanning electron microscope with energy dispersive X-ray spectroscopy (Zeiss SEM-EDX).",
          "Atomic force microscope with conductive measurements included (c-AFM).",
          "UV-Vis-IR spectroscopy for the determination of transmittance, absorbance and reflectance.",
          "Confocal/interferometric microscope.",
          "Small solar simulator (Oriel) combined with a C-V equipment and a nitrogen liquid cryostat and a Linkam (THMS600) for full temperature optoelectronic and structural characterization of solar cells.",
          "System based on LEDs, CCD and InGaAs detectors, and Keithley multimeter for hyperspectral reflectance and electroluminescence."
        ]
      },
      {
        facilityTitle: "Systems Design & Implementation (Automated Screening Platform)",
        items: [
          "Mechanical workshop: CNC system, two 3D printers (resin and filament), and dedicated mechanical design software (SolidWorks) for fast and efficient production of specific platform components.",
          "Electrical and electronic workshop: multimeters, oscilloscopes, soldering stations, and Altium software for design and implementation of electrical and electronic components.",
          "Optical and optomechanical workshop: spectrometers, detectors, cameras, filters, lenses, objectives, mirrors, and Zemax optical design software to implement and test optical sensors.",
          "LabView software for the implementation of GUIs and for the control of different equipment."
        ]
      }
    ],
    specs: [
      "DC/RF Sputtering (Mo, metals, TCOs), ALD, Thermal/e-beam Evaporation & CBD/SILAR deposition lines",
      "Class AAA Solar Simulator (Abet 6''x6''), Bentham PVE300 EQE, Multi-wavelength Raman/PL (325–1064 nm), Bruker XRD & Zeiss SEM-EDX",
      "Full automated platform manufacturing workshop: CNC, 3D printing (resin/filament), SolidWorks, Altium, Zemax & LabView"
    ],
    category: "Growth"
  },
  {
    id: "eq-ub",
    name: "UB Research Infrastructure & Laboratories",
    institution: "UB",
    institutionFull: "Universitat de Barcelona",
    subproject: "sp3",
    locationInfo: "Department of Applied Physics / Faculty of Physics and CCiTUB (Barcelona)",
    description: "The dedicated infrastructure available to the UB group encompasses thin-film sputtering, evaporation, cleanroom photolithography, advanced spectroscopic platforms (PDS, variable-T PL/PLE), outdoor PV monitoring, and CCiTUB facilities.",
    facilities: [
      {
        facilityTitle: "Dedicated UB Group Infrastructure",
        items: [
          "ATC ORION 8 HV sputtering system (DC and RF) with four 3\" targets in confocal configuration and RF biasing of the substrate and heater up to 800 ºC.",
          "Thermal and e-beam evaporator systems located in a cleanroom.",
          "Spinner and photolithography equipment located in a cleanroom.",
          "UV / VIS / NIR LAMBDA 950 spectrophotometer with 150 mm integrating sphere.",
          "Filmetrics F20-UV reflectometer.",
          "I-V characteristics measurement system using Keithley SMU and AAA class solar illuminator based on LEDs with spectral modulation capability.",
          "Sinton Instruments lifetime measurement system (PCD, QSSPC) WCT-120, and Suns-Voc.",
          "Photothermal deflection spectroscopy (PDS).",
          "Photoluminescence and excited photoluminescence, time-resolved and T-dependence.",
          "Bentham PV300 external/internal quantum efficiency equipment.",
          "Cascade probe station, with triaxial probes, connected to a Keysight B1500 semiconductor device analyzer (optically connected to a high-resolution monochromator coupled to a CCD detector).",
          "Outdoor PV monitoring system on UB's rooftop platform, including a solar spectroradiometer and access to local meteorological data."
        ]
      },
      {
        facilityTitle: "Scientific and Technological Centers of the University of Barcelona (CCiTUB)",
        facilityDescription: "Access to advanced characterization techniques available at CCiTUB.",
        items: [
          "Electron microscopy: Transmission Electron Microscopy (TEM) and Scanning Electron Microscopy (SEM).",
          "Atomic force microscopy (AFM).",
          "Raman spectroscopy.",
          "Laser beam-induced photocurrent / photovoltage (LBIC/LBIV).",
          "Photoluminescence.",
          "X-ray-induced photoelectron spectroscopy (XPS).",
          "X-ray diffraction (XRD)."
        ]
      }
    ],
    specs: [
      "ATC ORION 8 HV confocal DC/RF Sputtering (up to 800 ºC), cleanroom thermal/e-beam evaporators & photolithography",
      "Photothermal Deflection Spectroscopy (PDS), Time-resolved/T-dependent PL/PLE, Bentham PV300 & LAMBDA 950 (150 mm sphere)",
      "Keysight B1500 analyzer with Cascade triaxial probe station, LED AAA Solar simulator, Suns-Voc & CCiTUB (TEM/SEM/XPS/XRD)"
    ],
    category: "Characterisation"
  },
  {
    id: "eq-cl-upm",
    name: "Centro Láser UPM Research Infrastructure & Laboratories",
    institution: "CL-UPM",
    institutionFull: "Centro Láser — Universidad Politécnica de Madrid",
    subproject: "sp4",
    locationInfo: "Centro Láser UPM (Campus Sur, Madrid) & Servicio de Metrología por Coordenadas Avanzada",
    description: "The experimental work will be carried out at the facilities of Centro Láser UPM, where laser systems (laser sources integrated with beam guidance and positioning systems) and characterization systems needed to achieve the expected results are available.",
    facilities: [
      {
        facilityTitle: "Ultrashort & Short Laser Workstations (Irradiations, Scribing, Printing & BA-LIFT)",
        items: [
          "Femtosecond laser workstation: equipped with a FemtoLux30 laser (Ekspla), emitting at 1030 nm tunable pulses of 350 fs – 1 ps of up to 100 μJ, external harmonic generator for 515 nm and 343 nm pulses, 6-axis motorized stage, vision system, fixed beam focusing lens (microscope objective) for high precision micromachining, and galvanometric scanner for fast IR/VIS processing.",
          "INNOLAS ILX picosecond laser workstation: equipped with a Superrapid ps-laser (Lumera), maximum power of 18 W, capable of emitting at 355 nm, 532 nm and 1064 nm, with cartesian positioning (430x555x127 mm) and vision system for sample alignment.",
          "Picosecond laser workstation: equipped with an Atlantic ps-laser (Ekspla), maximum power of 60 W, emitting at 355 nm, 532 nm and 1064 nm, with galvanometric scanner for IR/VIS and fixed lens for UV processing.",
          "Nanosecond laser irradiation systems for BA-LIFT: equipped with Spectra Physics lasers (Navigator, Explorer, Hippo) at 355 nm, 532 nm and 1064 nm, integrated into micromachining systems."
        ]
      },
      {
        facilityTitle: "New Metrology Lab (Servicio de Metrología por Coordenadas Avanzada, EQC2021-007644-P)",
        facilityDescription: "Completed in 2025 with state-of-the-art mechanical and optical measurement equipment.",
        items: [
          "Confocal microscopy: Sensofar Sneox 3D.",
          "Varifocal microscopy: Bruker-Alicona IF G5 Plus.",
          "Contact perfilometry: Taylor Hobson Model I-Series Pro."
        ]
      },
      {
        facilityTitle: "Materials & LIFT Transfer Dynamics Characterization",
        items: [
          "SEM/XRD: Hitachi 3000 N.",
          "Raman microscopy: Renishaw InVia MicroRaman.",
          "Electrical characterization: Keithley four-point measuring system.",
          "High-speed video system: Photron Fastcam Nova (recording up to 1.1 million fps for LIFT transfer process characterization)."
        ]
      }
    ],
    specs: [
      "Femtosecond Ekspla FemtoLux30 (1030/515/343 nm, 350 fs–1 ps, 6-axis stage, galvanometric scanner)",
      "Picosecond workstations: Lumera Superrapid (18 W) & Ekspla Atlantic (60 W) at 355/532/1064 nm + Spectra Physics ns lasers",
      "New 2025 Metrology Lab (Sensofar Sneox 3D, Bruker-Alicona IF G5+, Taylor Hobson), Renishaw Raman, SEM/XRD & Photron Nova (1.1M fps)"
    ],
    category: "Processing"
  }
];
