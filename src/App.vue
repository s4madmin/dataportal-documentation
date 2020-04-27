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
            open-all
            dense
            color="#6A76AB"
            :items="items">
              <template slot="label" slot-scope="props" dense>
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
      dense
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#35B4CF"
      dark
    > 
      <img
        contain
        src="https://dataportal-data.s3-ap-southeast-2.amazonaws.com/static/images/no_text_logo.png"
        alt="sm4_logo"
        width="100"
      />
      
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Dataportal Documentation</span>
      </v-toolbar-title>
      <v-spacer />
     
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = !drawer" style="padding-right: 15px;"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      
      <router-view/>

      <go-top bg-color="#35B4CF"></go-top>

    </v-content>

    
  </v-app>
</template>

<script>
import GoTop from '@inotom/vue-go-top';

  export default {
    components: {
      GoTop
    },
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
            { id: 5, name: 'API', to: '/api' },
          ],
        },
        {
          id: 6,
          name: 'Infrastructure',
          children: [
            { id: 7, name: 'Cloud', to: '/cloud' },
            { id: 8, name: 'Docker', to: '/docker' },
          ],
        },
        {
          id: 9,
          name: 'Application',
          children: [
            { id: 10, name: 'Flask-api', to: '/flask_api' },
            { id: 10, name: 'Dataportal Interface', to: '/dataportal_interface' },
          ],
        },
        {
          id: 11,
          name: 'Testing',
          children: [
            { id: 12, name: 'CI/CD', to: '/cicd' },
          ],
        },
       
      ],
    }),
  }
</script>