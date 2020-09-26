# Installation

## Note: Node > 12.x.x

1. Install NodeJS

   ## Nvm (Node version manager - Optional) (recommend)

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
   ```

   ### a. nvm installed

   ```bash
   nvm install node
   ```

   this will get the lastest version of node

   ### b. without nvm

   ```bash
   https://nodejs.org/en/
   ```

2. Install dependencies
   ```bash
   npm install yarn -g
   ```

# Run (local host only-------)

1. Get dependencies

Go to `crypto`

```bash
yarn
```

2. Run

- `With server node`

```bash
yarn dev
```

- `without server node`

```bash
yarn static
```

App will be run on [localhost:9000](http://localhost:9000)

# Run Production

## Environment

```
NODE_ENV (default=production)
PORT (default=9006)
```

1. Get dependencies

```
yarn install --production=true
```

2. Build public folder

```
yarn build
```

3. (1) Docker File
   only this Folder/files need to run production

```
build/
node_modules
.env
package.json
```

3. Run

```
yarn start
```
