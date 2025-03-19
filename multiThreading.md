# Node.js Worker Threads (`worker_threads`)

The `worker_threads` module in Node.js allows running JavaScript in parallel across multiple threads. It is useful for offloading CPU-intensive tasks from the main thread.

---

## 1. `Worker`
The `Worker` class is used to create new worker threads.

### Syntax:
```js
import { Worker } from 'worker_threads';
```

### Creating a Worker:
```js
import { Worker } from 'worker_threads';

const worker = new Worker('./worker.js'); // Runs 'worker.js' in a separate thread
```

### Worker Options:
```js
const worker = new Worker('./worker.js', {
  workerData: { message: 'Hello from Main Thread' } // Send initial data to worker
});
```

### Handling Worker Messages:
```js
worker.on('message', (data) => {
  console.log('Received from worker:', data);
});

worker.postMessage('Hello, Worker!'); // Send data to worker
```

---

## 2. `isMainThread`
The `isMainThread` constant is a boolean that determines whether the current script is running in the **main thread** or a **worker thread**.

### Example Usage:
```js
import { isMainThread } from 'worker_threads';

if (isMainThread) {
  console.log('This code is running in the main thread.');
} else {
  console.log('This code is running inside a worker thread.');
}
```

---

## 3. `parentPort`
The `parentPort` object is used to communicate between the main thread and the worker thread.

### Receiving Data in Worker:
```js
import { parentPort } from 'worker_threads';

parentPort.on('message', (data) => {
  console.log('Worker received:', data);
  parentPort.postMessage('Hello from Worker!'); // Send message back to main thread
});
```

---

## Full Example

### **Main Thread (`main.js`)**
```js
import { Worker } from 'worker_threads';

const worker = new Worker('./worker.js');

worker.on('message', (data) => {
  console.log('Main thread received:', data);
});

worker.postMessage('Hello Worker!');
```

### **Worker Thread (`worker.js`)**
```js
import { parentPort } from 'worker_threads';

parentPort.on('message', (data) => {
  console.log('Worker received:', data);
  parentPort.postMessage('Hello from Worker!');
});
```

---

## Summary
| Feature        | Purpose |
|---------------|---------|
| `Worker`      | Creates a new worker thread |
| `isMainThread` | Checks if the code is running in the main thread |
| `parentPort`  | Enables communication between the main thread and worker thread |

---

**Use `worker_threads` for better performance in CPU-intensive tasks! 🚀**
