import Child from "./Child"

const kids= [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
    ]



function Mother(props) {

    
    
    return(
       <div>
        <h1>A Tale of Five
        Balloons</h1>
        <Child person={kids[0].name}/>
        <Child person={kids[1].name}/>
        <Child person={kids[2].name}/>
        <Child person={kids[3].name}/>
        <Child person={kids[4].name}/>
        {props.children}
       </div>
    )
}

export default Mother