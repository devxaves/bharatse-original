"use server"

import { MongoClient } from "mongodb"

interface WaitlistFormData {
  name: string
  city: string
  email: string
  role: string
}
 
export async function submitWaitlistForm(formData: WaitlistFormData) {
  try {
    // MongoDB connection string (should be in environment variables in production)
    const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
    const client = new MongoClient(uri)

    await client.connect()
    const database = client.db("bharatse")
    const collection = database.collection("waitlist")

    // Add timestamp to the form data
    const dataToInsert = {
      ...formData,
      createdAt: new Date(),
    }

    // Insert the form data into MongoDB
    const result = await collection.insertOne(dataToInsert)

    await client.close()

    if (!result.acknowledged) {
      throw new Error("Failed to insert data into MongoDB")
    }

    return { success: true }
  } catch (error) {
    console.error("Error submitting waitlist form:", error)
    throw new Error("Failed to submit waitlist form")
  }
}

