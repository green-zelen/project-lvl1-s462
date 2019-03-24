install:
	npm install

lint:
	npx eslint .

lint_fix:
	npx eslint . --fix

start:
	npx babel-node src/bin/brain-games.js

start_even:
	npx babel-node src/bin/brain-even.js

start_calc:
	npx babel-node src/bin/brain-calculator.js

start_gcd:
	npx babel-node src/bin/brain-gcd.js

start_prog:
	npx babel-node src/bin/brain-progression.js

publish:
	npm publish
