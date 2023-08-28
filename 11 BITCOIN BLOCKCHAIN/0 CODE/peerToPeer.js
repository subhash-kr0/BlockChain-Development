const Blockchain = function() {
    this.chain = [];
    this.nodes = [];
  
    this.addBlock = function(block) {
      this.chain.push(block);
      this.broadcastBlock(block);
    };
  
    this.broadcastBlock = function(block) {
      for (const node of this.nodes) {
        node.receiveBlock(block);
      }
    };
  
    this.addNode = function(node) {
      this.nodes.push(node);
    };
  };
  
  const Node = function(host, port) {
    this.host = host;
    this.port = port;
    this.blockchain = new Blockchain();
  
    this.connect = function() {
      const socket = new WebSocket(`ws://${this.host}:${this.port}`);
  
      socket.onopen = () => {
        console.log(`Connected to ${this.host}:${this.port}`);
      };
  
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
  
        if (data.type === "block") {
          this.blockchain.addBlock(data.block);
        }
      };
    };
  
    this.receiveBlock = function(block) {
      this.blockchain.addBlock(block);
    };
  };
  
  const node1 = new Node("localhost", 8080);
  const node2 = new Node("localhost", 8081);
  
  node1.connect();
  node2.connect();
  
  node1.blockchain.addBlock({
    data: "This is the first block",
  });
  