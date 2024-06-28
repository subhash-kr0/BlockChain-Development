class Transaction {
    constructor(sender, recipient, amount) {
        this.sender = sender;
        this.recipient = recipient;
        this.amount = amount;
    }
}

class UTXO {
    constructor(txHash, outputIndex, amount) {
        this.txHash = txHash;
        this.outputIndex = outputIndex;
        this.amount = amount;
    }
}

class UTXOSet {

    addUTXO(txHash, outputIndex, amount) {
        const utxo = new UTXO(txHash, outputIndex, amount);
        this.utxos.push(utxo);
    }

    getUTXOForAddress(address) {
        return this.utxos.filter(utxo => utxo.address === address);
    }

    spendUTXO(utxo) {
        const index = this.utxos.indexOf(utxo);
        if (index !== -1) {
            this.utxos.splice(index, 1);
        }
    }
}

// Example usage
const utxoSet = new UTXOSet();

// Create some transactions and add UTXOs
// const tx1 = new Transaction('address1', 'address2', 5);
// utxoSet.addUTXO('tx1Hash', 0, 5);

// const tx2 = new Transaction('address2', 'address3', 3);
// utxoSet.addUTXO('tx2Hash', 0, 3);

// const tx3 = new Transaction('address1', 'address2', 2);
// utxoSet.addUTXO('tx3Hash', 0, 2);


// Adding UTXOs
utxoSet.addUTXO('tx1Hash', 0, 5);
utxoSet.addUTXO('tx2Hash', 0, 3);
utxoSet.addUTXO('tx3Hash', 0, 2);

// Retrieve UTXOs for an address
const address2UTXOs = utxoSet.getUTXOsForAddress('address2');
console.log('UTXOs for address2:', address2UTXOs);

// Spend a UTXO
const utxoToSpend = address2UTXOs[0];
utxoSet.spendUTXO(utxoToSpend);

console.log('Remaining UTXOs:', utxoSet.utxos);
