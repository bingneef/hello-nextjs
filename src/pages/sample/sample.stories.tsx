import { storiesOf } from "@storybook/react";
import React from "react";
import Sample from ".";

storiesOf("Sample", module).add("with text", () => {
  return <Sample title="Sample" />;
});
