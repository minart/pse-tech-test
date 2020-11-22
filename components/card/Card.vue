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
        products: {
            deep: true,
            async handler(){
                const isbns = this.$store.getters['card/getAllIsbn'];
                if(isbns){
                    const { data } = await this.$api.offers(isbns);
                    const formatedOffers = data.offers.map(offer => ({
                        ...offer,
                        calculate: function(price){
                            return Core.offersCalculate[this.type]({
                                price,
                                step: this.sliceValue,
                                value: this.value
                            });
                        }
                    }));
                    const total = this.$store.getters['card/total'];
                    this.totalPromo = Math.min(...formatedOffers.map(offer => offer.calculate(total)));
                }
                else {
                    this.totalPromo = 0;
                }
            }
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