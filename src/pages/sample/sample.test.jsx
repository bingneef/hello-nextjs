import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Sample from "./index.tsx";

describe("Sample", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sample />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Sample title="Sample" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const rootInstance = component.root;
    const $button = rootInstance.findByType("button");
    expect($button.props.children).toBe("Secondary");
  });
});
