window.onload = alert(localStorage.getItem("name"));
this.document.getElementById('para1').innerText='welcome champ '+localStorage.getItem('name');
// localStorage.removeItem('name');
localStorage.clear();       

localStorage.setItem('cp',0);

const btn=this.document.getElementById('rollbtn');

btn.addEventListener("click",game)

let myPos = 'd0';
function game()
{  if(Number(localStorage.getItem('cp'))<=20)
   {
    
    complete();
    
    var rd=random();
    document.getElementById('p1').innerText="your dice value is "+rd;
    var cpval=Number(localStorage.getItem('cp'))+rd;
    if(cpval==20)
    {
        alert("winner");
        window.location.href="index.html";
    }
    else if(cpval>20){
        cpval=Number(localStorage.getItem('cp'))-rd;
    }
    localStorage.setItem('cp',cpval);
    checkpostion(Number(localStorage.getItem('cp')));
    document.getElementById('p2').innerText="your current position value is "+localStorage.getItem('cp');
    
    //checkpostion(localStorage.getItem('cp'));

    myPos = `d${localStorage.getItem('cp')}`;
    console.log(myPos,typeof(myPos));
    setInterval(blinker1,1000);
    function blinker1(){
        document.getElementById(myPos).style.backgroundColor = 'brown';
        document.getElementById(myPos).style.Color = 'blue';
        document.getElementById(myPos).style.border = '4px dashed black';
    }
    setInterval(blinker2,2000);
    function blinker2(){
        document.getElementById(myPos).style.backgroundColor = 'aliceblue';
    }   
   }
   

} 
function random()
{
 return(Math.floor(Math.random() * (6-1) + 1));
}
function checkpostion(cpval)
{
    console.log(cpval)
    switch(cpval)
    {
        case 19:localStorage.setItem('cp',4); break;
        case 14:localStorage.setItem('cp',11);break;
        case 5:localStorage.setItem('cp',15);break;
        case 2:localStorage.setItem('cp',18);break;
    }
    
}

function complete(){
    console.log(myPos);
    if(myPos == 'd0'){
        return ;
    }
    document.getElementById(myPos).style.backgroundColor = 'aliceblue';
    document.getElementById(myPos).style.border = '4px dashed aliceblue';
}