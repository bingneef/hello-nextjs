import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Form from "./form.tsx";

describe("Form", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Form />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("ui intereactions", () => {
    const component = renderer.create(<Form />);

    const rootInstance = component.root;
    let $counter = rootInstance.findByProps({ "test-id": "counter" });

    it("can increment the counter", async () => {
      expect($counter.props.children).toBe(0);

      const $increment = rootInstance.findByProps({ "test-id": "increment" });
      $increment.props.onClick();

      expect($counter.props.children).toBe(1);
    });

    it("can reset the counter", async () => {
      expect($counter.props.children).toBe(1);

      const $reset = rootInstance.findByProps({ "test-id": "reset" });
      $reset.props.onClick();

      expect($counter.props.children).toBe(0);
    });

    it("can decrement the counter", async () => {
      expect($counter.props.children).toBe(0);

      const $decrement = rootInstance.findByProps({ "test-id": "decrement" });
      $decrement.props.onClick();

      expect($counter.props.children).toBe(-1);
    });
  });
});
