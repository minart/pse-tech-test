<template>
    <div class="card-container" :style="CSSMarginRight">
        <header>
            <p class="panier-title" v-if="opened">Panier</p>
            <p class="total-price">Total {{ totalPromo }}€</p>
        </header>
        <div class="card-picture-grid">
            <transition-group name="income">
                <CardItem
                    v-for="(book, index) in products"
                    :key="book.isbn"
                    :book="book"
                    @add="$store.dispatch('card/add', book)"
                    @remove="$store.dispatch('card/remove', index)"
                />
            </transition-group>
            <div class="button secondary next" v-if="opened && products.length">Valider votre panier ></div>
        </div>
    </div>
</template>

<script>
import Core from '~/core';
import { mapGetters } from 'vuex';

export default {
    props: {
        products : {
            type: Array,
            default: () => []
        },
        opened: {
            type: Boolean,
            default: () => false
        }
    },
    watch: {
        products: {
            deep: true,
            async handler(){
                if(this.cardIsbns){
                    const { data } = await this.$api.offers(this.cardIsbns);
                    const bestOffer = Core.getBestOffer(this.cardTotal, data.offers);
                    this.totalPromo = bestOffer.total;
                }
            }
        }
    },
    computed: {
        ...mapGetters({
            cardTotal: 'card/total',
            cardIsbns: 'card/getAllIsbn'
        }),
        CSSMarginRight(){
            let prop = 'margin-right : ';
            if(this.opened)
                return prop += '0px';
            return this.products.length > 0 ? prop += '-350px' : prop += '-500px';
        }
    },
    data(){
        return {
            totalPromo: 0,
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