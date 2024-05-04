<template>
    <v-dialog persistent max-width="400" v-model="isActive">
        <v-form @submit.prevent="handleSubmit"> 

        
            <v-card title="Add Service" > 
                <v-card-text>
                    <v-text-field
                        label="Service Name"
                        required
                        v-model="serviceName"
                        :rules="serviceNameRules"
                    ></v-text-field>
                    <v-textarea
                        label="Description"
                        required
                        :rules="serviceDescriptionRules"
                        v-model="serviceDescription"
                    ></v-textarea>
                    <v-text-field
                        label="Duration (minutes)"
                        required
                        type="number"
                        :rules="serviceDurationRules"
                        v-model="serviceDuration"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green"
                        type="submit"
                        text="Add Service"
                    ></v-btn>
                    <v-btn
                        color="red"
                        text="Exit"
                        @click="isActive = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>


    export default {
        props:["submit"],
        setup(props, ctx) {
        

        
        },
        data() { return {
            isActive:true,
            serviceName:'',
            serviceDescription:'',
            serviceDuration:'',
            serviceNameRules:[
                serviceName => {
                    if(serviceName) return true

                    return 'You must enter a service name.'
                }
            ],
            serviceDescriptionRules:[    
                serviceDescription => {
                    if(serviceDescription) return true

                    return 'You must enter a service description.'
                }
            ],
            serviceDurationRules:[
                serviceDuration => {
                    if(serviceDuration) return true

                    return 'You must enter a service duration.'
                },
            ],
            }
        },
        methods:{
            handleSubmit(){
                this.isActive=false;
            }
        }
    }

</script>