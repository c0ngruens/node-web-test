<template>
    <div class="page-container">
      <md-app md-mode="reveal" style="min-height: 100vh;">
        <md-app-toolbar class="md-primary">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <router-link to="/"><span class="md-title">{{title}}</span></router-link>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <!-- <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar> -->

          <md-list>
            <md-list-item v-for="menuItem in menuItems" :key="menuItem.text">
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
    title: 'COOL',
    menuItems: [
      { text: 'Home', icon: 'home' },
      { text: 'Settings', icon: 'settings' }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
