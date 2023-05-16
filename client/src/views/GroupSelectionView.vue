<script lang="ts" setup>
import { useRoute } from 'vue-router'

import { useGroupStore } from '@/stores/group';
import { RequestGroup } from '@/services/GroupService';

const route = useRoute();

const groupStore = useGroupStore();

const id = route.query.id as string;


</script>

<template>
  <h1>Opa</h1>
</template>
