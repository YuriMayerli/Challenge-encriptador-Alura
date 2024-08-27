document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const copyButton = document.getElementById('copy-button');
    const inputText = document.getElementById('input_text');
    const sidebar = document.querySelector('.sidebar');
    const logo = document.getElementById('logo');

    const encryptText = (text) => {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    const decryptText = (text) => {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    const updateSidebar = (text) => {
        sidebar.innerHTML = `
            <p class="sidebar__texto2">${text}</p>
            <button id="copy-button">Copiar</button>
        `;
    };

    const resetSidebar = () => {
        sidebar.innerHTML = `
            <img class="sidebar_imagen" src="./assets/Muñeco.png">
            <h2><strong class="titulo_destaque">Ningún mensaje fue encontrado</strong></h2>
            <p class="sidebar_texto">Ingresa el texto que desees encriptar o desencriptar.</p>
            <button id="copy-button">Copiar</button>
        `;
        inputText.value = "";
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    };

    encryptButton.addEventListener('click', () => {
        const text = inputText.value;
        const encryptedText = encryptText(text);
        updateSidebar(encryptedText);
    });

    decryptButton.addEventListener('click', () => {
        const text = inputText.value;
        const decryptedText = decryptText(text);
        updateSidebar(decryptedText);
    });

    
    document.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'copy-button') {
            const text = sidebar.querySelector('.sidebar__texto2').textContent;
            copyToClipboard(text);
        }
    });

    logo.addEventListener('click', () => {
        resetSidebar();
    });
});
