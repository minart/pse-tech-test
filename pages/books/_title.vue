<template>
    <div class="book-detail">
        <div class="left">
            <NuxtLink v-if="prev" :to="'/books/' + $core.slugify(prev.title)" class="button nav">
                <font-awesome-icon :icon="['fas', 'chevron-left']"/>
            </NuxtLink>
        </div>
        <div class="container">
            <div class="left">
                <img class="picture-border" width="100%" :src="book.cover" :alt="book.title" />
                <p class="isbn">{{ book.isbn }}</p>
            </div>
            <div>
                <h2>{{ book.title }}</h2>
                <div class="shipping">
                    <div class="price">{{ book.price }} €</div>
                    <div class="button secondary" @click="add(book)">{{ $fixtures.addToCard }}</div>
                </div>
                <div class="synopsis">
                    <p v-for="(syn, $index) in book.synopsis" :key="$index">{{ syn }}</p>
                </div>
            </div>
        </div>
        <div class="right">
            <NuxtLink v-if="next" :to="'/books/' + $core.slugify(next.title)" class="button primary">
                <font-awesome-icon :icon="['fas', 'chevron-right']"/>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods :{
        ...mapActions({
            add : 'card/add'
        })
    },
    async asyncData({ route, app }){
        const { data } = await app.$api.books();
        const id = data.findIndex(book => app.$core.slugify(book.title) === route.params.title);
        return {
            book : data[id],
            next: data[id + 1] ? data[id + 1] : false,
            prev: data[id - 1] ? data[id - 1] : false,
        }
    }
}
</script>

<style scoped>
h2 {
    font-size: 1.6em;
    text-align: left;
    font-weight: 200;
    line-height: 34px;
}
.book-detail {
    box-sizing: border-box;
    align-items: center;
    display: grid;
    padding: 1em;
    grid-gap: 1em;
    grid-template-columns : 40px auto 40px;
}
.container, .shipping { display: flex }
.shipping { justify-content: space-between; padding: 20px 0 }
.shipping .button { padding: 0 12px }
.container .left { min-width: 280px; max-width: 30%; margin-right: 2em }
.synopsis { padding: 20px; border: 1px dotted #ebebeb }
.synopsis > p { margin: 10px 0 }
.isbn {
    border: 1px solid #ebebeb;
    border-radius: 20px;
    line-height: 30px;
    margin-top: 20px;
    font-size: .8em;
    text-align: center;
}
</style>