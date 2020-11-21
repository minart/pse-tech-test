<template>
  <div>
    <HomeGrid 
      :products="books"
      :columns="4"
      @item-add="$store.dispatch('card/add', $event)"
      @item-read="$router.push({ path: `/books/${$event.title}` })"
    />
  </div>
</template>

<script>
export default {
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
  text-align: center;
}
.right-grid-book {
  display: flex;
  flex-direction: column;
}
.picture-grid .actions {
  position: absolute;
  opacity: 0;
  bottom: 0;
  display: flex;
  margin: -1px;
  right: 0;
}
.picture-grid .actions > div {
  cursor: pointer;
}


</style>
