import React from 'react'

function Score2({resetPlayerCurr,resetPlayerTwoCurr}) {
  return (
    <div>
        <h4>Score</h4>
        <div>{resetPlayerTwoCurr || 0}</div>
    </div>
  )
}

export default Score2