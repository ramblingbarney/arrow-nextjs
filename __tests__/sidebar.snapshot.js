import { render } from "@testing-library/react";
import Sidebar from "../app/components/sidebar";

describe("Page Snapshot", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Sidebar />);
    expect(container).toMatchSnapshot();
  });
});
