yarn install && yarn bootstrap
yarn build --scope=frontend
cp -r src/frontend/packages/app/dist/ src/backend/client/
yarn build --scope=backend