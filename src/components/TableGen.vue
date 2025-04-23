<script setup>
const props = defineProps({
  title: String,
  headers: Array,
  columns: Array,
  data: Array,
})

const emit = defineEmits(['handleClick'])

function handleClick(el) {
  //console.log(el)
  emit('handleClick', el)
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">{{ props.title }}</h1>
  </div>

  <div class="overflow-x-auto">
    <table v-if="props.data" class="table table-xs">
      <thead>
        <tr v-if="props.columns">
          <th v-for="column in props.columns">{{ column }}</th>
        </tr>
        <tr v-else-if="props.headers">
          <th v-for="header in props.headers">{{ header.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-if="props.columns"
          v-for="item in props.data"
          class="hover:bg-gray-400"
          @click="handleClick(item)"
        >
          <td v-for="(column, colIndex) in props.columns" :key="colIndex">
            {{ item[column] }}
          </td>
        </tr>
        <tr
          v-else-if="props.headers"
          v-for="item in props.data"
          class="hover:bg-gray-400"
          @click="handleClick(item)"
        >
          <td v-for="(header, colIndex) in props.headers" :key="colIndex">
            {{ item[header.value] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
