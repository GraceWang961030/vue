<template>
<div>
  <h3>Hello world! This is a vuex demo!</h3>
  <input type="button" value="increase" @click="increase"/>
  <input type="button" value="decrease" @click="decrease"/>
  <input type="button" value="click when it's even" @click="clickEven"/>
  <input type="button" value="async" @click="clickAsync"/>
  <div>
    now the number is:{{count}}，it's {{type}}
  </div>
</div>
</template>

<script>
  import {mapGetters,mapActions,mapMutations,mapState} from 'vuex'
export default {
computed:mapGetters([
  'count',
  'type'
]),
  methods:mapActions([
    'increase',
    'decrease',
    'clickEven',
    'clickAsync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
