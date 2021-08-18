<template>
  <v-app id="inspire">
    <v-app-bar app color ="green">
      <v-app-bar-nav-icon color='white' @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>EduAdmin</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in menus"
          :key="item.title"
          :to='item.link'
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class=" lighten-2">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'App',

  data: () => ({
    drawer: null ,
    menus: [
          { title: 'Bosh sahifa', icon: 'mdi-view-dashboard',link:'/' },
          { title: 'O`qituvchilar', icon: 'mdi-briefcase-account',link:'/teachers' },
          { title: 'Guruhlar', icon: 'mdi-account-group-outline',link:'/group' },
          { title: 'Fanlar', icon: 'mdi-book-multiple',link:'/subjects' },
          { title: 'O`quvchilar', icon: 'mdi-account-multiple-check-outline',link:'/pupils' },
        ],
    //
  }),
  created(){
    this.$store.dispatch('allTeacher')
  }
};
</script>
