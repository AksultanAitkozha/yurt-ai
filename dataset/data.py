import csv

with open("dataset.tsv") as file:
    tsv_file = csv.reader(file, delimiter="\t")
    print(tsv_file)

