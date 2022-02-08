import { ButtonGoogleView } from '../components/google-button'

export const ButtonGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response)
  }

  return <ButtonGoogleView responseGoogle={responseGoogle} />
}
