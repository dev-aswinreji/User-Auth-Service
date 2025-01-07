# Use Arch Linux as the base image
FROM archlinux:latest

# Initialize pacman keys, update system, and install Deno
RUN pacman-key --init && \
    pacman -Syu --noconfirm && \
    pacman -S yarn nodejs ts-node --noconfirm


# Set the working directory
WORKDIR /app

# Copy Deno configuration files and cache dependencies
COPY package.json yarn.lock /app/

RUN yarn install

# Copy the entire project after caching dependencies
COPY . /app/

# Expose the necessary port
EXPOSE 4000

# Command to run the application, granting necessary permissions
CMD ["yarn", "start"]

