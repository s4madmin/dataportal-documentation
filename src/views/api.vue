<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3">
            </v-col>
            <v-col cols="12" md="6">

                <br>
                <br>

                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/api_screenshot_swagger_ui.JPG"
                max-height="650"
                ></v-img>
                
                <br>
                <br>    

                <p>
                    The API swagger interface can be used to query the dataportal for a particular dataset and its corresponding type/formats.
                </p>
                <p>
                    For example:
                </p>

                <ul>
                    <li style="color: grey; font-weight: 100;">/dataset/<b>samples</b> - where samples will return a .tsv file for the datasets samples.</li>
                    <li style="color: grey; font-weight: 100;">/dataset/<b>metadata</b> - where metadata will return a .json file for the datasets metadata.</li>
                    <li style="color: grey; font-weight: 100;">/dataset/<b>expression</b> - where expression will return a .tsv file for the datasets expression files.</li>
                </ul>
          
                <br>

                <p>
                    <h3 style="color: #6A76AB; font-weight: 500;"> * Currently, the API supports un-authenticated access to public datasets only. </h3>
                </p>

            </v-col>

            <v-col cols="12" md="3">
            </v-col>
        </v-row>
    </v-container>

  
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>

