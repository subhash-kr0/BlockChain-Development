# Location, Navigation, and History
Interact with browser navigation and user location:
- Use `navigator.geolocation` to fetch location:

```javascript
navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
});
```
- Manipulate browser history:

```javascript
history.pushState({}, 'Page 2', '/page2');
```

---