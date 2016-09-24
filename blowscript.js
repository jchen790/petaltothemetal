let isMenuVisible = true;
let isGridVisible = true;

function toggle() {  
    isMenuVisible = !isMenuVisible;
    isGridVisible = !isMenuVisible;      
}

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