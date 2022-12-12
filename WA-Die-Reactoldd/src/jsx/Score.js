import React from 'react'

function Score({resetPlayerCurr,resetPlayerTwoCurr}) {
  return (
    <div>
        <h4>Score</h4>
        <div>{ resetPlayerCurr || 0}</div>
    </div>
  )
}

export default Score