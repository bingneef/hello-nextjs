tag=$( git describe --abbrev=0 )\
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin\
echo $( docker build -t bingneef/docker-nextjs:$tag . )\
echo $tag\
echo $( docker push bingneef/docker-nextjs:$tag )"