<template>
    <div class="gameController">
        <div id="control-panel">
            <button type="button" class="start-button" @click="startGame">
                Iniciar
            </button>
            <button type="button" class="end-button" @click="endGame">
                Encerrar
            </button>
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
$card-border-color: #e2d9d5;
$card-bg-color: #f3f3f3;
$color-red: #fb8c8c;
$color-yellow: #fbe38c;
$color-blue: #736cae;
$color-green: #70c970;

#control-panel {
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
}

.start-button {
    background: $color-green;
    border: 1px solid $card-border-color;
    padding: 10px 30px;
    border-radius: 5px;
    color: #333;
    cursor: pointer;
}
.end-button {
    background: $color-red;
    border: 1px solid $card-border-color;
    padding: 10px 30px;
    border-radius: 5px;
    color: #333;
    cursor: pointer;
}
</style>
