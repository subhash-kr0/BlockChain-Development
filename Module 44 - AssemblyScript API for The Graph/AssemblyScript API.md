# AssemblyScript API for The Graph

## Installing AssemblyScript API
To use AssemblyScript with The Graph, install the required dependencies:

### Steps:
1. Add AssemblyScript dependencies to your project:
   ```bash
   yarn add --dev @graphprotocol/graph-ts
   ```
2. Ensure your `subgraph.yaml` file references the correct AssemblyScript mapping handlers.

---

## API Reference
The AssemblyScript API for The Graph provides modules to interact with blockchain data and IPFS.

### Key Modules:
- Store API
- Ethereum API
- Logging API
- IPFS API
- Crypto API
- JSON API

---

## Versions
Versioning is critical to ensure compatibility with The Graph protocol.
- Use the latest stable version of `@graphprotocol/graph-ts`.
- Check the changelog for breaking changes.

### Example:
```bash
yarn add --dev @graphprotocol/graph-ts@<version>
```

---

## Built-in Types
AssemblyScript provides several built-in types for handling data:
- `BigInt`
- `Bytes`
- `Address`
- `Array`
- `TypedMap`
- `Entity`

---

## Store API
The Store API allows reading and writing entities in the subgraph:

### Writing Entities:
```typescript
let user = new User("1");
user.name = "Alice";
user.save();
```

### Reading Entities:
```typescript
let user = User.load("1");
if (user) {
  log.info("User name: {}", [user.name]);
}
```

---

## Ethereum API
The Ethereum API provides utilities to interact with Ethereum smart contracts and blockchain data:

### Example:
```typescript
import { ethereum } from "@graphprotocol/graph-ts";

function handleEvent(event: ethereum.Event): void {
  let txHash = event.transaction.hash;
  log.info("Transaction hash: {}", [txHash.toHex()]);
}
```

---

## Logging API
The Logging API enables developers to add logs for debugging:

### Example:
```typescript
import { log } from "@graphprotocol/graph-ts";

log.info("Entity saved: {}", [entity.id]);
```

---

## IPFS API
The IPFS API provides methods for retrieving and manipulating data stored on IPFS:

### Example:
```typescript
import { ipfs } from "@graphprotocol/graph-ts";

let data = ipfs.cat("<CID>");
if (data) {
  log.info("Data from IPFS: {}", [data.toString()]);
}
```

---

## Crypto API
The Crypto API offers cryptographic utilities:

### Example:
```typescript
import { crypto, ByteArray } from "@graphprotocol/graph-ts";

let hash = crypto.keccak256(ByteArray.fromUTF8("data"));
log.info("Hash: {}", [hash.toHex()]);
```

---

## JSON API
The JSON API enables parsing and generating JSON data:

### Example:
```typescript
import { json } from "@graphprotocol/graph-ts";

let value = json.fromString('{"key": "value"}');
log.info("Parsed JSON: {}", [value.toString()]);
```

---

## Type Conversions Reference
AssemblyScript provides utilities for type conversions:
- `toString`
- `toHex`
- `fromString`

### Example:
```typescript
let address = Address.fromString("0x123...");
log.info("Address: {}", [address.toHex()]);
```

---

## Data Source Metadata
Data source metadata includes information about the context and state of the data source:

### Example:
```typescript
import { dataSource } from "@graphprotocol/graph-ts";

let network = dataSource.network();
log.info("Network: {}", [network]);
```

---

## Entity and DataSourceContext
Entities are the main way to store data, while `DataSourceContext` provides metadata for specific data sources.

### Example:
```typescript
import { DataSourceContext } from "@graphprotocol/graph-ts";

let context = new DataSourceContext();
context.set("key", "value");

log.info("Context value: {}", [context.get("key")]);
```

