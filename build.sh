yarn install && yarn bootstrap
yarn build
cp -r src/frontend/packages/app/dist/ src/backend/client/
yarn --cwd src/backend start:prod