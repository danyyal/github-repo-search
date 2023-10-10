import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext.ts";
import githubReducer from "./githubReducer.ts";
import {
  BOOK_MARK_REPO,
  CLEAR_REPOS,
  SEARCH_REPOS,
  SET_LOADING,
  BOOK_MARK_REPO_ID,
} from "../types.ts";
import { Repo } from "../../Types/types.ts";

const GithubState = (props: any) => {
  const initialState = {
    repos: [],
    loading: false,
    bookedMarkedIds: [],
    bookedMarkedRepos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search Repos
  const searchRepos = async (text: string, page: number = 1) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&per_page=10&page=${page}`
    );

    dispatch({
      type: SEARCH_REPOS,
      payload: { data: res.data.items, totalCount: res.data.total_count },
    });
  };

  const clearRepos = () => dispatch({ type: CLEAR_REPOS });
  const setBookMarkId = (id: number) => {
    dispatch({ type: BOOK_MARK_REPO_ID, payload: id });
  };
  const setBookMarkRepos = (repo: Repo) => {
    const repos = [...state.bookedMarkedRepos, repo];
    dispatch({ type: BOOK_MARK_REPO, payload: repos });
  };
  const clearBookMarkRepos = (repo: Repo) => {
    const filtered_repos = state.bookedMarkedRepos.filter(
      (re: Repo) => re.id !== repo.id
    );
    console.log(filtered_repos, "filtered_repos");
    dispatch({ type: BOOK_MARK_REPO, payload: filtered_repos });
  };
  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <githubContext.Provider
      value={{
        totalCount: state.totalCount,
        repos: state.repos,
        loading: state.loading,
        searchRepos,
        clearRepos,
        setBookMarkId,
        bookedMarkedRepos: state.bookedMarkedRepos,
        setBookMarkRepos,
        clearBookMarkRepos,
        bookedMarkedIds: state.bookedMarkedIds,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
