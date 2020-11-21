<template>
    <span>
        <a @click="$emit('click')" class="button secondary uplvl">
          <font-awesome-icon :icon="['fas', icon]"/>
        </a>
        <div @click="$emit('click')" class="button secondary count uplvl">
          {{ total }}
        </div>
    </span>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            default(){
                return 0;
            }
        }, 
        icon: {
            type: String,
            default(){
                return 'shopping-cart';
            }
        }
    }
}
</script>

<style scoped>

</style>