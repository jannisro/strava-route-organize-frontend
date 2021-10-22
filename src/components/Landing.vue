<template>
    <div class="landing">
        <section class="intro">
            <Header theme="light" />
            <main class="main">
                <h1 class="main__text">
                    Unleash the Potential of your Strava Routes by ordering them in Folders!
                </h1>
                <a v-bind:href="oAuthUrl" class="strava-button">
                    <img src="/img/strava-logo.svg" alt="Strava logo">
                    Connect with Strava
                </a>
            </main>
        </section>
        <footer class="footer">
            <p class="footer__text">
                This app allows you to structure your Strava routes in folders. Just add a route to a folder by placing a <i>[Folder Name]</i> in it. For example, the route with the name <i>[North][Long] Coffee Ride</i> is displayed here in the directory <i>/North/Long/Coffee Ride</i>.
            </p>
            <a href="https://github.com/jannisrohden/strava-route-organize-frontend" target="_blank" class="footer__github">
                <img src="/img/github.png" alt="View this project on GitHub">
                <span>View this projet on GitHub</span>
            </a>
        </footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Landing',
    components: {
        Header
    },
    data () {
        return {
            oAuthUrl: 'xxx'
        }
    },
    created () {
        fetch('https://routes-backend.jnns.dev/api/auth/url')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/_setup';

    .intro {
        width: 100%;
        min-height: 100vh;
        background-image: url('/img/background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    .main {
        width: 100%;
        height: 100%;
        padding: 7rem 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__text {
            background: rgba($dark-alt, 0.8);
            color: $light;
            padding: 0.5rem 1rem;
            display: inline-block;
        }
    }

    .strava-button {
        background: #fc4c02;
        text-decoration: none;
        font-size: 1.1rem;
        color: #fff;
        padding: 0.6rem 2rem;
        margin-top: 4rem;
        display: flex;
        align-items: center;
        box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.6);

        img {
            width: 2.5rem;
            margin-left: 0.3rem;
        }
    }

    .footer {
        background: $dark-alt;
        color: $light;
        text-align: center;
        padding: 5rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__text {
            width: 700px;
            max-width: 100%;
            margin-bottom: 4rem;
            line-height: 28px;
            font-size: 0.98rem;
        }

        &__github {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: $light;

            img {
                width: 3rem;
                margin-right: 0.8rem;
            }
        }
    }
</style>
