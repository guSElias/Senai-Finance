<script setup lang="ts">
import http from '@/http'
import type Bitcoin from '@/interfaces/Bitcoin'
import { onMounted, ref } from 'vue'
import Badge from './badge/Badge.vue'

const infos = ref<Bitcoin[]>()

onMounted(async () => {
  const response = await http.get('/bitcoin')
  infos.value = response.data
})
</script>
<template>
  <h1 class="text-center mb-5 mt-2">Bitcoin</h1>
  <div class="container text-center">
    <div class="row row-cols-2 border border-dark p-2">
      <div class="col mb-2" v-for="info in infos" :key="info.name">
          <h5>{{ info.name }}</h5>
          <span>{{ info.last }}</span>
          <Badge :variation="info.variation" :value="info.variation" />
      </div>
    </div>
  </div>
</template>
