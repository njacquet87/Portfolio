<script setup lang="ts">
import ProjectCard from '../Components/ProjectCard.vue'
import { projects } from '../data/projects'
import Presentation from './Presentation.vue'
</script>

<template>
  <main>
    <Presentation />
    <section id="profil">
      <h2>Profil</h2>
      <hr />
      <p>
        Je suis Noé Jacquet, étudiant en BUT informatique, parcours « Réalisation d’applications :
        conception, développement, validation », à l’université de Limoges.
      </p>
      <p>Je souhaite me spécialiser dans le développement d’applications web, mobiles et de logiciels.</p>
    </section>

    <section id="projets">
      <h2>Projets</h2>
      <hr />
      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </section>

    <section id="stage">
      <h2>Stage développeur Fullstack chez Dotsafe</h2>
      <hr />
      <p>Stage de 2ème année de BUT Informatique effectué du 7 avril au 12 juin 2026 chez Dotsafe, entreprise spécialisée dans le développement de solutions web en SaaS, située à Bordeaux. J'ai travaillé en tant que développeur Fullstack au sein d'une équipe de 3 développeurs sur deux projets : Youschoool, une plateforme de formation en ligne, et le site vitrine de Dotsafe.</p>
      <br>
      <p>Sur Youschoool, j'ai développé une fonctionnalité de prise de rendez-vous entre élèves et professeurs via Google Calendar, en travaillant sur le back-office (Symfony/Twig) et le front-end (Angular), ainsi que sur l'API REST développée avec API Platform. J'ai aussi écrit des tests unitaires avec Vitest pour augmenter le coverage de 0% à 40%, et créé une modale de notification pour encourager les utilisateurs à poster leur première publication envoyée sur le front-end grâce à une commande symfony.</p>
      <br>
      <p>Sur le site de Dotsafe, j'ai amélioré le score Agent Ready du site de 0 à 83 points en configurant le fichier robots.txt, un sitemap, la négociation de contenu en Markdown, un API catalog et des fichiers SKILL.md pour permettre aux agents IA de mieux comprendre le site.</p>          
    </section>
  </main>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}
</style>
