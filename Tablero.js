/*function setup() {
createCanvas(720,1080)
}
function draw(){
background(239, 119, 119)
}*/

document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
    {
      name: 'carta 1',
      img: 'Images/Cat 1.png'
    },
    {
        name: 'carta 1',
        img: 'Images/Cat 1.png'
      },
    {
      name: 'cartas2',
      img: 'Images/Cat 2.png'
    },
    {
        name: 'cartas2',
        img: 'Images/Cat 2.png'
      },
    {
      name: 'cartas3',
      img: 'Images/Cat 3.png'
    },
    {
        name: 'cartas3',
        img: 'Images/Cat 3.png'
      },
    {
      name: 'cartas4',
      img: 'Images/Cat 4.png'
    },
    {
        name: 'cartas4',
        img: 'Images/Cat 4.png'
      },
    {
      name: 'cartas5',
      img: 'Images/Cat 5.png'
    },
    {
        name: 'cartas5',
        img: 'Images/Cat 5.png'
      },
    {
      name: 'cartas6',
      img: 'Images/Cat 6.png'
    },
    {
        name: 'cartas6',
        img: 'Images/Cat 6.png'
      },
    {
        name: 'cartas7',
        img: 'Images/Cat 7.png'
      },
      {
        name: 'cartas7',
        img: 'Images/Cat 7.png'
      },
      {
        name: 'cartas8',
        img: 'Images/Cat 8.png'
      },
      {
        name: 'cartas8',
        img: 'Images/Cat 8.png'
      }
    ]

    const grid = document.querySelector.('.reticula')

    //para crear el tablero
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createEelement('img')
            card.setAttribute('src''Images/Blanco.png')
            card.setAttribute('data-id', i)
            //para voltear las cartas
            grid.appendChild(card)
        }
    }
