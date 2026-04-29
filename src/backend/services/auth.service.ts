import connectDB from "@/backend/config/db";
import { User } from "@/backend/models/user.model";
import bcrypt from "bcryptjs";

export const registerUser = async (userData: any) => {
  await connectDB();
  
  const { fullname, email, phoneNumber, password, role } = userData;
  
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    fullname,
    email,
    phoneNumber,
    password: hashedPassword,
    role,
  });

  return newUser;
};
