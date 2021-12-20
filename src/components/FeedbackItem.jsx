import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'

function FeedbackItem({ item }) {
  const { handleDelete, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
