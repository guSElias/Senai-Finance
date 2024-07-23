<script setup lang="ts">
import http from '@/http'
import type Currencies from '@/interfaces/Currencies'
import { onMounted, ref } from 'vue'
import Badge from './badge/Badge.vue'

const moedas = ref<Currencies[]>()
onMounted(async () => {
  const response = await http.get('/currencies')
  moedas.value = response.data
})
</script>
<template>
  <h1 class="text-center mb-5 mt-2">Moedas</h1>
  <div class="container text-center">
    <div class="row row-cols-2 border border-dark p-2">
      <div class="col mb-2" v-for="moeda in moedas" :key="moeda.symbol">
        <h5>{{ moeda.symbol }}</h5>
        <span>{{ moeda.buy }}</span>
        <Badge :variation="moeda.variation" :value="moeda.variation" />
      </div>
    </div>
  </div>
</template>
