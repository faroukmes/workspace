import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
declare global {
    var mongoose: {
        conn: null | mongoose.Mongoose;
        promise: null | Promise<mongoose.Mongoose>;
    };
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI!, {
                dbName: process.env.MONGODB_DB_NAME,
                auth: {
                    username: process.env.MONGODB_USERNAME,
                    password: process.env.MONGODB_PASSWORD,
                },
                bufferCommands: false,
            })
            .then((mongoose) => {
                console.log("Mongodb connected");
                return mongoose;
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
