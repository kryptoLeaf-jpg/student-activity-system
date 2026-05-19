let events=[];



function addEvent(){

let name =

document.getElementById(

"eventName"

).value;



events.push({

name,
status:"Open"

});


render();

}



function render(){

let list =

document.getElementById(

"list"

);


list.innerHTML=
"";



events.forEach(

event=>{

list.innerHTML +=

`

<li>

${event.name}

-

${event.status}

</li>

`;

});

}