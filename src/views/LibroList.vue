<!-- <template>
    <div class="text-3xl text-black">Listado de libros existentes</div> 
    <LibroList/>
</template> -->

<template>
    <div class="h-screen flex flex-col content">
        <!-- <header class="bg-gray-800 text-white p-4">
        </header> --->
        <div class="flex-grow overflow-auto bg-gray-100">
            <router-view>
                <LibroList />
            </router-view>
        </div>
    </div>
</template>

<script>
import LibroList from '../components/LibroList.vue';

export default {
    components: {
        LibroList
    }
}
</script>

<style scoped>
.content {
    display: flex;
    max-height: 80vh;
    width: auto;
}
</style>