import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

it("should render correct amount of incomplete tasks", () => {
    render(<TodoFooter title="My Header" />);
    const headingElement = screen.getByText(/My Header/i);
    expect(headingElement).toBeInTheDocument();
  });