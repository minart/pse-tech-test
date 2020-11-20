<template>
  <div class="layout">
    <div class="max-left">
      <a href="#" class="button primary">
        <font-awesome-icon :icon="['fas', 'dungeon']"  />
      </a>
    </div>
    <div class="left">
      <a href="#" class="button nav">
        <font-awesome-icon :icon="['fas', 'chevron-left']"  />
      </a>
    </div>
    <div class="center">
      <div class="logotype">
        <p class="subtitle">Collection</p>
        <h1>Henri potier</h1>
        <p class="search-box">
          <input type="text" class="search" placeholder="Rechercher ...."/>
          <font-awesome-icon :icon="['fas', 'search']"  />
        </p>
      </div>
      <Nuxt />
    </div>
    <div class="right">
      <a href="#" class="button nav">
        <font-awesome-icon :icon="['fas', 'chevron-right']"  />
      </a>
    </div>
    <div class="max-right">
      <a href="#" class="button secondary">
        <font-awesome-icon :icon="['fas', 'shopping-cart']"  />
      </a>
      <div class="button secondary count">{{count}}</div>
      <a href="#" class="button secondary infos">
        <font-awesome-icon :icon="['fa', 'mug-hot']"  />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count : 0
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.subtitle {
  color: #ccc;
  font-size: 16px;
  position: relative;
  top: 40px;
  left: -50px;
}

.logotype {
  position: relative;
  text-align: center;
}

h1 {
  font-family: 'Caveat', cursive;
  color: #DEE5BC;
  font-size: 72px;
}

a {
  text-decoration: none;
}

.layout {
  padding: 1em;
  box-sizing: border-box;
  display: grid;
  grid-gap: 0.5em;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 40px 40px auto 40px 40px;
  grid-template-areas:
    "mleft left center right mright";
}

.max-left {
  grid-area: mleft;
}

.left {
  display: flex;
  grid-area: left;
  align-items: center;
}

.center {
  grid-area: center;
}

.max-right {
  display: flex;
  flex-direction: column;
  grid-area: mright;
}

.right {
  display: flex;
  align-items: center;
  grid-area: right;
}

.button {
  font-size: 20px;
  border: 1px solid #000;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}

.button.primary {
  border: 1px solid #7A80CB;
  color: #7A80CB;
}

.button.secondary {
  border: 1px solid #DEE5BC;
  color: #DEE5BC;
}

.max-right .count {
  border-top: 0;
}

.max-right a.infos {
  bottom: 1em;
  position: fixed;
}

.button.nav {
  color: #fff;
  border: 1px solid #DBDBDB;
  background-color: #DBDBDB;
}

.button.nav:hover {
  background-color: #333;
}



.search-box {
  position: relative;
  margin: 0 auto;
  width: 180px;
  top: -12px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 50px;
}
.search-box input {
  font-size: 16px;
  line-height: 30px;
  color: #333;
  margin: 4px;
  border: 0;
  width: 90%;
}
.search-box input::placeholder {
  color: #ebebeb;
  font-style: italic;
}
.search-box svg {
  color: #DEE5BC;
}
.search-box input:focus {
  outline: none;
}
</style>
