<script setup>
import TableGen from '@/components/TableGen.vue'
import { useFetch } from '@/composables/useFetch'

const { data, error, loading } = useFetch(() => 'http://localhost:8000/api/query/tipoliq')

//`http://10.6.150.91:8000/api/query/tipoliq`

//http://localhost:8000/api/query/tipoliq
//http://localhost:8000/api/query/procesosejec
const headers = [
  { text: 'Id', value: 'IDTIPOLIQUIDACION' },
  { text: 'Descripcion', value: 'DESCRIPCION' },
]

function handle(e) {
  console.log(e)
}
</script>

<template>
  <TableGen
    v-if="data"
    title="Tipos de liquidaciones"
    :headers="headers"
    :data="data"
    @handleClick="(e) => handle(e)"
  />
</template>
