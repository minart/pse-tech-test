<template>
    <div class="card-container" :style="{ marginRight: CSSMarginRight }">
        <header>
            <p class="panier-title" v-if="opened">Panier</p>
            <p class="total-price">Total {{ $store.getters['card/getTotalProductsPrice'] }}€</p>
            <div class="button secondary next">Valider votre panier ></div>
        </header>
        <div class="card-picture-grid">
            <transition-group name="income" tag="div">
                <div v-for="(book, index) in products" :key="book.isbn" class="item">
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
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products : {
            type: Array,
            default(){
                return []
            }
        },
        opened: {
            type: Boolean,
            default(){
                return false;
            }
        }
    },
    computed: {
        CSSMarginRight(){
            if(this.opened)
                return '0px';
            return this.products.length > 0 ? '-350px' : '-500px'
        },
        getTitle(){
            if(!this.opened)
                return this.$store.getters['card/getTotalProductsPrice'];
            return "Panier";
        }
    }
}
</script>

<style scoped>
.card-container {
    box-shadow: 0 -20px 50px #ebebeb;
    z-index: 0;
    right: 0px;
    top: 0;
    bottom: 0;
    margin-right: -350px;
    width: 500px;
    color: #fff;
}
header {
    height: 70px;
}
header .total-price {
    width: 110px;
    text-align: center;
}
.next {
    margin-left: auto;
    padding: 0 10px 4px 10px;
    font-size: .8em;
    margin-right: 15px;
}
.card-container header {
    color: #000;
    display: flex;
    align-items: center;
    position: relative;
}
.panier-title {
    color: #333;
    line-height: 68px;
    font-size: 22px;
    padding: 0 20px;
}
.actions > div {
    width: 20px;
    font-size: .8em; 
}
.item .price {
    margin-left: auto;
}
.item .title {
    width: 150px;
}
.count-picture {
    margin: 0 20px 0 10px;
}
.unit-price {
    color: #ccc;
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
.card-picture-grid {
    color: #333;
    padding: 10px;
    position: relative;
}
.card-picture-grid > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.income-enter-active {
  transition: all .5s ease;
}
.income-leave-active {
  transition: all .5s ease;
}
.income-enter {
    transform: translateY(20px);
    opacity: 0;
}
.income-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
