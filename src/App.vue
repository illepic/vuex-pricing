<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-sm-12">
        <pricing-admin></pricing-admin>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4">
        <pricing-product uuid="onlineplus"></pricing-product>
      </div>
      <div class="col-sm-4">
        <pricing-product uuid="meetings"></pricing-product>
      </div>
      <div class="col-sm-4">
        <pricing-product uuid="coaching"></pricing-product>
      </div>
    </div>

  </div>
</template>

<script>
  import PricingProduct from './components/PricingProduct.vue'
  import PricingAdmin from './components/PricingAdmin.vue'

  export default {
    components: {
      PricingAdmin,
      PricingProduct
    }

  }
</script>

<style lang="scss">

</style>
