<template>
  <v-map :zoom=6 :center="initialLocation" class="rounded-lg">
    <v-icondefault></v-icondefault>
    <v-tilelayer url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"></v-tilelayer>
    <v-marker-cluster :options="clusterOptions" @clusterclick="clusterClick($event)">
      <v-marker v-for="l in locations" :key="l.id" :lat-lng="convertLatLng(l)" :icon="defaultIcon" >
        <v-popup class="w-2xl h-40 w-40 object-center">
          <!-- {{l.label}} -->
          <figure>
            <image :src="l.image.thumb_url" :alt="l.label" class="w-48 h-24">
            <figcaption>{{l.label}}</figcaption>
          </figure>
        </v-popup>
      </v-marker>
    </v-marker-cluster>
  </v-map>
</template>

<script>
  import * as Vue2Leaflet from 'vue2-leaflet'
  import { latLng, Icon, icon } from 'leaflet'
  import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
  import { apiService } from '../services/vehicles_api';
  const apiServiceInstance = new apiService();

  export default {
    components: {
      'v-map': Vue2Leaflet.LMap,
      'v-tilelayer': Vue2Leaflet.LTileLayer,
      'v-icondefault': Vue2Leaflet.LIconDefault,
      'v-marker': Vue2Leaflet.LMarker,
      'v-popup': Vue2Leaflet.LPopup,
      'v-marker-cluster': Vue2LeafletMarkerCluster
    },
    data () {
      return {
        locations: null,
        defaultIcon:  icon({
          iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
          shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
          iconSize:     [38, 95],
          shadowSize:   [50, 64],
          iconAnchor:   [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor:  [-3, -76]
        }),
        clusterOptions: {
          spiderfyOnMaxZoom: true,
          animate: true
        },
        selectedIcon: icon({
          iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-red.png',
          shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
          iconSize:     [38, 95],
          shadowSize:   [50, 64],
          iconAnchor:   [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor:  [-3, -76]
        }),
        initialLocation: latLng(51.1642292, 10.4541194)
      }
    },
    methods: {
      clusterClick: (e) => e.layer.zoomToBounds({padding: [10, 10]}),
      convertLatLng: (vehicle) => latLng(vehicle.location.lat, vehicle.location.lng)
    },
    mounted() {
      // setTimeout(()=>{
      //   apiServiceInstance.fetchVehicles().then((data) => {
      //       this.locations = data.vehicles;
      //     })
      // }, 500),
      setTimeout(()=>{
        this.locations = apiServiceInstance.fetchVehicles()
      }, 500),
      setTimeout(() => {
        this.$nextTick(() =>{
          this.clusterOptions = { spiderfyOnMaxZoom: true, }
        });
      }, 5000);
    },

  }

  // Fixed: Missing marker icons
  delete Icon.Default.prototype._getIconUrl;

  Icon.Default.mergeOptions({
     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
     iconUrl: require('leaflet/dist/images/marker-icon.png'),
     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

</script>
<style>
  @import "~leaflet/dist/leaflet.css";
  @import "~leaflet.markercluster/dist/MarkerCluster.css";
  @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>
