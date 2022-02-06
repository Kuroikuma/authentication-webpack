import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HolaMundo } from '../app/containers/hola-mundo'

export const IndexRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HolaMundo />} />
        <Route index element={<HolaMundo />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
