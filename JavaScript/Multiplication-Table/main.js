

const table = document.querySelector('mytable')
let output ='';
for (let i =1; i<=20;i++){
    output +="<tr>";
    for(let j = 1; j<=10;j++){
        output+="<td>"+i*j+"</td>";
    }
    output+="</tr>"
}

console.log(output);