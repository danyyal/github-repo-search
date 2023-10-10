import React, { Fragment } from "react";
import Repos from "../Repos/Repos.tsx";
import Search from "../SearchBar/Search.tsx";
const Home = () => (
  <Fragment>
    <Search />
    <Repos />
  </Fragment>
);

export default Home;
