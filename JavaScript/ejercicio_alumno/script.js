alumnos_json = JSON.parse(alumnos);
let lista = "";
for (let i = 0; i < alumnos_json.length;i++){
    lista = "<p>" + alumnos_json[i].nombre + "<span>" + 
    alumnos_json[i].apellido + "</span>" + "<span>" + 
    alumnos_json[i].dni + "</span>" + "<span>" + 
    alumnos_json[i].fecha_nacimiento + "</span>" + 
}