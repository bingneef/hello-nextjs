import { styled } from "baseui";
import { Button, KIND } from "baseui/button";

import Form from "./components/Form";

const Colored = styled("div", ({ $theme }: any) => ({
  color: $theme.colors.primary
}));

function Sample({ title }: Props) {
  return (
    <>
      <Colored>{title}</Colored>
      <Form />
      <Button kind={KIND.secondary}>Secondary</Button>
    </>
  );
}

interface Props {
  title?: string;
}

Sample.defaultProps = {
  title: "Sample"
};

Sample.propTypes = {};

export default Sample;
