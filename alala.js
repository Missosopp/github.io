// Obtener elementos del DOM
const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const noteList = document.getElementById('note-list');

// Agregar evento de envío del formulario
noteForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar recargar la página

  const noteText = noteInput.value;
  if (noteText.trim() !== '') {
    createNoteElement(noteText);
    noteInput.value = ''; // Limpiar el campo de texto
  }
});

// Función para crear un nuevo elemento de nota
function createNoteElement(text) {
  const li = document.createElement('li');
  const textNode = document.createTextNode(text);
  li.appendChild(textNode);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Eliminar';
  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  const editButton = document.createElement('button');
  editButton.innerHTML = 'Editar';
  editButton.addEventListener('click', function() {
    const newText = prompt('Ingrese el nuevo texto de la nota');
    if (newText !== null && newText.trim() !== '') {
      textNode.nodeValue = newText;
    }
  });

  btnContainer.appendChild(deleteButton);
  btnContainer.appendChild(editButton);
  li.appendChild(btnContainer);

  noteList.appendChild(li);
}
