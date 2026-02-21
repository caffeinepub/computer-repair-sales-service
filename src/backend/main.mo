import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import List "mo:core/List";

actor {
  type Service = {
    id : Nat;
    name : Text;
    description : Text;
    price : Nat;
  };

  type Product = {
    id : Nat;
    name : Text;
    specifications : Text;
    price : Nat;
  };

  type ServiceRequest = {
    id : Nat;
    customerName : Text;
    deviceDetails : Text;
    issueDescription : Text;
  };

  module ServiceRequest {
    public func compare(request1 : ServiceRequest, request2 : ServiceRequest) : Order.Order {
      Nat.compare(request1.id, request2.id);
    };
  };

  let services = Map.empty<Nat, Service>();
  let products = Map.empty<Nat, Product>();
  let requests = Map.empty<Nat, ServiceRequest>();

  var nextServiceId = 0;
  var nextProductId = 0;
  var nextRequestId = 0;

  // Add a new service
  public shared ({ caller }) func addService(name : Text, description : Text, price : Nat) : async () {
    let id = nextServiceId;
    let service : Service = {
      id;
      name;
      description;
      price;
    };
    services.add(id, service);
    nextServiceId += 1;
  };

  // Add a new product
  public shared ({ caller }) func addProduct(name : Text, specifications : Text, price : Nat) : async () {
    let id = nextProductId;
    let product : Product = {
      id;
      name;
      specifications;
      price;
    };
    products.add(id, product);
    nextProductId += 1;
  };

  // Submit a new service request
  public shared ({ caller }) func submitServiceRequest(customerName : Text, deviceDetails : Text, issueDescription : Text) : async Nat {
    if (customerName == "" or deviceDetails == "" or issueDescription == "") {
      Runtime.trap("All fields must be filled out");
    };

    let id = nextRequestId;
    let request : ServiceRequest = {
      id;
      customerName;
      deviceDetails;
      issueDescription;
    };
    requests.add(id, request);
    nextRequestId += 1;
    id;
  };

  // Get all services
  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray();
  };

  // Get all products
  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  // Get all service requests
  public query ({ caller }) func getAllRequests() : async [ServiceRequest] {
    requests.values().toArray().sort();
  };

  // Delete a service by id
  public shared ({ caller }) func deleteService(id : Nat) : async () {
    switch (services.get(id)) {
      case (null) { Runtime.trap("Service does not exist") };
      case (?_) {
        services.remove(id);
      };
    };
  };

  // Delete a product by id
  public shared ({ caller }) func deleteProduct(id : Nat) : async () {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product does not exist") };
      case (?_) {
        products.remove(id);
      };
    };
  };

  // Cancel a service request by id
  public shared ({ caller }) func cancelServiceRequest(id : Nat) : async () {
    switch (requests.get(id)) {
      case (null) { Runtime.trap("Request does not exist") };
      case (?_) {
        requests.remove(id);
      };
    };
  };

  // Get service by id
  public query ({ caller }) func getService(id : Nat) : async Service {
    switch (services.get(id)) {
      case (null) { Runtime.trap("Service does not exist") };
      case (?service) { service };
    };
  };

  // Get product by id
  public query ({ caller }) func getProduct(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product does not exist") };
      case (?product) { product };
    };
  };

  // Get service request by id
  public query ({ caller }) func getServiceRequest(id : Nat) : async ServiceRequest {
    switch (requests.get(id)) {
      case (null) { Runtime.trap("Request does not exist") };
      case (?request) { request };
    };
  };
};
