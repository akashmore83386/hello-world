<template>
  <div id="app">
      <Header msg="message"/>
    <div class="list"><h1 >List of transactions</h1></div>
    <button type="submit" class="list-1">Create New</button>
    <Table msg="hi"/>
    <router-view></router-view>
     <Footer />
  </div>
 
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';

import Header from './components/Header.vue';
import Table from './components/Table.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Table,
    Footer,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F7F7F7;
  margin-top: 60px;
}
.list{
  position: absolute;
  color: black;
  margin-top: 70px;
  border-radius: 10px;
  margin-left: 140px;
  overflow: hidden;
}
.list-1{
  position: absolute;
  color: white;
  margin-top: 70px;
  overflow: hidden;
  margin-left: 400px;
font-size: 20px;
background-color: #19174A;
border-radius: 5px;

}
.list-1:hover{
  cursor: pointer;
  background-color:green;
}
</style>
