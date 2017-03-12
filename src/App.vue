<template>
  <div id="app" class="container">
    <!--<CompletedTodos></CompletedTodos>-->
    <!--<GetTodo></GetTodo>-->
    <!--<CurrentTodos></CurrentTodos>-->


      <div class="row">
        <div class="col-sm-12">
          <PricingAdmin></PricingAdmin>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4">
          <PricingProduct uuid="onlineplus"></PricingProduct>
        </div>
        <div class="col-sm-4">
          <PricingProduct uuid="meetings"></PricingProduct>
        </div>
        <div class="col-sm-4">
          <PricingProduct uuid="coaching"></PricingProduct>
        </div>
      </div>


  </div>
</template>

<script>
//  import GetTodo from './components/GetTodo.vue'
//  import CurrentTodos from './components/CurrentTodos.vue'
//  import CompletedTodos from './components/CompletedTodos.vue'
  import PricingProduct from './components/PricingProduct.vue'
  import PricingAdmin from './components/PricingAdmin.vue'

  export default {
    components: {
//      GetTodo,
//      CurrentTodos,
//      CompletedTodos,
      PricingAdmin,
      PricingProduct
    }

  }
</script>

<style lang="scss">

</style>
