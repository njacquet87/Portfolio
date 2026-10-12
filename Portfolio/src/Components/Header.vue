<template>
    <header>
        <h1>Portfolio</h1>
        <nav aria-label="Navigation principale">
            <ul id="horizontal_nav_bar">
                <li><RouterLink to="/">Accueil</RouterLink></li>
                <li><a href="/#profil">Profil</a></li>
                <li><a href="/#projets">Projets</a></li>
                <li><a href="/#stage">Stage</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style>
    header {
        background-color: var(--color-header-bg);
        border-bottom: 1px solid var(--color-border);
        color: var(--color-header-text);
        padding: 1.5rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header h1 {
        text-align: center;
        margin-bottom: 1rem;
    }

    #horizontal_nav_bar {
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    #horizontal_nav_bar a,
    #horizontal_nav_bar .router-link-active {
        text-decoration: none;
        color: var(--color-header-text);
        font-weight: 500;
        padding: 0.25rem 0;
        position: relative;
    }

    #horizontal_nav_bar a::after,
    #horizontal_nav_bar .router-link-active::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 0;
        height: 2px;
        background-color: var(--color-header-text);
        transition: width 0.2s ease;
    }

    #horizontal_nav_bar a:hover::after,
    #horizontal_nav_bar .router-link-active:hover::after {
        width: 100%;
    }

    @media (max-width: 700px) {
        header {
            flex-direction: column;
            gap: 1rem;
        }

        #horizontal_nav_bar {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
</style>