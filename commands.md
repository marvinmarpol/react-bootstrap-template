# docker build image with tagging
    docker build -t marvinmz/react-bootstrap-template .

# docker build image with tagging, and filename
    docker build -t marvinmz/react-bootstrap-template -f Dockerfile.dev .

# docker run command, interactive mode, map local port 3000 to container port 3000
    docker run -it -p 3000:3000 marvinmz/react-bootstrap-template

# run the image with the filename flag
    docker-compose -f docker-compose.yml up

# run the image with the filename flag, detach mode
    docker-compose -f docker-compose.yml up -d

# run the image with the filename flag, with rebuild attempt and detach mode
    docker-compose -f docker-compose.yml up --build -d