<template>
    <div class="statusBox">
        <div class="cartas-baralho">
            <h4>Baralho</h4>
            <div id="deck-cards-left">{{ this.$parent.deckCards }}</div>
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
</style>
