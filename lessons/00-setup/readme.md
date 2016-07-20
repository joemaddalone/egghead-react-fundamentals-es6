#Open your project file in current directory in terminal
Then when type
```bash
npm init
````
this will walkthrough the steps to create a .json file.

Press return until you get to the final prompt  *Is this ok? (yes)
Press return again. This will create a package.json file in your project directory.

Next we will install React and ReactDOM by typing
```bash
npm install react react-dom --save
```
##For the next step we assume you have babel installed, webpack, as well as webpack-dev-server
If not please install
```bash
npm install babel webpack webpack-dev-server -g
```

Next we will install some babel preloaders
```bash
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react
```

Next we will create several files
```bash
touch index.html App.js main.js webpack.config.js
```
