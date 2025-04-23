<script setup>
import TableGen from '@/components/TableGen.vue'
import { useFetch } from '@/composables/useFetch'

const { data, error, loading } = useFetch(() => 'http://localhost:8000/api/query/procesosejec')

//`http://10.6.150.91:8000/api/query/tipoliq`

//http://localhost:8000/api/query/tipoliq
//http://localhost:8000/api/query/procesosejec
</script>

<template>
  <TableGen
    v-if="data"
    title="Procesos ejecutados"
    :columns="[
      'ID_EJEC_CAB',
      'ID_PROC_DET',
      'DESCRIPCION',
      'DESC_PROC_DET',
      'ESTADO',
      'IDTIPOLIQ',
      'GRUPOADIC',
      'PERIODO',
    ]"
    :data="data"
    @handleClick="(el) => console.log(el)"
  />
</template>
