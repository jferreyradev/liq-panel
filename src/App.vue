<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useEndPoints } from './composables/useEndPoints'

const { setEndPoint, apiBase, endPoints } = useEndPoints()

setEndPoint(endPoints.local)

//console.log(apiBase.value)
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/repos">Repos</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
