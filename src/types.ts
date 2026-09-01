export type SubprojectId = 'sp1' | 'sp2' | 'sp3' | 'sp4';

export type PageTab = 'overview' | 'subprojects' | 'consortium' | 'publications' | 'news' | 'equipment' | 'contact';

export interface Subproject {
  id: SubprojectId;
  code: string;
  referenceCode: string;
  title: string;
  titleCa?: string;
  institution: string;
  institutionFull: string;
  leadPi: string;
  pi1: string;
  pi1Role?: string;
  pi2: string;
  pi2Role?: string;
  fundingAmount: string;
  fundingBudgetEur?: number;
  durationMonths?: number;
  color: string;
  bgLight: string;
  borderAccent: string;
  summary: string;
  objectives: string[];
  keyMaterials: string[];
  workPackages: {
    code: string;
    name: string;
    leader: string;
  }[];
}

export interface Institution {
  id: string;
  code: string;
  name: string;
  nameCa?: string;
  role: string;
  subprojectId?: SubprojectId;
  city: string;
  address: string;
  website: string;
  mapQuery: string;
  accentColor: string;
}

export interface ParticipatingMember {
  id: string;
  name: string;
  subproject: SubprojectId;
  institution: string;
  category: 'International Experts' | 'Senior Faculty' | 'Research Personnel' | 'Predoctoral Researchers' | 'Technical & Cleanroom Staff' | 'Planned Recruitments';
  role: string;
  affiliation?: string;
  specialty?: string;
  details?: string;
  avatarInitials?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  subproject: SubprojectId;
  institution: string;
  role: string;
  isPi?: boolean;
  avatarInitials: string;
  email?: string;
  orcid?: string;
  scholar?: string;
  specialty?: string;
}

export interface Publication {
  id: string;
  subproject?: SubprojectId;
  year: number;
  title: string;
  authors: string;
  venue: string;
  type: 'journal' | 'conference' | 'dataset' | 'preprint';
  doi?: string;
  url?: string;
  highlight?: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: 'Milestone' | 'Meeting' | 'Publication' | 'Event';
  subproject?: SubprojectId;
  badgeColor?: string;
  linkUrl?: string;
  linkText?: string;
}

export interface EquipmentFacility {
  facilityTitle: string;
  facilityDescription?: string;
  items: string[];
}

export interface Equipment {
  id: string;
  name: string;
  institution: string;
  institutionFull?: string;
  subproject: SubprojectId;
  locationInfo?: string;
  description: string;
  facilities?: EquipmentFacility[];
  specs: string[];
  category: 'Growth' | 'Processing' | 'Characterisation' | 'Integration';
}

export interface SemiconductorMaterial {
  id: string;
  name: string;
  formula: string;
  bandgapEg: number; // in eV
  bandgapType: 'Direct' | 'Indirect';
  breakdownField: number; // MV/cm
  electronMobility: number; // cm²/V·s
  thermalConductivity: number; // W/m·K
  color: string;
  description: string;
  applications: string;
}

export interface GrantInfo {
  projectAcronym: string;
  fullTitle: string;
  fullTitleCa: string;
  reference: string;
  callName: string;
  callCode: string;
  callYear: number;
  callUrl: string;
  agencyName: string;
  ministryName: string;
  fundingProgram: string;
  coordinatorInstitution: string;
  totalFunding?: string;
  durationMonths: number;
  startDate: string;
  endDate: string;
  officialFundingClause: string;
  officialFundingClauseCa: string;
}
