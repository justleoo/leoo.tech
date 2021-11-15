<template>
  <MainComponent/>
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent
  }
}
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.imgur.com/3UePe8W.jpg')`
</script>

<style>
#app {
  font-family: Courier New;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
  #avatar {
    width: 200px;
    height: 200px;
    background: rgb(56, 56, 56);
    border-radius: 300px;
    position: relative;
    transform: translate(-50%, 0);
    background-size: 100%;
    left: 50%;
    border: 5px solid #fff;
}

.githubRedirect {
  color: white;
  font-size: 25px;
  text-decoration: none;
  font-family: Courier New, monospace;
  text-align: center;
}
</style>
