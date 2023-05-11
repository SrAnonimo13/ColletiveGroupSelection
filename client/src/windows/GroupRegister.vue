<template>
  <main>
    <h1>Então vamos criar seu grupo!</h1>
    <h2>Primeiro precisamos que você informe o nome de todos os participantes</h2>
    <div>
      <v-text-field
        v-for="nameObj,index in group.names" :key="nameObj"
        :placeholder="'Nome ' + (index + 1)"
        variant="solo"
        style="width: 200px"
        v-model="nameObj.name"
      >
        <template v-slot:prepend-inner>
          <v-icon
            color="red"
            style="cursor: pointer"
            @click="group.removeNameByIndex(index)"
          >
            mdi-close
          </v-icon>
        </template>
        <!-- <template v-slot:append-inner>
                <v-icon 
                    v-show="index === state.names.length - 1" 
                    color="green" 
                    style="cursor: pointer" 
                    @click="addNameInList()">
                  mdi-plus
                </v-icon>
              </template> -->
      </v-text-field>
    </div>
    <v-btn
      variant="flat"
      rounded="xs"
      color="green"
      @click="group.addNewName()"
    >
      Adicionar pessoa
    </v-btn>
    <v-btn
      flat
      color="primary"
      @click=""
    >
      Criar Seleção
    </v-btn>
  </main>
</template>

<script setup lang="ts">
import { useGroupStore } from '@/stores/group';

const group = useGroupStore();

// import { reactive } from 'vue'

// const names = reactive([{
//   id: 1,
//   name: ''
// }]);

// function addNameInList() {
//   names.push({id: names.length + 1, name: ''});
//   console.log(names)
// }

// function removeName(index: number) {
//   names.splice(index, 1)
// }
</script>

<style>

</style>