import {
  SEARCH_REPOS,
  SET_LOADING,
  CLEAR_REPOS,
  BOOK_MARK_REPO,
  BOOK_MARK_REPO_ID,
} from "../types.ts";

const githubReducer = (state: any, action: any) => {
  switch (action.type) {
    case SEARCH_REPOS:
      return {
        ...state,
        repos: action.payload.data,
        totalCount: action.payload.totalCount,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case BOOK_MARK_REPO_ID:
      return {
        ...state,
        bookedMarkedIds: action.payload,
        loading: false,
      };
    case BOOK_MARK_REPO:
      return {
        ...state,
        bookedMarkedRepos: action.payload,
        loading: false,
      };
    case CLEAR_REPOS:
      return {
        ...state,
        loading: false,
        repos: [],
        totalCount: 0,
      };
    default:
      return state;
  }
};
export default githubReducer;
