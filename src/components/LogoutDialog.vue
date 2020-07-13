<template>



</template>

<script>
    import firebaseInstance from "../firebase/init";
    import AWN from "awesome-notifications"
    import notifier from "../../src/main";
    import VueComponent from  "../../src/main"

    export default {
        name: "LogoutDialog",
        data:()=>({
        }),
        methods: {
            dialog(){
                let notifier = new AWN();
                let onOk = () => this.signOut();
                let onCancel = () => {notifier.info('you stay :)')};
                notifier.confirm(
                    'Are you sure?',
                    onOk,
                    onCancel,
                    {
                        labels: {
                            confirm: 'LogOut'
                        }
                    }
                )
            },



            signOut(){

                firebaseInstance.firebase.auth().signOut()
                    .then(async res => {
                        // Sign-out successful.
debugger
            VueComponent.store.dispatch('authentication/logout',null)
                        notifier.notifier.success('LogOut Success')
                        console.log('Signed Out ' + res)
                    })
                    .catch(error => {
                    // An error happened.
                    console.log(error)
                });

            },

        },

    }
</script>

<style scoped>

</style>