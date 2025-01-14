# The Graph Networking

## Introduction to Indexers
Indexers are key participants in The Graph network. They operate nodes to index and serve data for subgraphs. Indexers earn query fees and indexing rewards by providing these services in a decentralized manner.

### Key Responsibilities:
1. Index subgraph data.
2. Serve queries efficiently.
3. Stake GRT tokens as collateral.

---

## Revenue Streams
Indexers earn revenue through:
1. **Query Fees**: Paid by consumers for accessing indexed data.
2. **Indexing Rewards**: Distributed by the protocol for maintaining and indexing subgraphs.
3. **Delegation Fees**: A portion of the rewards earned from delegators' staked tokens.

---

## Distribution
Revenue distribution in The Graph network:
- **Indexers**: Receive the majority share of query fees and indexing rewards.
- **Curators**: Earn a portion of the query fees based on their signaled subgraphs.
- **Delegators**: Earn a share of the indexing rewards proportional to their delegated stake.

---

## Allocation Life Cycles
Allocation life cycles define how indexers manage their staked tokens and allocate resources to subgraphs.

### Steps:
1. **Open Allocation**: Indexers signal the allocation of resources to a specific subgraph.
2. **Serve Queries**: Provide query services for the allocated subgraph.
3. **Close Allocation**: Claim indexing rewards after serving queries.
4. **Reallocate**: Move resources to other subgraphs if needed.

---

## Querying and Indexing Subgraphs
The Graph enables efficient querying and indexing of blockchain data through:

### Querying:
- Use the GraphQL API to retrieve specific data.
- Queries are resolved by indexers based on the indexed subgraph.

### Indexing:
- Data from blockchain events is indexed according to subgraph definitions.
- Indexers process mappings to store data in a queryable format.

---

## IPFS Hash Converter
IPFS (InterPlanetary File System) is used in The Graph to store subgraph metadata. The IPFS hash is a unique identifier for files stored on the network.

### Conversion Steps:
1. **Base58 to Base32**:
   - Convert IPFS hashes from Base58 to Base32 for compatibility.

2. **Example Command**:
   ```bash
   ipfs cid base32 <BASE58_HASH>
   ```

3. **Usage**:
   - The converted hash is used to reference subgraph files stored on IPFS.

---

By integrating indexers, efficient querying, and IPFS-based storage, The Graph network provides a robust infrastructure for decentralized data indexing and retrieval.

