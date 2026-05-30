export interface BlogPost {
  id: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  content: string;
  images: string[];
  slug: string;
  link?: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: 'hackathon',
    title: 'Lost in the deep: codeerexpeditie naar Atlantis',
    date: '12 november 2025',
    location: 'Hackathon',
    slug: 'lost-in-the-deep-hackathon',
    excerpt: 'Mijn eerste hackathon ervaring bij Hack The Future in Antwerpen - een interessante programmeeruitdaging.',
    images: ['hackathon_1.jpg', 'hackathon_2.jpg'],
    content: `Op 12 november 2025 heb ik de Hack The Future hackathon bijgewoond in Antwerpen. Dit was voor mij mijn allereerste hackathon, dus het was best wel spannend.

Voor deze hackathon kon je enkele challenges uitkiezen. De uitdaging die ik uiteindelijk heb gedaan was 'Lost in the deep: codeerexpeditie naar Atlantis'. In deze challenge was het de bedoeling om een viertal opdrachten op te lossen. Dit was een soort van programmeercompetitie gelijkaardig aan de Vlaamse programmeerwedstrijd. Het team dat de meest performante oplossing had en die het snelst kon indienen, zou de winnaar worden. Spoiler alert: dat waren wij niet.

Om 9 uur startte de hackathon met een korte speech en een verwelkoming door de organisatie. Vervolgens werden we allemaal begeleid naar onze challenge room om daar onze opdrachten op te lossen. Om 10 uur begon het echte hackwerk. We doken er meteen vol in en na twintig minuten hadden we de eerste challenge al volledig opgelost. Deze opdracht was een Caesar Cipher. De tweede challenge was iets wiskundiger. Hierbij moesten we ervoor zorgen dat de duikboot die naar Atlantis dook stabiel bleef. Dit deden we met data die we kregen van een API, waarop we enkele berekeningen moesten uitvoeren. Deze opdracht verliep minder vlot dan de eerste, maar na wat trial and error zijn we er uiteindelijk toch geraakt.

Na het voltooien van de tweede challenge was het middag. Tijdens de pauze kregen we een broodje en konden we de Antwerpse Zoo bezoeken. Na de middag doken we meteen weer in de opdrachten. Challenge 3 bleek de moeilijkste te zijn. Deze hebben we dan ook niet kunnen oplossen. Van de 18 teams binnen onze challenge waren er maar twee die deze succesvol afrondden. De rest van de namiddag hebben we gespendeerd aan het optimaliseren van onze code.

Na de challenges konden we onze presentaties voorbereiden en geven. Het was heel boeiend om eens te luisteren naar de andere groepen om te horen hoe zij hun opdrachten hadden aangepakt en welke techstack ze gebruikten. Het was ook heel interessant om van de twee winnende groepen te horen hoe zij de derde challenge tot een goed einde hebben gebracht. Na de presentaties volgden het avondeten en de awarduitreiking.

Hack The Future was voor mij heel leuk om te doen. Het was een volledig nieuwe ervaring. De codeerexpeditie was een fijne challenge, al zaten er nog andere opdrachten tussen die mij achteraf gezien ook heel uitdagend leken. Hack The Future was zeker de moeite waard en ik zal in de toekomst zeker nog aan andere hackathons meedoen. Al bij al was het een zeer geslaagd evenement!`
  },
  {
    id: 'open-minds-open-models',
    title: 'Open Minds, Open Models – mijn ervaring bij deze fantastische Tech&Meet sessie!',
    date: '28 oktober 2025',
    location: 'Tech&Meet',
    slug: 'open-minds-open-models',
    excerpt: 'Een diepgaande kijk op open source AI modellen en het Hugging Face ecosysteem met ML engineer Niels Rogge.',
    images: ['tech&meet_OpenMindsOpenModels.jpg'],
    content: `Op 28 oktober 2025 woonde ik de Tech&Meet sessie over Open Minds, Open Models bij. Deze avond werd gehost door Howest en de spreker was Niels Rogge, een ML engineer bij ML6 en Hugging Face.

Iedereen komt tegenwoordig in aanraking met AI, zowel in het privéleven als op het werk. Ik ben naar deze sessie gegaan om wat meer te weten te komen over open source AI modellen en het volledige tech ecosysteem daarrond. Om hier iets over bij te leren was dus fantastisch.

Tijdens de sessie kwamen verschillende topics aan bod, zoals het verschil tussen open source, closed source en open weight modellen. Open source AI modellen zijn modellen die gratis gebruikt kunnen worden en die hun trainingsdata bekendmaken voor anderen. Open weight modellen daarentegen zijn ook gratis te gebruiken, maar geven hun trainingsdata niet openbaar vrij.

Ook de geschiedenis van open LLM's werd besproken. We leerden welke tools je kan gebruiken om aan inference te doen, zoals vLLM, SGLang, Llama cpp en nog enkele andere. Daarnaast werd het volledige ecosysteem rond Hugging Face, de GitHub van AI en machine learning, besproken. Je kan er onder andere datasets, modellen, spaces en een groeiende community vinden.

Tijdens de sessie werden ook de recentste onderwerpen en trends binnen artificiële intelligentie aangehaald. Denk maar aan LLM's die efficiënter worden zodat ze ook op minder krachtige hardware zoals een smartphone lokaal kunnen draaien. Ook het feit dat LLM's steeds vaker gebruikmaken van voice en image capture kwam aan bod. Daarnaast is beeld en videogeneratie iets dat recent sterk is opgekomen. AI en machine learning zijn natuurlijk niet enkel voor tekst en afbeeldingen, maar worden ondertussen ook volop ingezet binnen de robotica.

Ik heb die avond veel bijgeleerd over Hugging Face en het open source ecosysteem. Ik had voordien wel al vaag van Hugging Face gehoord, dus het was heel fijn om hier dieper op in te gaan. Het was een uiterst interessante Tech&Meet en ik kijk al uit naar de volgende sessies!`
  },
  {
    id: 'dotnet10-demystified',
    title: '.NET10 Demystified',
    date: '18 november 2025',
    location: 'Tech&Meet',
    slug: 'dotnet10-demystified',
    excerpt: 'Een verkenning van alle nieuwe features in .NET 10 met .NET expert Kevin De Rudder.',
    images: ['tech&meet_NET10Demystified.jpg', 'tech&meet_NET10Demystified_Screenshot.jpg'],
    content: `Op 11 november stond er weer een Tech&Meet op het programma. Deze sessie ging over alle nieuwe snufjes in .NET 10, de nieuwste .NET versie die de week voordien werd gelanceerd door Microsoft. Dit was mijn eerste sessie over software development, dus ik keek er sterk naar uit. De avond werd geleid door Kevin De Rudder, een .NET expert en een van de organisatoren van Techorama. Deze sessie sprak mij enorm aan omdat .NET een van de meest gebruikte frameworks is in het softwarelandschap binnen België. Dit zal dus ook zeker van pas komen tijdens mijn stage.

Kevin begon met een korte geschiedenis van .NET. Hij legde uit dat .NET initieel de focus legde op het Windows besturingssysteem. Sinds 2016 is .NET echter open source, waardoor het framework ook perfect werkt op andere besturingssystemen zoals Linux en MacOS. Ondertussen is .NET uitgegroeid tot een van de meest gebruikte technologieën met een enorm ecosysteem aan tools en libraries. Je kan er eenvoudig een API mee bouwen aan de hand van een Minimal API, en heb je nood aan een webapplicatie, dan kan je dit doen via Blazor.

Kevin legde ook duidelijk het verschil uit tussen C# en .NET, iets dat soms door elkaar wordt gehaald. C# is de belangrijkste programmeertaal binnen het .NET ecosysteem.

Met de nieuwste versie van .NET is dit framework een stuk veiliger geworden dankzij quantumcryptografie. Ook de snelheid werd drastisch verbeterd. Aangezien AI tegenwoordig de nieuwste hype is, gaat .NET hierin mee via LINQ. LINQ ondersteunt nu vector searches, wat ideaal is voor RAG (Retrieval Augmented Generation).

Ook in de nieuwste versie van C# zitten enkele nieuwe features. Extension members zijn nu mogelijk, terwijl dit voordien enkel extension methods waren. Daarnaast is er een verbetering voor de validatie op null waarden aan de hand van de null conditional operator ?.= .

Ik vond deze sessie zeer boeiend. De vorm van deze Tech&Meet was ook anders dan anders. Het was geen gewone PowerPointpresentatie, maar een interactieve sessie aan de hand van een live demo. Kevin maakte live een soort van Spotify kloon met de Spotify API. Direct na de sessie konden we onze kennis testen via een quiz met enkele leuke prijzen. Ik ben uiteindelijk op de zesde plaats geëindigd!`
  },
  {
    id: 'transitioning-to-ipv6',
    title: 'Transitioning to IPv6 – mijn ervaring bij deze boeiende Tech&Meet sessie.',
    date: '25 november 2025',
    location: 'Tech&Meet',
    slug: 'transitioning-to-ipv6',
    excerpt: 'Een inleiding in de transitie van IPv4 naar IPv6 en het belang hiervan voor developers.',
    images: ['tech&meet_IPv6.jpg'],
    content: `Na mijn eerdere ervaringen met AI en hackathons, woonde ik onlangs een Tech&Meet sessie bij over de transitie naar IPv6. De sessie werd gegeven door Nico Declerck, een ervaren lector aan Howest met een enorme passie voor netwerken. Hoewel ik zelf het keuzetraject Software Engineer volg en netwerken niet mijn hoofdfocus is, was ik erg benieuwd naar de impact van dit onderwerp op ons dagelijkse werk.

Ik ben naar deze sessie gegaan omdat we in de techwereld vaak horen dat IPv4 op is, maar ik wilde wel eens weten wat dat nu concreet betekent voor ons als developers. De sessie begon met een duidelijke uitleg over de 'death of IPv4'. Door het enorme tekort aan adressen en de afhankelijkheid van verouderde technieken zoals NAT, is de overstap naar IPv6 niet langer een keuze maar een absolute noodzaak geworden, legde Nico uit.

Tijdens de avond kwamen verschillende interessante onderwerpen aan bod. Zo werd eerst het probleem van het adrestekort uitgelegd. IPv4 raakt simpelweg uitgeput omdat er niet genoeg unieke adressen beschikbaar zijn voor alle apparaten wereldwijd. IPv6 biedt hiervoor een oplossing door een bijna onbeperkte hoeveelheid adressen mogelijk te maken. Daarnaast werd het concept van Dual Stack toegelicht, wat voor mij nieuw was. Dit houdt in dat IPv4 en IPv6 gelijktijdig gebruikt worden, zodat organisaties geleidelijk kunnen overstappen zonder hun volledige infrastructuur in éen keer te moeten aanpassen. Tot slot werden er ook praktische aspecten van de transitie besproken, waarbij Nico handige tips gaf over hoe zowel grote als kleine organisaties de overstap kunnen aanpakken en welke risico's daarbij komen kijken.

Wat ik vooral meeneem uit deze sessie, is dat IPv6 niet alleen een netwerkdingetje is. Als Software Engineer is het cruciaal dat de applicaties die wij bouwen klaar zijn voor de toekomst. We moeten ervoor zorgen dat onze software probleemloos werkt met beide protocollen. Het was interessant om te zien dat zelfs kleine bedrijven hier nu volop mee bezig zijn.

Aan het begin van de avond wist ik nog niet zo veel over de technische kant van IP adressen, maar dankzij de heldere uitleg van Nico is het belang van deze transitie me helemaal duidelijk geworden. Het was weer een geslaagde Tech&Meet sessie waar ik veel van heb opgestoken. Ik kijk alvast uit naar de volgende editie!`
  },
  {
    id: 'deepseek-uncovered',
    title: 'DeepSeek Uncovered',
    date: '09 december 2025',
    location: 'Tech&Meet',
    slug: 'deepseek-uncovered',
    excerpt: 'Een diepgaande analyse van DeepSeek, de Chinese AI model die de tech wereld op zijn kop zette.',
    images: ['tech&meet_Deepseek_1.jpg', 'tech&meet_Deepseek_2.jpg'],
    content: `Op 9 december woonde ik mijn derde Tech&Meet sessie bij, namelijk DeepSeek Uncovered. Deze sessie sprak mij aan, net als Open Minds en Open Models, omdat het AI ecosysteem voortdurend evolueert. Als je je niet blijft bijscholen en je AI kennis up-to-date houdt, ben je snel niet meer mee met wat er allemaal gebeurt. Aangezien ik zelf nog nooit gebruik had gemaakt van DeepSeek, de Chinese tegenhanger van ChatGPT, was mijn interesse meteen gewekt.

De spreker van de avond was Dimitri Casier, lector aan Howest. Het is altijd leerrijk en leuk om naar hem te luisteren. Ik heb de afgelopen jaren al verschillende vakken van hem gevolgd, van Web Development tot Applied AI, dus ik wist dat de uitleg zowel technisch sterk als vlot zou zijn.

Dimitri legde uit waarom DeepSeek begin 2025 plotseling de hele AI wereld op zijn kop zette. DeepSeek ontwikkelt voornamelijk open source AI modellen die de strijd aangaan met gevestigde Amerikaanse waarden zoals OpenAI, Anthropic en Google. Het sterkste model dat DeepSeek tot nu toe heeft uitgebracht is het R1 model. Wat dit model speciaal maakt, is dat het met aanzienlijk minder budget en minder pure rekenkracht is ontwikkeld, terwijl de prestaties enorm sterk zijn. Doordat dit model open source is gemaakt, kan in theorie iedereen dit lokaal op hun eigen computer draaien. Alhoewel dit voor de meeste consumenten niet haalbaar is door de gigantische grootte van het model.

Er werd ook dieper ingegaan op de politieke kant van het verhaal. Aangezien DeepSeek van Chinese makelij is, verbieden veel westerse overheden hun medewerkers om de tool te gebruiken uit schrik voor spionage of datadiefstal. Dit is natuurlijk een tweesnijdend zwaard, want de data die al deze commerciële bedrijven binnenkrijgen, wordt door hen geanalyseerd. Het grote voordeel dat DeepSeek hier aanbiedt met zijn open source modellen, is dat je de code volledig lokaal kunt draaien waardoor de data jouw computer nooit hoeft te verlaten. De echte reden voor het verbod ligt dan ook eerder bij de geopolitieke spanningen tussen het Westen en China.

Dit was mijn tweede Tech&Meet sessie over AI en ook uit deze heb ik veel bruikbare inzichten gehaald. Vooraf wist ik nog niet veel over DeepSeek, maar ik ga er nu zeker eens mee experimenteren!`
  },
  {
    id: 'e-portfolio',
    title:'E-portfolio: hoe is het tot stand gekomen?',
    date: '01 juni 2026',
    location: 'E-portfolio',
    slug: 'e-portfolio-hoe-is-het-tot-stand-gekomen',
    excerpt: 'Een kijkje achter de schermen van mijn E-portfolio project, van concept tot realisatie.',
    images: ['eportfolio_1.png'],
    content: `Als opdracht voor het vak Professional Networking kreeg ik de taak om dit e-portfolio te realiseren. Dit bleek niet alleen een zeer interessante opdracht te zijn, maar het is ook een ontzettend nuttig platform om mijn toekomstige blogs en projecten op te publiceren.

Ik heb deze kans gegrepen om mezelf een volledig nieuwe technologie aan te leren, namelijk Angular 21 in combinatie met de component library PrimeNG. Aangezien dit de techstack is die op mijn toekomstige stageplaats wordt gebruikt, was dit het ideale moment om al eens in aanraking te komen met deze technologieën. Mijn doel was om hier vooraf al zoveel mogelijk van op te steken, en dat is absoluut gelukt. Als hostingplatform heb ik uiteindelijk gekozen voor GitHub Pages. Deze keuze werd gedreven door mijn sterke interesse in Infrastructure as Code en CI/CD pipelines. Tegenwoordig is het deploymentproces van applicaties, API's en databases immers bijna volledig geautomatiseerd aan de hand van dit soort pipelines, en ik wilde die best practices hier meteen toepassen.

Tijdens het ontwikkelen van de applicatie stuitte ik uiteraard op enkele uitdagingen. Dat is volkomen normaal wanneer je met een voor jou compleet nieuw framework werkt. Dankzij de duidelijke structuur die Angular aanbiedt, konden deze bugs en fouten echter snel worden opgelost. In vergelijking met Vue.js vind ik Angular persoonlijk een heel fijn en logisch framework om te begrijpen. Tijdens het coderen heb ik bovendien intensief gebruikgemaakt van AI tools zoals Gemini en GitHub Copilot. Het slim inzetten van deze assistenten heeft mijn developmentproces aanzienlijk versneld, een vaardigheid die ook in mijn latere carrière ongetwijfeld van pas zal komen.

Om de website toekomstbestendig te maken, heb ik de architectuur zo gestructureerd dat ik heel eenvoudig nieuwe blogposts kan toevoegen zonder de HTML code telkens te moeten aanpassen. De data is volledig dynamisch opgebouwd. Het toevoegen van een nieuwe blog is simpelweg een kwestie van een nieuw object aanmaken in een array en dit aanvullen met de juiste properties, zoals de titel, de datum, eventuele afbeeldingen en de tekst zelf. Het Angular component doet vervolgens de rest van het werk.


Dit project was een enorm leerrijke ervaring. Ik heb niet alleen mijn kennis over Angular, PrimeNG en TypeScript flink uitgebreid, maar ik heb ook geleerd hoe je AI-tools efficiënt inzet als programmeerpartner. Deze waardevolle bagage neem ik gegarandeerd mee naar mijn stage en mijn toekomstige werkplek!
` 
  },
  {
    id: 'spotify-podcast',
    title: 'Spotify Podcast -  Agile zonder hype: werkt Scrum echt?',
    date: '25 mei 2026',
    location: 'Spotify Podcast',
    slug: 'spotify-podcast-agile-zonder-hype-werkt-scrum-echt',
    excerpt: 'Een diepgaande discussie over Agile werken en de realiteit van Scrum in de praktijk, met inzichten van Pieter Van Compernolle.',
    images: ['spotify.png'],
    link: 'https://open.spotify.com/episode/1gQ9DBDX0JHlGLV8FVtdF9',
    content: `Voor het vak Professional Networking hebben Jitse Vanhoutte en mezelf een podcast opgenomen waarin we dieper duiken in de wereld van software engineering. We hadden het genoegen om te spreken met Pieter Van Compernolle, al 20+ jaar actief bij Skyline Communications en momenteel Product Owner van het DataMiner-platform.

Tijdens dit boeiende gesprek ontdekten we hoe Agile werken er op grote schaal écht uitziet. Pieter legde ons uit dat ze bij Skyline niet projectmatig werken, maar focussen op continue productontwikkeling. Hierbij staat 'usage' (hoe intensief een feature gebruikt wordt) centraal als de ultieme graadmeter voor succes. Daarnaast bespraken we het verschil tussen Scrum (ideaal voor nieuwe features) en Kanban (perfect voor continue software-evoluties en flow) , en hoe belangrijk het is om Agile frameworks niet blind volgens het boekje te volgen, maar aan te passen aan wat werkt voor jouw team. 

Het was een ontzettend leerrijke ervaring die ons een unieke blik achter de schermen gaf van een groot softwarebedrijf. De inzichten over stakeholder management, het omarmen van veranderende klanteneisen en de impact van AI op de snelheid van development nemen we absoluut mee naar onze eigen stages en latere loopbaan! 

Je kan de podcast via deze link terugvinden: <a href="https://open.spotify.com/episode/1gQ9DBDX0JHlGLV8FVtdF9" target="_blank">Spotify Podcast: Agile zonder hype</a>

Benieuwd naar andere afleveringen van de Howest IT Student podcast? <a href="https://open.spotify.com/show/7HVRINnrOMwIpJrvJMojTx?si=LoTrqTP_T3-ZdRvYzhgmMg&nd=1&dlsi=1debad4be6d64f8d" target="_blank">Spotify Podcast: Howest IT Student podcast</a>
`

  }
];
