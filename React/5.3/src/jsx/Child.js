import Ballon from './Ballon'
// import './Card.css'
function Child(props) {

   

    return(
        <div >
            <h3>{props.person}</h3>
            <Ballon color={kids[0].color}/>
            <Ballon color={kids[1].color}/>
            <Ballon color={kids[2].color}/>
            <Ballon color={kids[3].color}/>
            <Ballon color={kids[4].color}/>
        </div>
    )
    
}

export default Child