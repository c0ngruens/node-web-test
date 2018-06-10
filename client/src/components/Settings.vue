<template>
    <page :title="this.$options.name">
        <div class="md-layout md-alignment-center-top" slot="content">
             <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                 <p>TEST</p>
             </div>
        </div>
    </page>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  name: 'Settings',
  data: () => ({
    something: 'Home'
  }),
  components: { Page }
}
</script>

<style scoped>
</style>
