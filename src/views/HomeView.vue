<script setup>
import { useFetch } from '@/composables/useFetch'

const { data, error, loading } = useFetch(() => 'http://localhost:8000/api/query/tipoliq')

//`http://10.6.150.91:8000/api/query/tipoliq`

//http://localhost:8000/api/query/tipoliq
</script>

<template>
  <main>
    <div>
      <h1>This is an home page</h1>
    </div>
    <div v-if="data">
      {{ data }}
    </div>
  </main>
</template>
