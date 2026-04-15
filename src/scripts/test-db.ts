import { connectToDatabase } from "@/database/mongoose";

const main = async () => {
  try {
    await connectToDatabase();
    console.log("OK: Connected to database successfully");
    process.exit(0);
  } catch (error) {
    console.log("ERROR: Connection to database failed");
    console.error(error);
    process.exit(1);
  }
};

main();
