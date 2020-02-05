install:
	npm ci

start:
	npx node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
