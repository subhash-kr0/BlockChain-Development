import hashlib
import time

class Block:
    def __init__(self, index, previous_hash, transactions, timestamp):
        self.index = index
        self.previous_hash = previous_hash
        self.transactions = transactions
        self.timestamp = timestamp
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        """Calculates the hash of the block."""
        block_data = str(self.index) + str(self.previous_hash) + str(self.transactions) + str(self.timestamp)
        hash_object = hashlib.sha256()
        hash_object.update(block_data.encode('utf-8'))
        return hash_object.hexdigest()

class Blockchain:
    def __init__(self):
        self.chain = []
        self.genesis_block = Block(0, '0', [], time.time())
        self.chain.append(self.genesis_block)

    def add_block(self, transactions):
        """Adds a block to the blockchain."""
        new_block = Block(len(self.chain), self.chain[-1].hash, transactions, time.time())
        self.chain.append(new_block)

    def get_latest_block(self):
        """Returns the latest block in the blockchain."""
        return self.chain[-1]

    def is_valid(self):
        """Checks if the blockchain is valid."""
        for i in range(1, len(self.chain)):
            current_block = self.chain[i]
            previous_block = self.chain[i - 1]
            if current_block.previous_hash != previous_block.hash:
                return False
            if not current_block.calculate_hash() == current_block.hash:
                return False
        return True
    
    def print_blockchain(self):
        """Prints the blockchain."""
        for block in self.chain:
            print('Block #', block.index)
            print('Previous Hash:', block.previous_hash)
            print('Transactions:', block.transactions)
            print('Timestamp:', block.timestamp)
            print('Hash:', block.hash)
            print()

if __name__ == '__main__':
    blockchain = Blockchain()
    blockchain.add_block([('Alice', 'Bob', 10)])
    blockchain.add_block([('Bob', 'Carol', 20)])

    print('The latest block is:')
    print(blockchain.get_latest_block())

    print('The blockchain is valid:', blockchain.is_valid())

    print('The blockchain:')
    blockchain.print_blockchain()