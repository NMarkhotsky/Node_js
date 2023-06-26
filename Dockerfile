FROM node

WORKDIR /Node_js_App

COPY . .

RUN npm install
RUN npm rebuild bcrypt --build-from-source

EXPOSE 3000

CMD ["node", "server" ]