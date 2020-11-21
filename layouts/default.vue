<template>
  <div class="global">
    <div class="layout" ref="layout">
      <div class="max-left">
        <NuxtLink to="/" class="button primary">
          <font-awesome-icon :icon="['fas', 'dungeon']"/>
        </NuxtLink>
      </div>
      <div class="left">
        <a v-if="bookPage" href="#" class="button nav">
          <font-awesome-icon :icon="['fas', 'chevron-left']"/>
        </a>
      </div>
      <div class="center">
        <div class="logotype">
          <p class="subtitle">Collection</p>
          <h1>Henri potier</h1>
          <p class="search-box">
            <input type="text" class="search" placeholder="Rechercher ...."/>
            <font-awesome-icon :icon="['fas', 'search']"/>
          </p>
        </div>
        <Nuxt />
      </div>
      <div class="right">
        <a v-if="bookPage" href="#" class="button nav">
          <font-awesome-icon :icon="['fas', 'chevron-right']"/>
        </a>
      </div>
      <div class="max-right">
        <a @click="cardOpened = !cardOpened" class="button secondary uplvl">
          <font-awesome-icon :icon="['fas', 'shopping-cart']"/>
        </a>
        <div @click="cardOpened = !cardOpened" class="button secondary count uplvl">
          {{ $store.getters['card/getTotalProducts'] }}
        </div>
        <a href="#" class="button secondary infos">
          <font-awesome-icon :icon="['fa', 'mug-hot']"/>
        </a>
      </div>
    </div>
    <Card
      :opened="cardOpened"
      :products="$store.getters['card/getContent']"
      @add="$store.dispatch('card/add', $event)"
      @remove="$store.dispatch('card/remove', $event)"
      :key="2"
    />
  </div>
</template>

<script>
export default {
  computed: {
    bookPage(){
      return this.$route.name === 'books-title';
    },
  },
  methods : {
  },
  data(){
    return {
      card: false,
      cardOpened : false,
    }
  }
}
</script>

<style scoped>
.global {
  overflow: hidden;
  display: flex;
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

.max-left { grid-area: mleft }
.left {
    display: flex;
    grid-area: left;
    align-items: center;
}
.center { grid-area: center }
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
.logotype {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
}
</style>