// Función para buscar hoteles
function buscarHoteles(ciudad, fechaEntrada, fechaSalida) {
    const resultados = datosHoteles.filter(hotel => 
        hotel.ciudad.toLowerCase() === ciudad.toLowerCase() &&
        hotel.fechaDisponible.includes(fechaEntrada) &&
        hotel.fechaDisponible.includes(fechaSalida)
    );

    return resultados.length > 0 ? resultados : "No se encontraron hoteles disponibles.";
}

// Simulación de datos de hoteles
const datosHoteles = [
    { nombre: "Hotel Costa Azul", ciudad: "Viña del Mar", fechaDisponible: ["2025-03-15", "2025-03-16", "2025-03-17"] },
    { nombre: "Hotel Sol y Mar", ciudad: "Santiago", fechaDisponible: ["2025-03-18", "2025-03-19", "2025-03-20"] },
];

// Ejemplo de uso
const ciudad = "Viña del Mar";
const fechaEntrada = "2025-03-15";
const fechaSalida = "2025-03-17";
console.log(buscarHoteles(ciudad, fechaEntrada, fechaSalida));