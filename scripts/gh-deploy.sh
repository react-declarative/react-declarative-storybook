rm -rf ./temp
git clone https://github.com/react-declarative/react-declarative.github.io.git ./temp
cp -rf ./dist/* ./temp
cd temp
git add *
git commit -m $(date +%s)
git push
