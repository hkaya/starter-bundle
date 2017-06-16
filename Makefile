SHELL := /bin/bash

lint:
	./node_modules/.bin/eslint src

clean:
	rm -rf ./build

dev: clean lint
	npm run dev

build: clean lint
	npm run prod

pack:
	mkdir -p ./dist
	pushd ./build && \
	zip -r app-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip * && \
	cp app-*.zip ../dist && \
	rm app-*.zip && \
	popd

pack-custom: 
	mkdir -p ./dist
	pushd ./build && \
	zip -r $(app)-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip * && \
	cp $(app)-*.zip ../dist && \
	rm $(app)-*.zip && \
	popd

dist: clean build pack

dist-custom: clean build pack-custom

local-pack:
	rm -rf ./dist
	mkdir -p ./dist
	zip -r app-local-build-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip . -x node_modules/\*  -x dist/\* -x .DS_Store -x .git/\* . && \
	cp app-*.zip ./dist && \
	rm app-*.zip

local-pack-custom:
	rm -rf ./dist
	mkdir -p ./dist
	zip -r $(app)-local-build-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip . -x node_modules/\* -x dist/\* -x .DS_Store -x .git/\* . && \
	cp $(app)-*.zip ./dist && \
	rm $(app)-*.zip

local-dist: clean lint local-pack

local-dist-custom: clean lint local-pack-custom

