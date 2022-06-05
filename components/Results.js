import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

function Results({ results }) {
  return (
    <FlipMove className='my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
      3xl:flex flex-wrap justify-center'>
        {Object.entries(results).map((result) => {
          <Thumbnail key={result.id} result={result}/>
        })}
    </FlipMove>
  )
}

export default Results