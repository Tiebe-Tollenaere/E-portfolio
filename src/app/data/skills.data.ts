export interface Skill {
  category: string;
  items: string[];
}

export const skillsData: Skill[] = [
  {
    category: 'Languages',
    items: ['JavaScript / TypeScript', 'Python', 'Java', 'C#']
  },
  {
    category: 'Frameworks',
    items: ['Vue', 'Angular', '.NET']
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MS SQL Server', 'MongoDB', 'Redis']
  },
  {
    category: 'Other',
    items: ['Git', 'Docker', 'Kubernetes', 'Azure', 'Terraform']
  }
];
