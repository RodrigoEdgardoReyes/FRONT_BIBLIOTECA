- <template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold text-gray-400 mb-6">Gestión de Libros</h1>
    <LibroForm />
    <!-- <LibroList /> -->
  </div>
</template>

<!-- <template>
  <div class="h-screen flex flex-col">
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold text-gray-400 mb-6">Gestión de Libros</h1>
    <LibroForm />
    <LibroList />
  </div>
    </header>
    <div class="flex-grow overflow-auto bg-gray-100">
      <router-view></router-view>
    </div>
  </div>
</template> -->



<script>
import LibroForm from '../components/libroForm.vue'
// import LibroForm from '../components/LibroForm.vue'..
import LibroList from '../components/libroList.vue'

export default {
  components: {
    LibroForm,
    // LibroList
  }
}
</script>
