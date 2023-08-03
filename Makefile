up:
	docker compose up -d
down:
	docker compose down
build:
	docker compose build --no-cache --force-rm
init:
	docker compose up -d --build
	docker compose exec app composer install
	docker compose exec app cp .env.example .env
	docker compose exec app php artisan key:generate
	docker compose exec app php artisan storage:link
	@make fresh
web:
	docker compose exec web bash
app:
	docker compose exec app bash
migrate:
	docker compose exec app php artisan migrate
fresh:
	docker compose exec app php artisan migrate:fresh --seed
seed:
	docker compose exec app php artisan db:seed
tinker:
	docker compose exec app php artisan tinker
watch:
	docker compose exec web npm run watch
vite:
	docker compose exec web npm run vite
vite-init:
	sed -i -e "s/YOUR_WORKSPACE_NAME/$(shell hostname | sed -e 's/-workspace//')/g" laravel/vite.config.ts
	@make add-system-watcher-limit
	@make vite-build
vite-build:
	docker compose exec web npm run vite build
add-system-watcher-limit:
	sudo sysctl fs.inotify.max_user_watches=24288
test:
	docker compose exec app php artisan test
phpcs:
	docker compose exec app composer phpcs -- ./
phpcbf:
	docker compose exec app composer phpcbf -- ./
prettier:
	docker compose exec web ./node_modules/.bin/prettier --write 'resources/js/**/*.(js|ts|jsx|tsx)'
stylelint:
	docker compose exec web sh -c './node_modules/.bin/stylelint --fix resources/**/*.module.scss resources/**/*.scss'
lint:
	@make prettier
	@make stylelint
	@make phpcbf
docker-login:
	aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 920869240432.dkr.ecr.ap-northeast-1.amazonaws.com
upload-web:
	docker build --platform linux/amd64 -t coupon-web -f ./infra/docker/production/nginx/Dockerfile .
	docker tag coupon-web:latest 920869240432.dkr.ecr.ap-northeast-1.amazonaws.com/coupon-web:latest
	docker push 920869240432.dkr.ecr.ap-northeast-1.amazonaws.com/coupon-web:latest
upload-app:
	docker build --platform linux/amd64 -t coupon-app -f ./infra/docker/production/php/Dockerfile .
	docker tag coupon-app:latest 920869240432.dkr.ecr.ap-northeast-1.amazonaws.com/coupon-app:latest
	docker push 920869240432.dkr.ecr.ap-northeast-1.amazonaws.com/coupon-app:latest
update-service:
	aws ecs update-service --cluster CouponCluster --service CouponService --force-new-deployment --region ap-northeast-1

docker-login-prod:
	aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 323836455316.dkr.ecr.ap-northeast-1.amazonaws.com
upload-web-prod:
	docker build --platform linux/amd64 -t coupon-web -f ./infra/docker/production/nginx/Dockerfile .
	docker tag coupon-web:latest 323836455316.dkr.ecr.ap-northeast-1.amazonaws.com/coupon-web:latest
	docker push 323836455316.dkr.ecr.ap-northeast-1.amazonaws.com/coupon-web:latest
upload-app-prod:
	docker build --platform linux/amd64 -t coupon-app -f ./infra/docker/production/php/Dockerfile .
	docker tag coupon-app:latest 323836455316.dkr.ecr.ap-northeast-1.amazonaws.com/coupon-app:latest
	docker push 323836455316.dkr.ecr.ap-northeast-1.amazonaws.com/coupon-app:latest
update-service-prod:
	aws ecs update-service --cluster CouponCluster --service CouponService --force-new-deployment --region ap-northeast-1

