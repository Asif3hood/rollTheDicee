function myFunction(){
    var palayerOne = (Math.random()*6)+1;
        palayerOne = Math.floor(palayerOne);
        console.log("player 1 "+palayerOne);
    var palayerTwo = (Math.random()*6)+1;
        palayerTwo = Math.floor(palayerTwo);
        console.log("player 2 "+palayerTwo);
        

        
        function myClick() {
            setTimeout(
              function() {
                document.getElementById('svgOne').style.animation ='shake 0.5s';
        document.getElementById('svgTwo').style.animation ='shake 0.5s';

              }, 0);
          }
         document.querySelector("#start-btn").addEventListener("click", myClick);
          

        document.getElementById('svgOne').style.animation ='0';
        document.getElementById('svgTwo').style.animation ='0';

    
        
    if(palayerOne > palayerTwo){
        document.getElementsByTagName("h3")[0].innerHTML = "Player 1 Wins";        
        var svgOne = document.getElementById("svgOne");
        svgOne.setAttribute("src",palayerOne+".svg");    
        var svgTwo = document.getElementById("svgTwo");
        svgTwo.setAttribute("src",palayerTwo+".svg");
    }else if (palayerOne === palayerTwo){
        document.getElementsByTagName("h3")[0].innerHTML = "Match is Draw";
        var svgTwo = document.getElementById("svgTwo");
        svgTwo.setAttribute("src",palayerTwo+".svg");
        var svgOne = document.getElementById("svgOne");
        svgOne.setAttribute("src",palayerOne+".svg");

    }else{
        document.getElementsByTagName("h3")[0].innerHTML = "Player 2 Wins";
        var svgTwo = document.getElementById("svgTwo");
        svgTwo.setAttribute("src",palayerTwo+".svg");
        var svgOne = document.getElementById("svgOne");
        svgOne.setAttribute("src",palayerOne+".svg");

    }
}