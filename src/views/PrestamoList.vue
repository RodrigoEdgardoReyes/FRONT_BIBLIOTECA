<template>

    <!-- Si descomento esto el texto queda estatico  -->
    <!-- <div class="bg-black content">Listado de prestamos</div> -->

    <div  class="h-screen flex flex-col content">

        <div class="flex-grow overflow-auto bg-gray-100">
        <router-view>
            <PrestamoList />
        </router-view>

    </div>
    </div>
</template>

<script>
import PrestamoList from '../components/PrestamoList.vue';

export default {
    components: {
        PrestamoList
    }
}
</script>

<style scoped>
.content {
    background-color: red;
    max-height: 80vh;
}
</style>