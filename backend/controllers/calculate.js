const { data } = require("../data/data");

const calculate = async (req, res) => {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var problem = req.body.problem;
    console.log(problem, height, weight);
    var bmi_val = weight / (height * height);

    if (problem == "none") {
        res.json({ bmi: Math.round(bmi_val), problem: "nan" });
    } else {
        var arr = data[problem];
        var index = Math.floor(Math.random() * arr.length);

        res.json({
            bmi: Math.round(bmi_val),
            problem: arr[index],
        });
    }
};

module.exports = { calculate };
