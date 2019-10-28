<template>
<div class = "container">
  <Header>

  </Header>
  <Nav> </Nav>
  <div id="app">
    
    <router-view/>
    <myFooter>
    
    </myFooter>
  </div>
</div>
</template>

<style lang="scss">

</style>

<script>
import Nav from './components/Nav';
import myFooter from './components/Footer';
import Header from './components/Header'

export default {
  //components is an object that ttakes objects
  components: {
    Nav, myFooter, Header
  }
}
</script>