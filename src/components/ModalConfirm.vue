<script setup lang="ts"></script>

<template>
  <div class="absolute inset-0 overflow-hidden bg-black bg-opacity-50">
    <div class="flex items-start justify-center min-h-screen mt-24 text-center">
      <div
        class="bg-white text-black rounded-md text-center shadow-lg p-5 w-64"
        role="dialog"
        aria-modal="true"
      >
        <h3>Do you confirm?</h3>
        <div class="flex justify-center py-4 text-white gap-4">
          <!-- We will handle these emits later -->
          <button
            @click="$emit('close')"
            class="border border-black bg-white text-black rounded-md w-16 py-2"
          >
            No
          </button>
          <button
            @click="$emit('close')"
            class="border border-black bg-black text-white rounded-md w-16 py-2"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
