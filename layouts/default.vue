<template>
    <div 
      class="layout" 
      ref="layout" 
      :class="{ 
        'opened-card' : cardOpened && getCardProductsCount,
        'has-product' : getCardProductsCount
      }">
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
          <p class="subtitle">{{ $fixtures.subtitle }}</p>
          <h1>{{ $fixtures.title }} </h1>
        </div>
        <Nuxt />
      </div>
      <div class="right">
        <a v-if="bookPage" href="#" class="button nav">
          <font-awesome-icon :icon="['fas', 'chevron-right']"/>
        </a>
      </div>
      <div class="max-right">
        <CardButtons
          :icon="getCardIcon"
          :total="getCardProductsCount"
          @click="handleButtonCard"
        />
        <a href="#" class="button secondary infos">
          <font-awesome-icon :icon="['fa', 'mug-hot']"/>
        </a>
      </div>
      <div class="card-container">
          <Card
          :opened="cardOpened"
          :products="getCardProducts"
        />
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getCardProducts : 'card/products',
      getCardProductsCount : 'card/count'
    }),
    bookPage(){
      return this.$route.name === 'books-title';
    },
    getCardIcon(){
      if(!this.getCardProductsCount)
        return 'shopping-cart';
      return this.cardOpened ? 'minus' : 'shopping-cart';
    }
  },
  methods: {
    handleButtonCard(){
      if(this.getCardProductsCount)
        return this.cardOpened = !this.cardOpened;
    }
  },
  data(){
    return {
      cardOpened : false
    }
  }
}
</script>

<style scoped>
.layout {
    box-sizing: border-box;
    display: grid;
    padding: 1em;
    grid-gap: 1em;
    height: 100vh;
    grid-template-areas:
      "mleft left center right mright card";
    grid-template-columns : 40px 40px auto 40px 40px 0;
}
.has-product {
  grid-template-columns : 40px 40px auto 40px 40px 120px;
}
.opened-card {
  grid-template-columns : 40px 40px auto 40px 40px 350px;
}
.opened-card .card-picture-grid .title {
  display: none;
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
.card-container {
  bottom: 0;
  box-shadow: 0 -20px 50px #ebebeb;
  z-index: 0;
  overflow: hidden;
  grid-area: card;
}
.logotype {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
}


</style>