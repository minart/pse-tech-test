<template>
    <div class="item">
        <div class="actions">
            <div @click="$emit('remove')" class="button empty small">
                <font-awesome-icon :icon="['fas', 'minus']" ></font-awesome-icon>
            </div>
            <div @click="$emit('add')" class="button empty small">
                <font-awesome-icon :icon="['fas', 'plus']" ></font-awesome-icon>
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
</template>

<script>
export default {
    name: 'CardItem',
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.item {
    margin-bottom: 10px;
    height: 85px;
    display: flex;
    align-items: center;
}
.count-picture .quantity {
    color: #fff;
    top: 10px;
    text-align: center;
    font-size: 40px;
    position: absolute;
}
.act
.price { text-align: right }
.count-picture .quantity, .picture-border { width: 60px }
.actions > div { width: 20px; font-size: .8em }
.price { margin-left: auto }
.title { width: 150px }
.count-picture { position: relative; margin: 0 20px 0 10px }
.unit-price { color: #ccc }
</style>