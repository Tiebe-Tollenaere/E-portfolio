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
    description: 'Een uitgebreide en responsieve portefeuillewebsite gebouwd met Angular en PrimeNG, zorgvuldig ontworpen om mijn vaardigheden, projecten, ervaringen en technische prestaties te showcasen. Ik heb Angular en PrimeNG specifiek gekozen als technologiestapel omdat deze technologieën actief werden gebruikt tijdens mijn stage bij Ingenix, waardoor ik praktijkervaring kon opdoen en mijn expertise met moderne frontendframeworks en componentbibliotheken kon verdiepen. Het project omvat een volledig uitgerust blogsysteem met individuele blogberichtpagina\'s, een op een tijdlijn gebaseerde weergave van vaardigheden en ervaring, een dynamische projectenportefeuille en een uitgebreid technisch vaardigheidendashboard. De website is gedeployeerd op GitHub Pages, wat zorgt voor gemakkelijke toegankelijkheid en deelbaarheid. Het implementatieproces maakt gebruik van GitHub Actions voor continue integratie en continue implementatie (CI/CD), waardoor ik vertrouwen kon krijgen met Infrastructure as Code-praktijken. Door geautomatiseerde CI/CD-pipelines te implementeren, leerde ik hoe ik de implementatiewerkstroom kon stroomlijnen, zodat updates van de portefeuille automatisch worden gebouwd, getest en gedeployeerd zonder handmatige tussenkomst. Dit project diende zowel als professionele portefeuille als een waardevolle leergelegenheid om mijn vaardigheden in moderne webontwikkelingspraktijken, op componenten gebaseerde architectuur en DevOps-principes te versterken.',
    technologies: ['Angular', 'PrimeNG', 'TypeScript', 'SCSS', 'GitHub Pages', 'GitHub Actions', 'CI/CD', 'Infrastructure as Code', 'Responsive Design', 'Single Page Application'],
    image: 'angularprimeng.png'
  },
  {
    id: 2,
    title: 'Project Build and Deploy (Howestprime)',
    description: 'Tijdens Project Build and Deploy heb ik een microservices-gebaseerd bioscoop-beheersplatform genaamd Howestprime ontwikkeld en getest, wat inhield dat ik een backoffice voor filmregistratie en eventplanning bouwde, "Microservice Movies" en "Microservice Ticketing" implementeerde met behulp van OpenAPI- en AsyncAPI-specificaties, en deze systemen in speciale ontwikkelings- en testomgevingen inzettte. Deze werden gebruikt door 2 frontend-applicaties en een mobiele applicatie. Het project omvatte ook de implementatie van CI/CD-pipelines en Infrastructure as Code met behulp van TerraForm, wat efficiënte en geautomatiseerde implementatieprocessen verzekerde.',
    technologies: ['Deno', '.OpenAPI/Swagger', 'Kotlin', 'MongoDB', 'PostgreSQL', 'Docker', 'TerraForm', 'GitHub Actions', 'Azure', 'TypeScript', 'Microservices', 'CI/CD', 'Infrastructure as Code', 'Message Brokers', 'Event-Driven Architecture'],
    image: 'bndproject.png'
  },
  {
    id: 3,
    title: 'Labyrinth Web Application',
    description: 'Samen met 5 andere studenten heb ik een webapplicatie voor een doolhofspel ontwikkeld. De applicatie werd gebouwd met CSS, JavaScript en HTML zonder het gebruik van frameworks. Het spel stelt gebruikers in staat om door een doolhof te navigeren, en de applicatie bevat functies zoals botsingsdetectie en een timer om de voortgang van de speler bij te houden. De backend werd gebouwd met Java die een set API\'s bood om de spelstatus te beheren en gebruikersinteracties af te handelen. Het project was een geweldige gelegenheid om onze kennis van webontwikkeling en Java-programmering in een samenwerkingsomgeving toe te passen.',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Java', 'APIs', 'Game Development', 'Web Development', 'Git'],
    image: 'labyrinth.png'
  },
  {
    id: 4,
    title: 'Adria - Remap',
    description: 'Samen met 5 andere studenten heb ik een webapplicatie in een post-apocalyptische setting ontwikkeld. We moesten een manier vinden om de aarde opnieuw te bevolken nadat deze was verwoest door een natuurramp. Alle mensheid was naar Mars gevlucht, maar we moesten een manier vinden om de aarde opnieuw te bevolken en te verkennen. We bedachten het idee van een Pokémon Go-achtig spel waar gebruikers de wereld zouden verkennen en verschillende doelstellingen en locaties zouden vinden die nog niet waren verkend in ruil voor beloningen. De applicatie werd gebouwd met een Java RESTful API-backend met SQLite als databasetechnologie met behulp van migraties. De frontend werd gebouwd met Vue.js en communiceerde met de backend via REST API\'s. Het project was een geweldige gelegenheid om onze kennis van zowel frontend- als backend-ontwikkeling toe te passen, evenals werken in een teamomgeving en versiebeheer gebruiken met Git. We hebben de volledige softwareontwikkelingscyclus ervaren, van planning en ontwerp tot implementatie en testen, en we leerden hoe we effectief als team konden samenwerken en communiceren om een succesvol project op te leveren.',
    technologies: ['Java', 'SQLIte', 'REST APIs', 'Git', 'Team Collaboration', 'JavaScript', 'HTML', 'CSS', 'Vue.js', 'Databases', 'Backend Development', 'Frontend Development', 'Full Stack Development', 'Gradle'],
    image: 'adria.png'
  },
  {
    id: 5,
    title: 'Local Docker Build Pipeline',
    description: 'Ik heb met drie andere studenten samengewerkt aan het ontwerp en de implementatie van een aangepast lokaal build pipeline-gereedschap in Go en de Docker CLI, met een configureerbare engine die opeenvolgende uitvoering ondersteunt, aanpasbare logboekniveaus (inclusief uitgebreide modus) output naar zowel terminal als bestanden, en optionele rapportgeneratie om lokale ontwikkelingswerkstromen te stroomlijnen. Het gereedschap was ontworpen om flexibel en aanpasbaar te zijn aan verschillende projectbehoeften, waardoor ontwikkelaars hun bouwprocessen gemakkelijk kunnen configureren en aanpassen. Door de kracht van Go en de Docker CLI te benutten, waren we in staat om een robuuste en efficiënte build pipeline te creëren die onze lokale ontwikkelingservaring aanzienlijk verbeterde.',
    technologies: ['Docker', 'Docker CLI / API / SDK', 'GitHub Actions', 'CI/CD', 'Containerization', 'DevOps', 'Go', 'Build Pipelines', 'Logging', 'Report Generation', 'Local Development'],
    image: 'report_pipeline.png'
  }
];
