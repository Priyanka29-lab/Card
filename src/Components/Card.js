import React from 'react'

export const Card = () => {
  return (
    <div><div className="NewYearcard">
    <div className="cardFront">
      <h3 className="happy">Happy New Year 2023</h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
    </div>
    <div className="cardInside">
      <h3 className="back">It's a Fantastic Year ahead🥂</h3>
      <p>Dear One,</p>
      <p>
        Happy New Year!! May this year filled with lots of love,
        laughter and opportunities in your life.</p>
    
      <p className="name">P.s- Yours</p>
      <button onTouchMove={TouchEvent}></button>
    </div>
  </div></div>
  )
}
