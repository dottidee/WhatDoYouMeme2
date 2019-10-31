<!--need server side game logic bc anyone can access the client side-->
<template>
    <div>
        <h1 class= "is-size-1">
            This is the game page.
        </h1>
        <div class="columns">
            <div class="column is-one-quarter">

                <ul class="panel">
                    <p class="panel-heading">
                        Players
                    </p>
                    <li v-for= "(p, i) in game.Players" :key = "i" class="panel-block is-active">
                        <span class="panel-icon">
                        <i class="fas fa-user" aria-hidden="true"></i>
                        </span>
                        bulma
                    </li>
                </ul>

            </div>
            <div class="column">
                Second column
            </div>
            </div>
    </div>
</template>

<script>
import { Game_Client, My_Captions} from "../models/Game"
export default {
    data: ()=> ({
        game: Game_Client
    })
}
</script>

<style>

</style>