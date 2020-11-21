<template>
    <div class="item">
        <div class="actions">
            <div @click="$emit('remove', index)" class="button empty small">
                <font-awesome-icon :icon="['fas', 'minus']"  />
            </div>
            <div @click="$emit('add', book)" class="button empty small">
                <font-awesome-icon :icon="['fas', 'plus']"  />
            </div>
        </div>

        <div class="count-picture"> 
            <div class="quantity">{{ book.quantity }}</div>
                <img class="picture-border" width="60" :src="book.cover" /> 
            </div>
            <div class="title">
                <p>{{ book.title }}</p>
            </div>
            <div class="price">
                <div class="total-price">{{ book.totalPrice }}€</div>
                <div v-if="book.quantity > 1" class="unit-price" :class="{ small: book.quantity > 1 }">{{ book.price }}€ / u</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        book: {
            type: Object
        },
        index: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.item {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}
.price {
    text-align: right;
}
.count-picture .quantity, 
.picture-border {
    width: 60px;
}
.count-picture .quantity {
    color: #fff;
    top: 10px;
    text-align: center;
    font-size: 40px;
    position: absolute;
}
.actions > div {
    width: 20px;
    font-size: .8em; 
}
.price {
    margin-right: 8px;
    margin-left: auto;
}
.title {
    width: 150px;
}
.count-picture {
    position: relative;
    margin: 0 20px 0     10px;
}
.unit-price {
    color: #ccc;
}
</style>