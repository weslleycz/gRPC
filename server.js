const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./proto/hello.proto');
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;

function sayHello(call, callback) {
  const { name } = call.request;
  const message = `Hello, ${name}!`;
  callback(null, { message });
}

function main() {
  const server = new grpc.Server();
  server.addService(helloProto.HelloService.service, { sayHello });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('gRPC server started on port 50051');
}

main();
