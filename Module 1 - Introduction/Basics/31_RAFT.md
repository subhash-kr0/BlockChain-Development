// RAFT

Raft is a consensus algorithm designed as an alternative to the Paxos family of algorithms. It was meant to be more understandable than Paxos by means of separation of logic, but it is also formally proven safe and offers some additional features.

Raft works by electing a leader node. The leader node is responsible for log replication to the followers. It regularly informs the followers of its existence by sending a heartbeat message. Each follower has a timeout (typically between 150 and 300 ms) in which it expects the heartbeat from the leader. The timeout is reset on receiving the heartbeat. If no heartbeat is received the follower changes its status to candidate and starts a leader election.

The leader election process is as follows:

Each candidate node sends a RequestVote RPC to all other nodes.
Each node votes for the candidate with the highest term and log index.
The candidate with the majority of votes becomes the leader.
If a leader node fails, the followers will start a new leader election.

Raft is a relatively simple consensus algorithm, but it is very efficient and reliable. It has been used in a variety of applications, including Kubernetes, Consul, and etcd.