const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace with your Atlas connection string
const uri = "mongodb+srv://manikandanmk1657:<db_password>@petitiondigitalizer.jvijg.mongodb.net/?retryWrites=true&w=majority&appName=PetitionDigitalizer";

// Create a new MongoDB client
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Connect to the database
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas!");
    return client;
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
    throw err;
  }
}

// Export the client and connectDB function
module.exports = {
  client,
  connectDB
};
