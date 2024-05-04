<template>
    <v-dialog persistent max-width="400" v-model="dialog">
        <v-form ref="formRef" @submit.prevent="handleSubmit"> 

        
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
                    <v-row>
                        <v-col>
                            <v-text-field
                                label="Duration (minutes)"
                                required
                                type="number"
                                :rules="serviceDurationRules"
                                v-model="serviceDuration"
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                                label="Price (euros)"
                                required
                                type="number"
                                :rules="servicePriceRules"
                                v-model="servicePrice"
                            ></v-text-field>
                        </v-col>

                        
                    </v-row>

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
                        @click="closeDialog"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>

    import { ref , watch, onMounted  } from 'vue';

    export default {

        props:['dialogIsActive'],
        data() { return {
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
            servicePriceRules:[
                serviceDuration => {
                    if(serviceDuration) return true

                    return 'You must enter a service price higher than 0.'
                },
            ],
            }
        },

        setup(props, ctx) {

            const dialog = ref(props.dialogIsActive);
            const serviceName = ref('');
            const serviceDescription = ref('');
            const serviceDuration= ref(0);
            const servicePrice = ref(0)
            const formRef = ref(null);

            watch(() => props.dialogIsActive, (newValue) => {
                dialog.value = newValue;
            });

            onMounted(() => {
                if (formRef.value) {
                    formRef.value.resetValidation();
                }
            });


            const handleSubmit = () => {
                if (formRef.value.isValid) {
                    ctx.emit('service-added', serviceName.value, serviceDescription.value, serviceDuration.value, servicePrice.value);
                    serviceName.value = '';
                    serviceDescription.value = '';
                    serviceDuration.value = 0;
                    servicePrice.value = 0;
                } else {
                    console.log("Form isn't valid");
                }
            };

            function closeDialog() {
                ctx.emit('close-dialog');
            }

            return { dialog, serviceName, serviceDescription, serviceDuration, servicePrice, handleSubmit, closeDialog, formRef };
        
        },


    }

</script>