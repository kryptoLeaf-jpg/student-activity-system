let joined =

JSON.parse(

localStorage.getItem(

"joined"

)

)

||

[];



document.getElementById(

"stats"

).innerHTML =

`

<h2>

Total Registrations

:

${joined.length}

</h2>


<div

class="bar"

style=

"width:

${joined.length*20}px"

>

</div>

`;