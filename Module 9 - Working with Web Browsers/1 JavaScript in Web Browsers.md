# JavaScript in the Web Browser

JavaScript enables developers to create interactive and dynamic web applications. Here's a guide to using JavaScript effectively in the browser.

---

## Adding JavaScript to a Web Page

You can include JavaScript in your HTML document in two ways:

### Inline JavaScript
Write JavaScript code directly inside a `<script>` tag in the HTML file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Inline JavaScript Example</title>
</head>
<body>
    <h1>Welcome to JavaScript in the Browser</h1>
    <script>
        console.log('Hello, world!');
        alert('This is an inline JavaScript example!');
    </script>
</body>
</html>
```

---

### External JavaScript
Store JavaScript code in a separate file and link it to your HTML file.

#### `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>External JavaScript Example</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Welcome to External JavaScript Example</h1>
</body>
</html>
```

#### `script.js`:
```javascript
console.log('Hello from the external script!');
alert('This is an external JavaScript example!');
