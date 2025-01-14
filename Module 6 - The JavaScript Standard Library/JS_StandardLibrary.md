# The JavaScript Standard

JavaScript provides a rich standard library that empowers developers to work with data structures, patterns, APIs, and more. Here's an overview of key concepts and tools.

---

## Sets and Maps
### Sets
- A `Set` is a collection of unique values.
- Example:

```javascript
let set = new Set([1, 2, 3, 3]);
console.log(set); // Set(3) {1, 2, 3}
```
- Common methods: `add()`, `delete()`, `has()`, `clear()`.

### Maps
- A `Map` is a collection of key-value pairs.
- Example:

```javascript
let map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // 'value'
```
- Common methods: `set()`, `get()`, `delete()`, `has()`, `clear()`.

---

## Typed Arrays and Binary Data
Typed arrays provide efficient handling of binary data.
- Example:

```javascript
let buffer = new ArrayBuffer(16);
let int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // 42
```
- Key classes: `ArrayBuffer`, `Uint8Array`, `Float32Array`.

---

## Pattern Matching with Regular Expressions
Regular expressions are powerful tools for pattern matching and string manipulation.
- Example:

```javascript
let regex = /\d+/g;
let matches = '123 abc 456'.match(regex);
console.log(matches); // ['123', '456']
```
- Flags: `g` (global), `i` (case-insensitive), `m` (multiline).

---

## Dates and Times
The `Date` object handles date and time.
- Example:

```javascript
let now = new Date();
console.log(now.toISOString());
```
- Methods: `getFullYear()`, `getMonth()`, `getDate()`, `getTime()`.

---

## Error Classes
Custom error classes extend JavaScript's built-in error handling.
- Example:

```javascript
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}
throw new CustomError('Something went wrong');
```

---

## JSON Serialization and Parsing
Convert data to/from JSON format.
- Example:

```javascript
let obj = { key: 'value' };
let json = JSON.stringify(obj);
console.log(JSON.parse(json));
```

---

## The Internationalization API
Format numbers, dates, and strings for international contexts.
- Example:

```javascript
let number = 123456.789;
let formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
console.log(formatted); // $123,456.79
```

---

## The Console API
Provides tools for debugging and logging.
- Example:

```javascript
console.log('Log message');
console.warn('Warning message');
console.error('Error message');
```

---

## URL APIs
Manipulate URLs programmatically.
- Example:

```javascript
let url = new URL('https://example.com?key=value');
console.log(url.searchParams.get('key')); // 'value'
```

---

## Timers
Execute code after a delay or repeatedly.
- Example:

```javascript
setTimeout(() => console.log('Hello after 1 second'), 1000);
let interval = setInterval(() => console.log('Repeating every second'), 1000);
clearInterval(interval);
```

---

With these tools, JavaScript provides robust capabilities for building modern web applications.

