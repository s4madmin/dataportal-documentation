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

                <p style="color: #6A76AB; font-weight: 500;">
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
                <p style="color: #6A76AB; font-weight: 500;">
                    Directory structure.
                </p>
                <p style="color: grey; font-weight: 100;">
                    The above image is a top-level overview of the application structure where flask.app contains the applications modules. 
                    The app.ini file contains all the build information for a production grade uWSGI, or app server interface. 
                    Run.py is an executable python file which should be used for adhoc or development environments - this file is not suitable for production*.
                </p>
                <p style="color: grey; font-weight: 100;">
                    The dockerfile and requirements.txt files are both required for building a containerised instance of the application. 
                    If your deploying to production then you will not need to manipulate this file in any way - 
                    both are called in the docker-compose.yml file at the top level directory during the deployment process. 
                </p>
                <br>
                <hr>
                <br>
                <br>

                <p style="color: grey; font-weight: 100;">
                    <b>API:</b> The api folder contains the models and endpoint functions necessary for API access, both internally and externally.
                    Functionality for interacting with the dataset and user classes etc. can be found in the models folder. 
                    The routes folder contains all the files necessary for endpoint and 'controller' functionality. 
                </p>

                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/flask_api_dir.JPG"
                max-width="750"
                ></v-img>
                <br>
            
                <p style="color: grey; font-weight: 100;">
                    <b>SITE:</b> The site module contains all the endpoint and controller functionality for the internal Dataportal systems. 
                </p>
                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/sites_controllers.JPG"
                max-width="750"
                ></v-img>
                <br>
                
                <p style="color: grey; font-weight: 100;">
                   The templates directory contains all the templating functionality for internal systems only. 
                   It uses jinja 2, whose interpolation syntax requires the use of '{{}}'.
                   This is important becuase we also use vue.js as our Javascript framework. 
                   You need to declare new delimiters in your vue instance to avoid issues here, for example:
                </p>
                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/templates_api.JPG"
                max-width="750"
                ></v-img>
                <br>
                <p style="color: #6A76AB; font-weight: 500;">
                    Delimiter declaration in vue instance:
                </p>
                <code class="code">
                    delimiters: ['[[',']]'],
                </code>

                <br>
                <br>
                <br>

                <hr>

                <br>
                <br>

                <p>
                    Flask uses 'blueprints' for a modular approach to its application architecture design. 
                </p>
                <p style="color: grey; font-weight: 100;">
                    If you look at __init__.py module import you can see explicit usage of module imports. 
                    To make a module callable as a flask blueprint, you can set the module blueprint name in your file like this:
                </p>
                <code class="code">
                    module = Blueprint('admin', __name__)
                </code>
                <br>
                <br>
                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/flask_blueprinting.JPG"
                max-width="750"
                ></v-img>
                <br>

                <br>
                <br>
                <br>

                <hr>

                <br>
                <br>

                <p>
                    API documentation:
                </p>
                <p style="color: grey; font-weight: 100;">
                    Taking api.routes.dataset.py as an example of how to 'wrap' functionality using the flask rest-plus decorators.
                </p>
                <code class="code">
                    @dataset_name_space.route(/<"int:datasetId>/<"string:dataType>)	# This is how you can define your API in the swagger documentation.
                </code>
                <br>
                <br>
                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/api_docu_swag.JPG"
                max-width="750"
                ></v-img>
                <br>
                <p style="color: grey; font-weight: 100;">
                    Declare get,post methods within your endpoint class to define your functionality with swagger UI:
                </p>
                <br>
                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/swaggerd.JPG"
                max-width="750"
                ></v-img>
                <br>
                
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

.code {
    color: #181818; 
    background-color: #F5F5F5;
    padding-top: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
}

</style>

