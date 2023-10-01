const express = require ("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database:"empleados"
});

app.post("/create", (req,res)=>{
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const cargo = req.body.cargo;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const direccion = req.body.direccion;
    const nacimiento = req.body.nacimiento;

    db.query('INSERT INTO empleados(nombres,apellidos,cargo,telefono,correo,direccion,nacimiento) VALUES(?,?,?,?,?,?,?)', [nombres, apellidos, cargo, telefono, correo, direccion, nacimiento],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Empleado guardado con exito");
        }
    }
    );
});

app.get("/empleados", (req,res)=>{
     db.query('SELECT * FROM empleados',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.put("/update", (req,res)=>{
    const id = req.body.id;
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const cargo = req.body.cargo;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const direccion = req.body.direccion;
    const nacimiento = req.body.nacimiento;

    db.query('UPDATE empleados SET nombres=?,apellidos=?,cargo=?,telefono=?,correo=?,direccion=?,nacimiento=? WHERE id=?', [nombres, apellidos, cargo, telefono, correo, direccion, nacimiento, id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Empleado actualizado con exito");
        }
    }
    );
});

app.listen (3001,()=>{
    console.log("Corriendo puerto 3001")
})