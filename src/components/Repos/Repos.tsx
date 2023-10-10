import React, { useContext, useEffect, useState } from "react";
import RepoItem from "./RepoItem/RepoItem.tsx";
import Spinner from "../layout/Spinner.tsx";
import githubContext from "../../context/github/githubContext.ts";
import Pagination from "../Paginator/Paginator.tsx";
import { Repo } from "../../Types/types.ts";

const Repos = () => {
  const gc = useContext(githubContext) as {
    loading: boolean;
    repos: Repo[];
    totalCount: number;
    searchRepos: any;
  };
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, repos, totalCount } = gc;

  const [bookmarks, setBookmarks] = useState<Repo[]>([]);

  // Load bookmarks from local storage on component mount
  useEffect(() => {
    const storedBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    setBookmarks(storedBookmarks);
  }, []);

  // Callback to add a bookmark
  const addBookmark = (repo: Repo) => {
    const updatedBookmarks = [...bookmarks, repo];
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  // Callback to remove a bookmark
  const removeBookmark = (repo: Repo) => {
    const updatedBookmarks = bookmarks.filter((re) => re.id !== repo.id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [totalCount]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        {repos.length ? (
          <div style={reposStyle}>
            {repos.map((repo: Repo) => (
              <RepoItem
                repo={repo}
                addBookmark={addBookmark}
                removeBookmark={removeBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="error-message">
            <h3>No Repository found</h3>
          </div>
        )}
        {totalCount > 10 && (
          <Pagination
            totalCount={totalCount}
            currentPage={currentPage}
            onPageChange={(val: number) => {
              const text = document?.getElementById(
                "search-input"
              ) as HTMLInputElement;
              const value = text.value ?? "";
              setCurrentPage(val);
              gc.searchRepos(value, val);
            }}
          />
        )}
      </>
    );
  }
};
const reposStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};

export default Repos;
