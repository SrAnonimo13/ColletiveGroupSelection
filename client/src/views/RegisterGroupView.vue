<template>
  <v-window
    v-model="step"  
  >
    <v-window-item :value="0">
      <GroupRegistering @next-click="next" />
    </v-window-item>
    <v-window-item :value="1">
      {{ group.names }}
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import { useGroupStore } from '@/stores/group';
import GroupRegistering from './windows/GroupRegistering.vue';
import { ref } from 'vue';

const group = useGroupStore();

const step = ref(0);

function next(){
  step.value++;
}

</script>

<style></style>
