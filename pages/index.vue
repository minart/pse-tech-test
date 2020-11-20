<template>
  <div class="picture-grid">
    <div v-for="book in books" :key="book.isbn">
      <img width="90" :src="book.cover" /> 
      <div class="right-grid-book">
        <h2>{{ book.title }}</h2>
        <p class="price">{{ book.price }}€</p>
      </div>
      <div class="actions">
        <NuxtLink tag="div" :to='`/books/${book.title}`' class="button nav info">
          <font-awesome-icon :icon="['fas', 'info']"  />
        </NuxtLink>
        <div @click="addToShippingCard(book)" class="button secondary">
          <font-awesome-icon :icon="['fas', 'plus']"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log("mounted");
  },
  methods: {
    addToShippingCard(book){
      console.log(book);
    }
  },
  async asyncData({ route, app, $axios }){
    const { data } = await $axios.get('http://henri-potier.xebia.fr/books');
    return {
      books : data
    }
  }
}
</script>

<style>
.price {
  font-size: 1.4em;
  color: #707070;
  font-weight: 200;
}
.picture-grid {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 5fr);
  grid-gap: 0px;
}
.picture-grid img { 
  margin-right: 20px;
  border: 6px solid #fff;
  box-shadow: 0 0 2px rgb(192, 192, 192);
}
.picture-grid > div {
  display: flex;
  position: relative;
  padding: 20px;
  border: 1px solid #fff;
}
.picture-grid > div:hover {
  border-bottom: 1px solid #DEE5BC;
}
.picture-grid > div:hover .actions {
  opacity: 1;
}

.right-grid-book {
  display: flex;
  align-self: center;
  flex-direction: column;
}
.actions {
  position: absolute;
  opacity: 0;
  bottom: 0;
  display: flex;
  margin: -1px;
  right: 0;
}
.actions > div {
  cursor: pointer;
}
.info {
  border-right: 0 !important;
}
</style>
