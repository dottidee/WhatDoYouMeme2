<template>
<div class = "container">
  <Nav> </Nav>
  <div id="app">
    
    <router-view/>
  </div>
</div>
</template>

<style lang="scss">

</style>

<script>
import Nav from './components/Nav'

export default {
  //components is an object that ttakes objects
  components: {
    Nav
  }
}
</script>