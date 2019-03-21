install:
	npm install

lint:
	npx eslint .

start_even:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish
