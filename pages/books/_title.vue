<template>
    <div>
        Book detail
        isbn : {{ title }}
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route)
    },
    async asyncData({ route, app }){
        return {
            title : route.params.title
        }
    }
}
</script>