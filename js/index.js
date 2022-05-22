
// const CharacterModel = require('./model/CharacterModel');
import  CharacterModel from './model/CharacterModel.js';


const API_URL = 'https://thronesapi.com/api/v2/Characters';

const SERIVES = {
    FIND_ALL_CHARACTERS: '/Characters',
    FIND_CHARACTER: '/Characters/${id}'
}

class Game {

    
    constructor() {
        this.listCharacters = [];
        this.countCard = 10;
        this.containerLoading = document.getElementById('loading');
        this.containerMovements = document.getElementById('');
        this.containerGame = document.getElementById('game');
    }

    fetchCharacters = async () => {
        try{
            const response = await fetch(API_URL);
            console.log(response);
            const data = await response.json();
            console.log(data);
            console.log(this.listCharacters);
            this.listCharacters = data;
            console.log(this.listCharacters);
        } catch(error) {
            console.log(error);
        } 
    }


    async initPlay(){
        console.log('init play');
        await this.fetchCharacters();
        console.log(this.listCharacters);

        for(let i = 0; i < this.countCard; i++) {
            console.log(i);
        }
        //this.containerLoading.style.display = 'none';
        //this.containerGame.style.display = 'flex';

    }

    chooseCard() {

    }


    win() {

    }

    startChronometer() {

    }

    viewChronometer() {

    }

    pausedTime() {}

    resetTime() {}

    playNew() {
        location.reload();
    }

}

const gameInit = new Game();
gameInit.initPlay();