//Principal para el funcionamiento del  main

//Idea principal:
//Barra de busqueda tiene que mostrar algo parecido a esto (Search:) y cuando se pinche que canbie a (ej: monstruo/nombremounstruo) 
// y que printee los nombres parecidos

//Segunda idea 
//Barra lateral que sea como un nav con un menu con hover para que cuando se pase el maouse 
//pase un gradiente de color naranja amarillo  parecido a los colores de juegecito de mierda


//Tercera idea de mierda en el footer
//un div con nuestro nombre que ponga que hemos hecho con el logo
//tipo Jesus Moreno Logo HTML5 CSS3 JS
//Filli Logo HTML5 CSS3 nodejs
//y asi pero que sea un div que se va moviendo de normal tipo timeout 2000ms o que se pueda moverer 
//manteniendo el click


const PORT = 3000;
const coleccion = "Monstruos";
const habitat = document.getElementById("monster_main");

function mostrarMonstruos() {
    habitat.innerHTML = "";
    fetch(`http://localhost:${PORT}/monstruos`)
        .then(response => response.json())
        .then(data => {
            let ocupa = document.getElementById("monster_container");
            ocupa.innerHTML = data.map(monstruo => {
                return `<div class="tarjeta-normal">
                    <h1>${monstruo.name}</h1>
                    <div>
                        <img src="" alt="${monstruo.name}">
                    </div>
                    <div>
                        <th>Clasificacion</th>
                        <td>${monstruo.species}</td>
                    </div>
                    <div>
                        <th>${monstruo.elemonts}</th>
                        <td>tipo-elementos</td>
                    </div>
                    <div>
                        <p>${monstruo.description}</p>
                    </div>
                </div>`;
            }).join('');
        });
}

mostrarMonstruos();
