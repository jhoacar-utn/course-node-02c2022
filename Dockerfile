FROM cypress/included:10.11.0
RUN set -eux
RUN [ -z "$(apt-get update 2>&1 >/dev/null)" ] && \
    apt install -y \
        net-tools \
        lsof \
        git 

CMD ['tail','-f','/dev/null']