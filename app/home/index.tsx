import {default as NextLink} from "next/link"
import { Link } from "@tanstack/react-location";
import React from "react";

export const Home = () => {
  return (
    <div>
      <span>Home</span>
      <div>
        <Link to="about">About</Link>
      </div>
      <div>
        <Link to="test" preload={1000}>
          Test
        </Link>
        <NextLink href="dashboard">Test</NextLink>
      </div>
    </div>
  );
};
