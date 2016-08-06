run: .npminstall
	./node_modules/.bin/webpack

	npm start

run-dev: .npminstall
	./node_modules/.bin/webpack -d
	
	npm start

.npminstall: package.json
	npm install