<template>
  <div id="app">

    <hello-world></hello-world>

    <post
      v-for="post in posts"
      :heading="post.title"
      :body="post.body"
      :key="post.id">
    </post>

  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { State, Action, namespace } from 'vuex-class'

import HelloWorld from '@/components/HelloWorld'
import Post from '@/components/Post'

// Loading a store module
const PostsModule = namespace('Posts')

@Component({
  // Include components
  components: {
    HelloWorld,
    Post
  }
})
export default class App extends Vue {
  @PostsModule.State posts
  @PostsModule.Action fetchPosts

  created () {
    this.fetchPosts()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
