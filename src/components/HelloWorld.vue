<template>
  <div class="hello-world">
    {{ msg }}
  </div>
</template>

<script>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 'there' })
  firstName

  get msg () {
    return `Hello, ${this.firstName}`
  }
}
</script>

<style scoped>
  .hello-world {
    margin-bottom: 20px;
  }
</style>
