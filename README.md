# React GitHub Repo Search App with Bookmark Feature

![GitHub Repo Search App Screenshot](screenshot.png)

This is a simple React application that allows users to search for GitHub repositories and bookmark their favorite ones. The app uses React Context to manage the state of the searched repositories and the bookmarked repositories, and it utilizes local storage to persist the bookmarked repositories across sessions. Additionally, the app provides toast messages for user feedback and alerts for error handling.

## Features

- **GitHub Repo Search:** Users can enter a GitHub username and search for repositories associated with that user. The app will display a list of matching repositories with details like the repository name, owner, and description.

- **Bookmarking:** Users can click on the bookmark icon to add a repository to their bookmarks. Bookmarked repositories are stored in local storage, allowing users to access them even after closing the app or refreshing the page.

- **Toast Messages:** The app displays toast messages to provide feedback to users. For example, when a repository is successfully bookmarked, a toast message will appear confirming the action.

- **Alerts:** In case of errors or issues, the app shows alert messages to notify users. For instance, if a user tries to bookmark a repository that is already bookmarked, an alert will be displayed to prevent duplication.


## Instructions

First clone this repository.

```bash
git clone https://github.com/your-username/github-repo-search.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
cd to-do-list/
```

```bash
npm install # or yarn
```

Run it

```bash
npm start # or yarn start
```
Open your web browser and visit [http://localhost:3000](http://localhost:3000) to use the app.

## Usage

1. Enter a GitHub username in the search bar and click the "Search" button.

2. View the list of repositories associated with the user.

3. To bookmark a repository, click the bookmark icon (star) next to the repository's name.

4. Bookmarked repositories are saved in local storage and can be accessed even after closing the app or refreshing the page.

5. If there are any errors or issues, such as trying to bookmark a repository that is already bookmarked, you will see an alert message.

6. Toast messages will appear to provide feedback for successful actions, such as bookmarking a repository.

## Technologies Used

- React
- React Context API
- Local Storage
- Axios (for making API requests to GitHub)
- React-Toastify (for displaying toast messages)
- CSS (for styling)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the [GitHub API](https://docs.github.com/en/rest) for providing the data used in this application.

If you encounter any issues or have suggestions for improvements, please feel free to [open an issue](https://github.com/your-username/react-github-repo-search/issues) on this GitHub repository.

Happy coding! 😊🚀
