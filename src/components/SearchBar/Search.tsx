import React, { useState, useContext, useEffect } from "react";
import githubContext from "../../context/github/githubContext.ts";
import alertContext from "../../context/alert/alertContext.ts";

const Search = () => {
  const [text, setText] = useState("");

  const gc: any = useContext(githubContext);
  const ac: any = useContext(alertContext);

  const onChange = (e: { target: { value: string } }) => {
    setText(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (text === "") {
      ac.setAlert("Please Enter Something", "info");
      return;
    } else {
      ac.setAlert(null);
    }
    gc.searchRepos(text);
  };
  useEffect(() => {
    return () => {
      ac.setAlert(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form">
          <input
            id="search-input"
            type="text"
            name="text"
            placeholder="Search Repositories..."
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </div>
      </form>
      {gc.repos.length > 0 && (
        <button
          className="btn btn-warnning btn-block"
          onClick={() => {
            gc.clearRepos();
            setText("");
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
