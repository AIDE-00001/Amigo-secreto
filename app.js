// Arreglo para guardar los nombres
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar entrada vacía
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    // Agregar a la lista y limpiar el input
    listaAmigos.push(nombre);
    input.value = " ";

    // Actualizar visualmente la lista
    mostrarLista();
}

// Función para mostrar los amigos en la lista 
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = " "; // Limpiar lista antes de volver a renderizar

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Escoger un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
