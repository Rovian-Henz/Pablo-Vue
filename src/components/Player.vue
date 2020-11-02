<template>
    <div class="player">
        <div class="points">
            <div id="last-played">
                <div class="card card-rotate">
                    <div class="card-inner">
                        <span>{{ this.$parent.lastPlayed }}</span>
                    </div>
                </div>
            </div>
            <div id="player-points">
                <h4>Pontos</h4>
                {{ this.$parent.playerPoints }}
            </div>
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
            <button type="button" class="draw-card" @click="drawDeck">
                Comprar
            </button>
            <button type="button" class="discard-card">Descartar</button>
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
$body-bg-color: #e2d9d5;
$card-border-color: #d9d9d9;
$card-bg-color: #f3f3f3;
$color-red: #fb8c8c;
$color-yellow: #fbe38c;
$color-blue: #736cae;
$color-green: #70c970;

.player {
    display: flex;
    justify-content: space-around;
    .points {
        display: flex;
        grid-gap: 40px;
        align-items: center;
        width: 180px;
        h4 {
            margin-bottom: 10px;
            margin-top: 0;
        }
    }
    #player-hand {
        display: flex;
        justify-content: center;
        width: 510px;
    }
    #end-turn {
        margin-top: 20px;
        height: 38px;
        button {
            background: $color-yellow;
            border: 1px solid $card-border-color;
            padding: 10px 30px;
            border-radius: 5px;
            color: #333;
            cursor: pointer;
        }
    }
}

.draw-discard {
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
    .draw-card {
        background: $color-green;
        border: 1px solid $card-border-color;
        padding: 10px 30px;
        border-radius: 5px;
        color: #333;
        cursor: pointer;
    }
    .discard-card {
        background: $color-blue;
        border: 1px solid $card-border-color;
        padding: 10px 30px;
        border-radius: 5px;
        color: #333;
        cursor: pointer;
    }
}

.card {
    position: relative;
    cursor: pointer;
    margin: 30px auto;
}

.card::before,
.card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.card::before {
    background-color: $card-bg-color;
    border: 1px solid $card-border-color;
    border-radius: 5px;
    transition: transform 0.3s;
}
.card::after {
    background-color: $card-bg-color;
    border: 1px solid $card-border-color;
    border-radius: 5px;
    transition: transform 0.3s;
}
.card .card-inner {
    background-color: $card-bg-color;
    border: 1px solid $card-border-color;
    border-radius: 5px;
    transition: transform 0.3s;
}

.card::before,
.card-inner {
    z-index: 1;
}

.card-inner {
    position: relative;
    width: 75px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        display: inline-block;
        // transform: rotate(-45deg);
        font-size: 14px;
    }
}

/*ROTATE*/
.card-rotate::before {
    transform: rotate(-20deg);
}

.card-rotate::after {
    transform: rotate(20deg);
}

.card-rotate:hover::before,
.card-rotate:hover::after {
    transform: none;
}
</style>
