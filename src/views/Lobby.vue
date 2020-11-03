<template>
    <div class="lobby">
        <div class="game-type" v-if="!this.selectedType">
            Quer um jogo novo ou entrar em um existente?
            <button type="button" @click="createNewGame">Novo</button>
            <button type="button" @click="joinGame">Existente</button>
        </div>
        <div class="selected-type" v-else>
            <form action="#" method="post">
                <label for="name-player">Nome Jogador</label>
                <input type="text" name="name-player" id="name-player" />
                <label for="room-number" v-if="!this.newGame"
                    >Numero da Sala</label
                >
                <input
                    type="text"
                    name="room-number"
                    id="room-number"
                    v-if="!this.newGame"
                />
                <select
                    name="language"
                    id="language"
                    multiple
                    v-if="this.newGame"
                >
                    <option value="pt_br">Portugues</option>
                    <option value="en_en">Ingles</option>
                </select>
                <select
                    name="expansion"
                    id="expansion"
                    multiple
                    v-if="this.newGame"
                >
                    <option value="regular">Regular</option>
                    <option value="littleband">Bandinha</option>
                </select>
                <button>Iniciar Jogo</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Lobby",
    data() {
        return {
            selectedType: false,
            newGame: false,
            baseStore: this.$store.state,
        };
    },
    methods: {
        createNewGame() {
            (this.selectedType = true), (this.newGame = true);
        },
        joinGame() {
            this.selectedType = true;
        },
    },
};
</script>