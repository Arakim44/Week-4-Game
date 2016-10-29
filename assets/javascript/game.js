$(document).ready(function(){
///setting each character's properties


//
//Is there a way to push the each characters object and push it in to
//what is the point of making huge object like setGame?

function character(name="default",hp,ap,cp,img) {
  return {
    name: name,
    healthPoints: hp,
    attackPoints: ap,
    counterAttack: cp,
    img: img,
  }

};

function setGame(){
      //This sets the name of the Characters, but nothing else!
      //how do I also set the above values?
      //and also, can I add img into this?
      var players = [];
      [character("Chica",100,8,10,'<img  src="assets/images/Chica2.jpg" alt="Chica" />'),character("Bonnie",120,8,20,'<img src="assets/images/bonnieFix.jpg" alt="Bonnie" />'),character("Foxy",130,10,25,'<img src="assets/images/foxy.png" alt="Foxy" />'),character("Freddy",180,12,30,'<img src="assets/images/nightmare.png" alt="Freddy" />')].forEach(function(itm){
        players.push(itm);
      });
      console.log(players);


      //This comes in later.. to Put names and such.
      //So This can also maybe write in hp,cp and such.
      var rootElement = document.getElementById("characterList");

      var GameThing = {
        playerSelected: null, //what does this do by setting it null again?
        enemySelected: null,
        players: players, //array above in line 24 i think. but just names..

        //method that happens when clicked.
        whenClicked: function(e){
          //This extracts the index number of Character number.
          //which is position of the array.

          var index = e.target.dataset.index;
          console.log("element index",index);
          var playerClicked = GameThing.players[index];
          console.log("this.players[index]",playerClicked);
        },//when clicked. Not done yet I think.


       //not done writing i don't think. It might come in later.
       //Not sure the purpose yet.
       //Must been clicked first right?
       selectPlayer: function(index){
          GameThing.playerSelected = Gamething.players[index];
          //hopfully playerSelected has all the properties like hp and stuff.
        },

      //This select your enemy shich is chosen second.

       selectEnemy: function(index){
           GameThing.enemySelected = GameThing.player[index];
           console.log(GameThing.enemySelected);
         },

      //Not sure what setHTML do, but I think It will show on html page
      setHTML: function(){
        // rootElement.innerHTML = "";//why do you leave it blank?
        var self=this;
        //second parameter of the forEach function calls index.
        GameThing.players.forEach(function(player,index){
          var p =document.createElement("div");
          p.id = 'character'+(index+1); //this is id of div for character#
          p.className = "characters";
          p.setAttribute("data-index",index);
          p.innerHTML =  '<strong data-index="'+index+ '"" >' + player.name+'</strong>';
          p.innerHTML += player.img;

          rootElement.appendChild(p);//all of the p are adding to the div.
          //well.. the reason why he used addEventListener is that.. maybe click method only works on ids or class?
          //whenClicked:
          p.addEventListener("click",GameThing.whenClicked);
          var sayPlayer = "player index: "+index;
          console.log(sayPlayer, player);
        });

      }

    }//gamething object end here

    return GameThing;

 }//set game ends here.
//This does the click button on startgame. ahah.
$('#startGame').click(function(){
  var gameThing = setGame();
  gameThing.setHTML();
  $('#startGame').hide();
})


///Lucas's example.
  // gameThing.players.forEach(function(item) {
  //   console.log("in foreach " + item);
  // });
  //
  // for (var i = 0; i < gameThing.players.length; i++) {
  //   console.log("in for loop " + gameThing.players[i])
  // }
  //
  // var myForeach = function(sunny, blargh) {
  //   for (var i = 0; i < sunny.length; i++) {
  //     blargh(sunny[i], i);
  //   }
  // }
  // myForeach(gameThing.players, function(item, andie) {
  //   console.log("in function " + item + ", index is " );
  // });



//so this is possible function for the attack?
// $('#attack').click(function{
  //
  // GameThing.playerSelected.hp - GameThing.enemySelected.cp;
  // GameThing.enemySelected.hp - GameThing.playerSelected.ap;
  // GameThing.playerSelected.ap *8.



// });










})//ready function ends here.
