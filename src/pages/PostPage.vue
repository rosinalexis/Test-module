<template>
  <div class="container">
    <h2>Posts Page</h2>
    <button class="button">Ajouter un poste</button>
    <hr />
    <ul v-for="post in data.value" :key="post.id">
      <li>
        <div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
          <button class="button">Modifier</button>
          <button class="button">Supprimer</button>
          <hr />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const data = ref([]);

onMounted(() => {
  getPosts();
});

const getPosts = async () => {
  store.dispatch("GET_POSTS");
};

data.value = computed(() => store.getters.getAllPosts);

// Ajouter un nouveau post
/*
const addPost = async () => {
  const data = {
    userId: new Date().getTime(),
    id: new Date().getTime(),
    title: "New title",
    body: "new body",
  };
};
*/
</script>

<style lang="scss"></style>
