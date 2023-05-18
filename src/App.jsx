import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Tour from './components/Tour'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setTours(data)
      setLoading(false)
    } catch (error) {
      console.log('error from catch')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id
    })
    setTours(newTours)
    console.log(newTours)
  }

  // if (tours.length === 0) {
  //   return (
  //     <main>
  //       <div className='title'>
  //         <h2>no tours left</h2>
  //         <button className='btn' onClick={() => fetchTours()}>
  //           refresh
  //         </button>
  //       </div>
  //     </main>
  //   )
  // }

  return (
    <>
      {loading && <Loading />}
      {loading ||
        (tours.length === 0 && (
          <main>
            <div className='title'>
              <h2 style={{ marginBottom: '1rem' }}>no tours left</h2>
              <button className='btn' onClick={() => fetchTours()}>
                refresh
              </button>
            </div>
          </main>
        ))}
      {tours.length > 0 && (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      )}
    </>
  )
}
export default App
