<script setup>
import { useFetch } from '@/composables/useFetch'

const { data, error, loading } = useFetch(() => 'http://10.6.150.91:8000/api/query/procesosejec')

//`http://10.6.150.91:8000/api/query/tipoliq`

//http://localhost:8000/api/query/tipoliq
//http://localhost:8000/api/query/procesosejec
</script>

<template>
<div v-if="data">
    {{ data }}
</div>

<!--   <div v-if="data" class="overflow-x-auto">
    <table class="table">
     
      <thead>
        <tr>
          <th>Id</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
       
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.IDTIPOLIQUIDACION }}</td>
          <td>{{ item.DESCRIPCION }}</td>
        </tr>
      </tbody>
    </table>
  </div> -->
</template>
