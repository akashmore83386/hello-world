<template>
  <div id="">
  <router-link to="/register" class="menu">Register</router-link>&nbsp;&nbsp;
  <!-- <router-link to="login" class="menu">Login</router-link> -->
  <router-view></router-view>
  <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   -->
   <!--  <Header />
   <CreateItem />
   <AddItem />
     <tableHeader />
       
      <Example />
     -->
        <h1></h1>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import tableHeader  from './components/tableHeader.vue'
//import Header from './components/Header.vue'
//import Example from './components/Example.vue'
//import CreateItem from './components/CreateItem.vue'
//import AddItem from './components/AddItem.vue'
export default {
  name: 'App',
  
  components: {
   //tableHeader,Header,CreateItem,AddItem,
   // HelloWorld
   //Example
  }, 
   
   
}
</script>

<style scope>
.menu{
  color:black;
  font-size:30px;
}
</style>
