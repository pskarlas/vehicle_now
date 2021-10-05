<template>
  <div class="w-full h-72 md:h-full px-6">
    <v-map ref="map" :zoom=12 class="rounded-xl shadow-xl" :options="{scrollWheelZoom: false}">
      <v-icondefault></v-icondefault>
      <v-tilelayer url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"></v-tilelayer>
      <v-marker-cluster :options="clusterOptions" @clusterclick="clusterClick($event)">
        <v-marker v-for="v in vehicles" :key="v.id" :lat-lng="convertLatLng(v)" :icon="defaultIcon" >
          <v-popup :keep-in-view=true>
              <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="">
              <div class="py-2">
                <h3 class="text-base leading-6 font-medium text-gray-900">
                  {{v.label}}
                </h3>
              </div>
              <div class="border-t border-gray-200">
                <dl>
                  <div class="bg-white px-2 py-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-2">
                      <dt class="text-xs font-medium text-gray-500">
                        Type
                      </dt>
                      <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-1">
                         {{v.car_type}}
                      </dd>
                  </div>

                  <div class="bg-gray-50 px-2 py-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-2">
                    <dt class="text-xs font-medium text-gray-500">
                      Fuel Type
                    </dt>
                    <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-1">
                       {{v.fuel_type}}
                    </dd>
                  </div>

                  <div class="bg-white px-2 py-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-2">
                      <dt class="text-xs font-medium text-gray-500">
                        RFID Access
                      </dt>
                      <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-1">
                         {{v.allow_rfid_card_access? 'yes' : 'not available'}}
                      </dd>
                  </div>
                  <div class="bg-gray-50  px-2 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-2">
                      <dt class="text-xs font-medium text-gray-500">
                        Street
                      </dt>
                      <dd class="block text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                         {{v.location.street}}, <br>
                         {{v.location.city}} {{v.location.postcode}}
                      </dd>
                  </div>
                  <div class="w-full py-2 sm:grid sm:grid-cols-2 sm:gap-0">
                    <button type="button" class="col-span-2 inline-flex justify-center items-center px-2.5 py-1.5 border border-transparent text-sm font-semibold rounded shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition ease-in-out duration-300">
                      Rent now
                    </button>
                  </div>
                </dl>
              </div>
            </div>
          </v-popup>
        </v-marker>
      </v-marker-cluster>

    </v-map>
    <div class="text-right mt-4 mr-4">
        <a href="javascript:;" class="text-xs text-gray-700 underline hover:no-underline">reset map position</a>
    </div>
  </div>
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
        vehicles: null,
        defaultIcon:  icon({
          iconUrl: 'https://www.pngkey.com/png/full/90-904932_car-png-images-transpa-free-pngmart-com-bmw.png',
          iconSize: [50],
        }),
        clusterOptions: {
          spiderfyOnMaxZoom: true,
          animate: true
        }
      }
    },
    methods: {
      clusterClick: (e) => e.layer.zoomToBounds({padding: [10, 10]}),
      convertLatLng: (vehicle) => latLng(vehicle.location.lat, vehicle.location.lng),
    },
    mounted() {
      // apiServiceInstance.fetchVehicles().then((data) => { this.vehicles = data.vehicles })
      this.vehicles = apiServiceInstance.fetchVehicles()
      this.$refs.map.mapObject.fitBounds(this.vehicles.map(v => { return [v.location.lat, v.location.lng] }))
    }
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
