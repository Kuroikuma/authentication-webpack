import './hola-mundo.css'
import image from '../../assets/image.jpeg'

export const HolaMundo = () => {
  return (
    <div className="container">
      <h1>Hola mundo</h1>
      <img src={image} alt="que a pashao" />
    </div>
  )
}
