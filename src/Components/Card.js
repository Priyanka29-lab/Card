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
      <h3 className="back">It's a Fantastic Year ahead !!</h3>
      <p>Dear One,</p>
      <p>
        Happy New Year 🥂 !! May this year will filled with lots of love and
        laughter! May all of your 365 days will be Fantastic.
      </p>
      <p className="name">Yours 😊</p>
      <button onTouchMove={TouchEvent}></button>
    </div>
  </div></div>
  )
}
