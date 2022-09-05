<template>
  <div class="container">
    <header>
      <h1>Vue Js Modular Architecture</h1>
      <nav>
        <router-link to="/" class="button"> Home</router-link>
        <router-link to="/about" class="button"> About</router-link>
        <router-link to="/posts" class="button"> Postes</router-link>
      </nav>
    </header>

  </div>
  <div class="container">
    <router-view/>
  </div>

</template>

<script setup>

</script>

<style lang="scss">

h1{
  margin-top: 10px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
}
header{
  text-align: center;
}


a{
  margin-left: 10px;
}
</style>