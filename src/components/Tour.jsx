import { useState } from 'react'

const Tour = ({ id, name, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>

        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}

          <button
            type='button'
            className='info-btn'
            onClick={() => setReadMore(!readMore)}
          >
            {!readMore ? 'read more' : 'show less'}
          </button>
        </p>
        <button
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </div>
  )
}
export default Tour
