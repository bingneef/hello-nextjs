import { useState } from "react";
import { styled } from "baseui";
import { Spinner } from "baseui/spinner";

const Colored = styled("div", ({ $theme }: any) => ({
  color: $theme.colors.primary
}));

function Home() {
  const [value] = useState("test");
  return (
    <>
      <Colored>Welcome to Next.js!</Colored>
      <Spinner />
      <span>{JSON.stringify(value.split(""))}</span>
    </>
  );
}

export default Home;
