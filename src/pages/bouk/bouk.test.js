import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Bouk from "./bouk";

describe("Bouk", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Bouk />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Bouk title="Bouk" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const rootInstance = component.root;
    const div = rootInstance.findByType("div");
    expect(div.props.children).toBe("Bouk");
  });
});
