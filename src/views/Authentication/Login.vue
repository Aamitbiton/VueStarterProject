<template>
    <div class="login">
        <v-form>
            <v-container>
                <v-row>
                    <v-col class="authentication-headline">
                        <h1>Login</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col

                    >
                        <v-text-field class="inputt"
                                :rules="[() => !!email || 'This field is required']"
                                v-model="email"
                                label="email"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>

                        <v-text-field
                                :rules="[() => !!password || 'This field is required']"
                                v-model="password"
                                label="password"
                                type="password"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row style="text-align: center">
                    <v-col style="padding-top: 0">
                        <v-btn medium @click="signInUser">Log In</v-btn>
                    </v-col>


                </v-row>

                <v-row>
                    <v-col>
                        <router-link to="/forgot-pass"><a>forgot password</a></router-link><br>
                        <br>
                        <router-link to="/sign-up"><a style="padding-right: 1rem">registration</a></router-link>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>



    </div>
</template>

<script>
    import firebaseInstance from '../../firebase/init';
    import notifier from "../../main";

    export default {
        name: "Login",
        data: () => ({
            email: null,
            password: null,
        }),
        methods: {
            signInUser() {
                const self = this;
                firebaseInstance.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(async res => {
                        notifier.notifier.success('Login Success')
                        await self.$store.dispatch('authentication/login', res.user)
                        await self.$router.push('/home')
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage)
                        notifier.notifier.alert(errorMessage,errorCode)
                    });
            }
        }
    }
</script>

<style scoped>
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
    .login{
        text-align: center !important;
    }



</style>