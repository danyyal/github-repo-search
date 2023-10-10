import { createContext } from "react";
import { Repo } from "../../Types/types.ts";

const defaultValue = {
  totalCount: 0,
  repos: [],
  loading: false,
  searchRepos: (text: string, page?: number) => {},
  clearRepos: () => {},
  setBookMarkId: (id: number) => {},
  bookedMarkedRepos: [],
  setBookMarkRepos: (repo: Repo) => {},
  clearBookMarkRepos: (repo: Repo) => {},
  bookedMarkedIds: [],
};
const githubContext = createContext(defaultValue);

export default githubContext;
