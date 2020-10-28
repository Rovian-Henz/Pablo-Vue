<template>
    <div class="lobby">
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

export default {
    name: "Lobby",
    components: {
        GameController,
        Log,
        Player,
        PlayerList,
        Table,
    },
};
</script>
