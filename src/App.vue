<template>
  <v-app color="light--grey">
    <Navbar/>
    <v-btn fab fixed right bottom color = "primary">
      <!-- <v-icon>add</v-icon> -->
      <span class = "text-lowercase">Help</span>
    </v-btn>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
   
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
