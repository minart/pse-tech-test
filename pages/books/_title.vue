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
            </div>
            <div>
                <h2>{{ book.title }}</h2>
                <div class="shipping">
                    <div class="price">{{ book.price }} €</div>
                    <p class="isbn">{{ book.isbn }}</p>
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
            next: data[id + 1] && data[id + 1],
            prev: data[id - 1] && data[id - 1],
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
    display: grid;
    padding: 1em;
    grid-gap: 1em;
    grid-template-columns : 40px auto 40px;
}
.container, .shipping { display: flex }
.shipping { flex-direction: column; justify-content: space-between; padding: 20px 0; align-items: center; }
.shipping .button { padding: 0 12px; margin-top: 30px }
.container .left { min-width: 140px; max-width: 15%; margin-right: 2em }
.synopsis { padding: 20px; border: 1px dotted #ebebeb }
.synopsis > p { margin: 10px 0 }
.isbn { font-size: .8em; text-align: center; }

@media (max-width:1101px){
    .book-detail { padding: 0 }
    .container .left { margin: 0 auto; }
}
@media (min-width:1101px){
    .container .left { min-width: 180px; max-width: 20% }
    .shipping { flex-direction: row }
    .shipping .button { margin-top: 0 }
}
@media (max-width:1100px) and (min-width:801px) {
    h2 { text-align: center }
    .container, .shipping { flex-direction: column }
    .book-detail { padding: 0 }
}
@media (max-width:800px) and (min-width:0px) {
    .container .left { min-width: 100%; max-width: 100% }
    .book-detail { padding: 0 }
    .container, .shipping { flex-direction: column }
    .synopsis { padding: 0; border: 0 }
}
</style>