
let squares = document.getElementsByName("square");
let turn = 'x';
let squaresArray = Array(3).fill(Array(3));

function start(){
    for(let  i =0; i < 9; i++){
        
        var img = squares[i].getElementsByTagName('img');
        
        img[0].style.display = "none";
    }
}
start();

function Click(square){
    var img = square.getElementsByTagName('img');
    if(img[0].style.display == "block"){



    }
    else{
        img[0].style.display = "block";
    if (turn == "x"){
        document.getElementById("title").innerHTML = "X Turn";
        img[0].src = "svg/x.svg"
        turn = "o";
    }
    else{
        document.getElementById("title").innerHTML = "O Turn";
        img[0].src = "svg/o.svg"
        turn = "x";
    }

    }
    

    
}
