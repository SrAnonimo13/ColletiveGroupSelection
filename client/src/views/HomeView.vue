<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue';

import { useGroupStore } from '@/stores/group';

import { Routes } from '@/global/variables'
import { required } from '@/global/rules'

import { RequestGroup, type GroupResponse } from '@/services/GroupService';

const router = useRouter()
const groupStore = useGroupStore();

const { handleSubmit } = useForm({
  validationSchema: {
    code: required
  }
})

const code = useField('code');

const SnackbarInfo = ref({
  msg: '',
  show: false
});

const CodeIsRequested = ref(false);

function showSnackbar(msg: string, timeout?: number){
  SnackbarInfo.value.msg = msg;
  SnackbarInfo.value.show = true;

  setTimeout(() => {
    SnackbarInfo.value.show = false;
  }, timeout ?? 3 * 1000);
}

const submit = handleSubmit(async (values) => {
  const { code } = values as { code: string }
  
  CodeIsRequested.value = true;

  RequestGroup(code).then((response: GroupResponse) => {
    groupStore.names = response.names;
    groupStore.id = response.id;

    const GroupSelectionUrl = Routes.addQuery(Routes.GROUP_SELECTION, { "id": response.id });
    router.push(GroupSelectionUrl);
  }).catch((err: string) => {
    showSnackbar(err);
  }).finally(() => CodeIsRequested.value = false);
});
</script>

<template>
  <main>
    <div class="float-container">
      <v-form @submit.prevent="submit">
        <h3>Entre na seleção de grupo usando o codigo!</h3>
        <v-btn
          variant="outlined"
          color="secondary"
          type="submit"
          :loading="CodeIsRequested"
        >
          Entrar
        </v-btn>
        <v-text-field
          variant="solo"
          placeholder="Codigo"
          style="width: 200px"
          v-model="code.value.value"
          :error-messages="code.errorMessage.value"
        ></v-text-field>
        <v-snackbar
          v-model="SnackbarInfo.show"
        >
          {{ SnackbarInfo.msg }}
        </v-snackbar>
      </v-form>
      <div>
        <h3>Cria uma seleção de grupo!</h3>
        <v-btn 
          variant="flat"
          color="primary"
          @click="router.push(Routes.CREATE_GROUP)"
        >
          Criar
        </v-btn>
      </div>
    </div>
  </main>
</template>
