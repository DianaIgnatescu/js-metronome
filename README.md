# js-metronome

[Link to deployed app](https://modest-allen-8dbe50.netlify.app/)

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Running this project

1. Clone or download repository.

2. ```cd``` into your project directory.

3. Run ```npm install``` to dowload the dependencies.

4. Run ```npm start```. Open http://localhost:3000 to view it in the browser.

5. This project uses [GetSongBPM API](https://getsongbpm.com/api). If you wish to run this project locally you will need to get a valid API key and add it to a ```.env``` file in the root directory.


#### Available scripts

```npm run start```: Runs the app in the development mode.

The page will reload if you make edits.
You will also see any lint errors in the console.

```npm run test```: Launches the test runner in the interactive watch mode.

```npm run build```: Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

```npm run eject```: This command will remove the single build dependency from your project.
Note: this is a one-way operation. Once you ```eject```, you can’t go back!

#### Environment Variables
```REACT_APP_GETSONGBPM_APIKEY```: The API key provided by GetSongBPM
