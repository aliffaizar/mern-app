import { screen, render } from '@testing-library/react'

import App from './App'

it('should render "Hello World!"', () => {
  render(<App />)
  const linkElement = screen.getByText(/hello world!/i)
  expect(linkElement).toBeInTheDocument()
})
