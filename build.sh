# This script assumes you have already updated the definitions folder

git add .
git commit -m "Update definitions"
npm run docs
git add .
git commit -m "Update hashes"