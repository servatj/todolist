import { render, screen } from '@testing-library/react';
import Table from './index';

test("Renders Table with dummy data", () => {
  const items = [{ task: "task 2", priority: 1 }, { task: "task 1", priority: 2 }];
  render(<Table sortedItems={items} />);

  const taskHeaderElement = screen.getByText("Task");
  expect(taskHeaderElement).toBeInTheDocument();

  const priorityHeaderElement = screen.getByText("Priority");
  expect(priorityHeaderElement).toBeInTheDocument();

  const taskElement = screen.getByText("task 1");
  expect(taskElement).toBeInTheDocument();

  const priorityElement = screen.getByText("1");
  expect(priorityElement).toBeInTheDocument();
})
