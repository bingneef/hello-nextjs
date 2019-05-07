import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Sample from "./index.tsx";
import { equal } from "assert";

describe("Sample", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sample />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Sample title="Sample" stars={2} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const rootInstance = component.root;
    const $button = rootInstance.findByProps({ "test-id": "button" });

    expect($button.props.children).toBe("Secondary");
  });

  describe("initialProps", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("fetches preact stars from github", async () => {
      const fetchMock = fetch.once(JSON.stringify({ stargazers_count: 2 }));

      const props = await Sample.getInitialProps();
      expect(props).toEqual({ stars: 2 });
      expect(fetchMock.mock.calls[0][0]).toBe(
        "https://api.github.com/repos/bingneef/hello-nextjs"
      );
    });
  });
});
