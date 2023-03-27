<script setup lang="ts">
import { markRaw } from 'vue'
// import the composable
import useModal from '@/composables/useModal'
import ModalConfirm from '@/components/ModalConfirm.vue'

const modal = useModal()

// set the modal component to the ModalConfirm component and open it
const handleOpenModal = () => {
  modal.component.value = markRaw(ModalConfirm)
  modal.showModal()
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <button
      class="border p-2 rounded-md hover:bg-blue-400 hover:text-white"
      @click="handleOpenModal"
    >
      Open Confirm Modal
    </button>
    <teleport to="#modal">
      <ModalConfirm v-if="modal.show.value" @close="modal.closeModal" />
    </teleport>
    <div
      class="absolute top-20 bg-red-600 w-full h-10 flex justify-center items-center text-white"
    >
      This will make ui ugly
    </div>
  </div>
</template>
