<script>
import { marked } from 'marked';
export default {
  name: 'App',
 data(){
   return {
     markdown:  "",
   };
 },
 computed: {
   markdownToHtml(){
     return marked(this.markdown);
   }
 }
}

</script>

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

<template>
  <textarea v-model="markdown"></textarea>
  <div v-html="markdownToHtml"></div>
</template>

