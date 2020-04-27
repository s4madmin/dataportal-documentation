<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3">
            </v-col>
            <v-col cols="12" md="6">

              
                <br>

                <v-img
                contain
                src="https://dataportal-api-github.s3-ap-southeast-2.amazonaws.com/flask_logo.png"
      
                max-width="550"
                ></v-img>
                
                <br>
                <br>    

                <p>
                    Both the API and the Dataportal are powered by flask.
                </p>
                <p style="color: grey; font-weight: 100;">
                    "Flask is a lightweight WSGI web application framework. 
                    It is designed to make getting started quick and easy, with the ability to scale up to complex applications. 
                    It began as a simple wrapper around Werkzeug and Jinja and has become one of the most popular Python web application frameworks."
                </p>

                <br>

                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/flask_top_level.JPG"
                max-width="750"
                ></v-img>
                <br>
                <p>
                    Directory structure.
                </p>
                <p style="color: grey; font-weight: 100;">
                    The above image is a top-level overview of the application structure where flask.app contains said modularity. 
                    The app.ini file contains all the build information for a production grade uWSGI, or app server interface. 
                    Run.py is an executable python file which should be used for adhoc or development environments - this file is not suitable for production*.
                </p>
                <p style="color: grey; font-weight: 100;">
                    The dockerfile and requirements.txt files are both required for building a containerised instance of the application. 
                    If your deploying to production then you will not need to manipulate this file in any way - 
                    both are called in the docker-compose.yml file at the top level directory during the deployment process. 
                </p>
                <br>

                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/flask_api_dir.JPG"
                max-width="750"
                ></v-img>
                <br>
                <p style="color: grey; font-weight: 100;">
                    <b>API:</b> The api folder contains the models and endpoint functions necessary for API access, both internally and externally.
                    Functionality for interacting with the dataset and user classes etc. can be found in the models folder. 
                    The routes folder contains all the files necessary for endpoint and 'controller' functionality. 
                </p>

                <p>
                    Flask uses 'blueprints' for a modular approach to its application architecture design. 
                </p>

                <br>
                <br>
                <br>
                <br>
                <br>
               
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

