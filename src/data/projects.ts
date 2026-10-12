import dashboardImage from '../../images/dashboard.webp'
import mcdImage from '../../images/mcd.webp'
import todoImage from '../../images/maquette_todo.webp'
import demoVideo from '../../images/Video_demo.mp4'

export interface Project {
  slug: string
  title: string
  competency: string
  description: string
  role: string
  technologies: string[]
  link?: string
  images?: { src: string; alt: string }[]
  video?: string
  skills: string[]
}

export const projects: Project[] = [
  {
    slug: 'erp-iut',
    title: 'Projet ERP IUT - SAE A2',
    competency: 'C1 - Réaliser un développement d’application',
    description:
      "Application web de gestion des fiches ressources et des modalités de contrôle des connaissances pour l'IUT de Limoges.",
    role: 'Développeur full-stack au sein d’une équipe de six personnes. J’ai participé au recueil des besoins, à la conception des MCD, aux maquettes, aux dashboards et aux formulaires.',
    technologies: ['Vue.js', 'API REST', 'Java Spring Boot', 'Git'],
    link: 'https://github.com/mgorce4/sae_A2',
    images: [
      { src: dashboardImage, alt: 'Dashboard de l’application ERP' },
      { src: mcdImage, alt: 'Diagramme MCD de l’application ERP' },
    ],
    skills: ['Conception d’architecture logicielle', 'Développement d’interfaces utilisateurs', 'Collaboration en équipe agile',],
  },
  {
    slug: 'todolist',
    title: 'Projet TodoList',
    competency: 'C1 - Réaliser un développement d’application',
    description: 'Application mobile de gestion de tâches avec une base de données locale.',
    role: 'Développeur solo, responsable des maquettes, du MCD et du développement de l’application.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room'],
    link: 'https://github.com/njacquet87/Projet-R4.11-ToDoList',
    images: [{ src: todoImage, alt: 'Maquette de l’application TodoList' }],
    video: demoVideo,
    skills: ['Conception d’interface mobile', 'Gestion de données locales', 'Bonnes pratiques de programmation'],
  },
  {
    slug: 'sae-1-02',
    title: 'SAE 1.02 - Jeux et algorithmes',
    competency: 'C2 - Optimiser des applications',
    description: 'Création de mini-jeux en console puis amélioration des algorithmes et des robots adverses.',
    role: 'Développement des jeux de devinettes et d’allumettes, des robots et des améliorations algorithmiques.',
    technologies: ['Python', 'Algorithmes'],
    link: 'https://github.com/njacquet87/S1.01',
    skills: ['Analyse de la vitesse des algorithmes', 'Optimisation de code', 'Travail en équipe'],
  },
  {
    slug: 'sae-1-04',
    title: 'SAE 1.04 - Données',
    competency: 'C4 - Gérer des données',
    description: 'Extraction de données CSV, conception de tables SQL et création de requêtes de visualisation.',
    role: 'Extraction des données en pair working et écriture des requêtes SQL.',
    technologies: ['CSV', 'SQL Server', 'Bases de données relationnelles'],
    link: 'https://github.com/njacquet87/S1.04',
    skills: ['Conception de bases relationnelles', 'Interrogation et visualisation de données'],
  },
  {
    slug: 'sae-2-05',
    title: 'SAE 2.05 - Gestion de projet',
    competency: 'C5 - Conduire un projet',
    description: 'Analyse des besoins d’une agence immobilière fictive et proposition d’une stratégie numérique.',
    role: 'Réalisation de l’analyse et utilisation des outils de gestion pour produire le compte rendu.',
    technologies: ['SWOT', 'CQQCOQP', 'SMART', 'RACI', 'Gantt'],
    link: 'https://github.com/njacquet87/S2.05',
    skills: ['Analyse de besoins', 'Planification', 'Gestion de projet'],
  },
]
