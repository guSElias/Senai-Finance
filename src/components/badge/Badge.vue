<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type BadgeProps from './types'

const props = defineProps<BadgeProps>()

</script>
<template>
  <span
    class="badge rounded-pill ms-2"
    :class="props.variation > 0 ? 'text-bg-primary' : 'text-bg-danger'" >
    {{ props.value }}
    </span>
</template>
