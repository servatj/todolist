import { render, screen } from '@testing-library/react';
import App from './App';

test("Renders Task Label", () => {
  render(<App />);
  const linkElement = screen.getByText("Task:");
  expect(linkElement).toBeInTheDocument();
});


test("Renders priority Label", () => {
  render(<App />);
  const linkElement = screen.getByText("Priority:");
  expect(linkElement).toBeInTheDocument();
})

test("renders table header - task column", () => {
  render(<App />);
  const linkElement = screen.getByText("Task");
  expect(linkElement).toBeInTheDocument();
})

test("renders table header - priority column", () => {
  render(<App />);
  const linkElement = screen.getByText("Priority");
  expect(linkElement).toBeInTheDocument();
})

test("renders table - first row task", () => {
  render(<App />);
  const linkElement = screen.getByText("Task 1");
  expect(linkElement).toBeInTheDocument();
})

test("renders table - First Row Pritoriy", () => {
  render(<App />);
  const linkElement = screen.getByText("1");
  expect(linkElement).toBeInTheDocument();
})
