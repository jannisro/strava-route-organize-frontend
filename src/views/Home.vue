<template>
    <div>
        <Landing v-bind:auth-url="oAuthUrl" />
    </div>
</template>

<script>
import Landing from '@/components/Landing.vue'

export default {
    name: 'Home',
    components: {
        Landing
    },
    data: () => {
        return {
            oAuthUrl: ''
        }
    },
    mounted () {
        const vm = this
        fetch(process.env.VUE_APP_BACKEND + '/api/auth/url?redirect=' + process.env.VUE_APP_URL + '/validate')
            .then(response => response.json())
            .then(function (data) { vm.$data.oAuthUrl = data.url })
    }
}
</script>
