# node-fileupload

Node.js file upload

## Requirements

Node 9+

## Getting started

Install all the node packages (required once and subsequently only when we have new node packages added to the project)


```console
npm install
```

Start server ( non production environment):

```console
npm start
```

__Important__: In _production_ `NODE_ENV` MUST be set to `production`

Installs server dependencies and starts it in production mode

```
npm install
NODE_ENV=production npm start
```

__Environment Variables__:

- `NODE_ENV` - production or development, default development
- `HOST` - service bind host, default localhost
- `PORT` - service bind port, default 8001 (8080 for production)

### Other Scripts

See package.json  _scripts_ section

Run lint continuously on every change
```console
npm run lint
```

Run unit tests in terminal continuously on every change
```console
npm run watchUnit
```


Run integ tests in terminal continuously on every change
```console
npm run watchInteg
```

Run test coverage report
```console
npm run coverage
```
