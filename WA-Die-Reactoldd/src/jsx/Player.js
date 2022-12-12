import React from 'react'
import Current from './Current'
import Score from './Score'

function Player({name,getP1Curr,resetPlayerCurr,resetPlayerTwoCurr,getP2Curr,currentPScore}) {
  return (
    <div>
        <h2>{name}</h2>
        <Score resetPlayerCurr={resetPlayerCurr} resetPlayerTwoCurr={resetPlayerTwoCurr}></Score>
        <h4>Current</h4>
        {/* <h4>{resetPlayerCurr}</h4> */}
        <h3>{getP1Curr ||  0}</h3>
        {/* <h3>{currentPScore||  0}</h3> */}
        {/* {console.log(getP1Curr)} */}
    </div>
  )
}

export default Player