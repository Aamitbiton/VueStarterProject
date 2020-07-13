<template>
    <div>
        <v-form>
            <v-container>
                <v-row>
                    <v-col class="authentication-headline">
                        <h1>forgot password</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    >
                        <v-text-field
                                :rules="[() => !!email || 'This field is required']"
                                v-model="email"
                                label="Email"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row style="text-align: center">
                    <v-col style="padding-top: 0">
                        <v-btn medium @click="submitForgotPass">send link to mail</v-btn>
                    </v-col>


                </v-row>

                <v-row>
                    <v-col>
                        <router-link to="/login"><a>login</a></router-link>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    import firebaseInstance from '../../firebase/init';

    export default {
        name: "ForgotPass",
        data: () => ({
            email: null,
        }),
        methods: {
            submitForgotPass() {
                const self = this;
                firebaseInstance.firebase.auth().sendPasswordResetEmail(this.email)
                    .then(res => {

                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage)
                    });
            }
        }
    }
</script>

<style scoped>
    *{
        text-align: center;
    }

    .row {
        width: 90%;
        margin: 0 auto;
    }

    .col-md-4 {
        padding-top: 0;
    }

    a {
        color: #121212;
        text-decoration: none;
    }
</style>