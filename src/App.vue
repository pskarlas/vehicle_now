<template>
  <div class="">
  <!-- <div id="app"> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navigation></Navigation>
    <div class="rounded-lg w-full max-w-5xl mx-auto rounded-xl mt-6" style="height: 600px;">
      <Map></Map>
    </div>
  <!-- </div> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Map from './components/Map.vue'
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Map,
    Navigation
  }
}
</script>

