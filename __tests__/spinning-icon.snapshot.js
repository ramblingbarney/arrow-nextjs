import { render } from "@testing-library/react";
import SpinningIcon from "../app/components/spinning-icon";

describe("Page Snapshot", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<SpinningIcon />);
    expect(container).toMatchSnapshot();
  });
});
