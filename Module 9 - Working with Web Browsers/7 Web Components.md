# Web Components
Create reusable and encapsulated HTML elements using Web Components:
- Define custom elements:

```javascript
class MyElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<p>Custom Element Content</p>';
    }
}
customElements.define('my-element', MyElement);
```

---