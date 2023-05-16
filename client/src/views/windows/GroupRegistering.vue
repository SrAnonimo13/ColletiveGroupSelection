<template>
  <v-form validade-on="submit" @submit.prevent="submit">
    <h1>Então vamos criar seu grupo!</h1>
    <h2>Primeiro precisamos que você informe o nome de todos os participantes</h2>
    <div>
      <v-text-field
        v-for="(nameObj, index) in group.names"
        :key="nameObj"
        :placeholder="'Nome ' + (index + 1)"
        variant="solo"
        style="width: 200px"
        v-model="nameObj.name"
        :rules="[required]"
      >
        <template v-slot:prepend-inner>
          <v-icon
            color="red"
            style="cursor: pointer"
            v-show="group.names.length > 1"
            @click="group.removeNameByIndex(index)"
          >
            mdi-close
          </v-icon>
        </template>
      </v-text-field>
    </div>
    <v-btn variant="flat" rounded="xs" color="green" @click="group.addNewName()">
      Adicionar pessoa
    </v-btn>
    <v-btn flat color="primary" type="submit"> Criar Seleção </v-btn>
  </v-form>
</template>
<script setup lang="ts">
import type { SubmitEventPromise } from 'vuetify/lib/index.js'

import { useGroupStore } from '@/stores/group'

import { required } from '@/global/rules'

const group = useGroupStore()
const emits = defineEmits<{
  (e: 'next-click'): void
}>()

async function submit(event: SubmitEventPromise) {
  const result = await event

  if (!result.valid) return

  emits('next-click')
}
</script>
