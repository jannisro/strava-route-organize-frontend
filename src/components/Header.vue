<template>
    <header class="header">
        <router-link to="/" class="header__branding" :data-theme="theme">
            <img src="/img/logo/blue.svg" alt="Logo" class="header__branding__logo" v-if="!theme || theme === 'blue'">
            <img src="/img/logo/white.svg" alt="Logo" class="header__branding__logo" v-if="theme === 'light'">
            <img src="/img/logo/dark.svg" alt="Logo" class="header__branding__logo" v-if="theme === 'dark'">
            <span class="header__branding__name">
                RouteOrganizer
            </span>
        </router-link>
        <a v-bind:href="url" class="header__profile" :data-theme="theme" v-if="isLoggedIn">
            <img v-bind:src="imagePath" v-bind:alt="username" class="header__profile__image">
            <span class="header__profile__name">
                {{ username }}
            </span>
        </a>
        <a href="https://strava.com" v-else class="header__strava">
            <img src="/img/strava.png" class="header__strava__image" alt="Powered by Strava">
        </a>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        isLoggedIn: Boolean,
        imagePath: String,
        username: String,
        profileUrl: String,
        theme: String
    }
}
</script>

<style lang="scss">
    @import '@/assets/scss/_setup';

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 1rem;

        &__branding {
            text-decoration: none;
            color: $primary;
            font-size: 1.3rem;
            font-weight: bold;
            display: flex;
            align-items: center;

            &[data-theme="light"] {
                color: $light;
            }

            &[data-theme="dark"] {
                color: $dark;
            }

            &__logo {
                width: 3rem;
                margin-right: 0.7rem;
            }

            &__name {
                @media (max-width: 400px) {
                    display: none;
                }
            }
        }

        &__profile {
            color: $primary;

            &[data-theme="light"] {
                color: $light;
            }

            &[data-theme="dark"] {
                color: $dark;
            }

            &__image {
                max-width: 3rem;
            }

            &__name {
                @media (max-width: 500px) {
                    display: none;
                }
            }
        }

        &__strava {
            &__image {
                width: 10rem;
            }
            @media (max-width: 500px) {
                display: none;
            }
        }
    }
</style>
