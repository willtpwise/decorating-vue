<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Post extends Vue {
  @Prop({ default: 'Untitled article' })
  heading

  @Prop()
  body

  get twitterURL () {
    let content = this.body
        content = content.substring(0, 75)
        content = encodeURIComponent(content)

    return `https://twitter.com/intent/tweet?text=${content}`
  }

  share () {
    window.open(this.twitterURL, false)
  }
}
</script>

<template>
  <article class="post">
    <header>
      <h2>{{heading}}</h2>
    </header>
    <main>
      <p>{{body}}</p>
    </main>
    <footer>
      <button @click="share">Share on Twitter</button>
    </footer>
  </article>
</template>

<style scoped>
.post {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

header, main, footer {
  padding-bottom: 20px;
}

button {
  background: #008bce;
  padding: 12px 15px;
  color: #fff;
  border-radius: 2px;
  display: inline-block;
  border: none;
}
</style>
