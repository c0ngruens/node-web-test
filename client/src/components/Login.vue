<template>
  <div style="min-height: 100vh; overflow-x: hidden;" class="md-layout">
    <form novalidate class="md-layout md-gutter md-alignment-center-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-33 md-large-size-33 md-medium-size-45 md-small-size-75 md-xsmall-size-90">
        <md-card-header class="md-layout md-alignment-center">
          <div class="md-title">
            <span>Login</span>
          </div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>Email</label>
            <md-input v-model="email" type="email"></md-input>
          </md-field>
          <md-field>
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
        </md-card-content>
        <md-card-actions md-alignment="space-between">
          <router-link to="/register"><md-button>Register</md-button></router-link>
          <md-button class="md-raised md-primary">Enter</md-button>
        </md-card-actions>
        <div class="space"></div>
      </md-card>
    </form>
</div>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space {
  padding-bottom: 8px;
}
</style>
