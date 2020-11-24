<template>
    <div class="picture-grid">
        <template v-if="products.length">
            <div v-for="book in products" :key="book.isbn">
                <img class="picture-border" :alt="book.title" width="100" :src="book.cover" /> 
                <div class="right-grid-book">
                    <h2>{{ book.title }}</h2>
                    <p class="price">{{ book.price }}€</p>
                    <div class="actions">
                        <div @click="$emit('item-read', book)" class="button nav info">
                            <font-awesome-icon :icon="['fas', 'info']" />
                        </div>
                        <div @click="$emit('item-add', book)" class="button secondary">
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div>{{ $fixtures.noResults }}</div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        products : {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
.no-results { text-align: center }
.actions > div { width: 40px }
.picture-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 1em }
.picture-grid > div {
    text-align: center;
    transition: all .5s ease;
    position: relative;
    padding: 10px;
    border: 1px solid #fff;
}
.picture-grid .actions {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 35px;
    margin-top: auto;
    opacity: 0;
    transition: all .5s ease;
}
.picture-grid > div:hover { box-shadow: inset 0 20px 50px #ebebeb; }
.actions .button { background-color: #000; border: 1px solid #000 }
.actions .button.secondary { border: 1px solid #DEE5BC }
.picture-grid > div:hover .actions { opacity: 1; margin-bottom: 0 }
.picture-grid .actions > div { cursor: pointer }
.right-grid-book { display: flex; flex-direction: column }

@media (min-width:1100px){ 
    .picture-grid { grid-template-columns: repeat(4, 1fr) } 
}
@media (max-width:800px){
    h2, .price { text-align: left }
    .right-grid-book { padding: 0 12px; justify-content: space-between; }
    .picture-grid { grid-template-columns: repeat(1, 1fr) }
    .picture-grid > div { display: flex; }
    .actions .button { border: 0; background-color: transparent }
    .picture-grid .actions {
        position: relative;
        display: flex;
        opacity: 1;
        left: auto;
        right: auto;
        transform: none;
        top: auto;
        margin-top: unset;
    }
}
@media (max-width:800px) and (min-width:650px) {
    .picture-grid { grid-template-columns: repeat(2, 1fr) } 
}
</style>
