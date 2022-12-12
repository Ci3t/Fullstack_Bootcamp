import React from 'react'
import Current from './Current'
import Score from './Score'
import Score2 from './Score2'

function Player2({name,getP1Curr,resetPlayerCurr,resetPlayerTwoCurr,getP2Curr}) {
  return (
    <div>
        <h2>{name}</h2>
        <Score2 resetPlayerTwoCurr={resetPlayerTwoCurr}></Score2>
        <h4>Current</h4>
        {/* <h4>{resetPlayerCurr}</h4> */}
        <h3>{getP2Curr || 0}</h3>
        {/* {console.log(getP1Curr)} */}
    </div>
  )
}

export default Player2