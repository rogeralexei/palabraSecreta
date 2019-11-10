var heading=document.getElementById('head');
var input=document.querySelector('input');
var sep=document.querySelector('h4');
var cubo=document.getElementById('image')
var contador=document.querySelector('p');
var count=document.getElementById('count')
var palabraSec="hola";
var button=document.querySelector('button')
heading.style.textTransform='uppercase';

button.addEventListener('click',function(){
    if (input.value===palabraSec){
        count.textContent=0;
        cubo.style.backgroundColor='#3ecf7a';
        cubo.style.display='block';
        contador.style.display='block';
        sep.textContent='GANASTE';
        var sum=0;
        cubo.addEventListener('click',function(){
            sum+=1;
            count.textContent=sum;
        })
    }
    else if ((input.value).includes(palabraSec)){
        cubo.style.backgroundColor='#cacc3f';
        cubo.style.display='block';
        sep.textContent='UFF CASI';
        contador.style.display= "none";
    }
    else{
        cubo.style.backgroundColor='#cc4641';
        cubo.style.display='block';
        sep.textContent='ESTAS BASTANTE LEJOS';
        contador.style.display= "none";
    }
});

