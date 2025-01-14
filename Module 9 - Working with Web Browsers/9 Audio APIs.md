# Audio APIs
Work with audio content programmatically using the Web Audio API:
- Play audio:

```javascript
let audio = new Audio('file.mp3');
audio.play();
```
- Create audio effects and visualizations:

```javascript
let context = new (window.AudioContext || window.webkitAudioContext)();
```

---