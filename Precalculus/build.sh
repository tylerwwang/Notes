for i in *.tex;
do pdflatex $i;
	pdflatex $i;
done

mkdir notes/Precalculus

mv *.pdf notes/Precalculus
