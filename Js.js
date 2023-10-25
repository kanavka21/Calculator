let x = '';
let y = '';
let sign = '';
let finish = false;
const cifri = ['0','1','2','3','4','5','6','7','8','9'];
const znaki = ['-','+','/','X'];
const out = document.querySelector('.calc-screen p')
function AC (){
    x = '';
    y = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = AC;
document.querySelector('.buttons').onclick = (event) =>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    out.textContent = '';
    const key = event.target.textContent;
    if (cifri.includes(key)){
        if (y === '' && sign === ''){
            x += key;
            out.textContent = x;
        }
        
        else if (x!== '' && y!=='' && finish){
            y = key;
            finish = false;
            out.textContent = y;
        }
        else {
            y += key;
            out.textContent = y;
        }
        console.log(x, y, sign);
        return;
    }


    if(znaki.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(sign);
        return;
    }
    
    if (key == '=')
    {
        switch (sign){
            case '+':
                x = (+x) + (+y);
                break;
            case '-':
                x = (+x) - (+y);
                break;
            case 'X':
                x = (+x) * (+y);
                break;
            case '/':
                x = x / y;
                break;
        }
        finish = true; 
        out.textContent = x;
    }

}
