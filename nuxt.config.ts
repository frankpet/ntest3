// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css:[
        '~/assets/scss/main.scss',
        '~/assets/css/tailwind.css'  
    ]
})