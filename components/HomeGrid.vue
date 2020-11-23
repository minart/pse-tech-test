<template>
    <div class="picture-grid">
        <div v-for="book in products" :key="book.isbn">
            <img class="picture-border" width="90" :src="book.cover" /> 
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
    </div>
</template>

<script>
export default {
    props: {
        products : {
            type: Array,
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.actions > div {
    width: 40px;
}
.picture-grid {
    grid-template-columns: repeat(5, 5fr);
    display: grid;
    grid-gap: 1em;
}
.picture-grid > div {
    text-align: center;
    transition: all .5s ease;
    position: relative;
    padding: 10px;
    border: 1px solid #fff;
}
.picture-grid > div:hover {
    border: 1px solid #DEE5BC;
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
.actions .button {
    background-color: #000;
    border: 1px solid #000;
}
.actions .button.secondary {
    border: 1px solid #DEE5BC;
}
.picture-grid > div:hover .actions {
    opacity: 1;
    margin-bottom: 0;
}
.picture-grid .actions > div {
    cursor: pointer;
}
.right-grid-book {
    display: flex;
    flex-direction: column;
}

@media (max-width:1400px) and (min-width:1000px) {
    body {
        background-color: aqua;
    }
    .picture-grid {
        grid-template-columns: repeat(4, 5fr);
    }
}

</style>
