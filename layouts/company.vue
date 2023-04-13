<template>
    <div>  
       
        <div v-if="!open">
            <OnlineLoader :time="loading_time"  />>
        </div>   
        <div v-else>
            <slot />
        </div>
       
    </div>
</template>

<script setup>
const loading_time = 1000
let open = ref(false);
    onMounted(() => {
        
        setTimeout(()=> {
            open.value = true
        },2000)
    });
</script>

<style  scoped>

</style>