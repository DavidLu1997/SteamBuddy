run: install
	./node_modules/.bin/webpack

	npm start

run-dev: install
	./node_modules/.bin/webpack -d

	npm start

check-style: install
	eslint client/**

install: package.json
	npm install

clean:
	rm -rf public/bundle.*
	rm -rf node_modules
	rm -f .npminstall