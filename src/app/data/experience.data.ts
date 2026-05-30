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
    description: 'Meegewerkt aan full-stack projecten met moderne webtechnologieën zoals Angular 21, PrimeNG en .NET. Praktische ervaring opgedaan in het volledige softwareontwikkelingsproces en bijgedragen aan interne applicaties die binnen het bedrijf gebruikt worden.'
  },
  {
    title: 'Student Worker @ Carrefour',
    duration: 'Zomer - 2022/2023/2024/2025',
    description: 'Klantenservice en ondersteuning bij de dagelijkse werking van de winkel.'
  },
  {
    title: 'IT Helpdesk Intern @ Politiezone Tielt',
    duration: 'Januari 2023',
    description: 'Technische ondersteuning geboden en meegeholpen bij het oplossen van problemen voor eindgebruikers.'
  }
];

export const educationData: TimelineItem[] = [
  {
    title: 'Computer Science Bachelor @ Howest',
    duration: '2023 - 2026',
    description: 'Brede opleiding in informatica met focus op web- en softwareontwikkeling, aangevuld met kennis van cloud computing, DevOps, AI en cybersecurity.'
  },
  {
    title: 'Secondary Education @ RP Tielt',
    duration: '2017 - 2023',
    description: 'Secundair onderwijs met focus op ondernemen en informatica.'
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
