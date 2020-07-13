<template>
  <div  @click="setDrawerOff">
  <v-app id="inspire">
    <NavBar/>
    <v-content>
      <RouterView/>
    </v-content>
  </v-app>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";

  export default {
    name: 'LayoutsDemosBaselineFlipped',
    components: {NavBar},
    methods:{
      setDrawerOff(){
        this.$store.commit('app/setDrawer',false)
      },
    },
  };
</script>

<style lang="scss">
  @import '~vue-awesome-notifications/dist/styles/style.css';
  #awn-toast-container {
    text-align: right;
  }

  .v-toolbar__title {
    padding-right: 0 !important;
  }
  .authentication-headline {
    text-align: center;
    padding-bottom: 0;
  }
  .v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
  }
  .v-text-field__details{
    margin: 0!important;
    padding: 0;
  }
</style>