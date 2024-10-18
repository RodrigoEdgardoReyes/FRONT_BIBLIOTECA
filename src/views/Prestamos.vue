<template>
  <div class="container mx-auto p-8">
    <h1 class="text-2xl font-bold text-center mb-6">Préstamoss.</h1>
    <PrestamoForm />
    <!-- <PrestamoList /> -->
  </div>
</template>

<script>
// rutas de los componentes
import PrestamoForm from '../components/PrestamoForm.vue'
import PrestamoList from '../components/PrestamoList.vue'

export default {
  components: {
    PrestamoForm,
    // PrestamoList
  }
}
</script>
