<template>
    <div class="page-container">
      <md-app class="md-layout-column">
        <md-app-toolbar class="md-primary">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">{{title}}</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible" >
          <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-title">My App</span>
          </md-toolbar>

          <md-list>
            <md-list-item v-for="menuItem in menuItems" :key="menuItem.text" @click="routeGo ( menuItem.route)">
              <md-icon>{{menuItem.icon}}</md-icon>
              <span class="md-list-item-text">{{menuItem.text}}</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content>
            <slot name="content"></slot>
        </md-app-content>
      </md-app>
    </div>
</template>

<script>
export default {
  name: 'Page',
  data: () => ({
    menuVisible: false,
    menuItems: [
      { text: 'Home', icon: 'home', route: '/' },
      { text: 'Settings', icon: 'settings', route: '/settings' }
    ]
  }),
  props: ['title'],
  methods: {
    routeGo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container {
  min-height: 300px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}
.md-app {
  min-height: 350px;
  height: 100vh;
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
