import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "./header";
import icon from "../../../../static/logo.png";

const story = storiesOf("Components|Layout", module);

const logo = <img className="w-auto h-15" src={icon} alt="Workflow" />;

// eslint-disable-next-line @typescript-eslint/no-empty-function
story.add("Header", () => (
  <Header
    handleDrawerOpen={() => {
      console.log("header");
    }}
    open={true}
  />
));
