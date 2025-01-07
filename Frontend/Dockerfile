FROM archlinux:latest

RUN pacman-key --init && \
    pacman -Syu --noconfirm && \
    pacman -S yarn --noconfirm

# Set the working directory
WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/

EXPOSE 4001

CMD ["yarn","dev","--host"]
