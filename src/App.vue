<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Weather</router-link></li>
          <li><router-link to="/game">Game</router-link></li>
          <li><router-link to="/photo">Photo</router-link></li>
          <li><router-link to="/stopwatch">Stopwatch</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
    <footer class="footer-distributed">
      <div class="footer-left">
        <p class="footer-links">
          <a href="#">About </a>
          <a href="#">Contact </a>
          <a href="#">Sitemap </a>
          <a href="#">Privacy Policy </a>
          <a href="#">Desclaimer </a>
        </p>
        <p class="footer-company-name">Copyright © 2023 PushTheme Learning Solutions Pvt. Ltd.</p>
      </div>
     
    </footer>
  </div>
  
  
</template>


<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
}

body{
  background: skyblue;
  font-family: Verdana;
}

header {
  background: #333;
  padding: 20px;
}
nav ul {
  text-align: center;
  font-family: Lucida Sans;
  list-style: none;
  margin: 0;
  padding: 0;
}
nav li {
  display: inline-block;
  margin-right: 10px;
}
nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
}

footer{
  padding: 10px;
  background: #333;
  color: white;
}

.footer-links a{
  color: white;
  text-decoration: none;
  
}

nav a:hover{
  background-color: chocolate;
  transition-duration: 0.3s;
  border-radius: 10px;
}
</style>