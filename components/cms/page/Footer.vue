<template>
  <SfFooter :column="4" class="abc">
    <SfFooterColumn v-for="(column, i) of items" :key="i" :title="column.heading">
      <SfList>
        <SfListItem v-for="(item, ii) in column.items" :key="ii">
          <SfMenuItem :label="title" :link="url" />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
  </SfFooter>
</template>

<script lang="ts">
import Vue from 'vue'
import { SfFooter, SfList, SfMenuItem } from '@storefront-ui/vue'

export default Vue.extend({
  name: 'Footer',
  components: {
    SfFooter,
    SfList,
    SfMenuItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
