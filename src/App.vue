<script setup lang="ts">
import { markRaw, ref } from 'vue'
// import the composable
import useModal from '@/composables/useModal'
import ModalConfirm from '@/components/ModalConfirm.vue'
import ModalOverview from '@/components/ModalOverview.vue'

const modal = useModal()

// set the modal component to the ModalConfirm component and open it
const openConfirmModal = () => {
  modal.component.value = markRaw(ModalConfirm)
  modal.showModal()
}

const openOverviewModal = () => {
  modal.component.value = markRaw(ModalOverview)
  modal.showModal()
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex gap-3">
      <button
        class="border p-2 rounded-md hover:bg-blue-400 hover:text-white"
        @click="openConfirmModal"
      >
        Open Confirm Modal
      </button>
      <button
        class="border p-2 rounded-md hover:bg-blue-400 hover:text-white"
        @click="openOverviewModal"
      >
        Open Overview Modal
      </button>
    </div>
    <teleport to="#modal">
      <component
        :is="modal.component.value"
        v-if="modal.show.value"
        @close="modal.closeModal"
      />
    </teleport>
    <div
      class="absolute top-20 bg-red-600 w-full h-10 flex justify-center items-center text-white"
    >
      This will make ui ugly
    </div>
  </div>
</template>
