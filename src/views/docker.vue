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
                src="https://dataportal-api-github.s3-ap-southeast-2.amazonaws.com/Docker_logo_011.0.png"
                max-height="550"
                ></v-img>
                
                <br>
                <br>    

                <p>
                    Our production build uses docker-compose. 
                    This allows us to automate our deployment process/builds and gives us great portability, maintainability and standardization. 
                    In the past, we would have to wait for build out of physical machines to be "production-ready", then iron out any inconsistencies during the deployment process manually. 
                    With docker, this is no longer required. You can easily reproduce your production build quickly with docker-compose.
                </p>
                <br>
                <br>  
                <h3 style="color: #6A76AB; font-weight: 500;">Dockerfile:</h3>
                <br>
                <br>  
                <p>
                    The dockerfile contains the instructions for how to build the container. 
                    You can specify the base image you want to use as well as things like dependencies and repositories. 
                    Use the `docker build ` command to start the build process. For example:
                </p>
                <br>
                <br>
                <code class="code">
                    docker build -t flask_api:latest .
                </code>
                <br>
                <br>
                <p>
                    You can tag your image with the `-t` flag. Tags are important when pushing your image to a remote repo. 
                    After your build completes, you should see output similar to the following:
                </p>
                <br>
                <v-img
                contain
                src="https://dataportal-api-github.s3-ap-southeast-2.amazonaws.com/build_result.PNG"
                max-height="550"
                ></v-img>
                <br>
                <br>
                <p>
                    You can see your newly created image (container) as well as the base image from which it was created (docker.io etc.).
                </p>
                <br>
                <br>  
                <h3 style="color: #6A76AB; font-weight: 500;">Building for production:</h3>
                <br>
                <br> 
                <p>
                    If you want to build a production/devlopment clone of the dataportal:
                </p>
                <ul>
                    <li style="color: grey; font-weight: 100;">git pull the latest version of the repo</li>
                    <li style="color: grey; font-weight: 100;">make sure docker is installed with sudo priveleges</li>
                    <li style="color: grey; font-weight: 100;">load .env file with variables into your home/root directory</li>
                    <li style="color: grey; font-weight: 100;">run the 'load_data.sh' bash script - this will download data dump files for mongo and psql, as well as the SSL certs for Nginx</li>
                    <li style="color: grey; font-weight: 100;">execute 'docker-compose up' command</li>
                </ul>
                <br>
                <p>
                    If you would prefer, you can load your .env file into the flask container after the build completes using the 'load_vars.sh' or your own custom script.
                    You can also just execute 'export VAR=VALUE' from within the terminal, though this will be tedious as the application requires a lot of environment variables to be configured. 
                </p>
                 <br>
                <br>  
                <h3 style="color: #6A76AB; font-weight: 500;">Useful commands:</h3>
                <br>
                <br> 
                <p>
                   Stop/remove containers:
                </p>
                <code class="code">
                    docker stop $(docker ps -a -q)
                </code>
                <br>
                <br>
                <code class="code">
                    docker rm $(docker ps -a -q)
                </code>
                <br>
                <br>
                <p>
                    Logging into a running container, where (flask,mongo,postgres,nginx is the {container_name}):
                </p>
                <code class="code">
                    docker exec -it {container_name} bash
                </code>
                <br>
                <br>
                <p>
                    To login to a running container as root or other user:
                </p>
                <code class="code">
                    docker exec -it --user root {container_name} bash
                </code>
                <br>
                <br>
                <p>
                    If you want to copy files from inside a container to the outside host using the container ID:
                </p>
                <code class="code">
                    docker cp a8b3957fd159:/var/lib/postgresql/users_v1.0.sql ~/
                </code> 

                <br>
                <br>
                <br>
                <br>
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
}
</style>

