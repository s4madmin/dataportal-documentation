<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3">
            </v-col>
            <v-col cols="12" md="6">

                <br>
                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/ui_home.JPG"
      
                max-width="750"
                ></v-img>
                
                <br>
                <br>    

                <p style="color: #6A76AB; font-weight: 500;">
                    The dataportal interface handles internal operations for annotating and uploading data. 
                </p>
                 <p style="color: grey; font-weight: 100;">
                     A governance page also displays all recent interactions with the data contained in the portal since its inception.
                     There is distinction between all datasets contained in the portal and 'atlas only' data, see the above image.
                </p>
                <br>    
                <hr>

                <br>
                <br>    

                <p style="color: #6A76AB; font-weight: 500;">
                    Annotation.
                </p>
                <br>
                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/datasets_page.JPG"
      
                max-width="750"
                ></v-img>
                
                <br>
                <br>  
                
                 <p style="color: grey; font-weight: 100;">
                    You can search all datasets on the annotation page. 
                    Currently, you can search on fields "ID, Date, Title, Authors, Description, Pubmed". 
                </p>
                <br>    
                <hr>


                <br>
                <br>    

                <p style="color: #6A76AB; font-weight: 500;">
                    Atlas Data Search.
                </p>
                <br>
                <v-img
                contain
                src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/atlas_Search.JPG"
      
                max-width="750"
                ></v-img>
                
                <br>
                <br>  
                
                 <p style="color: grey; font-weight: 100;">
                    You can search by dataset or sample. 
                    When you open a dataset, there is functionality to filter by 'tier1, tier2, tier3.'
                </p>
                <br>    
                <hr>


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

