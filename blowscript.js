function toggle(e1, e2) {
    let x = document.getElementById(e1);
    let y = document.getElementById(e2);

    if(y.style.display == 'block') {                
        x.style.display = 'block';             
        y.style.display = 'none';
    }
    else {
        x.style.display = 'none';            
        y.style.display = 'block';
    }         
}

//test function
function blooming(name) {
    let e = document.getElementsByName(name);
    e[0].innerHTML = "<img class='dandelion' id='new' src='images/dandelion.png' width='0'>";
    
    for (i = 0; i < 40; i++) { 
        setTimeout(function(){ document.getElementById('new').width += 1 }, 2000);
    }
}

