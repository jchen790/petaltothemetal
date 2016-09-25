var pressCount = 0;
var numrows = 12;
var numcol = 12;    
var done = true;

function toggle(e1, e2) {
    let x = document.getElementById(e1);
    let y = document.getElementById(e2);
             
    x.style.display = 'none';  
    y.style.display = 'block';  

    document.getElementById('win').style.display = "none";
    document.getElementById('lose').style.display = "none";

    pressCount = 0;
    $("#score").html(pressCount);
}

//test function
function blooming(name) {
    let e = document.getElementsByName(name);
    e[0].innerHTML = "<img class='dandelion' id='new' src='images/dandelion.png' width='0'>";

    for (i = 0; i < 26; i++) { 
        setTimeout(function(){ document.getElementById('new').width += 1 }, 1000);
    }
    setTimeout(function(){ document.getElementById('new').id = 'old'}, 1001);
}

//Coordinates are given as [row, col]
/*var Lvl = [
    [[[7,4]],[]],
    [[[3,3], [3, 8], [8, 3], [8, 8]],[]],
    [[[2, 2], [2, 9], [9, 2], [9, 9]],[[2, 3], [2, 8], [3, 2], [3, 3], [3, 8], [3, 9], [8, 2], [8, 3], [8, 8], [8, 9], [9, 3], [9, 8]]],
    [[[2,2], [4,7],[8, 4]],[[1,1], [1, 10], [10, 1], [10, 10]]],
    [[[5, 8], [6, 3]],[[4, 4], [4, 7], [4, 8], [5,4], [5, 7], [6,4],[6,7], [7, 3], [7, 4], [7,7]]],
    [[[3, 5], [3, 6], [4, 5], [4, 6]],[[3, 4], [3, 7], [4, 4], [4, 7], [8, 3], [8, 8], [9, 4], [9,5], [9,6], [9,7]]],
    [[[4, 2], [10, 10]],[[1, 10], [2, 9], [3, 8], [4, 1], [4, 3], [4,7], [5, 2], [7, 7], [7, 8], [8, 7], [8, 8], [9, 1], [9, 2], [10, 1], [10, 2]]],
    [[[1, 1], [1, 4], [1, 9], [2, 6], [3, 5], [4, 6], [5, 9], [7, 5], [9, 3]],[[1, 2], [1, 3], [1, 5], [1,7], [2, 2], [2, 5], [2, 9], [3, 2], [3, 6], [4, 2], [4,4], [4, 10], [5, 4], [5, 6], [5, 10], [6, 6], [7, 2], [7, 4], [7, 10], [8, 4], [8, 6], [9, 2], [9, 6], [10, 2], [10, 4], [10, 10]]],
    [[[3, 3], [3, 8], [8, 3], [8, 8]],[[2, 2], [2, 4], [2, 7], [2, 9], [4, 2], [4, 4], [4, 7], [4, 9], [7, 2], [7, 4], [7, 7], [7, 9], [9, 2], [9, 4], [9, 7], [9, 9]]],
    [[[5, 5], [5, 6]],[[1,1], [1,2], [1,3], [1, 8], [1, 9], [1, 10], [2, 2], [2, 9], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [5, 4], [5, 7], [10, 1], [10, 10]]]
    ];*/
var Lvl= [
    [[[4, 7]], []],
    [[[3, 3], [8, 3], [3, 8], [8, 8]], []],
    [[[2, 2], [9, 2], [2, 9], [9, 9]],
    [[3, 2], [8, 2], [2, 3], [3, 3], [8, 3], [9, 3], [2, 8], [3, 8], [8, 8], [9, 8], [3, 9], [8, 9]]],
    [[[2, 2], [7, 4], [4, 8]], [[1, 1], [10, 1], [1, 10], [10, 10]]],
    [[[8, 5], [3, 6]], [[4, 4], [7, 4], [8, 4], [4, 5], [7, 5], [4, 6], [7, 6], [3, 7], [4, 7], [7, 7]]],
    [[[5, 3], [6, 3], [5, 4], [6, 4]], [[4, 3], [7, 3], [4, 4], [7, 4], [3, 8], [8, 8], [4, 9], [5, 9], [6, 9], [7, 9]]],
    [[[2, 4], [10, 10]], [[10, 1], [9, 2], [8, 3], [1, 4], [3, 4], [7, 4], [2, 5], [7, 7], [8, 7], [7, 8], [8, 8], [1, 9], [2, 9], [1, 10], [2, 10]]],
    [[[1, 1], [4, 1], [9, 1], [6, 2], [5, 3], [6, 4], [9, 5], [5, 7], [3, 9]], [[2, 1], [3, 1], [5, 1], [7, 1], [2, 2], [5, 2], [9, 2], [2, 3], [6, 3], [2, 4], [4, 4], [10, 4], [4, 5], [6, 5], [10, 5], [6, 6], [2, 7], [4, 7], [10, 7], [4, 8], [6, 8], [2, 9], [6, 9], [2, 10], [4, 10], [10, 10]]],
    [[[3, 3], [8, 3], [3, 8], [8, 8]], [[2, 2], [4, 2], [7, 2], [9, 2], [2, 4], [4, 4], [7, 4], [9, 4], [2, 7], [4, 7], [7, 7], [9, 7], [2, 9], [4, 9], [7, 9], [9, 9]]],
    [[[5, 5], [6, 5]], [[1, 1], [2, 1], [3, 1], [8, 1], [9, 1], [10, 1], [2, 2], [9, 2], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [4, 5], [7, 5], [1, 10], [10, 10]]]];

    
