<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToRegistrar = () => {
  router.push({ name: 'Libros' });
};

const goToPrestar = () => {
  router.push({ name: 'Prestamos' });
};
</script>
<!-- home. -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-600">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">Bienvenido a la Biblioteca.</h1>
    <h2 class="text-2xl text-gray-400 mb-4">¿Deseas registrar un nuevo libro o prestar uno?</h2>
    <div class="space-x-4">
      <button @click="goToRegistrar" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Registrar
      </button>
      <button @click="goToPrestar" class="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Prestar Libro
      </button>
    </div>
  </div>
</template>
