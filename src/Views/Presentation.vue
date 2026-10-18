<template>
    <div id="title">
        <h1>Portfolio Jacquet Noé</h1>

        <div id="sub_title">
            <p>Étudiant BUT info</p>

            <a href="https://github.com/njacquet87">
                <img src="../../public/images/github_logo.webp" alt="github_icon" width="40" height="40">
            </a>

            <a href="https://www.linkedin.com/in/noé-jacquet/">
                <img src="../../public/images/linkedin_logo.webp" alt="linkedin_icon" width="40" height="40">
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
    #title {
        border: 0px;
        background-color: transparent;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 150%;
        box-shadow: 0px 0px 0px 0px;
        margin-bottom: 8%;
        margin-top: 8%;
    }

    #sub_title {
        border: 0px;
        background-color: transparent;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 60%;
        display: flex;
        justify-content: space-between;
        width: 38%;
        justify-self: center;
        margin: 0 auto;
    }

    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(25px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>