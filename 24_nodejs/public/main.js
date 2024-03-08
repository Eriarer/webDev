var socket = io.connect("http://localhost:8080", { forceNew: true });

socket.on("messages", function (data) {
  console.log(data);
  render(data);
});

function render(data) {
  var html = data
    .map(function (elem, index) {
      return `<div class="card">
                <div class="p-2">
                  <h6 class="card-title">${elem.author}</h6>
                  <p class="card-text">${elem.text}</p>
                </div>
              </div>`;
    }).join(" ");

  let mesages = document.getElementById("messages");
  // al elemento de messages hacer scroll down automaticamente si hay overflow
  // y el usuario no ha hecho scroll up
  if (mesages.scrollHeight > mesages.clientHeight && mesages.scrollTop === messages.scrollHeight - messages.clientHeight) {
    mesages.innerHTML = html;
    mesages.scrollTop = mesages.scrollHeight - mesages.clientHeight;
  } else {
    mesages.innerHTML = html;
  }
}

function addMessage(e) {
  var message = {
    author: document.getElementById("username").value,
    text: document.getElementById("texto").value,
  };

  socket.emit("new-message", message);
  return false;
}