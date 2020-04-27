<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="2">
            </v-col>
            <v-col cols="12" md="8">

                <v-banner>
                    <v-container fill-height fluid>
                        <v-row align="center"
                            justify="center">

                            <v-col cols="12" md="2">

                                <v-container fill-height fluid>
                                    <v-row align="center"
                                        justify="center">
                                            <img
                                                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/test_logo.PNG"
                                                alt="sm4_logo"
                                                width="250"
                                            >
                                    </v-row>
                                </v-container>
            
                            </v-col>   
                            
                            <v-col cols="12" md="8">
                                <h2>Dataportal release notes v1.0</h2>
                                <br>
                                <h3 style="color: #6A76AB; font-weight: 300;">What's new in version 1.0</h3> 
                            </v-col>  

                            <v-col cols="12" md="2">
                                <v-container >
                                    <a href="http://api.stemformatics.org" target="_blank" style="text-decoration: none;">
                                        <v-row >
                                            <v-btn tile block depressed color="#6A76AB" class="white--text">Try</v-btn>
                                        </v-row>
                                    </a>
                                </v-container>
                            </v-col> 
                                       
                        </v-row>
                    </v-container>
                </v-banner>

                <div>
                    <v-container >
                        <v-row >
                            <v-col cols="12" md="10">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>

                                            <v-list-item-title>
                                                <h4 style="font-weight: 400;">What's new</h4> 
                                            </v-list-item-title>
                                           
                                            <v-list-item-content>
                                                <ul>
                                                    <li>
                                                        <p style="font-weight: 100;">
                                                        API Documentation: I've added a swagger UI Documentation plugin to the flask api application.
                                                        Now you will be able to document and expose any endpoints in the application using the @api_app.doc decorators. 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p style="font-weight: 100;">
                                                        Dataset upload page: Now you can add a dataset yourself using the dataset upload page. There is a required 'annotator'
                                                        field and dataset field. The annotator field records user interaction with the dataportal. The dataset field allows input of 
                                                        metadata and a samples.txt file. There is a format guide for naming conventions required when uploading samples.txt files. 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p style="font-weight: 100;">
                                                        Governance: I've added a governance feature to record user interaction with the API. Currently it only records data relating to dataset upload,
                                                        user, role date and notes. There is scope to extend this functionality in the future. Data can be found in the dataportal_prod_governance table in mongodb.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p style="font-weight: 100;">
                                                        Atlas data integration: Now you can use a dedicated Atlas page to browse/search for atlas data. You can filter by Blood/iMAC for all datasets or you can search by samples. 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p style="font-weight: 100;">
                                                        Admin console: Users can now be added/removed from an admin panel interface, instead of directly from the database. The admin panel is only available to users with admin access, not annotator access. 
                                                        </p>
                                                    </li>
                                                </ul>
                                            </v-list-item-content>
                                       
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>  
                            </v-col> 
                            
                            <v-col cols="12" md="2">
                            </v-col>  
                                       
                        </v-row>
                    </v-container>
                </div>

            </v-col>

            <v-col cols="12" md="2">
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