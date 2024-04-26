<template>
    <div class="footer-basic">
  <footer>
    <ul class="list-inline">
      <li class="list-inline-item"><router-link class="item"  to="/">Home</router-link></li>
      <li class="list-inline-item"><router-link class="item" to="/">Cookies Policy</router-link></li>
      <li class="list-inline-item"><router-link class="item" to="/">Privacy Policy</router-link></li>
      <li class="list-inline-item"><router-link class="item" to="/">Legal Notice</router-link></li>
      <li class="list-inline-item"><router-link class="item" to="/">Contact</router-link></li>
    </ul>
    <p class="copyright">NOMBRE DE LA EMPRESA &copy;  </p>
  </footer>
</div>
  </template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'Footer',
    })
</script>

<style scoped>
 .footer-basic {
  padding:2em 0;
  background-color:#000000;
  color:#4b4c4d;
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:.95em;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
}

.footer-basic ul .item {
  color: #ffffffbe;
  text-decoration:none;
  opacity:1;
}

.footer-basic ul .item:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-top: 1em;
}

.footer-basic .social > .item {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  margin:0 8px;
  color:#ffffffbe;
  opacity:0.95;
}

.footer-basic .social > .item:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:2em;
  text-align:center;
  font-size:14px;
  color:#aaa;
  margin-bottom:0;
}

@media screen and (max-width: 330px) {
  .list-inline {
    display: flex;
    flex-direction: column;
  }

  .list-inline-item {
    margin-right: 0;
  }
  
}
</style>