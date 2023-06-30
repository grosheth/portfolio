<script>
import { marked } from 'marked';

export default {
  props: {
    docs: String
  },

  name: 'App',
  data(){
    // Get documentation content from /documentation folder
    return {
      markdown:  "# LOL \n ## LOL \n ### Newline",
    };
  },
  computed: {
    markdownToHtml(){
      return marked(this.markdown);
    }
  }
}

</script>

<template>
  <!-- <textarea v-model="markdown"></textarea> -->
  <div v-html="markdownToHtml"></div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  margin-top: 60px;
}
</style>

