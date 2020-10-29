<template>
    <div class="gameController">
        <div id="control-panel" class="fifty-fifty">
            <h1>Ações do jogo</h1>
            <fieldset>
                <h3>Iniciar partida</h3>
                <button type="button" @click="startGame">Iniciar jogo</button>
            </fieldset>

            <fieldset>
                <h3>Pescar do baralho</h3>
                <button type="button" @click="drawDeck">
                    Pescar - Baralho
                </button>
            </fieldset>

            <fieldset>
                <h3>Encerrar turno</h3>
                <button type="button" @click="nextTurn">Próxima rodada</button>
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
        drawDeck() {
            this.$parent.drawDeck();
        },
        nextTurn() {
            this.$parent.nextTurn();
        },
        endGame() {
            this.$parent.endGame();
        },
    },
};
</script>

<style scoped lang="scss">
</style>
