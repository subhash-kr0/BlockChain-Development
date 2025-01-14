# GraphQL API

## Queries
GraphQL API allows users to fetch specific data using queries. Unlike REST APIs, GraphQL retrieves only the requested data, reducing over-fetching or under-fetching.

### Example:
```graphql
query {
  user(id: "1") {
    name
    email
  }
}
```

---

## Sorting
Sorting allows the data to be returned in a specific order.

### Example:
```graphql
query {
  posts(orderBy: createdAt, orderDirection: desc) {
    id
    title
    createdAt
  }
}
```

---

## Pagination
Pagination divides the data into manageable chunks.

### Example:
```graphql
query {
  posts(first: 10, skip: 10) {
    id
    title
  }
}
```

---

## Filtering
Filtering enables querying data based on specific conditions.

### Example:
```graphql
query {
  posts(where: { author: "0x123...", published: true }) {
    id
    title
  }
}
```

---

## Time-travel Queries
Time-travel queries allow fetching data from a specific block number or timestamp.

### Example:
```graphql
query {
  post(id: "1", block: { number: 123456 }) {
    id
    title
  }
}
```

---

## Fulltext Search Queries
Fulltext search enables querying based on keywords or phrases.

### Example:
```graphql
query {
  articles(where: { content_contains: "blockchain" }) {
    id
    title
  }
}
```

---

## Validation
GraphQL provides built-in validation to ensure that the queries conform to the schema.

---

## Schema
The schema defines the structure of data and queries available in the API. It is written in SDL (Schema Definition Language).

### Example:
```graphql
type User {
  id: ID!
  name: String!
  email: String!
}

type Query {
  user(id: ID!): User
}
```

---

## Entities
Entities are the data structures indexed by subgraphs. Each entity corresponds to a data type in the schema.

---

## Signalling
Signalling is done by curators to indicate the importance of subgraphs. Curators stake GRT tokens on subgraphs to show their quality and relevance.

---

## Curation
Curation ensures high-quality subgraphs are highlighted. Curators earn rewards based on the query fees generated by the subgraphs they signal.

---

## Delegators
Delegators delegate GRT tokens to indexers to earn a portion of the rewards without running their own node.

---

## Consumers
Consumers are applications that query data from The Graph network. They pay query fees in GRT tokens.

---

## Deploying Subgraphs
Subgraphs are deployed using the `graph-cli` tool. After deployment, they can be queried through the GraphQL API.

### Example Deployment:
```bash
graph deploy --product hosted-service <SUBGRAPH_NAME>
```

---

## Subgraph Logging
Subgraph logging helps in debugging and monitoring the indexing process.

### Example:
Use the following environment variable to enable detailed logs:
```bash
DEBUG=* graph indexer
```

---

## Graph Protocol Testnet Using Docker Compose
A testnet environment for The Graph can be set up using Docker Compose.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/graphprotocol/graph-node
   ```
2. Start the Docker Compose environment:
   ```bash
   docker-compose up
   ```

---

## Ethereum Node Monitoring Using The Graph, Prometheus, and Grafana
Monitoring Ethereum nodes is essential for performance and uptime.

### Tools:
- **The Graph**: Provides indexing and query capabilities.
- **Prometheus**: Collects metrics.
- **Grafana**: Visualizes metrics in dashboards.

### Steps:
1. Set up Prometheus and Grafana.
2. Integrate metrics from Ethereum nodes using exporters.
3. Visualize metrics in Grafana dashboards for analysis.

---

With these capabilities, The Graph and its GraphQL API empower developers to efficiently index, query, and utilize blockchain data.
