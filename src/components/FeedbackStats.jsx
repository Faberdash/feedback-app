import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  // Calculates the average of all posted ratings reviews
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0) / feedback.length

  // Limits it to one decimal place, but removes the decimal place if it is a .0
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
