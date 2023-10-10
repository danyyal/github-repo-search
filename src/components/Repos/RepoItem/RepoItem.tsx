import React, { useContext, useEffect, useState } from "react";
import {
  BsFillBookmarkCheckFill,
  BsFillBookmarkDashFill,
} from "react-icons/bs";
import githubContext from "../../../context/github/githubContext.ts";
import "./RepoItem.scss";
import ToastMessage from "../../ToastMessages/ToastMessages.tsx";
import { Repo } from "../../../Types/types.ts";
const RepoItem = ({
  repo,
  addBookmark,
  removeBookmark,
}: {
  repo: Repo;
  addBookmark?: (repo: Repo) => void;
  removeBookmark: (repo: Repo) => void;
}) => {
  const gc: any = useContext(githubContext);
  const id = repo.id;
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") ?? "");
  const bookMarkedIds = bookmarks.map((repo: Repo) => repo.id);
  const isBookedMarked = bookMarkedIds.filter((i: number) => i === id);
  const filteredMarks = bookMarkedIds.filter((i: number) => i !== id);
  return (
    <div className="card text-center">
      <div className="bookmark-icon">
        {isBookedMarked.length === 0 ? (
          <BsFillBookmarkCheckFill
            color="blue"
            onClick={() => {
              if (addBookmark) addBookmark(repo);
              gc.setBookMarkId([...bookMarkedIds, id]);
              ToastMessage.success("Successfully added to bookmarks.");
            }}
          />
        ) : (
          <BsFillBookmarkDashFill
            onClick={() => {
              removeBookmark(repo);
              gc.setBookMarkId(filteredMarks);
              ToastMessage.success("Successfully removed from bookmarks.");
            }}
          />
        )}
      </div>
      <img
        src={repo.owner.avatar_url}
        alt="User Avater"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h4>{repo.name}</h4>
      <Tile heading={"Owner name:"} value={repo.owner.login} />
      <Tile
        heading={"Description:"}
        value={`${repo.description?.substr(0, 200)}...`}
      />
      <Tile heading={"Stars:"} value={repo.stargazers_count} />
    </div>
  );
};

export default RepoItem;

const Tile = ({
  heading,
  value,
}: {
  heading: string;
  value: string | number;
}) => {
  return (
    <span>
      <b>
        <i>
          <u>{heading}</u>
        </i>
      </b>{" "}
      {value}
    </span>
  );
};
