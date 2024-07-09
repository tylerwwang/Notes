for i in *.tex;
do pdflatex $i;
	pdflatex $i;
done

mkdir out/Precalculus

mv *.pdf out/Precalculus
