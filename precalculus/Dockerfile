FROM sotetsuk/pdflatex

RUN apt-get update && apt-get install python3 -y

WORKDIR /src

VOLUME /out

ADD build.sh /src
ADD data.py /src

ADD assets /src/assets
ADD *.tex /src

ENV CLASS "Precalculus"
ENV FUllCLASS "Essence of Precalculus"

CMD ./build.sh
