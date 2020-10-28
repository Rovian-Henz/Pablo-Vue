<template>
    <div class="lobby">
        <Log msg="Welcome to Your Vue.js App" />
        <Player />
        <PlayerList />
        <Table />
        <GameController />
    </div>
</template>

<script>
// @ is an alias to /src
import Log from "@/components/Log.vue";
import Player from "@/components/Player.vue";
import PlayerList from "@/components/PlayerList.vue";
import Table from "@/components/Table.vue";
import GameController from "@/components/GameController.vue";

export default {
    name: "Lobby",
    components: {
        Log,
        Player,
        PlayerList,
        Table,
        GameController,
    },
};
</script>
