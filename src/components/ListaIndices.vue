<script setup lang="ts">
import http from '@/http'
import type Stocks from '@/interfaces/Stocks'
import { onMounted, ref } from 'vue'
import Badge from './badge/Badge.vue'

const indices = ref<Stocks[]>()

onMounted(async () => {
  const response = await http.get('/stocks')
  indices.value = response.data
})
</script>
<template>
  <h1 class="text-center mb-5 mt-2">Índices</h1>
  <div class="container text-center">
    <div class="row row-cols-2 border border-dark p-2">
      <div class="col mb-2" v-for="indice in indices" :key="indice.symbol">
          <h5>{{ indice.symbol }}</h5>
          <span>{{ indice.points }}</span>
          <Badge :variation="indice.variation" :value="indice.variation" />
      </div>
    </div>
  </div>
</template>
