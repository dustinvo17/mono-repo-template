# Step 1: Install Lerna globally
FROM node:14 AS lerna-installer
RUN npm install -g lerna

# Step 2: Install dependencies and bootstrap packages
FROM node:14 AS dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive
COPY . .
COPY --from=lerna-installer /usr/local/bin/lerna /usr/local/bin/lerna
RUN yarn bootstrap

# Step 3: Build packages
FROM dependencies AS builder
RUN yarn build

# Step 4: Copy the web-app distribution files to the server/client directory
FROM builder AS client
WORKDIR /app
COPY src/client/packages/web-app/dist/ src/server/client/

# Step 5: Start the server in production mode
FROM node:14 AS server
WORKDIR /app/src/server
COPY --from=builder /app /app
COPY --from=client /app/src/server/client /app/src/server/client
CMD ["yarn", "start:prod"]
