#!/bin/bash
tag=$( git describe --abbrev=0 )
echo $( docker build -t bingneef/docker-nextjs:$tag . )
echo $tag
echo $( docker push bingneef/docker-nextjs:$tag )