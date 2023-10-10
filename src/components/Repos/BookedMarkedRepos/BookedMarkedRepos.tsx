import React, { useEffect, useState } from "react";
import RepoItem from "../RepoItem/RepoItem.tsx";
import { Repo } from "../../../Types/types.ts";
const BookedMarked = () => {
  const [bookmarks, setBookmarks] = useState<Repo[]>([]);

  // Load bookmarks from local storage on component mount
  useEffect(() => {
    const storedBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    setBookmarks(storedBookmarks);
  }, []);

  // Callback to remove a bookmark
  const removeBookmark = (repo: Repo) => {
    const updatedBookmarks = bookmarks.filter((re) => re.id !== repo.id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  if (bookmarks.length === 0) {
    return (
      <div className="error-message">
        <h3>No bookmarks found</h3>
        <p>Sorry, it looks like there are no bookmarks to display.</p>
      </div>
    );
  }
  return (
    <>
      <div style={reposStyle}>
        {bookmarks.map((repo) => (
          <RepoItem key={repo.id} repo={repo} removeBookmark={removeBookmark} />
        ))}
      </div>
    </>
  );
};
const reposStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};

export default BookedMarked;
