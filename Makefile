install:
	npm install

lint:
	npx eslint .

start:
	npx babel-node src/bin/brain-games.js

start_even:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish
