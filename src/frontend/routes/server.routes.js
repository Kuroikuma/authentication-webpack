import { HolaMundo } from '../app/containers/hola-mundo'

const serverRoutes = [
  {
    path: '/',
    exact: true,
    component: HolaMundo,
  },
]

export default serverRoutes
