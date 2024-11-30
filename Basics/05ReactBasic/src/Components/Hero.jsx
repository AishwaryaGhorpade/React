import React from 'react'

function Hero({heroName}) {
    if(heroName==='joker')
    {
        throw new error("Not a joker!");
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
