import { ref } from 'vue'

// tracking of component to render
const component = ref()

// tracking of whether to show modal
const show = ref(false)

export default function useModal() {
  return {
    component,
    show,
    // open/close methods for modal
    showModal: () => (show.value = true),
    closeModal: () => (show.value = false),
  }
}
