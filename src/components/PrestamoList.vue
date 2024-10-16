<template>
  <div class="max-w-4xl mx-auto mt-8 container">
    <ul class="space-y-4">
      <li v-for="prestamo in prestamos" :key="prestamo.id" class="bg-black p-4 rounded-lg shadow-md">
        <p class="text-lg font-semibold"> Nombre:
          {{ prestamo.nombre }} - Libro: 
          {{ prestamo.libro ? prestamo.libro.titulo : 'Libro no disponible' }}
        </p>
        <p class="text-sm text-gray-600">Fecha de Préstamo: {{ formatFecha(prestamo.fechaPrestamo) }}</p>
        <p class="text-sm text-gray-600">Fecha de Devolución: {{ formatFecha(prestamo.fechaDevolucion) }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prestamos: [] 
    };
  },
  async mounted() {
    try {
      // Carga la lista de préstamos.
      const prestamosResponse = await fetch('api/prestamos');
      // obtengo la data en formato json
      const prestamosData = await prestamosResponse.json();
      // verifico si obtengo los prestamos correctamente.
      console.log('Prestamos obtenidos:', prestamosData.prestamo); 
      this.prestamos = prestamosData.prestamo || [];
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  methods: {
    formatFecha(fecha) {
      return fecha ? new Date(fecha).toLocaleDateString() : 'Fecha no disponible';
    }
  }
};
</script>
<style scoped>
  .container{
    margin-top: 16%;
  }
</style>