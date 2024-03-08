window.addEventListener("load", init, false);

function init() {
  counter = 1;
}

function startWorker() {
  createProgress();

  try {
    let worker = new Worker("Worker.js");
    worker.addEventListener("message", updates, false);
    worker.postMessage(counter);
    counter++;
  } catch (e) {
    console.error("Error: " + e);
  }
}


function createProgress() {
  let workerDesk = document.getElementById("workerDesk");
  let workerName = "progress-" + counter;
  let labelID = "title-" + counter;

  let worker = document.createElement("div");
  worker.setAttribute("class", "worker");

  let title = document.createElement("p");
  title.setAttribute("id", labelID);
  title.innerHTML = workerName + " (0%)";
  worker.appendChild(title);


  let progress = document.createElement("progress");
  progress.setAttribute("id", workerName);
  progress.setAttribute("value", "0");
  progress.setAttribute("max", "100");
  worker.appendChild(progress);

  workerDesk.appendChild(worker);
}

function updates(e) {
  let response = JSON.parse(e.data);
  let progress = document.getElementById("progress-" + response.workerName);
  progress.value = response.progress;

  var title = document.getElementById("title-" + response.workerName);
  title.innerHTML = "Worker-" + response.workerName + " (" + response.progress + "%)";
}