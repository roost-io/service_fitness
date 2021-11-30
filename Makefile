# HOSTNAME := $(shell hostname)
.PHONY: all
all: dockerise deploy

.PHONY: test
test: test-art test-cypress

.PHONY: test-art
test-art:
	docker run --network="host" --rm -it -v ${PWD}/service_fitness_test:/scripts \
   zbio/artillery-custom run -e unit /scripts/test.yaml

.PHONY: test-cypress
test-cypress:
	mkdir -p /var/tmp/test
	mkdir -p /var/tmp/test/cypress
	mkdir -p /var/tmp/test/cypress/integration
	echo '{"reporter": "junit","reporterOptions": {"mochaFile": "results/my-test-output-[hash].xml"}}' > /var/tmp/test/cypress.json
	cp ${PWD}/service_fitness_test/service_fitness.spec.js /var/tmp/test/cypress/integration
	docker run -v /var/tmp/test:/e2e -w /e2e cypress/included:6.2.1 --browser firefox

.PHONY: deploy
deploy:
	kubectl apply -f kubernetes-manifests/all-in-one.yaml

.PHONY: clean
clean:
	kubectl delete -f kubernetes-manifests/all-in-one.yaml
