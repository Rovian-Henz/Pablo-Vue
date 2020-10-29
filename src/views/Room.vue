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
        gerenciaActiveUser(action = "get", user = "") {
            if (action == "get") {
                return localStorage.getItem("currentPlayer");
            }
            if (action == "set") {
                localStorage.setItem("currentPlayer", user);
                return "ok";
            }
            return "";
        },
        saveUser(playerName) {
            const resposta = this.gerenciaActiveUser("set", playerName);
            if (resposta) {
                document.querySelector(".backdrop").classList.add("hide");
                this.join(playerName);
            }
        },
        addClickCard() {
            const CreateClickEventHandCard = setInterval(() => {
                let cards = document.querySelectorAll("#player-hand .card");
                if (cards[1]) {
                    clearInterval(CreateClickEventHandCard);
                    cards.forEach((card) => {
                        card.addEventListener("click", () => {
                            this.playCard(card.innerText.slice(0, -4));
                            this.addClickCard();
                            this.addDrawTableCard();
                        });
                    });
                }
            }, 100);
        },
        addDrawTableCard() {
            const CreateClickEventTableCard = setInterval(() => {
                let cards = document.querySelectorAll("#table-cards .card");
                if (cards[1]) {
                    clearInterval(CreateClickEventTableCard);
                    cards.forEach((card) => {
                        card.addEventListener("click", () => {
                            this.drawTable(card.innerText.slice(0, -4));
                            this.addClickCard();
                            this.addDrawTableCard();
                        });
                    });
                }
            }, 100);
        },
        drawDeck() {
            this.emitDraw();
            this.addClickCard();
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
            this.$socket.emit("card played", this.gerenciaActiveUser(), card);
        },
        nextTurn() {
            this.$socket.emit("next");
        },
        emitDraw() {
            this.$socket.emit("draw deck", this.gerenciaActiveUser());
        },
        drawTable(card) {
            this.$socket.emit("draw table", this.gerenciaActiveUser(), card);
        },
        endGame() {
            localStorage.clear();
            this.$socket.emit("end");
        },
        updateGameState(data) {
            const match = data.match;
            console.log(data.match);

            // Last message
            document
                .querySelector("#last-message")
                .append(`<p>${data.message}</p>`);

            // Is there a match going on?
            if (match) {
                // Game status
                document.querySelector(
                    "#current-turn"
                ).innerHTML = `<p>${match.turns}</p>`;
                document.querySelector(
                    "#deck-cards-left"
                ).innerHTML = `<p>${match.deck.cards.length}</p>`;

                // Cards in table
                document.querySelector("#table-cards").innerHTML = "";

                match.tableCards.forEach((c) => {
                    document
                        .querySelector("#table-cards")
                        .append(
                            `<div class="card">${c.word}<small>(${c.points})</small></div>`
                        );
                });

                // Players & Cards in Hand
                document.querySelector("#player-hand").innerHTML = "";
                document.querySelector("#players-list").innerHTML = "";

                match.players.forEach((p, index) => {
                    // Show only cards in the hand of page user
                    if (p.name == document.querySelector("#user").value) {
                        p.hand.forEach((c) => {
                            document
                                .querySelector("#player-hand")
                                .insertAdjacentHTML(
                                    "beforeend",
                                    `<div class="card">${c.word}<small>(${c.points})</small></div>`
                                );
                        });
                    }
                    const ativo =
                        match.currentPlayerIndex == index + 1 ? "ativo" : "";
                    document
                        .querySelector("#players-list")
                        .append(
                            `<h3 class="${ativo}">${p.name} <small>(${p.score} pontos)</small></h3>`
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
