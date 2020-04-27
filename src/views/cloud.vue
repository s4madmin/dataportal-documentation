<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="2">
            </v-col>
            <v-col cols="12" md="8">
                

                <h2>Cloud Infrastructure</h2>

                <br>
                <br>

                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/dataportal_cloud_infrastructure.JPG"
                max-height="650"
                ></v-img>
                
                <br>
                <br>    

                <hr>

                <br>
                <br>   
                <a href="http://nginx.org/" target="_blank"><h3 style="color: #6A76AB; font-weight: 300;">Nginx:</h3></a>
                <p>
                    Nginx is used as the remote proxy/web server. It contains extensibility features for SMTP although this functionality is not currently implemented. 
                    It listens externally on ports 80/443. All requests will be routed to 443 and to the internal flask application on port 80. Certificates are stored in './nginx/data/certs:/etc/nginx/certs'
                    as per the docker-compose setup. 
                </p>
                <br>
                <br>   
                <a href="https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_australia_search_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&gclid=CjwKCAjw4pT1BRBUEiwAm5QuR-GU7Rl6JcUPqHVw5vchF1ZTNIQQOKAo7WaOYGpk0aADJyAF4ucN7hoCZNIQAvD_BwE" target="_blank"><h3 style="color: #6A76AB; font-weight: 300;">Mongo:</h3></a>
                <p>
                    Mongo is used for metadata, governance and annotation data storage. Mongo suits our use case well, it can accomodate nested data structures which will change over time. 
                    Its scalable and integrates well with our REST API. 
                </p>
                <br>
                <br>   
                <a href="https://www.postgresql.org/" target="_blank"><h3 style="color: #6A76AB; font-weight: 300;">Postgres:</h3></a>
                <p>
                    Postgres houses user auth information and dataset samples data. It handles large amounts of data well and is suited to transactional operations which we use for manipulation of our samples.
                </p>
                <br>
                <br>   
                <a href="https://flask.palletsprojects.com/en/1.1.x/" target="_blank"><h3 style="color: #6A76AB; font-weight: 300;">Flask:</h3></a>
                <p>
                    The flask application services both our <a href="https://api.stemformatics.org" target="_blank">API</a> (swagger) and our internal annotation and governance systems. 
                    It is built with flask-restplus and is highly extensible. Templating for internal systems is built with the jinja framework. 
                </p>
                <br>

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

