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
            }
        },

        setup(props, ctx) {

            const dialog = ref(props.dialogIsActive);
            const serviceName = ref('');
            const serviceDescription = ref('');
            const serviceDuration= ref('');
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
                    console.log("El formulario es válido");
                    // Realiza la petición para añadir el servicio
                    // ctx.emit('service-added', serviceName.value, serviceDescription.value, serviceDuration.value);
                } else {
                    console.log("El formulario no es válido");
                }
            };

            function closeDialog() {
                ctx.emit('close-dialog');
            }

            return { dialog, serviceName, serviceDescription, serviceDuration, handleSubmit, closeDialog, formRef };
        
        },


    }

</script>