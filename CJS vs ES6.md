## CommonJS Modules (CJS)

- **Synchronous**
- **File extension is optional** → `script.cjs`, `script.apk`, `script.mp4`, etc.
- Uses `require()` to import modules
- Uses `module.exports` to export modules
- **Default in Node.js**
- In CJS, `this` keyword points to `module.exports`
- `require()` is executed **at runtime**, in order as the code is encountered
- **Top-Level `await` is NOT allowed in CommonJS**
  - ["Top-level" means outside of any function.]
- In CommonJS (CJS), `module.exports` can only export **one value** (an object, function, or class)
  - This is because `require()` returns only one value (not multiple)
- **Strict mode is NOT enabled by default**
- In CommonJS (CJS), you can use `__filename` and `__dirname` to get the current file path and directory path

---

## ES6 Modules (ESM)

- **Asynchronous**
- **File extension is mandatory** → `.mjs` OR `.js` (with `"type": "module"` in `package.json`)
- Uses `import` to import modules
- Uses `export` or `export default` to export modules
- **Supported in modern Node.js & browsers**
- In ESM, `this` keyword is **undefined**
- **Import statements are hoisted** and processed **before any code execution**
  - `require()` is **not hoisted**
- **Top-Level `await` is supported** in ESM
  - You can use `await` directly at the top level of a module without wrapping it inside an `async` function
- In ES6 Modules, you can use **named exports** to export **multiple values separately**
  - This is because `import` works differently—it allows multiple imports
- **Strict mode is enabled by default**
- In ES6, `import.meta.filename` and `import.meta.dirname` can be used to get the current file and directory path

---

## Key Code Example

```js
// All import statements are processed first
// The import statement in ES6 looks similar to object destructuring, but it is not the same

console.log('hello from app');
import hello from './index.js';
import helloo, { user1 } from './script.js';

console.log(user1);
```

