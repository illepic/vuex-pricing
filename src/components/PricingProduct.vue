<template>
  <div v-if="product" :data-price-container-uuid="uuid" class="price-field-container field-type-wwvs-price-field field-widget-wwvs-price-field" :class="cssState">

    <div class="product__debug card">
      <div class="card-header"><small>{{ uuid }}</small></div>
      <div class="card-block"><strong>pdata</strong></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">default_price: {{ product.pdata.default_price }}</li>
        <li class="list-group-item">product_id: {{ product.pdata.product_id }}</li>
        <li class="list-group-item">promo_offer: {{ product.pdata.promo_offer_id }}</li>
        <li class="list-group-item">type: {{ product.pdata.type }}</li>
      </ul>
      <div class="card-block"><strong>widget</strong></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">default_price: {{ product.pdata.default_price }}</li>
        <li class="list-group-item">product_id: {{ product.pdata.product_id }}</li>
        <li class="list-group-item">promo_offer: {{ product.pdata.promo_offer_id }}</li>
        <li class="list-group-item">type: {{ product.pdata.type }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      uuid: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        debug: true
      }
    },
    computed: {
      cssState() {
        return {
          'price-field-state--loading': true
        }
      },
      product() {
        console.log(this.$store.getters.getProductByUuid(this.uuid));
        return this.$store.getters.getProductByUuid(this.uuid)
      }
    }
  }
</script>
