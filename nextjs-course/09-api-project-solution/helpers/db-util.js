// Make sure to install this using npm install mongodb
import { MongoClient } from "mongodb";

// First we use a helper that just connects to the db
export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://test_user:nextjs123@nextjs-course.swqa8tu.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}

// Now we insert
export async function insertDocument(client, collection, document) {
  // In this case, all items will be store in "events"
  const db = client.db("events");

  // But we have different collections: "newsletter" and "comments"
  const result = await db.collection(collection).insertOne(document);
  return result;
}

// Now we need a function to retrieve
export async function getDocuments(client, collection, filter, sort) {
  const db = client.db("events");

  // Filter can be something like {event: "e2"}
  // Sort can be {_id: -1} to sort by id field in descending order
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}
