<template>
    <v-navigation-drawer
            v-model="drawer"
            app
            left>
        <v-list dense>
            <v-list-item link  to="/login" v-if="!user">
                <v-list-item-action>
                    <v-icon>mdi-login</v-icon>
                </v-list-item-action >
                <v-list-item-content>
                    <v-list-item-title>login</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link  to="/sign-up" v-if="!user">
                <v-list-item-action>
                    <v-icon>mdi-account-plus</v-icon>
                </v-list-item-action >
                <v-list-item-content>
                    <v-list-item-title>registration</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/" v-if="user">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link @click="openDialog" v-if="user">
                <v-list-item-action>
                    <v-icon>mdi-logout</v-icon>
                </v-list-item-action >
                <v-list-item-content>
                    <v-list-item-title>logOut</v-list-item-title>
                    <LogoutDialog />
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import LogoutDialog from "./LogoutDialog";
    import {mapState} from "vuex";

    export default {
        name: "Drawer",
        methods: {
            openDialog(){
                LogoutDialog.methods.dialog()
            }
        },
        computed: {
            ...mapState ({
                user: state => state.authentication.user,
            }),
            drawer: {
                get() { return this.$store.state.app.drawer },
                set(value) {this.$store.commit('app/setDrawer', value)}
            }
        },
        components: {LogoutDialog}
    }
</script>

<style scoped>

</style>
