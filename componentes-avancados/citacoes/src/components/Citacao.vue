<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot name="fonte"></slot>
        <slot name="texto"></slot>
    </div>
</template>

<script>
export default {
    created() {
        console.log('Criou citacao!');
    },
    destroyed() {
        console.log('Destruiu citacao!');
    },
    activated() {
        console.log('Ativou citacao!');
    },
    deactivated() {
        console.log('Desativou citacao!');
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
        margin: 20px
    }

    /* h1{
        color: red 
    } Apesar do "h1" não ser visível nesse arquivo, o "h1" é passado do Citacoes para cá por slot, então ele existe nesse componente*/ 

</style>
