#!/bin/bash
tag=$( git describe --abbrev=0 )

echo $DOCKER_PASSWORD | docker login --username bingneef --password-stdin
eval $( docker build -t bingneef/docker-nextjs:$tag . )
eval $( docker push bingneef/docker-nextjs:$tag )