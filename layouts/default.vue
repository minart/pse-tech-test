<template>
  <div class="layout">
    <div class="max-left">
      <NuxtLink to="/" class="button primary">
        <font-awesome-icon :icon="['fas', 'dungeon']"  />
      </NuxtLink>
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
      <NuxtLink to="/books/test" class="button secondary">
        <font-awesome-icon :icon="['fas', 'shopping-cart']"  />
      </NuxtLink>
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