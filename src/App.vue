<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
    >
      <v-list dense>
        <br>
        <br>
        <template>
          
          <v-treeview
            color="#6A76AB"
            :items="items">
              <template slot="label" slot-scope="props">
                  <router-link :to="props.item.to" v-if="props.item.to" style="text-decoration: none; color: #6A76AB;">
                    {{ props.item.name }}
                  </router-link>
                  <span v-else>{{ props.item.name }}</span>
              </template>
          </v-treeview>
          
        </template>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#35B4CF"
      dark
    >
      <img
        src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/test_logo.PNG"
        alt="sm4_logo"
        width="120"
      >
      </img>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Dataportal Documentation</span>
      </v-toolbar-title>
      <v-spacer />
     
      <v-spacer />
     
    </v-app-bar>

    <v-content>
      
      <router-view/>

    </v-content>

    
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      searchList: ['/dataportal_v1.0'],
      items: [
        {
          id: 1,
          name: 'Release Notes',
          children: [
            { id: 1, name: 'Dataportal : v1.0', to: '/' },
          ],
        },
        {
          id: 3,
          name: 'About',
          children: [
            { id: 4, name: 'Access', to: '/access' },
          ],
        },
       
      ],
    }),
  }
</script>