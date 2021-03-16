data = Object.assign(
			d3.csvParse(
				await FileAttachment("../../data/diabetes_csv.csv").text(), 
				({letter, frequency}) => ({name: letter, value: +frequency})
			).sort((a, b) => d3.descending(a.value, b.value)), 
			{y: "↑ Numero de veces embarazada"}
		)


// Se crea la imagen SVG
const svg = d3.select("pregnancy-diabetes-chart"),
	width = svg.attr("width"),
	height = svg.attr("height"),
	path = d3.geoPath(),
	data = d3.map(),
	patrimonies = "../../data/diabetes_csv.csv";


