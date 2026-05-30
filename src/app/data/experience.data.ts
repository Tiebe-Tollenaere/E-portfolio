export interface SkillWithProficiency {
  name: string;
  proficiency: number;
}

export interface TimelineItem {
  title: string;
  duration: string;
  description: string;
}

export const workExperienceData: TimelineItem[] = [
  {
    title: 'Software Intern @ Ingenix',
    duration: 'FEBRUARI 2026 - MEI 2026',
    description: 'Werken aan full-stack development projecten met behulp van moderne webtechnologieën zoals Angular21, PrimeNG en .NET. Praktijkervaring opdoen in de softwareontwikkelingscyclus en bijdragen aan real-world applicaties die intern door het bedrijf worden gebruikt.'
  },
  {
    title: 'Student Worker @ Carrefour',
    duration: 'Zomers - 2022/2023/2024/2025',
    description: 'Ervaring met retailoperaties en klantenservice tijdens zomervakanties.'
  },
  {
    title: 'IT Helpdesk Intern @ Politiezone Tielt',
    duration: 'Januari 2023',
    description: 'Technische ondersteuning en probleemoplossing aangeboden voor eindgebruikers.'
  }
];

export const educationData: TimelineItem[] = [
  {
    title: 'Computer Science Bachelor @ Howest',
    duration: '2023 - 2026',
    description: 'Uitgebreid informaticaprogramma gericht op web- en softwareontwikkeling. Met een introductie tot cloud computing en DevOps-praktijken in het curriculum evenals AI en cybersecurity.'
  },
  {
    title: 'Secondary Education @ RP Tielt',
    duration: '2017 - 2023',
    description: 'Middelbaaronderwijs met focus op ondernemen en informatica.'
  }
];

export const technicalSkillsData: SkillWithProficiency[] = [
  { name: 'JavaScript', proficiency: 85 },
  { name: 'TypeScript', proficiency: 75 },
  { name: 'Python', proficiency: 50 },
  { name: 'Java', proficiency: 70 },
  { name: 'Go', proficiency: 40 },
  { name: 'C#', proficiency: 80 },
  { name: '.NET', proficiency: 70 },
  { name: 'Angular', proficiency: 80 },
  { name: 'Vue.js', proficiency: 65 },
  { name: 'PrimeNG', proficiency: 70 },
  { name: 'SQL', proficiency: 85 },
  { name: 'NoSQL', proficiency: 60 },
  { name: 'MongoDB', proficiency: 50 },
  { name: 'PostgreSQL', proficiency: 65 },
  { name: 'MS SQL Server', proficiency: 75 },
  { name: 'Docker', proficiency: 65 },
  { name: 'Git', proficiency: 80 },
  { name: 'CI/CD', proficiency: 60 },
  { name: 'Terraform', proficiency: 40 },
  { name: 'Azure', proficiency: 30 }
];
