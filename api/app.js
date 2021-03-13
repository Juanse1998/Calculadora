var express = require("express");
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express()

app.use(bodyParser.json())
app.use(cors({origin: true, credentials: true}));const model = require('../api/model/model');
console.log('%s listening at 8000');

app.post("/:num1/:num2/:ope", function(req, res){
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const operacion = req.params.ope;
  if(!num1 || !num2) {
    res.status(404).json({msg: "No ingreso algun dato"})
  } else {
    var result;
      switch (operacion) {
        case "suma":
          result = model.suma(num1, num2)
          res.status(200).json({result})
        break;
        case "resta":
          result = model.resta(num1, num2)
          res.status(200).json({result})
        break;
        case "dividir":
          result = model.dividir(num1, num2)
          res.status(200).json({result})
        break;
        case "mult":
          result = model.mult(num1, num2)
          res.status(200).json({result})
        break;
        default:
          res.status(404).json({msg: "Error"})
        break;
      }
    }
})

app.listen(8000)

