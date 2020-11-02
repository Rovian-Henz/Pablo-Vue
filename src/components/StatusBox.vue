<template>
    <div class="statusBox">
        <div class="cartas-baralho">
            <div id="deck-cards-left">
                <div class="card card-bottom-left">
                    <div class="card-inner">
                        {{ this.$parent.deckCards }}
                    </div>
                </div>
            </div>
        </div>
        <div class="numero-rodada">
            <h4>Rodada</h4>
            <div id="current-turn">{{ this.$parent.currentTurn }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StatusBox",
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

.numero-rodada {
    display: flex;
    justify-content: center;
    flex-direction: column;
    h4 {
        margin-bottom: 10px;
        margin-top: 0;
    }
}

.statusBox {
    display: flex;
    grid-gap: 50px;
    width: 190px;
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

.card::before,
.card::after,
.card .card-inner {
    background-color: $card-bg-color;
    background: url(../assets/img/fundo_deck.jpg);
    background-repeat: repeat-y;
    background-size: contain;
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
}

/*TOP LEFT*/
.card-top-left::before {
    transform: translate(calc(-1 * 4px), calc(-1 * 4px));
}

.card-top-left::after {
    transform: translate(calc(-1 * 8px), calc(-1 * 8px));
}

.card-top-left:hover::before,
.card-top-left:hover::after,
.card-top-left:hover .card-inner {
    transform: translate(calc(-1 * 4px), 0);
}

/*TOP RIGHT*/
.card-top-right::before {
    transform: translate(4px, calc(-1 * 4px));
}

.card-top-right::after {
    transform: translate(8px, calc(-1 * 8px));
}

.card-top-right:hover::before,
.card-top-right:hover::after,
.card-top-right:hover .card-inner {
    transform: translate(4px, 0);
}

/*BOTTOM LEFT*/
.card-bottom-left::before {
    transform: translate(calc(-1 * 4px), 4px);
}

.card-bottom-left::after {
    transform: translate(calc(-1 * 8px), 8px);
}

.card-bottom-left:hover::before,
.card-bottom-left:hover::after,
.card-bottom-left:hover .card-inner {
    transform: translate(calc(-1 * 4px), 0);
}

/*BOTTOM RIGHT*/
.card-bottom-right::before {
    transform: translate(4px, 4px);
}

.card-bottom-right::after {
    transform: translate(8px, 8px);
}

.card-bottom-right:hover::before,
.card-bottom-right:hover::after,
.card-bottom-right:hover .card-inner {
    transform: translate(4px, 0);
}

/*ROTATE*/
.card-rotate::before {
    transform: rotate(-10deg);
}

.card-rotate::after {
    transform: rotate(10deg);
}

.card-rotate:hover::before,
.card-rotate:hover::after {
    transform: none;
}
</style>
