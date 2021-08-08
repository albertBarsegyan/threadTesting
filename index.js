const firstThread = new Worker('/threads/firstThread.js');
const showDataPlace = document.querySelector('#showData');
const stopCounter = document.querySelector('#stopCounter');
const startCounter = document.querySelector('#startCounter');
stopCounter.addEventListener('click', (e) => {
  firstThread.postMessage('stop');
  firstThread.onmessage = (e) => {
    showDataPlace.innerText = `${e.data}`;
  };
});
startCounter.addEventListener('click', (e) => {
  firstThread.postMessage('start');
  firstThread.onmessage = (e) => {
    showDataPlace.innerText = `${e.data}`;
  };
});
