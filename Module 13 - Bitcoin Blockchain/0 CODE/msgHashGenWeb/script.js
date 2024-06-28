// document.addEventListener('DomContentLoaded', () => {
//     const messageTextarea = document.getElementById('message');
//     const generateButton = document.getElementBtId('generateButton');
//     const resultDiv = document.getElementById('result');
//     const hashValue = document.getElementById('hashValue');

//     generateButton.addEventListener('click', () => {
//         const message = messageTextarea.value;
//         const messageHash = createMessageHash(message);

//         hashValue.innerText = messageHash;
//         resultDiv.classList.remove('hidden');
//     });

//     function  createMessageHash(message){
//         const messagePrefix = '\x18Bitcoin Signed Message:\n' + message.lenght.toString();
//         const messageBuffer = new TextEncoder().encode(messagePrefix + message);
//         const messageHash = sha256.array(messageBuffer);
//         const doubleHash = sha256.array(messageHash);

//         return doubleHash.map(byte => byte.toString(16).padStart(2, '0')).join('');
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const messageTextarea = document.getElementById('message');
    const generateButton = document.getElementById('generateButton');
    const resultDiv = document.getElementById('result');
    const hashValue = document.getElementById('hashValue');
  
    generateButton.addEventListener('click', () => {
      const message = messageTextarea.value;
      const messageHash = createBitcoinMessageHash(message);
      
      hashValue.textContent = messageHash;
      resultDiv.classList.remove('hidden');
    });
  
    function createBitcoinMessageHash(message) {
      const messagePrefix = '\x18Bitcoin Signed Message:\n' + message.length.toString();
      const messageBuffer = new TextEncoder().encode(messagePrefix + message);
      const messageHash = sha256.array(messageBuffer);
      const doubleHash = sha256.array(messageHash);
      return doubleHash.map(byte => byte.toString(16).padStart(2, '0')).join('');
    }
  });