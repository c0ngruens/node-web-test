<template>
    <page>
        <div class="md-layout md-gutter md-alignment-center" slot="content">
             <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                 <p>TEST</p>
             </div>
             <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                 <p>TEST 2</p>
             </div>
        </div>
    </page>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  name: 'Home',
  data: () => ({
    something: 'Home'
  }),
  components: { Page }
}
</script>

<style scoped>
</style>
