<template>
<div class="body">
  <top></top>
  <center></center>
  <foot></foot>
</div>
</template>
<script>
import top from '../components/top.vue'
import center from '../components/center.vue'
import foot from '../components/foot.vue'

export default {
  components: {
    top,
    center,
    foot
  }
}
</script>

<style lang="less">
img {
  width: 100%;
}
button {
  border: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
div,ul,h3,p {
  margin: 0;
  padding: 0;
}
.clearfix::after {
  clear: both ;
  content: '';
  display: block;
  visibility: hidden;
  height: 0;
}
li {
  list-style-type: none;
}
.body {
  position: relative;
}
body {
  overflow-x: hidden;
  max-width: 2560px;
  margin: 0 auto;
  padding: 0;
  border: 0;
  background: #E7EAEA;
}
a {
  text-decoration: none;
  display: block;
  color: white;
  padding: 0;
  margin: 0;
  font-size: 18px;
}
a:hover h3 {
  color: #d18e59;
}
a:link {color:white;}
a:visited {color:white;}
a:focus {color:white;}
a:hover {color:white;}
a:active {color:white;}
h3 {
  color: #fff;
}
</style>
