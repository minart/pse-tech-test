<template>
    <div>
        <header>
            <p class="panier-title" v-if="opened">{{ $fixtures.card }} </p>
            <p class="total-price" v-if="offer.total">{{ $fixtures.total }} {{ carTotalWithOffer }}€</p>
        </header>
        <div class="card-picture-grid">
            <transition-group name="income">
                <CardItem
                    v-for="(book, index) in products"
                    :key="book.isbn"
                    :book="book"
                    @add="add(book)"
                    @remove="remove(index)"
                />
            </transition-group>
            <div class="offers" v-if="offer.type && opened">
                <span class="new">{{ carTotalWithOffer }}€</span>
                {{ $fixtures.insteadOf }}
                <span class="old">{{ cardTotal }}€</span>
            </div>
            <div class="button secondary next" v-if="opened && products.length">
                {{ $fixtures.cardValidate }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
                if(this.isbns){
                    const { data } = await this.$api.offers(this.isbns);
                    this.offer = this.$core.getBestOffer(this.cardTotal, data.offers);
                } else {
                    this.offer = false;
                }
            }
        }
    },
    methods: {
        ...mapActions({
            add : 'card/add',
            remove : 'card/remove'
        })
    },
    computed: {
        ...mapGetters({
            cardTotal: 'card/total',
            isbns: 'card/getAllIsbn'
        }),
        carTotalWithOffer(){
            return this.offer.total;
        }
    },
    data(){
        return {
            offer: {
                total: 0,
                type: false
            }
        }
    }
}
</script>

<style scoped>
.old { text-decoration: line-through }
.offers { text-align: center; margin-top: 40px }
.card-picture-grid { padding: 10px }
header { height: 70px; display: flex; align-items: center; position: relative }
header .total-price { width: 110px; text-align: center }
.next { margin: 30px; padding: 0 10px 4px 10px; font-size: 1em}
.panier-title { line-height: 68px; font-size: 22px; padding: 0 20px; }
.income-enter-active, .income-leave-active { transition: all .5s ease }
.income-enter { transform: translateY(20px); opacity: 0 }
.income-leave-to { transform: translateX(20px); opacity: 0 }
</style>