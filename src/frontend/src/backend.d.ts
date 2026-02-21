import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ServiceRequest {
    id: bigint;
    customerName: string;
    deviceDetails: string;
    issueDescription: string;
}
export interface Service {
    id: bigint;
    name: string;
    description: string;
    price: bigint;
}
export interface Product {
    id: bigint;
    specifications: string;
    name: string;
    price: bigint;
}
export interface backendInterface {
    addProduct(name: string, specifications: string, price: bigint): Promise<void>;
    addService(name: string, description: string, price: bigint): Promise<void>;
    cancelServiceRequest(id: bigint): Promise<void>;
    deleteProduct(id: bigint): Promise<void>;
    deleteService(id: bigint): Promise<void>;
    getAllProducts(): Promise<Array<Product>>;
    getAllRequests(): Promise<Array<ServiceRequest>>;
    getAllServices(): Promise<Array<Service>>;
    getProduct(id: bigint): Promise<Product>;
    getService(id: bigint): Promise<Service>;
    getServiceRequest(id: bigint): Promise<ServiceRequest>;
    submitServiceRequest(customerName: string, deviceDetails: string, issueDescription: string): Promise<bigint>;
}
