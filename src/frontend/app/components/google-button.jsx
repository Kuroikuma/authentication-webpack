import { GoogleLogin } from 'react-google-login'

export const ButtonGoogleView = ({ responseGoogle }) => {
  return (
    <GoogleLogin
      clientId="208716464272-jcatu0n6hreikd73fi0p97rol1kabe0i.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}
