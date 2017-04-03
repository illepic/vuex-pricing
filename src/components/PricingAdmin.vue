<template>
  <div class="admin">

    <div class="alert alert-info">
      <span>Zip request: <strong>{{ location.zip.request }}</strong> |</span>
      <span>Zip: <strong>{{location.zip.zip }}</strong> |</span>
      <span>Zip status: <strong>{{location.zip.status }}</strong> |</span>
      <span>Zone request: <strong>{{location.zone.request }}</strong> |</span>
      <span>Zone: <strong>{{location.zone.zone }}</strong> |</span>
      <span>Zone status: <strong>{{location.zone.status }}</strong> |</span>
    </div>

    <div class="row">

      <div class="col-sm-4">
        <span>Change zip: </span>
        <form class="input-group" @submit.prevent="changeLocation({ zip: localZip })">
          <input type="text" class="form-control" placeholder="Zip..." v-model="localZip">
          <span class="input-group-btn">
            <input class="btn btn-secondary" type="submit" value="Go!">
          </span>
        </form>
        <span>needsZoneCalls: {{ needsZoneCalls }} | </span>
        <span>errorCheckUrl: {{ errorCheckUrl }} | </span>

      </div>

      <div class="col-sm-8">
        <div class="btn-group" role="group">
          <button type="button" @click="changeLocation({ zip: '99999' })" class="btn btn-danger">99999</button>
          <button type="button" @click="changeLocation({ zip: '99163' })" class="btn btn-secondary">99163</button>
          <button type="button" @click="changeLocation({ zip: '85001' })" class="btn btn-secondary">85001</button>
          <button type="button" @click="changeLocation({ zip: '11111' })" class="btn btn-secondary">11111</button>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="col-sm-12">
        <span>Products:</span>
        <div class="btn-group" role="group">
          <button type="button" @click="adminAddProduct('onlineplus')" class="btn btn-secondary">+OnlinePlus</button>
          <button type="button" @click="adminAddProduct('meetings')" class="btn btn-secondary">+Meetings</button>
          <button type="button" @click="adminAddProduct('coaching')" class="btn btn-secondary">+Coaching</button>
        </div>
     </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <span>Actions:</span>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-secondary">Location Price</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import mockProducts from '../mocks/MockProducts'

  export default {
    data() {
      return {
        localZip: ''
      }
    },
    methods: {
      adminAddProduct(uuid) {
        this.$store.dispatch('addProduct', { uuid, pdata: mockProducts[uuid] })
      },
      ...mapActions([
        'changeLocation',
      ])
    },
    computed: {
      ...mapGetters([
        'location',
        // debug only
        'needsZoneCalls',
        'errorCheckUrl',
      ])
    }
  }
</script>
