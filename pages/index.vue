<template>
  <div>
    <p class="search-box">
      <input type="text" class="search" placeholder="Rechercher ...."/>
      <font-awesome-icon :icon="['fas', 'search']"/>
    </p>
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
.search-box {
    position: relative;
    margin: 0 auto;
    width: 200px;
    top: 20px;
    display: flex;
    padding: 0 14px;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 50px;
    margin-bottom: 40px;
}
.search-box input {
    font-size: 16px;
    line-height: 20px;
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
