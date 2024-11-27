const express = require("express");
const formidable = require("formidable");
const app = express();

app.get('/',(req,res)=>{
    res.render('main')
})
app.post('/upload',(req,res)=>{
    let form = formidable.IncomingForm()

    form.parse(req,(err,fields,file)=>{
        if (err) {
            console.error("Error al procesar el archivo:", err);
            return res.status(500).send("Error al procesar el archivo.");
        }
        res.send("Archivo subido con éxito");
    })
    form.on('fileBegin',(name,file)=>{
        file.path='./files/' + file.name
    })
    form.on('file',(name,file)=>{
        console.log('Archivo subido')
    })
})

app.listen(4000,()=>{
    console.log('Server running on 4000 port')
})