<template>
    <div class="player">
        <div class="points">
            <div id="last-played"></div>
            <div id="player-points">{{ this.$parent.playerPoints }}</div>
        </div>
        <div class="mao-jogador">
            <div id="player-hand"></div>
            <div id="end-turn">
                <button
                    type="button"
                    v-if="this.$parent.activePlayer"
                    @click="nextTurn"
                >
                    Encerrar minha vez
                </button>
            </div>
        </div>
        <div class="draw-discard">
            <button type="button" @click="drawDeck">Comprar</button>
            <button type="button">Descartar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Player",
    data() {
        return {
            baseStore: this.$store.state,
        };
    },
    methods: {
        drawDeck() {
            this.$parent.drawDeck();
        },
        nextTurn() {
            this.$parent.nextTurn();
        },
    },
};
</script>

<style scoped lang="scss">
</style>
