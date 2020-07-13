<template>
    <div>
        <v-form>
            <v-container>
                <v-row>
                    <v-col

                    >
                        <v-text-field
                                v-model="name"
                                :counter="10"
                                label="Full Name"
                                :rules="[() => !!name || 'This field is required']"
                                required
                        ></v-text-field>
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

                <v-row>
                    <v-col

                    >
                        <v-text-field
                                :rules="[() => !!password || 'This field is required']"
                                v-model="password"
                                label="Password"
                                type="password"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-text-field
                                :rules="[() => !!password || 'This field is required']"
                                v-model="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col

                    >
                        <v-text-field
                                v-model="hotel"
                                label="Hotel"
                                :rules="[() => !!hotel || 'This field is required']"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>



                <v-row style="text-align: center">
                    <v-col style="padding-top: 0">
                        <v-btn medium @click="signUpUser">registration</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    import firebaseInstance from '../../firebase/init';
    import api from '../../firebase/api'
    import notifier from "../../main";


    export default {
        name: "SignUp",
        data: () => ({
            email: null,
            name: null,
            password: null,
            confirmPassword: null,
            hotel: null,
        }),
        methods: {
            signUpUser(){
                debugger
                if (this.password.length<6){
                    notifier.notifier.alert('weak-password Password should be at least 6 characters')
                    return
                }
                const self = this;
                firebaseInstance.firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(res => {
                        self.$store.dispatch('authentication/login', res.user)
                        self.$router.push('/home')
                        res.user.updateProfile({
                            displayName: this.businessName,
                        }).then(function() {
                            // Update successful.
                        }).catch(function(error) {
                            // An error happened.
                        });
                        const { email, name, businessName, businessNumber } = this;
                        api.set({
                            email,
                            name,
                            businessName,
                            businessNumber
                        })
                    })
                    .catch(function(error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                        notifier.notifier.alert(errorCode,errorMessage)

                    });
            }
        }
    }
</script>

<style scoped>
    .row{
        width: 90%;
        margin: 0 auto;
    }
.col-md-4{
    padding-top: 0;
}
</style>