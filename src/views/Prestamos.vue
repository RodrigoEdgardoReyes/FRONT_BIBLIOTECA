<template>
  <div class="h-screen flex flex-col content">

    <h1 class="text-2xl font-bold text-center mb-3 text-gray-300">¿Quieres prestar un libro?</h1>
    <div class="flex-grow overflow-auto bg-gray-100">
      <router-view>
        <PrestamoForm />
        <!-- <PrestamoList /> -->
      </router-view>
    </div>

  </div>
</template>

<script>
// rutas de los componentes
import PrestamoForm from '../components/PrestamoForm.vue'
// import PrestamoList from '../components/PrestamoList.vue'

export default {
  components: {
    PrestamoForm,
    // PrestamoList
  }
}
</script>

<style scoped>
.content {
  max-height: 80vh;
}
</style>
