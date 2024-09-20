<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold text-gray-400 mb-4">Lista de Libros</h2>
    <ul class="space-y-4">
      <li v-for="libro in libros" :key="libro.id"
        class="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
      >
        <div>
          <h3 class="text-xl font-semibold text-gray-800">Titulo: {{ libro.titulo }}</h3>
          <p class="text-gray-600">Autor: {{ libro.autor }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      libros: []
    }
  },
  async mounted() {
    try {
      const libroResponse = await fetch('api/libros');
      
      // 
      const libroData = await libroResponse.json();
      
      // 
      console.log('Libros obtenidos:', libroData.libros);
      
      // Asigna los libros a la data del componente..
      this.libros = libroData.libros || [];
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
</script>

<script>
import LibroList from '../components/libroList.vue'

export default {
  components: {
    LibroList
  }
}
</script> 

<style scoped>
/* style */
</style>
