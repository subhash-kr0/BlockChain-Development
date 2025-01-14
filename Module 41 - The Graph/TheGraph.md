# The Graph

## The Graph Protocol
The Graph is a decentralized indexing protocol designed for querying blockchain data. It enables developers to build and deploy subgraphs, which are open APIs for querying data from blockchains like Ethereum. By using The Graph, applications can retrieve blockchain data efficiently and reliably without building custom backends.

### Key Features:
- **Decentralized Data Indexing**: Uses a decentralized network of nodes to index blockchain data.
- **Subgraphs**: Custom APIs that define how data is indexed and queried.
- **Interoperability**: Supports multiple blockchains and is extensible to new ones.

---

## The Graph Architecture
The Graph architecture consists of several components working together to index and query blockchain data:
1. **Smart Contracts**:
   - Deployed on the blockchain to manage protocol rules and coordination.
2. **Subgraph Manifest**:
   - Defines data sources, event handlers, and mappings.
3. **Indexing Nodes**:
   - Nodes that read data from the blockchain and process it according to subgraph definitions.
4. **GraphQL API**:
   - Provides an interface for querying the indexed data.

---

## Edge and Node
### Edge:
- The front-facing API layer of The Graph that serves user queries.

### Node:
- The infrastructure layer that indexes blockchain data and processes subgraph definitions.
- Acts as the backbone of The Graph protocol, maintaining decentralized functionality.

---

## Everest Registry
The Everest Registry is a decentralized registry system used within The Graph. It ensures that all deployed subgraphs and their associated metadata are publicly accessible and immutable.

---

## Graph Protocol
The Graph Protocol enables decentralized applications (dApps) to retrieve blockchain data seamlessly by defining and deploying subgraphs.

### Key Roles in the Ecosystem:
- **Indexers**: Nodes that index data for subgraphs.
- **Curators**: Signal the importance of subgraphs by staking GRT tokens.
- **Delegators**: Delegate GRT to indexers to earn rewards.
- **Consumers**: Applications that query data from the decentralized network.

---

## The Graph vs Etherscan
| Feature          | The Graph                          | Etherscan                   |
|------------------|------------------------------------|-----------------------------|
| **Purpose**      | Decentralized data indexing/querying | Centralized blockchain explorer |
| **Customization**| Customizable subgraphs             | Predefined queries          |
| **API Access**   | Open and decentralized APIs        | Limited to centralized APIs |
| **Scalability**  | Extensible across blockchains      | Limited to Ethereum         |

---

## Graph-cli Installation
The `graph-cli` is a command-line interface tool used to manage subgraphs.

### Installation:
```bash
npm install -g @graphprotocol/graph-cli
```

---

## Creating New Subgraphs
A subgraph is a definition of how blockchain data should be indexed and queried.

### Steps:
1. **Initialize**:
   ```bash
   graph init --from-contract <CONTRACT_ADDRESS> <SUBGRAPH_NAME>
   ```
   - Replace `<CONTRACT_ADDRESS>` with the deployed smart contract address.
   - Replace `<SUBGRAPH_NAME>` with your desired subgraph name.

2. **Define Data Sources**:
   - Specify contracts, event handlers, and data mappings in `subgraph.yaml`.

---

## Writing Subgraphs
Subgraphs are defined using a combination of:
1. **YAML Configuration (`subgraph.yaml`)**:
   - Specifies data sources and their relationships.
2. **Mapping Functions**:
   - Written in AssemblyScript to transform blockchain data.

### Example Mapping:
```typescript
export function handleEvent(event: EventName): void {
    let entity = new Entity(event.params.id.toString());
    entity.field = event.params.value;
    entity.save();
}
```

---

## Publishing a Subgraph to the Decentralized Network
After defining and testing your subgraph, you can publish it to the decentralized network.

### Steps:
1. **Authenticate**:
   ```bash
   graph auth --product hosted-service <ACCESS_TOKEN>
   ```

2. **Deploy**:
   ```bash
   graph deploy --product hosted-service <SUBGRAPH_NAME>
   ```

3. **Verify**:
   - Check the status of your subgraph on the decentralized network dashboard.

With The Graph, developers can build powerful dApps that leverage efficient and reliable data indexing and querying, paving the way for the next generation of decentralized applications.

