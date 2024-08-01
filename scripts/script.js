document.getElementById('inputText').addEventListener('input', function() {
    this.value = this.value.toLowerCase().replace(/[^a-z\s]/g, '');
});

// Función para encriptar el texto según las reglas dadas
function encryptText() {
    // Obtiene el texto del área de texto de entrada
    let text = document.getElementById('inputText').value;
    // Realiza las sustituciones de encriptación
    let encryptedText = text
        .replace(/e/g, 'enter')   // Reemplaza 'e' por 'enter'
        .replace(/i/g, 'imes')    // Reemplaza 'i' por 'imes'
        .replace(/a/g, 'ai')      // Reemplaza 'a' por 'ai'
        .replace(/o/g, 'ober')    // Reemplaza 'o' por 'ober'
        .replace(/u/g, 'ufat');   // Reemplaza 'u' por 'ufat'
    // Muestra el texto encriptado en el área de texto de salida
    document.getElementById('outputText').value = encryptedText;
    // Actualiza la imagen de fondo y el botón de copiar
    updatePlaceholder();
}

// Función para desencriptar el texto según las reglas dadas
function decryptText() {
    // Obtiene el texto del área de texto de entrada
    let text = document.getElementById('inputText').value;
    // Realiza las sustituciones de desencriptación
    let decryptedText = text
        .replace(/enter/g, 'e')   // Reemplaza 'enter' por 'e'
        .replace(/imes/g, 'i')    // Reemplaza 'imes' por 'i'
        .replace(/ai/g, 'a')      // Reemplaza 'ai' por 'a'
        .replace(/ober/g, 'o')    // Reemplaza 'ober' por 'o'
        .replace(/ufat/g, 'u');   // Reemplaza 'ufat' por 'u'
    // Muestra el texto desencriptado en el área de texto de salida
    document.getElementById('outputText').value = decryptedText;
    // Actualiza la imagen de fondo y el botón de copiar
    updatePlaceholder();
}

// Función para copiar el texto del área de salida al portapapeles
function copyToClipboard() {
    // Obtiene el área de texto de salida
    let text = document.getElementById('outputText');
    // Selecciona el texto dentro del área de texto
    text.select();
    text.setSelectionRange(0, 99999); // Para dispositivos móviles
    // Ejecuta el comando de copiar al portapapeles
    document.execCommand('copy');
    // Muestra una alerta indicando que el texto ha sido copiado
    alert('Texto copiado al portapapeles');
}

// Función para actualizar la imagen de fondo en el área de texto de salida
function updatePlaceholder() {
    let outputText = document.getElementById('outputText');
    let placeholderText = document.querySelector('.placeholder-text');
    let btn__copiar = document.getElementById('btn__copiar');

    if (outputText.value === '') {
        outputText.classList.add('with-placeholder');
        placeholderText.style.display = 'block';
        btn__copiar.style.display = 'none';
    } else {
        outputText.classList.remove('with-placeholder');
        placeholderText.style.display = 'none';
        btn__copiar.style.display = 'block';
    }
}

// Inicializa la imagen de fondo en el área de texto de salida
updatePlaceholder();
