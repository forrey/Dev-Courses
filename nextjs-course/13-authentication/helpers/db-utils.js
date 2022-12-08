import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://fm:fmtesting@testing.v9gewxh.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}
