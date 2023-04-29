// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_hello_pb = require('../proto/hello_pb.js');

function serialize_hello_HelloRequest(arg) {
  if (!(arg instanceof proto_hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type hello.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_HelloRequest(buffer_arg) {
  return proto_hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hello_HelloResponse(arg) {
  if (!(arg instanceof proto_hello_pb.HelloResponse)) {
    throw new Error('Expected argument of type hello.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_HelloResponse(buffer_arg) {
  return proto_hello_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloServiceService = exports.HelloServiceService = {
  sayHello: {
    path: '/hello.HelloService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: proto_hello_pb.HelloRequest,
    responseType: proto_hello_pb.HelloResponse,
    requestSerialize: serialize_hello_HelloRequest,
    requestDeserialize: deserialize_hello_HelloRequest,
    responseSerialize: serialize_hello_HelloResponse,
    responseDeserialize: deserialize_hello_HelloResponse,
  },
};

exports.HelloServiceClient = grpc.makeGenericClientConstructor(HelloServiceService);
