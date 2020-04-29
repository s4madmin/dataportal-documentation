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
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/tests.JPG"
      
                max-width="750"
                ></v-img>
                
                <br>
                <br>    

                <p style="color: grey; font-weight: 100;">
                Each moudlar component (Api, Site) directory in the flask application will have a tests folder. 
                This is where unit testing and TDD files are created and stored. 
                Travis CI, Azure pipelines, Bitbucket-pipelines, Circle CI integration etc. will all look for this folder when running test automation.
                </p>
                <p style="color: grey; font-weight: 100;">
                Please endeavour to write your tests before writing your production code.
                </p>
                <p style="color: #6A76AB; font-weight: 500;">
                    "Test-driven development is increasingly widespread and there is good empirical evidence that it's a beneficial practice. 
                    TDD reduces the number of bugs in production and improves code quality. In other words it makes code easier to maintain and understand. 
                    Also, it provides automated tests for regression testing."
                </p>



                <br>
                <br>

                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/unit_test_user.JPG"
      
                max-width="750"
                ></v-img>
                
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

