.PHONY: init
init:
	pnpm i
	rm -rf demo/api
	pnpm openapi2aspida -i download/zephyr.yml -o demo/api
