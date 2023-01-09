echo "[FULLSTACK-APP] - Installing Dependencies..."
yarn install && yarn bootstrap

echo "[FULLSTACK-APP] - Build App"
yarn build
cp -r src/frontend/packages/app/dist/ src/backend/client/