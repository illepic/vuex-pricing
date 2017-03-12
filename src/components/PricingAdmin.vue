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

      <div class="col-sm-2">
        <span>Change zip: </span>
      </div>

      <div class="col-sm-3">
        <form class="input-group">
          <input type="text" class="form-control" placeholder="Zip..." :value="location.zip.request" @change="localZipRequest">
          <span class="input-group-btn">
            <input class="btn btn-secondary" type="submit" value="Go!">
          </span>
        </form>

      </div>

      <div class="col-sm-7">
        <div class="btn-group" role="group">
          <button type="button" @click="changeLocation({ zip: '99163' })" class="btn btn-secondary">99163</button>
          <button type="button" @click="changeLocation({ zip: '99999' })" class="btn btn-secondary">99999</button>
          <button type="button" @click="changeLocation({ zip: '85001' })" class="btn btn-secondary">85001</button>
          <button type="button" @click="changeLocation({ zip: '11111' })" class="btn btn-secondary">11111</button>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    methods: {
      localZipRequest(e) {
        this.$store.dispatch('changeZipRequest', e.target.value)
      },
      ...mapActions([
        'changeLocation',
      ])
    },
    computed: {
      ...mapGetters([
        'location',
      ])
    }
  }
</script>
