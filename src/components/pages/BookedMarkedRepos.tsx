import React, { Fragment } from "react";
import BookedMarked from "../Repos/BookedMarkedRepos/BookedMarkedRepos.tsx";
const bookedMarkedRepos = () => (
  <Fragment>
    <h4 className="btn btn-dark btn-block text-center">Bookmarks</h4>
    <BookedMarked />
  </Fragment>
);

export default bookedMarkedRepos;
