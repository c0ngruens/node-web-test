<template>
  <div class="page-container">
    <form novalidate class="md-layout md-alignment-center-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-33 md-medium-size-60 md-small-size-75 md-xsmall-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>
        <md-card-content>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: null
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
