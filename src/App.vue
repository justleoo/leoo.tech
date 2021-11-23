<template>
  <Home/>
</template>

<script>
import MainComponent from './components/Home.vue'
document.title = 'just leo' 
export default {
  name: 'App',
  components: {
    Home
  }
}
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.imgur.com/3UePe8W.jpg')`
</script>
