<script setup>
import TableGen from '@/components/TableGen.vue'
import { useFetch } from '@/composables/useFetch'
import { useEndPoints } from '@/composables/useEndPoints'
import { ref } from 'vue'

const { apiBase, env } = useEndPoints()

const entEjec = {
  title: 'Procesos ejecutados',
  columns: [
    'ID_EJEC_CAB',
    'ID_PROC_DET',
    'DESCRIPCION',
    'DESC_PROC_DET',
    'ESTADO',
    'IDTIPOLIQ',
    'GRUPOADIC',
    'PERIODO',
  ],
  headers: null,
  proc: 'procesosejec',
}

const entTipoLiq = {
  title: 'Tipo de liquidacion',
  columns: null,
  headers: [
    { text: 'Id', value: 'IDTIPOLIQUIDACION' },
    { text: 'Descripcion', value: 'DESCRIPCION' },
  ],
  proc: 'tipoliq',
}

const repoAct = ref(entEjec)
const { data, error, loading } = useFetch(() => `${apiBase.value}/query/${repoAct.value.proc}`)
</script>

<template>
  <div>Selected: {{ repoAct.title }}</div>

  <select v-model="repoAct">
    <option disabled value="">Please select one</option>
    <option :value="entTipoLiq">Tipo Liquidacion</option>
    <option :value="entEjec" selected>Procesos ejecutados</option>
  </select>

  <TableGen
    v-if="data"
    :title="repoAct.title"
    :columns="repoAct.columns"
    :headers="repoAct.headers"
    :data="data"
    @handleClick="(el) => console.log(el)"
  />
</template>
