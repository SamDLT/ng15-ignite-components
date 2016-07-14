import data from "../../helpers/getData"

class ngChartController {

    getData() {
        this.data = data
    }

    $onInit() {
        this.getData()

        $("#chart").igDataChart({
            width: "100%",
            height: "400px",
            title: "Population per Country",
            subtitle: "Five largest projected populations for 2015",
            dataSource: this.data,
            axes: [
                {
                    name: "NameAxis",
                    type: "categoryX",
                    title: "Country",
                    label: "CountryName"
                },
                {
                    name: "PopulationAxis",
                    type: "numericY",
                    minimumValue: 0,
                    title: "Millions of People",
                }
            ],
            series: [
                {
                    name: "2015Population",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "NameAxis",
                    yAxis: "PopulationAxis",
                    valueMemberPath: "Pop2015"
                }
            ]
        });
    }
}

export default ngChartController;
