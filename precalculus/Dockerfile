FROM sotetsuk/pdflatex

ADD *.tex /
ADD assets /assets

ADD build.sh /

VOLUME /out

WORKDIR /

CMD ./build.sh
