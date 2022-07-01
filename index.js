const express = require('express');


// crear el servidor de express

const app = express();


//Rutas

app.get('/', (req, res)=>{
    
    res.json({
        ok:true,
        msg:'todo corecto'
    })
});

app.listen(3000, ()=>{
    console.log('servidor corriendo en el puerto '+ 3000);
})
