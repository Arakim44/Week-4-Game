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
      [character("Chica",100,8,5,"assets/images/Chica2.jpg"),character("Bonnie",120,8,10,"assets/images/bonnieFix.jpg"),character("Foxy",150,10,20,"assets/images/foxy.png"),character("Freddy",180,12,25,"assets/images/nightmare.png")].forEach(function(itm){
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
        div: [],
        //method that happens when clicked.

      whenClicked: function(e){
          //This extracts the index number of Character number.
          //which is position of the array.
          var index = e.target.dataset.index;
          console.log(e);
          console.log("element index",index);
          var playerClicked = GameThing.players[index];
          console.log("this.players[index]",playerClicked);

          GameThing.playerSelected = playerClicked;
          console.log("you picked",GameThing.playerSelected);
          $('#select1').hide();
          $('#youSelect').html("Your Character");
          $('#enemyAvail').html("Animatronics Available to attack!!")
        // alert('whenclicked');
          for(var i = 0; i < GameThing.div.length; i++){
            if(index == i){
              GameThing.div[i].className="yours";
            }else{
              GameThing.div[i].className="enemyAvail";
              $('#enemy').append(GameThing.div[i]);
              GameThing.div[i].onclick = GameThing.selectEnemy;//this is function I will make soon.
            }
          };

        },

      selectEnemy: function(e){
        // alert("enemy select");
        var index = e.target.dataset.index;
        GameThing.enemySelected = GameThing.players[index];
        console.log("enemy:",GameThing.enemySelected);
        GameThing.div[index].className="enemySelected";
        $('#fight').append(GameThing.div[index]);
        $('#defender').html("Attack This animatronic!");
        $('#attack').html('Attack!');

         },

      attack: function(){
        var you = GameThing.enemySelected;
        var me = GameThing.playerSelected;

        you.healthPoints = you.healthPoints - me.attackPoints;
        me.healthPoints = me.healthPoints - you.counterAttack;
        me.attackPoints += 8;

        console.log("your stat",you);
        console.log("my stat",me);

        if (me.healthPoints <= 0){
          alert('you lost!');
          $('#reset').html('Restart');
        }else if(you.healthPoints <= 0 ){
          alert('you win! choose other character');
          $('#fight').empty();
        }


      },


      //Not sure what setHTML do, but I think It will show on html page
      setHTML: function(){
        // rootElement.innerHTML = "";//why do you leave it blank?
        // var self=this;
        //second parameter of the forEach function calls index.
        GameThing.players.forEach(function(player,index){
          var p =document.createElement("div");
          p.id = 'character'+(index+1); //this is id of div for character#
          p.className = "characters";
          p.setAttribute("data-index",index);
          p.innerHTML =  '<p data-index="'+index+ '" >' + player.name+'<br>hp:'+player.healthPoints+'</p>';
          p.innerHTML += '<img data-index="'+index+'" src="'+player.img+'" alt="'+player.name+'"/>';

          rootElement.appendChild(p);//all of the p are adding to the div.
          //well.. the reason why he used addEventListener is that.. maybe click method only works on ids or class?
          //whenClicked:
          GameThing.div.push(p);
          // p.addEventListener("click",GameThing.whenClicked);
          p.onclick = GameThing.whenClicked;

          console.log("div",GameThing.div);

          // var sayPlayer = "player index: "+index;
          // console.log(sayPlayer, player);
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
  $('#select1').html("Select Your Character!");

  $('#attack').click(gameThing.attack);
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
