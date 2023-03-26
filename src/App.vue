<script setup lang="ts">
import ModalConfirm from '@/components/ModalConfirm.vue'
import { ref } from 'vue'

const show = ref(false)

const openConfirm = () => {
  show.value = true
}

const closeConfirm = () => {
  show.value = false
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <button
      class="border p-2 rounded-md hover:bg-blue-400 hover:text-white"
      @click="openConfirm"
    >
      Open Confirm Modal
    </button>
    <ModalConfirm v-if="show" @close="closeConfirm" />
    <div
      class="absolute top-20 bg-red-600 w-full h-10 flex justify-center items-center text-white"
    >
      This will make ui ugly
    </div>
  </div>
</template>
