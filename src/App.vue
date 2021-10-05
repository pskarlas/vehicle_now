<template>
  <div>
    <Navigation></Navigation>
    <div class="rounded-lg w-full max-w-5xl mx-auto rounded-xl mt-6" style="height: 600px;">
      <Map></Map>
    </div>
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

