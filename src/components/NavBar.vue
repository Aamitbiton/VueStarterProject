<template>
    <div  class="nav-container">
        <Drawer/>
        <v-app-bar app dark>
            <v-app-bar-nav-icon @click.stop="setDrawer(true)"/>
            <v-toolbar-title>
                <p   style="font-family:'Courier New'">YourNameProject</p>
            </v-toolbar-title>
<!--            <SelectDisplayType v-if="user"/>-->
        </v-app-bar>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import Drawer from "./Drawer";

    export default {
        name: "NavBar",
        components: {Drawer},
        methods: {
            setDrawer(){
                this.$store.commit('app/setDrawer',true)
            },

        },
        // computed: mapState({
        //     user: state => state.authentication.user,
        // }),
    };
</script>

<style scoped>
    *{
        text-align: center;
    }
    p{
      font-size: larger;
        position: fixed;
        left: 42vw !important;
        top: 1vh;

    }


</style>
