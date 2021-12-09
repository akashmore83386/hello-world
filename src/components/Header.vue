<template>
  <div class="container">
   
      <!-- <ul>
  <li><a href="/home" class="logo">Crud UI</a></li>
  <li><a href="/news"><MenuIcon /></a></li>
  <li><a href="/contact"><SettingIcon /></a></li>
  <li><a href="/akash"><SettingEngine /></a></li>
</ul> -->
<!-- <ul>
   <li slot="">
          Home
        </li>
</ul> -->
   

  </div>
</template>

<script>

// import MenuIcon from 'vue-material-design-icons/Menu.vue';
// import SettingIcon from 'vue-material-design-icons/AlarmBell.vue';
// import SettingEngine from 'vue-material-design-icons/FileSettings.vue';

export default {
  name: 'Header',
  components: {
        
        
  }
}
</script>

<style scoped>

ul {
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
  float: right;
  margin-right: 11px;
}

li {
  display: inline;
  padding: 10px;
}
.container{
  width: 1600px;
  height: 80px;
  background-color: #19174A;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  overflow: hidden;
}

.logo{
  float: left;
  margin-top: 2px;
  font-size: 50px;
  opacity: 1;
  margin-right: 1000px;
  font: normal normal bold 23px/32px Open Sans;
}


</style>