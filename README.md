# Emoji Search - React Basics App

This app is intended to be an introduction to some react basic concepts like:

- Components
- JSX
- Hooks - useState and useEffect
- Fetching data and fetching states
- Events

## Local Development

To run this project locally you should install dependencies first, I personally recomend using `yarn`, but `npm` can be used either.

```
# using yarn
$ yarn install

# using npm
$ npm install
```

### Backend
This app uses a simple backend with [json-server](https://www.npmjs.com/package/json-server) that runs with this command:

```
$ yarn start-api
```

Then if you request `http://localhost:3001/emojis` a json response is obtained with a list of emojis and keywords:

```
[
  {
    "title": "100",
    "symbol": "💯",
    "keywords": "hundred points symbol symbol wow wow win win perfect perfect parties parties"
  },
  {
    "title": "1234",
    "symbol": "🔢",
    "keywords": "input symbol for numbers symbol"
  },
  {
    "title": "Grinning",
    "symbol": "😀",
    "keywords": "grinning face happy smiley emotion emotion"
  }, ...
]
```

### Frontend
To run the React app just have tu run this command and you will have the app running with very fast hot module reloading thanks to [Vite](https://vitejs.dev/guide/).

```
$ yarn dev
```

## Tech stack

- React 18
- [json-server](https://www.npmjs.com/package/json-server) as backend
- [Vite](https://vitejs.dev/guide/) as bundling tool - [Why not use Create React App](https://liaogg.medium.com/its-time-to-stop-using-create-react-app-a99917dbfc#:~:text=It's%20Bulky%20and%20Slow.,setup%20a%20simple%20React%20project.)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React-use](https://github.com/streamich/react-use) offers a ton of hooks utilities

