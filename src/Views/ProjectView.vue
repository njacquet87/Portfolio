<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.slug))
</script>

<template>
  <main>
    <section v-if="project" class="project-detail">
      <RouterLink class="back-link" to="/">← Retour aux projets</RouterLink>
      
      <p class="project-card__competency">{{ project.competency }}</p>
      
      <h2>{{ project.title }}</h2>
      <hr />
      
      <h3>Description</h3>
      <p>{{ project.description }}</p>
      
      <h3>Rôle personnel</h3>
      <p>{{ project.role }}</p>
      
      <h3>Technologies</h3>
      <ul class="tag-list">
        <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
      </ul>
      
      <br>

      <div v-if="project.images?.length" class="project-images">
        <img v-for="image in project.images" :key="image.src" :src="image.src" :alt="image.alt" />
      </div>

      <div v-if="project.video" class="project-video">
        <h3>Démonstration vidéo</h3>
        <video controls preload="metadata">
          <source :src="project.video" type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture des vidéos.
        </video>
      </div>
      
      <h3>Compétences démontrées</h3>
      <p v-for="skill in project.skills" :key="skill" class="skills">{{ skill }}</p>
      
      <br>

      <a v-if="project.link" class="link project-detail__repository" :href="project.link" target="_blank" rel="noreferrer">
        Consulter le dépôt du projet
      </a>
    </section>
    <section v-else>
      <h2>Projet introuvable</h2>
      <RouterLink class="link" to="/">Retour à l’accueil</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.back-link,
.project-detail__repository,
.link {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--color-header-bg);
  font-weight: 500;
  text-decoration: none;
}

.back-link:hover,
.project-detail__repository:hover,
.link:hover {
  text-decoration: underline;
}

.project-card__competency {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  text-align: left;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 1rem 0;
}

.tag-list li {
  border-radius: 999px;
  background-color: var(--color-accordion);
  padding: 0.2rem 0.65rem;
  font-size: 0.85rem;
}

.project-detail h3 {
  margin-top: 1.5rem;
}

.project-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;
}

.project-images img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: var(--radius);
}

.project-video {
  margin-top: 1.5rem;
}

.project-video video {
  display: block;
  width: 100%;
  max-height: 600px;
  border-radius: var(--radius);
  background-color: var(--color-text);
}

.skills {
  margin-left: 2vw;
}
</style>
