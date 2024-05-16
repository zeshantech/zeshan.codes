import { Client, Account, Storage, ID } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6645f745001e483e057d");

export const awAccount = new Account(client);
export const awStorage = new Storage(client);

export { ID } from "appwrite";
