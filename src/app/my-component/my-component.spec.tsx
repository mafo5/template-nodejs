import { render, screen } from '@testing-library/react'
import { MyComponent } from './my-component'

describe('MyComponent Component', () => {
  it('renders a head', () => {

    render(<MyComponent />)

    expect(screen.getByText('My Component')).toBeVisible()
  })
})
