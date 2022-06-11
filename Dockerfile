FROM node:alpine
WORKDIR /applied-it-project

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
ENV SERVER_PORT=4000
ENV API_CMP_KEY=432937e4-5787-4a17-92bd-27dcbe087533
ENV DANGEROUSLY_DISABLE_HOST_CHECK=true
RUN npm i
RUN npm i serve
RUN npm run build
ENTRYPOINT [ "npm" ]
CMD ["start"]