import { render } from "@testing-library/react";
import SideBar from "../app/components/sidebar";

describe("Page Snapshot", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<SideBar />);
    expect(container).toMatchSnapshot();
  });
});
