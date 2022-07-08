import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Without testing Library:
test('should have react logo', () => {
  render(<App />);
  
  const img = document.querySelector('[alt="logo"]')

  expect(img).toBeDefined();
  expect(img.tagName).toBe('IMG');
});

// With Testing library:
test('should have react logo wit alt logo', () => {
  render(<App />);
  
  const img = screen.getByAltText('logo');

  expect(img).toBeInTheDocument();
  // Trochę na siłę, bo jeśli getByAltText
  // nie zadziała to img === null i test się nie wykona
  expect(img).toHaveAccessibleName('logo')
});

describe('Counter Btn', () => {

  test('should have Hello 0 at start', () => {
    render(<App />);
    
    const btn = screen.getByTestId('btn');
  
    expect(btn).toHaveTextContent('Hello 0')
  });

  test('should have Hello 3 when button clicked 3 times', () => {
    render(<App />);
    
    const btn = screen.getByTestId('btn');

    fireEvent.click(btn)
    fireEvent.click(btn)
    fireEvent.click(btn)
  
    expect(btn).toHaveTextContent('Hello 3')
  });

})