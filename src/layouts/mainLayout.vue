<template>
  <v-app id="main-layout">
    <v-navigation-drawer v-model="drawer" app>
      <v-list shaped>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

<!--      <div class="text-center">-->
<!--        <v-btn-->
<!--          color="primary"-->
<!--          @click="load"-->
<!--        >-->
<!--          test-->
<!--        </v-btn>-->
<!--      </div>-->

    </v-navigation-drawer>

    <v-app-bar app>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-on="on"></v-app-bar-nav-icon>
        </template>
        <span>Меню</span>
      </v-tooltip>

      <v-toolbar-title>O2-admin</v-toolbar-title>

      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple accent-4"
      ></v-progress-linear>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "MainLayout",

  components: {
  },

  data: () => ({
    drawer: true,
    items: [
      // { text: 'Общее состояние', icon: 'mdi-home-group', link: '/' },
      // { text: 'Непрочитанные сообщения', icon: 'mdi-note-multiple', link: '/unread' },
      { text: 'Квиз', icon: 'mdi-note-multiple', link: '/quiz' },
      { text: 'Сообщения', icon: 'mdi-note-multiple', link: '/messages' },
      { text: 'logout', icon: 'mdi-note-multiple', link: '/login' },
    ],
    loading: false
  }),

  watch: {
    loading (val) {
      if (!val) return
      setTimeout(() => (this.loading = false), 3000)
    },
  },

  methods: {
    load() {
      this.loading = true
    },
  },
}
</script>