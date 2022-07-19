const express = require('express')
const app = express()

const dato = [
    {
    "CC_TINCID_CONT": 
              {
                "OID_INCID_CONT": "25e147a0-0a70-45b4-b792-8aa9e127863e",
                "OID_LINEA_CERT": "305bef5a-3509-4abb-9c69-f9d717c260d3",
                "COD_TIPO_INCIDENCIA": 26,
                "DES_TIPO_INCIDENCIA": "GE: ERROR DEL VERIFICADOR",
                "COD_DENOMINACION": 0,
                "DES_DENOMINACION": "0",
                "COD_PLANCHA": null,
                "NUM_SERIE": "",
                "NEL_CANTIDAD": "0",
                "DES_OBSDIV": "FALTANTE DE $4.424.750",
                "DES_DET_NOVEDAD": "",
                "BOL_FALTANTE": 0
              }
    }
    ]

app.get('/',function(req,res){
    res.send(dato)
})

app.listen(3000)