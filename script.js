const valorInput = () =>{
    let input = document.getElementById("input_dino");
    let valor = input.value;
    Api(valor)
}

const Api = (dinosaurio) =>{
    const base= "https://dinoapi.brunosouzadev.com";
    const endpoint = `/api/dinosaurs/${dinosaurio}`;
    const url = `${base}${endpoint}`;
    axios.get(url)
    .then(res => printData(res.data))
    .catch(err => printData(err))
}

const printData = (data) =>{
    let img = document.getElementById('imagen');
    img.innerHTML = `
    <img src="${data[0]['image']}" id="imagen"/>
    `
    let datos = document.getElementById('datos');
    datos.innerHTML =`
    <h3>height: ${data[0]["height"]} weight: ${data[0]["weight"]} length: ${data[0]["length"]} diet: ${data[0]["diet"]}</h3> 
    <h3>existed: ${data[0]["existed"]} Type: ${data[0]["type"]}</h3>
    `
    let informacion = document.getElementById('informacion');
    informacion.innerHTML =`
    <h5>${data[0]["description"]}</h5>
    `
}

