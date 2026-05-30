export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'EPortfolio Website',
    description: 'Een responsive portfolio website gebouwd met Angular en PrimeNG om mijn vaardigheden, projecten en ervaring te tonen. Ik heb bewust gekozen voor deze stack omdat ik die ook tijdens mijn stage bij Ingenix gebruikte, waardoor ik er extra praktijkervaring mee kon opdoen. De site bevat een blog, een tijdlijn voor ervaring en studies, een projectenoverzicht en een technisch skills-dashboard. De website wordt gehost op GitHub Pages en automatisch gedeployed via GitHub Actions. Zo leerde ik werken met CI/CD en het automatiseren van builds en deployments zonder manuele tussenkomst. Dit project was zowel een portfolio als een leermoment rond moderne webontwikkeling en DevOps.',
    technologies: ['Angular', 'PrimeNG', 'TypeScript', 'SCSS', 'GitHub Pages', 'GitHub Actions', 'CI/CD', 'Infrastructure as Code', 'Responsive Design', 'Single Page Application'],
    image: 'angularprimeng.png'
  },
  {
    id: 2,
    title: 'Project Build and Deploy (Howestprime)',
    description: 'Tijdens Project Build and Deploy heb ik een microservices-gebaseerd cinema platform genaamd Howestprime ontwikkeld en getest, wat inhield dat ik een backoffice voor filmregistratie en eventplanning bouwde, "Microservice Movies" en "Microservice Ticketing" implementeerde met behulp van OpenAPI- en AsyncAPI-specificaties, en deze systemen in ontwikkelings- en testomgevingen deployde. Deze werden gebruikt door 2 frontend-applicaties en een mobiele applicatie. Het project omvatte ook de implementatie van CI/CD-pipelines en Infrastructure as Code met behulp van TerraForm, wat efficiënte en geautomatiseerde implementatieprocessen toeliet.',
    technologies: ['Deno', '.OpenAPI/Swagger', 'Kotlin', 'MongoDB', 'PostgreSQL', 'Docker', 'TerraForm', 'GitHub Actions', 'Azure', 'TypeScript', 'Microservices', 'CI/CD', 'Infrastructure as Code', 'Message Brokers', 'Event-Driven Architecture'],
    image: 'bndproject.png'
  },
  {
    id: 3,
    title: 'Labyrinth Web Application',
    description: 'Samen met 5 andere studenten heb ik een webapplicatie ontwikkeld om het spel Labyrinth te spelen. We hebben een Java RESTful API-backend gebouwd die een reeks API-endpoints biedt voor het beheren van het spel, inclusief het maken van nieuwe spellen, het uitvoeren van zetten en het ophalen van de huidige status van het spel. De frontend is gebouwd in pure HTML + CSS + JavaScript zonder gebruik te maken van een framework, en communiceert met de backend via REST API\'s. Het project was een geweldige gelegenheid om onze kennis van zowel frontend- als backend-ontwikkeling toe te passen, evenals werken in een teamomgeving en versiebeheer gebruiken met Git.',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Java', 'APIs', 'Game Development', 'Web Development', 'Git'],
    image: 'labyrinth.png'
  },
  {
    id: 4,
    title: 'Adria - Remap',
    description: 'Samen met 5 andere studenten heb ik een webapplicatie in een post-apocalyptische setting ontwikkeld. We moesten een manier vinden om de aarde opnieuw te bevolken nadat deze was verwoest door een natuurramp. Alle mensen waren naar Mars gevlucht, maar we moesten een manier vinden om de aarde opnieuw te bevolken en te verkennen. We bedachten het idee van een Pokémon Go-achtig spel waar gebruikers de wereld zouden verkennen en verschillende doelstellingen en locaties zouden vinden die nog niet waren verkend in ruil voor beloningen. De applicatie werd gebouwd met een Java RESTful API-backend met SQLite als databasetechnologie met behulp van migrations. De frontend werd gebouwd met Vue.js als framework en communiceerde met de backend via REST API\'s. Het project was een geweldige gelegenheid om onze kennis van zowel frontend- als backend-ontwikkeling toe te passen, evenals werken in een teamomgeving en versiebeheer gebruiken met Git. We hebben de volledige softwareontwikkelingscyclus ervaren, van planning en ontwerp (UI/UX, Wireframes, Business-strategie) tot implementatie en testen, en we leerden hoe we effectief als team konden samenwerken en communiceren om een succesvol project op te leveren.',
    technologies: ['Java', 'SQLIte', 'REST APIs', 'Git', 'Team Collaboration', 'JavaScript', 'HTML', 'CSS', 'Vue.js', 'Databases', 'Backend Development', 'Frontend Development', 'Full Stack Development', 'Gradle'],
    image: 'adria.png'
  },
  {
    id: 5,
    title: 'Local Docker Build Pipeline',
    description: 'Ik heb met drie andere studenten samengewerkt aan het ontwerp en de implementatie van een lokaal build pipeline-tool in Go en die communiceert met Docker via de Docker CLI, met een configureerbare yaml-bestand dat opeenvolgende uitvoering ondersteunt, aanpasbare logboekniveaus (inclusief uitgebreide logs) output naar zowel terminal als bestanden, en optionele rapportgeneratie om lokale ontwikkeling van software te verbeteren. De tool was ontworpen om flexibel en aanpasbaar te zijn aan verschillende projectbehoeften, waardoor ontwikkelaars hun CI/CD-pipelines gemakkelijk kunnen configureren en aanpassen. Door de kracht van Go en de Docker CLI te benutten, waren we in staat om een robuuste en efficiënte build pipeline te maken die de lokale ontwikkelingservaring verbeterde.',
    technologies: ['Docker', 'Docker CLI / API / SDK', 'GitHub Actions', 'CI/CD', 'Containerization', 'DevOps', 'Go', 'Build Pipelines', 'Logging', 'Report Generation', 'Local Development'],
    image: 'report_pipeline.png'
  }
];
