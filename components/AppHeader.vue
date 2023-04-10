<template>
    <header>
    <nav>
      <NuxtLink to="/">Homepage</NuxtLink>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts">Posts</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>
.router-link-exact-active {
  color: blue;
}
</style>