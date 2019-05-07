import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Bing from "./bing";

describe("Bing", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Bing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Bing title="Bing" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const rootInstance = component.root;
    const div = rootInstance.findByType("div");
    expect(div.props.children).toBe("Bing");
  });
});
