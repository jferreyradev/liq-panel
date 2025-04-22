<script setup>
import { useFetch } from '@/composables/useFetch'

const { data, error, loading } = useFetch(() => 'http://localhost:8000/api/query/tipoliq')

//`http://10.6.150.91:8000/api/query/tipoliq`

//http://localhost:8000/api/query/tipoliq
</script>

<template>
  <div v-if="data" class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Id</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.IDTIPOLIQUIDACION }}</td>
          <td>{{ item.DESCRIPCION }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
