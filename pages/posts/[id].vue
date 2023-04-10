<template>
    <div>
        <h1 class="fnt-marker fnt-83 p-t-30 p-b-10">I am post {{ id }}</h1>
    </div>
</template>

<script setup>
    definePageMeta({
        layout : 'post'
    })
    const route = useRoute()
    const id = route.params.id
</script>

<style  scoped>

</style>