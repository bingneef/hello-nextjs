#!/bin/bash

tag=$( git describe --abbrev=0 )

eval "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
eval $( docker build -t bingneef/docker-nextjs:$tag . )
eval $( docker push bingneef/docker-nextjs:$tag )"