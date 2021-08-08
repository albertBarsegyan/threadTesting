let counter = 1;
let interval = false;
self.onmessage = function (e) {
  if (e.data === 'start') {
    if (!interval) {
      interval = setInterval(() => {
        postMessage(counter);
        counter++;
      }, 100);
      return;
    }
    interval = true;
  }
  if (e.data === 'stop') {
    clearInterval(interval);
    postMessage('stopped');
    counter = 1;
    interval = false;
  }
};
