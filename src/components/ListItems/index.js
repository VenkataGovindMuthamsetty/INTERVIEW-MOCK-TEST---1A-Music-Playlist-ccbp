import {AiOutlineDelete} from 'react-icons/ai'

const ListItems = props => {
  const {songDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  const onClickDelete = () => {
    onClickDeleteTrack(id)
  }
  return (
    <li>
      <div>
        <img src={imageUrl} alt="track" />
        <p>{name}</p>
        <p>{genre}</p>
        <p>{duration}</p>
        <button type="button" data-testid="delete" onClick={onClickDelete}>
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}
export default ListItems
