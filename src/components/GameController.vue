<template>
    <div class="gameController">
        <div id="control-panel">
            <h1>Ações do jogo</h1>
            <fieldset>
                <h3>Iniciar partida</h3>
                <button type="button" @click="startGame">Iniciar jogo</button>
            </fieldset>

            <fieldset>
                <h3>Encerrar partida</h3>
                <button type="button" @click="endGame">Encerrar jogo</button>
            </fieldset>
        </div>
    </div>
</template>

<script>
export default {
    name: "GameController",
    data() {
        return {
            baseStore: this.$store.state,
        };
    },
    methods: {
        startGame() {
            this.$parent.startGame();
        },
        endGame() {
            this.$parent.endGame();
        },
    },
};
</script>

<style scoped lang="scss">
</style>
