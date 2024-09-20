<template>
  <form @submit.prevent="submitForm" class="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
    <div>
      <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre de la persona a prestar:</label>
      <input v-model="nombre" type="text" id="nombre" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>
    <div>
      <label for="libroId" class="block text-sm font-medium text-gray-700">Libro:</label>
      <select v-model="libroId" id="libroId" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option v-for="libro in libros" :value="libro.id" :key="libro.id">{{ libro.titulo }}</option>
</select>

    </div>
    <div>
      <label for="fechaPrestamo" class="block text-sm font-medium text-gray-700">Fecha de Préstamo:</label>
      <input v-model="fechaPrestamo" type="date" id="fechaPrestamo" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>
    <div>
      <label for="fechaDevolucion" class="block text-sm font-medium text-gray-700">Fecha de Devolución:</label>
      <input v-model="fechaDevolucion" type="date" id="fechaDevolucion" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>
    <div>
      <label for="numeroIdentificacion" class="block text-sm font-medium text-gray-700">Número de Identificación:</label>
      <input v-model="numeroIdentificacion" type="text" id="numeroIdentificacion" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>
    <div>
      <label for="correo" class="block text-sm font-medium text-gray-700">Correo:</label>
      <input v-model="correo" type="email" id="correo" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>
    <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Guardar
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      libroId: null,
      fechaPrestamo: '',
      fechaDevolucion: '',
      numeroIdentificacion: '',
      correo: '',
      libros: []
    }
  },
  async mounted() {
    try {
    console.log('Fetching libros...');
    const response = await fetch(`api/libros`);
    console.log('Response status:', response.status);
    if (!response.ok) throw new Error('Error al obtener los libros');
    
    const data = await response.json();
    console.log('Libros obtenidos:', data);

    // Asignar la lista de libros al array libros.
    this.libros = data.libros;
  } catch (error) {
    console.error('Error en mounted:', error);
  }
},
methods: {
async submitForm() {
  try {
    console.log('Prestamo enviado')
    //  . token = localStorage.getItem('token');
    const response = await fetch(`api/prestamos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        nombre: this.nombre,
        libro: { id: this.libroId },
        fechaPrestamo: this.fechaPrestamo,
        fechaDevolucion: this.fechaDevolucion,
        numeroIdentificacion: this.numeroIdentificacion,
        correo: this.correo
      })
    });
    if (!response.ok) throw new Error('Error al guardar el préstamo');

    alert('Préstamo guardado con éxito');
    this.$router.push('/prestamos');
  } catch (error) {
    console.error(error);
    alert('Error al guardar el préstamo');
  }
}
}

};
</script>
