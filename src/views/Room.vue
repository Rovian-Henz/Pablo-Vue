<template>
    <div class="room">
        <PopupPlayer />
        <StatusBox />
        <Table />
        <GameController />
        <Player />
        <PlayerList />
        <Log msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/Table.vue";
import GameController from "@/components/GameController.vue";
import Log from "@/components/Log.vue";
import Player from "@/components/Player.vue";
import PlayerList from "@/components/PlayerList.vue";
import PopupPlayer from "@/components/PopupPlayer.vue";
import StatusBox from "@/components/StatusBox.vue";

export default {
    name: "Room",
    components: {
        GameController,
        Log,
        Player,
        PlayerList,
        Table,
        PopupPlayer,
        StatusBox,
    },
    data() {
        return {
            deckCards: "",
            currentTurn: "",
            playerPoints: "",
            activePlayer: "",
            baseStore: this.$store.state,
        };
    },
    sockets: {
        connect: function () {
            console.log("socket to notification channel connected");
        },
        join: function (data) {
            console.log("joined teste");
            this.updateGameState(data);
        },
        start: function (data) {
            this.updateGameState(data);
        },
        cardPlayed: function (data) {
            this.updateGameState(data);
        },
        next: function (data) {
            this.updateGameState(data);
        },
        drawDeck: function (data) {
            this.updateGameState(data);
        },
        drawTable: function (data) {
            this.updateGameState(data);
        },
        end: function (data) {
            this.updateGameState(data);
        },
    },
    methods: {
        saveUser() {
            if (this.baseStore.playerName) {
                document.querySelector(".backdrop").classList.add("hide");
                this.join(this.baseStore.playerName);
            }
        },
        addClickCard() {
            let playerHand = document.querySelector("#player-hand");
            if (playerHand) {
                playerHand.addEventListener("click", (event) => {
                    this.playCard(event.target.innerText.slice(0, -3));
                });
            }
        },
        addDrawTableCard() {
            let table = document.querySelector("#table-cards");
            if (table) {
                table.addEventListener("click", (event) => {
                    this.drawTable(event.target.innerText.slice(0, -3));
                });
            }
        },
        drawDeck() {
            this.emitDraw();
            //this.addClickCard();
        },
        startGame() {
            this.emitStart();
            this.addClickCard();
            this.addDrawTableCard();
        },
        join(playerName) {
            this.$socket.emit("join", playerName);
        },
        emitStart() {
            this.$socket.emit("start");
        },
        playCard(card) {
            this.$socket.emit("cardPlayed", this.baseStore.playerName, card);
            console.log("emitiu jogar carta");
        },
        nextTurn() {
            this.$socket.emit("next");
        },
        emitDraw() {
            this.$socket.emit("drawDeck", this.baseStore.playerName);
            console.log("emitiu pescar");
        },
        drawTable(card) {
            this.$socket.emit("drawTable", this.baseStore.playerName, card);
            console.log("emitiu pegar da mesa");
        },
        endGame() {
            this.$store.commit("playerName", "");
            this.$socket.emit("end");
        },
        updateGameState(data) {
            const match = data.match;

            // Last message
            document
                .querySelector("#last-message")
                .insertAdjacentHTML("beforeend", `<p>${data.message}</p>`);

            // Is there a match going on?
            if (match) {
                // Game status
                this.currentTurn = match.turns;
                this.deckCards = match.deck.cards.length;

                // Cards in table
                document.querySelector("#table-cards").innerHTML = "";

                match.tableCards.forEach((card) => {
                    document
                        .querySelector("#table-cards")
                        .insertAdjacentHTML(
                            "beforeend",
                            `<div class="card">${card.word}<small>(${card.points})</small></div>`
                        );
                });

                match.currentPlayer.name == this.baseStore.playerName
                    ? (this.activePlayer = true)
                    : (this.activePlayer = false);

                // Players & Cards in Hand
                document.querySelector("#player-hand").innerHTML = "";
                document.querySelector("#players-list").innerHTML = "";

                match.players.forEach((player, index) => {
                    // Show only cards in the hand of page user
                    if (player.name == this.baseStore.playerName) {
                        this.playerIndex = index;
                        this.playerPoints = player.score;
                        player.hand.forEach((card) => {
                            document
                                .querySelector("#player-hand")
                                .insertAdjacentHTML(
                                    "beforeend",
                                    `<div class="card">${card.word}<small>(${card.points})</small></div>`
                                );
                        });
                    }
                    const ativo =
                        match.currentPlayerIndex == index + 1 ? "ativo" : "";

                    document
                        .querySelector("#players-list")
                        .insertAdjacentHTML(
                            "beforeend",
                            `<h3 class="${ativo}">${player.name} <small>(${player.score} pontos)</small></h3>`
                        );
                });
            } else {
                // If not, reset all output
                document.querySelector("#current-turn").innerHTML = "";
                document.querySelector("#deck-cards-left").innerHTML = "";
                document.querySelector("#current-player").innerHTML = "";
                document.querySelector("#player-hand").innerHTML = "";
                document.querySelector("#table-cards").innerHTML = "";
                document.querySelector("#players-list").innerHTML = "";
            }
        },
    },
};
</script>
