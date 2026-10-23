import experiencesJson from "./tourismExperiences.json";

export interface TourismExperienceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  destinations: string[];
  icon: string;
  image: string;
  link: string;
  referenceUrl: string;
  gridArea: string;
  badgeColor: string;
}

export const TOURISM_EXPERIENCES: TourismExperienceItem[] = experiencesJson as TourismExperienceItem[];
