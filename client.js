const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./proto/hello.proto');
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;

const client = new helloProto.HelloService('localhost:50051', grpc.credentials.createInsecure());

const name = process.argv[2] || 'World';

client.sayHello({ name }, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log(response.message);
  }
});
