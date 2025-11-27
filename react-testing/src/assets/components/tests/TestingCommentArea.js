import { render, screen, waitFor } from '@testing-library/react';
import CommentArea from '../src/components/CommentArea.jsx'; 
const mockComments = [
  { _id: '1', comment: 'Ottimo libro!', rate: 5 },
  { _id: '2', comment: 'Non mi è piaciuto', rate: 2 },
];

describe('CommentArea Rendering', () => {

  const mockFetchSuccess = (data) => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    );
  };
  
  
  const mockFetchFailure = () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );
  };

  it(' mostra il componente Loading', () => {
    
    global.fetch = jest.fn(() => new Promise(() => {}))

    render(<CommentArea asin="12345" />)
    const loadingElement = screen.getByText(/loading/i); 
    expect(loadingElement).toBeInTheDocument();
  });
  it('Funziona', async () => {
    mockFetchSuccess(mockComments);

    render(<CommentArea asin="12345" />);
    await waitFor(() => {
   
        expect(screen.getByText('Ottimo libro!')).toBeInTheDocument(); 
        expect(screen.getByRole('button', { name: /invia/i })).toBeInTheDocument(); 
        expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });

  it('dovrebbe mostrare il componente Error dopo un fallimento di fetch', async () => {
    mockFetchFailure();

    render(<CommentArea asin="12345" />);


    await waitFor(() => {
        expect(screen.getByText(/error/i)).toBeInTheDocument();
        
      
        expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });
});