    <template>
        <v-carousel height="calc(100vh - 124px)">
            <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    </template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                items:[
                    {
                        src: 'https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    },
                    {
                        src: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .v-window v-carousel{
        height: 100vh;
    }
</style>