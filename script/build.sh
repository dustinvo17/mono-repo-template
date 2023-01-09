echo "========> Build UI Content..."
yarn install && yarn bootstrap
yarn build --scope=frontend

echo "========> Copying UI Content To Server..."
cp -r src/frontend/packages/app/dist/ src/backend/client/

echo "=========> Building Server"
yarn build --scope=backend