<template>
  <v-window
    v-model="step"  
  >
    <v-window-item :value="1">
      <GroupRegister />
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import GroupRegister from '@/windows/GroupRegister.vue';
import { ref } from 'vue';

const step = ref(1);

</script>

<style></style>
