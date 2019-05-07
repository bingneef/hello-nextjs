import { styled } from "baseui";
import { Button, KIND } from "baseui/button";
import fetch from "isomorphic-unfetch";

import Form from "./components/form";

const Colored = styled("div", ({ $theme }: any) => ({
  color: $theme.colors.primary
}));

function Sample({ title, stars }: Props) {
  return (
    <>
      <Colored>
        {title} - {stars}
      </Colored>
      <Form />
      <Button test-id="button" kind={KIND.secondary}>
        Secondary
      </Button>
    </>
  );
}

Sample.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/developit/preact");
  const json = await res.json();

  return { stars: json.stargazers_count };
};

interface Props {
  title?: string;
  stars?: number;
}

Sample.defaultProps = {
  title: "Sample",
  stars: null
};

Sample.propTypes = {};

export default Sample;
