<template>
    <div>
        <AppHeader />
            <slot />
            <nav>               
                <ul>                    
                    <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
                    <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
                </ul>
            </nav>
        <AppFooter />
    </div>
</template>

<script setup>
    
</script>

<style  scoped>

</style>