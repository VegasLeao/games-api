

import {getAllgames, createGame, deleteGame, updateGame} from './service.js';

window.onload = () => {
    loadGames();
}

//refatorado
const loadGames = () => {
    const dataContainer = document.getElementById('data-container');
    
    getAllgames().then(resp =>{
        
        resp.forEach(jogo =>{
            const gamesElement = document.createElement('div');
            gamesElement.innerHTML = `
            <div class= "elemento">
            <img class= "cardimg" src="${jogo.img}" alt="${jogo.nome}">
            <hr>
            <h5 class="cardtitle"> ${jogo.nome} </h5>
            <hr>
            <p class= "cardtext"> R$ ${jogo.preco} </p>
            </div>`;
            dataContainer.appendChild(gamesElement);
        })
    })
};

document.getElementById('btnCreate') .addEventListener('click', () =>{
    const jogo =   {
        "nome": "The legend of Zelda",
        "img": "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
        "preco": 100
      };
      createGame(jogo);
}); 
  
document.getElementById('btnDelete') .addEventListener('click', () =>{
    const jogo =  {
        "nome": "The legend of Zelda",
        "img": "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
        "preco": 100,
        "id": 3
      };
      deleteGame(jogo);
   
});

document.getElementById('btnUpdate') .addEventListener('click', ()=> {
    const jogo = {
        nome: 'The legend of Zelda 2',
        img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        preco: 300,
        id: 3
           
};
    updateGame(jogo)

});

