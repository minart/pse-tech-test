<template>
    <div class="card-container" :style="CSSMarginRight">
        {{offer}}
        <header>
            <p class="panier-title" v-if="opened">Panier</p>
            <p class="total-price">Total {{ $store.getters['card/getTotalProductsPrice'] }}€</p>
        </header>
        <div class="card-picture-grid">
            <transition-group name="income">
                <CardItem
                    v-for="(book, index) in products"
                    :key="book.isbn"
                    :book="book"
                    :index="index"
                    @add="$store.dispatch('card/add', $event)"
                    @remove="$store.dispatch('card/remove', $event)"
                />
            </transition-group>
            <div class="button secondary next" v-if="opened && products.length">Valider votre panier ></div>
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
    watch: {
        products(){
            if(this.products.length > 1)
                this.getPromos();
        }
    },
    data(){
        return {
            offer: false
        }
    },
    computed: {
        CSSMarginRight(){
            let prop = 'margin-right : ';
            if(this.opened)
                return prop += '0px';
            return this.products.length > 0 ? prop += '-350px' : prop += '-500px';
        }
    },
    methods: {
        async getPromos(){
            const productsIsbn = this.$store.getters['card/getAllProductsIsbn'];
            const url = `http://henri-potier.xebia.fr/books/${productsIsbn.join()}/commercialOffers`;
            const { data } = await this.$axios.get(url);
            this.offer = data;
        }
    }
}
</script>

<style scoped>
.card-picture-grid {
    padding: 10px;
}
.card-container {
    box-shadow: 0 -20px 50px #ebebeb;
    z-index: 0;
    right: 0px;
    top: 0;
    bottom: 0;
    margin-right: -350px;
    width: 500px;
}
header {
    height: 70px;
}
header .total-price {
    width: 110px;
    text-align: center;
}
.next {
    margin: 30px;
    padding: 0 10px 4px 10px;
    font-size: 1em;
}
.card-container header {
    display: flex;
    align-items: center;
    position: relative;
}
.panier-title {
    line-height: 68px;
    font-size: 22px;
    padding: 0 20px;
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