//Makes boarder
function boarder()
{
    for (var x = 0;x<numrows;x++)
    {
        for(var y=0;y<numcol;y++)
        {
            if((x==0|| x==11) || (y==0 || y==11))
            {
                document.getElementsByName(x+'-'+y)[0].value=2;
                document.getElementsByName(x+'-'+y)[0].style.background="grey";
            }
        }
    }
}

function Filler()
{
    for (var x = 0;x<numrows;x++)
    {
        for(var y=0;y<numcol;y++)
        {
            document.getElementsByName(x+'-'+y)[0].value=0;
            document.getElementsByName(x+'-'+y)[0].style.background="rgba(238, 228, 218, 0.35)";
        }
    }
}

function setready(val,arr)
{
    //Finds blanks
    for (var i=0; i< arr.length; i++)
    {
        for (var x = 0;x<numrows;x++)
        {
            for(var y=0;y<numcol;y++)
            {
                if((x==arr[i][1]) && (y==arr[i][0]))
                {
                    document.getElementsByName(x+'-'+y)[0].value=val;
                    if(val==2)document.getElementsByName((x)+'-'+(y))[0].style.background="grey";
                }
            }
        }
    }
}

function Moving(x,y)
{   
    for (var i = 0; i < numrows; i++)
    {
        for (var j = 0; j < numcol; j++)
        {
            if(document.getElementsByName((i)+'-'+j)[0].value==1)
            {
                if(document.getElementsByName((i+y)+'-'+(j+x))[0].value==0)
                {
                    //document.getElementsByName((i+y)+'-'+(j+x))[0].style.background="red";
                    document.getElementsByName((i+y)+'-'+(j+x))[0].value=-1;                }
            }
        }
    }

    for (var i = 0; i < numrows; i++)
    {
        for (var j = 0; j < numcol; j++)
        {
            if(document.getElementsByName(i+'-'+j)[0].value==-1)
            {
                document.getElementsByName(i+'-'+j)[0].value=1;
            
            }
        }
    }
    
    for (var i = 0; i < numrows; i++)
    {
        for (var j = 0; j < numcol; j++)
        {
            if(document.getElementsByName(i+'-'+j)[0].value==1)
            {
                document.getElementsByName((i)+'-'+(j))[0].style.background="red";
                //document.getElementsByName(i+'-'+j)[0].value=1;
            
            }
        }
    }
    done=true;
    for (var i = 0; i < numrows; i++)
    {
        for (var j = 0; j < numcol; j++)
        {
            if(document.getElementsByName(i+'-'+j)[0].value==0)
            {
                done=false;
            }
        }
    }
    
    if(done)
    {
        setTimeout(function(){alert("Game over! You win"); }, 10);
        
    }
}

// function createCookie() {
//     document.cookie = "cookie1 = " + pressCount;
// }

// function readCookie() {
//     var x = document.cookie;
// }

function run(KeyPressed)
{
    if(!(KeyPressed >= 37 && KeyPressed <=40) || (done))return false;
    switch(event.keyCode)
    {
         case 37: 
            if(document.getElementById('grid').style.display == 'block') {
                Moving(1,0);
                pressCount++;
                event.preventDefault();
            }
            break;
         case 38: 
            if(document.getElementById('grid').style.display == 'block') {
                 Moving(0,-1);
                 pressCount++;
                event.preventDefault();
            }
            break;
         case 39: 
            if(document.getElementById('grid').style.display == 'block') {
                 Moving(-1,0);
                 pressCount++;
                 event.preventDefault();
            }
             break;
         case 40: 
            if(document.getElementById('grid').style.display == 'block') {
                 Moving(0,1);
                 pressCount++;
                 event.preventDefault();
            }           
            break;
    }
    $("#score").html(pressCount);
    // if(document.getElementById('#score') <= document.getElementByID('#best').readCookie() {
    //     $("#best").html(pressCount);
    // }
}


