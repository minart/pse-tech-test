<template>
  <div>
    <p class="search-box">
      <input type="text" v-model="searchKey" @input="search" class="search" :placeholder="$fixtures.search"/>
      <font-awesome-icon :icon="['fas', 'search']"/>
    </p>
    <ProductsGrid 
      :products="books"
      @item-add="add($event)"
      @item-read="getBookDetails($event.title)"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      add : 'card/add'
    }),
    search(){
      const regex = '\\b' + this.searchKey + '\\b';
      const regex1 = RegExp(this.searchKey, 'i');
      const finded = this.initialBooks.filter(book => book.title ? regex1.exec(book.title) : false);
      this.books = finded;
    },
    getBookDetails(title){
      this.$router.push({ 
        path: `/books/${this.$core.slugify(title)}`
      });
    }
  },
  data(){
    return {
      searchKey : ''
    }
  },
  async asyncData({ route, app, $axios }){
    const { data } = await app.$api.books();
    return {
      books : data,
      initialBooks : data
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
.search-box input::placeholder { color: #ebebeb; font-style: italic }
.search-box svg { color: #DEE5BC }
.search-box input:focus { outline: none }
</style>
