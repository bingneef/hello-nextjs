import { styled } from "baseui";
import { Button, KIND } from "baseui/button";
import fetch from "isomorphic-unfetch";

import Form from "./components/form";

const Colored = styled("div", ({ $theme }: any) => ({
  color: $theme.colors.primary
}));

function Sample({ stars, title }: Props) {
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
  const res = await fetch("https://api.github.com/repos/bingneef/hello-nextjs");
  const json = await res.json();

  return { stars: json.stargazers_count };
};

interface Props {
  stars?: number;
  title?: string;
}

Sample.defaultProps = {
  stars: 0,
  title: "Sample"
};

Sample.propTypes = {};

export default Sample;
