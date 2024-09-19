<template>
    <h1 class="text-3xl font-bold text-gray-400 mb-6">Gestión de Libros</h1>

  <form @submit.prevent="submitForm" class="max-w-md mx-auto bg-white p-8 rounded shadow">
    <div class="mb-4">
      <label for="titulo" class="block text-gray-700 font-bold mb-2">Título:</label>
      <input v-model="titulo" type="text" id="titulo" required class="w-full px-3 py-2 border rounded">
    </div>
    <div class="mb-4">
      <label for="autor" class="block text-gray-700 font-bold mb-2">Autor:</label>
      <input v-model="autor" type="text" id="autor" required class="w-full px-3 py-2 border rounded">
    </div>
    <div class="mb-4">
      <label for="anoEdicion" class="block text-gray-700 font-bold mb-2">Año de Edición:</label>
      <input v-model="anoEdicion" type="number" id="anoEdicion" required class="w-full px-3 py-2 border rounded">
    </div>
    <div class="mb-4">
      <label for="numPaginas" class="block text-gray-700 font-bold mb-2">Número de Páginas:</label>
      <input v-model="numPaginas" type="number" id="numPaginas" required class="w-full px-3 py-2 border rounded">
    </div>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      titulo: '',
      autor: '',
      anoEdicion: '',
      numPaginas: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('/api/libros', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            titulo: this.titulo,
            autor: this.autor,
            anoEdicion: this.anoEdicion,
            numPaginas: this.numPaginas
          })
        });

        const responseData = await response.json();
        // verifico la respuesta de la api...
      console.log('API response:', responseData); 

        if (response.ok) {
          alert('Libro guardado con éxito');
          // Limpiar el formulario
          this.titulo = '';
          this.autor = '';
          this.anoEdicion = '';
          this.numPaginas = '';
        } else {
          throw new Error('Error al guardar el libro');
        }
      } catch (error) {
        console.error(error);
        alert('Ocurrió un error al guardar el libro');
      }
    }
  }
};
</script>
