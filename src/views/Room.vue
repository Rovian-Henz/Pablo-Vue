<template>
    <div class="room">
        <PopupPlayer />
        <div class="game-items">
            <div class="command-status">
                <GameController />
                <ActiveMsg />
                <StatusBox />
            </div>
            <Table />
            <Player />
            <PlayerList />
            <Log msg="Welcome to Your Vue.js App" />
        </div>
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
import ActiveMsg from "@/components/ActiveMsg.vue";

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
        ActiveMsg,
    },
    data() {
        return {
            deckCards: "",
            currentTurn: "",
            playerPoints: "",
            activePlayer: "",
            actualPlayer: "",
            lastPlayed: "",
            baseStore: this.$store.state,
        };
    },
    sockets: {
        connect: function () {
            console.log("socket to notification channel connected");
        },
        join: function (data) {
            this.updateGameState(data);
        },
        start: function (data) {
            this.updateGameState(data);
            this.addClickCard();
            this.addDrawTableCard();
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
                    this.playCard(event.target.innerText.slice(0, -4));
                });
            }
        },
        addDrawTableCard() {
            let table = document.querySelector("#table-cards");
            if (table) {
                table.addEventListener("click", (event) => {
                    this.drawTable(event.target.innerText.slice(0, -4));
                });
            }
        },
        drawDeck() {
            this.emitDraw();
        },
        startGame() {
            this.emitStart();
        },
        join(playerName) {
            this.$socket.emit("join", playerName);
        },
        emitStart() {
            this.$socket.emit("start");
        },
        playCard(card) {
            this.$socket.emit("cardPlayed", this.baseStore.playerName, card);
            this.lastPlayed = card;
        },
        nextTurn() {
            this.$socket.emit("next");
        },
        emitDraw() {
            this.$socket.emit("drawDeck", this.baseStore.playerName);
        },
        drawTable(card) {
            this.$socket.emit("drawTable", this.baseStore.playerName, card);
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

                this.actualPlayer = match.currentPlayer.name;

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
<style lang="scss">
$card-border-color: #e2d9d5;
$card-bg-color: #f3f3f3;
$color-red: #fb8c8c;
$color-yellow: #fbe38c;
$color-blue: #736cae;
$color-green: #70c970;

.command-status {
    display: flex;
    justify-content: space-around;
}
#player-hand {
    .card {
        background: $card-bg-color;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.1);
        width: 75px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
        flex-direction: column;
        cursor: pointer;
        border: 1px solid $card-border-color;
        &:not(:first-child) {
            margin-left: -20px;
        }
        &:hover {
            transform: translateY(-10px);
            ~ .card {
                transform: translateX(20px);
            }
        }
    }
}
#table-cards {
    .card {
        background: $card-bg-color;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.1);
        width: 75px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
        cursor: pointer;
        border: 1px solid $card-border-color;
        &:hover {
            transform: scale(1.1);
        }
    }
}
body {
    overflow: hidden;
    background-color: #dcdcdc;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
}
.game-items {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: space-around;
}
#players-list .ativo {
    color: $color-green;
}
</style>