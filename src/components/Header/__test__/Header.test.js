import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title props', () => {
//     render(<Header title='My Header'/>);
//     const headingElement = screen.getByRole('heading');
//     expect(headingElement).toBeInTheDocument();
//   });

// it("should render text passed into title props", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render text passed into title", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// // FIND BY

// it("should render find by text", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/My Header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // QUERY BY

// it("should render find by ID", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByTestId(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it("should render get all by role", async () => {
//   render(<Header title="My Header" />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });
