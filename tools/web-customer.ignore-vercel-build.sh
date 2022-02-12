
# Name of the app to check. Change this to your application name!
APP=web-customer

# Determine version of Nx installed
NX_VERSION=$(node -e "console.log(require('./package.json').devDependencies['@nrwl/workspace'])")
TS_VERSION=$(node -e "console.log(require('./package.json').devDependencies['typescript'])")

# Install @nrwl/workspace in order to run the affected command
echo "yarn add start"
yarn add -D --prefer-offline --frozen-lockfile "@nrwl/workspace@$(cat ./package.json | jq -r '.devDependencies["@nrwl/workspace"]')"
yarn add -D --prefer-offline --frozen-lockfile "typescript@$(cat ./package.json | jq -r '.devDependencies["typescript"]')"
# yarn add -D --prefer-offline --frozen-lockfile "@nrwl/workspace@$NX_VERSION@$(cat ./package.json | jq -r '.devDependencies["@nrwl/workspace@$NX_VERSION"]')"
# yarn add -D --prefer-offline --frozen-lockfile "typescript@$TS_VERSION@$(cat ./package.json | jq -r '.devDependencies["typescript@$TS_VERSION"]')"
# yarn add -D @nrwl/workspace@$NX_VERSION --prefer-offline --frozen-lockfile
# yarn add -D typescript@$TS_VERSION --prefer-offline --frozen-lockfile
echo "yarn add end"

# Run the affected command, comparing latest commit to the one before that
npx nx affected:apps --plain --base HEAD~1 --head HEAD | grep $APP -q

# Store result of the previous command (grep)
IS_AFFECTED=$?

if [ $IS_AFFECTED -eq 1 ]; then
  echo "🛑 - Build cancelled"
  exit 0
elif [ $IS_AFFECTED -eq 0 ]; then
  echo "✅ - Build can proceed"
  exit 1
fi