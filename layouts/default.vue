<template>
    <div class="layout" ref="layout" 
      :class="{ 
        'opened-card' : cardOpened && getCardProductsCount,
        'has-product' : getCardProductsCount
      }">
      <div class="max-left">
        <NuxtLink to="/" class="button primary">
          <font-awesome-icon :icon="['fas', 'dungeon']"/>
        </NuxtLink>
      </div>
      <div class="center">
        <div class="logotype"><h1>{{ $fixtures.title }}</h1></div>
        <Nuxt />
      </div>
      <div class="max-right">
        <CardButtons
          :icon="getCardIcon"
          :total="getCardProductsCount"
          @click="handleButtonCard"
        />
      </div>
      <div class="card-container">
        <Card :opened="cardOpened" :products="getCardProducts"/>
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
    getCardIcon(){
      return (this.cardOpened && this.getCardProductsCount) ? 'minus' : 'shopping-cart'
    }
  },
  methods: {
    handleButtonCard(){
      if(this.getCardProductsCount)
        this.cardOpened = !this.cardOpened;
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
      "mleft center mright card";
    grid-template-columns : 40px auto 40px 0;
}
.card-container {
  bottom: 0;
  background-color: #fff;
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
.has-product { grid-template-columns : 40px auto 40px 120px }
.opened-card { grid-template-columns : 40px auto 40px 350px }
.opened-card .card-picture-grid .title { display: none }
.max-left { grid-area: mleft }
.left { display: flex; grid-area: left; align-items: center }
.center { grid-area: center; margin-top: 30px }
.max-right { display: flex; flex-direction: column; grid-area: mright; }
.right { display: flex; align-items: center; grid-area: right; }

@media (max-width:800px){  
  .layout { padding: 4px; grid-gap: 0 } 
  .max-right {     
    width: 40px;
    position: absolute;
    z-index: 20;
    right: 4px;
    top: 4px;
  }
  .has-product { grid-template-columns : 40px auto 40px 0 }
  .opened-card { grid-template-columns : 0 0 0 100% }
}
</style>