import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Sping from "./sping";

describe("Sping", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sping />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Sping title="Sping" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const rootInstance = component.root;
    const div = rootInstance.findByType("div");
    expect(div.props.children).toBe("Sping");
  });
});
