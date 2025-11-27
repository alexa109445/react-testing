import { render, screen } from "@testing-library/react";
import AllTheBooks from "./components/AllTheBooks"
describe('AllTheBooks Component', () => {
  it('dovrebbe renderizzare un numero di Card (libri) pari alla lunghezza del file JSON', () => {
    render(<AllTheBooks />)
    const bookImages = screen.getAllByRole('img'),
    expect(bookImages).toHaveLength(fantasyBooks.length),
  });
});