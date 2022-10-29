FROM cypress/base:16
RUN apt update && apt install -y git

CMD ['tail','-f','/dev/null']