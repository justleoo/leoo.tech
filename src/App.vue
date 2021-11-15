<template>
  <MainComponent/>
</template>

<script>
import MainComponent from './components/MainComponent.vue'
document.title = 'just leo' 
export default {
  name: 'App',
  components: {
    MainComponent
  }
}
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.imgur.com/3UePe8W.jpg')`
</script>
