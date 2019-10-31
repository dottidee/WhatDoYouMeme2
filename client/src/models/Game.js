//use what was discussed in class as model
//const only locks down actual variable, obj w.in variable can be changed
export const Game_Server = {
    //logic side of the game which canNOT be changed
    Players: [

    ], //array of strings
    Picture_Deck: [], //array of strings w urls
    Caption_Deck: [],//array of strings, the acctual captions
    Dealer: -1, //int to keep track of dealer
    Captions_In_Play: [], //array of strings of actual captions
    Picture_In_Play: "", //string to pic url
    Caption_Chosen: -1 //-1 for no real value yet it has to be chosen this is the winner
}

export const Game_Client = {
    //logic of how players SEE the game
    Players: [
        {name: "Moshe", points: 0},
        {name: "Bernie", points: 0},
        {name: "Donald", points: 0},
        {name: "Andrew", points: 0}
    ], //array of strings
    //Picture_Deck: [],  players do not need to see this
    //Caption_Deck: [], client does not need to see the whole deck
    Dealer: -1, //int to keep track of dealer
    Captions_In_Play: [], //array of strings of actual captions
    Picture_In_Play: "", //string to pic url
    Caption_Chosen: -1 //-1 for no real value yet it has to be chosen this is the winner
}

//each player needs to see their deck
export var My_Captions = [];


//make player a class
class Player {
    name;
    points;
    captions;
}