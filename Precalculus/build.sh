for i in *.tex; 
do pdflatex $i;
done

mkdir output/Precalculus

mv *.pdf output/Precalculus
