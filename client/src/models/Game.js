import Caption_Deck from "./Captions";

//use what was discussed in class as model
//const only locks down actual variable, obj w.in variable can be changed
export const Game_Server = {
    //logic side of the game which canNOT be changed
    Players: [], //array of strings
    Picture_Deck: [
        "http://www.dailyhaha.com/_pics/prepared-to-slice-onions.jpg",
        "http://www.dailyhaha.com/_pics/no-parking-here-guys.jpg",
        "http://www.dailyhaha.com/_pics/best-parking-spot.jpg",
        "http://www.dailyhaha.com/_pics/a-good-selling-point.jpg",
    ], //array of strings w urls
    Caption_Deck,//array of strings, the acctual captions
    Top_Of_Caption_Deck: 0,
    Top_Of_Picture_Deck: 0,

    Dealer: -1, //int to keep track of dealer
    Captions_In_Play: [], //array of strings of actual captions
    Picture_In_Play: "", //string to pic url
    Caption_Chosen: -1, //-1 for no real value yet it has to be chosen this is the winner

    Get_Hand(amount = 7){
        this.Top_Of_Caption_Deck += amount;
        return this.Caption_Deck.slice(this.Top_Of_Caption_Deck - amount, this.Top_Of_Caption_Deck)
    },
    Get_Next_Picture(){
        return this.Picture_Deck[this.Top_Of_Picture_Deck ++]
    }
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
    Dealer: 0, //int to keep track of dealer
    Captions_In_Play: [], //array of strings of actual captions
    Picture_In_Play: "", //string to pic url
    Caption_Chosen: -1 //-1 for no real value yet it has to be chosen this is the winner
}

//each player needs to see their deck
export var My_Captions = [
    //we will put captions in server to prevent tampering
];


//make player a class
export class Player {
    name;
    points;
    captions;
}