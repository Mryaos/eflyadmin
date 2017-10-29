<template>
  <div id="app">
    <div class="head">
      <img src="./assets/logo.png" alt="" width="50" height="50">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
*{
  margin: 0 auto !important;
}

#app {
  width: 1200px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.head {
  width: 1200px;
  height: 70px;
  margin-bottom: 50px !important;
  border-bottom: 1px solid #555;
}
.head img {
  float: left;
}
</style>
