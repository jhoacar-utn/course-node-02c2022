FROM cypress/included:10.11.0
RUN apt update || \
    apt install -y \
        git \
        net-tools

CMD ['tail','-f','/dev/null']