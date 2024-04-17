FROM nginx:stable-alpine
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./src /usr/share/nginx/html/src
COPY ./from_msword /usr/share/nginx/html/from_msword
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]