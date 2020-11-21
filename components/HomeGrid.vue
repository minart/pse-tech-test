<template>
    <div class="picture-grid" :style="{ gridTemplateColumns : getGridTemplateColumns }">
        <div v-for="book in products" :key="book.isbn">
            <img class="picture-border" width="90" :src="book.cover" /> 
            <div class="right-grid-book">
                <h2>{{ book.title }}</h2>
                <p class="price">{{ book.price }}€</p>
            </div>
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

<script>
export default {
    props: {
        products : {
            type: Array,
        },
        columns: {
            type: Number,
            default() {
                return 5;
            }
        }
    },
    computed: {
        getGridTemplateColumns() {
            return `repeat(${this.columns}, 5fr)`;
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
  padding: 20px;
  display: grid;
  grid-gap: 0px;
}
.picture-border { 
  margin-right: 20px;
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
</style>
