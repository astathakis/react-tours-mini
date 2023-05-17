import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title' style={{ marginTop: '1rem' }}>
        <h2>popular tours</h2>
        <div className='title-underline'></div>
        <div className='tours'>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Tours
