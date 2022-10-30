FROM cypress/included:10.11.0
RUN set -eux
RUN [ -z "$(apt-get update 2>&1 >/dev/null)" ] && \
    apt install -y \
        net-tools \
        git

ARG GIT_EMAIL="ejemplo@gmail.com" 
ENV GIT_EMAIL=$GIT_EMAIL

ARG GIT_USERNAME="ejemplo"
ENV GIT_USERNAME=$GIT_USERNAME

RUN echo "Configuring git with $GIT_EMAIL and $GIT_USERNAME" && \
    git config --global user.email "$GIT_EMAIL" && \
    git config --global user.name "$GIT_USERNAME"  

CMD ['tail','-f','/dev/null']