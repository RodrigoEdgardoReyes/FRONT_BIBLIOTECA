<template> 
  <div class="max-w-4xl mx-auto mt-8 container">
    <ul class="space-y-4">
      <li v-for="prestamo in prestamos" :key="prestamo.id" class="bg-black p-4 rounded-lg shadow-md">
        <p class="text-lg font-semibold"> Nombre:{{ prestamo.nombre }} - Libro:
          {{ prestamo.libro ? prestamo.libro.titulo : 'Libro no disponible' }}
        </p>
        <p class="text-sm text-gray-600">Fecha de Préstamo: {{ formatFecha(prestamo.fechaPrestamo) }}</p>
        <p class="text-sm text-gray-600">Fecha de Devolución: {{ formatFecha(prestamo.fechaDevolucion) }}</p>
        <button @click="edit(prestamo)">Editar</button>
        <button>Eliminar</button>
        <button>Detalles</button>
      </li>
    </ul>

    <!-- Modal de edición -->
    <div v-if="mostrarModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 class="text-xl font-bold mb-4">Editar Préstamo</h2>
        <form @submit.prevent="guardarCambios">
          <div class="mb-4">
            <label class="block text-sm font-medium">Nombre:</label>
            <input type="text" v-model="prestamoSeleccionado.nombre" class="w-full p-2 border rounded" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium">Fecha de Préstamo:</label>
            <input type="date" v-model="prestamoSeleccionado.fechaPrestamo" class="w-full p-2 border rounded" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium">Fecha de Devolución:</label>
            <input type="date" v-model="prestamoSeleccionado.fechaDevolucion" class="w-full p-2 border rounded" />
          </div>
          <div class="flex justify-end space-x-2">
            <button type="button" @click="cerrarModal" class="px-4 py-2 bg-gray-400 text-white rounded">Cancelar</button>
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prestamos: [],
      mostrarModal: false,
      prestamoSeleccionado: null
    };
  },
  async mounted() {
    try {
      const prestamosResponse = await fetch('api/prestamos');
      const prestamosData = await prestamosResponse.json();
      console.log('Prestamos obtenidos:', prestamosData.prestamo);
      this.prestamos = prestamosData.prestamo || [];
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  methods: {
    formatFecha(fecha) {
      return fecha ? new Date(fecha).toLocaleDateString() : 'Fecha no disponible';
    },

    // Convierte fecha al formato "yyyy-MM-dd" para el input de tipo "date"
    formatFechaInput(fecha) {
      const date = new Date(fecha);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

    // Método para abrir el modal de edición con el préstamo seleccionado
    edit(prestamo) {
      this.prestamoSeleccionado = {
        ...prestamo,
        fechaPrestamo: this.formatFechaInput(prestamo.fechaPrestamo),
        fechaDevolucion: this.formatFechaInput(prestamo.fechaDevolucion)
      };
      this.mostrarModal = true;
    },

    cerrarModal() {
      this.mostrarModal = false;
      this.prestamoSeleccionado = null;
    },

    async guardarCambios() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/prestamos/${this.prestamoSeleccionado.id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.prestamoSeleccionado)
          }
        );

        if (response.ok) {
          const index = this.prestamos.findIndex(prestamo => prestamo.id === this.prestamoSeleccionado.id);
          if (index !== -1) {
            this.$set(this.prestamos, index, this.prestamoSeleccionado);
          }
          this.cerrarModal();
        } else {
          console.error('Error al guardar los cambios');
        }
      } catch (error) {
        console.error('Error al actualizar el préstamo:', error);
      }
    }
  }
};
</script>
