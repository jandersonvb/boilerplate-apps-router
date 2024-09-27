import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />) // renderiza o componente

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument() // verifica se o heading foi renderizado

    expect(container.firstChild).toMatchSnapshot() // snapshot
  })
})
