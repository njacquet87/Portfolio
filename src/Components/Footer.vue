<template>
    <footer class="site-footer">
        <div class="site-footer__content">
            <div class="site-footer__contact">
                <h2 id="contact">Contact</h2>
                <p>Vous pouvez me contacter via :</p>
            </div> 
            <hr>
            <div class="site-footer__links">
                <p>
                    Mon LinkedIn :
                    <a href="https://www.linkedin.com/in/noé-jacquet/" target="_blank" rel="noreferrer">
                        Noé Jacquet
                    </a>
                </p>
                <p>
                    Mon adresse étudiante :
                    <a href="mailto:noe.jacquet@etu.unilim.fr">noe.jacquet@etu.unilim.fr</a>
                </p>
                <p>
                    Mon adresse personnelle :
                    <a href="mailto:noe.jacquet87@gmail.com">noe.jacquet87@gmail.com</a>
                </p>
            </div>
        </div>
    </footer>
</template>

<style>
    .site-footer {
        background-color: var(--color-header-bg);
        border-top: 1px solid var(--color-border);
        color: var(--color-header-text);
        padding: 2rem 1rem;
    }

    .site-footer__contact {
        display: flex;
        gap: 3vw;
        align-items: center;
    }

    .site-footer__content {
        max-width: var(--max-width);
        margin: 0 auto;
    }

    .site-footer h2 {
        margin-bottom: 0.5rem;
    }

    .site-footer hr {
        border: none;
        height: 2px;
        width: 60px;
        background-color: var(--color-text);
        margin-bottom: 1.5rem;
    }

    .site-footer p {
        margin-bottom: 0.5rem;
    }

    .site-footer__links {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .site-footer a {
        color: var(--color-header-text);
        font-weight: 500;
        text-decoration: none;
    }

    .site-footer a:hover {
        text-decoration: underline;
    }
</style>