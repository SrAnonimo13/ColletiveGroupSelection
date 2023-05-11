<script setup lang="ts">
import { useRouter } from "vue-router";

import { Routes } from "@/global/variables";

const router = useRouter();
</script>

<template>
  <main>
    <div class="float-container">
      <div>
        <h3>Entre na seleção de grupo usando o codigo!</h3>
        <input type="button" value="Entrar">
        <input type="text" name="" id="">
      </div>
      <div>
        <h3>Cria uma seleção de grupo!</h3>
        <input type="button" value="Criar" @click="router.push(Routes.CREATE_GROUP)">
      </div>
    </div>
  </main>
</template>
