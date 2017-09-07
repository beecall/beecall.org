rm -f tpid

nohup ~/beecall/bin/node-v8.1.3-linux-x64/bin/node ~/beecall/server/beecall_node_server.js > ~/beecall/logs/beecall_node_server.log 2>&1 &

echo Start Success!