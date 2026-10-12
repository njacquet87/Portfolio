<script setup lang="ts">
import type { Project } from '../data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <p class="project-card__competency">{{ project.competency }}</p>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <div class="project-card__technologies">
      <span v-for="technology in project.technologies" :key="technology">{{ technology }}</span>
    </div>
    <RouterLink class="project-card__link" :to="{ name: 'project', params: { slug: project.slug } }">
      Voir le projet
    </RouterLink>
  </article>
</template>

<style scoped>
.project-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1.25rem;
  background: var(--color-bg);
}

.project-card h3 {
  margin-bottom: 0.5rem;
}

.project-card__competency {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  text-align: left;
}

.project-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 1rem 0;
}

.project-card__technologies span {
  border-radius: 999px;
  background-color: var(--color-accordion);
  padding: 0.2rem 0.65rem;
  font-size: 0.85rem;
}

.project-card__link {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--color-header-bg);
  font-weight: 500;
  text-decoration: none;
}

.project-card__link:hover {
  text-decoration: underline;
}
</style>
