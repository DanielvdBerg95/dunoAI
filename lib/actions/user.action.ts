"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connect } from "../database/mongoose";
import { handleError } from "../utils";


// CREATE
export async function createUser(user: any) {
  try {
    await connect();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connect();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: any) {
  try {
    await connect();

    const existingUser = await User.findOne({ clerkId });
    if (!existingUser) throw new Error("User not found");

    // Check for unique emails and set the default email logic
    if (user.emails) {
      const emailSet = new Set();
      let defaultEmailCount = 0;

      user.emails.forEach((email: any) => {
        if (emailSet.has(email.address)) {
          throw new Error(`Duplicate email found: ${email.address}`);
        }
        emailSet.add(email.address);
        if (email.isDefault) defaultEmailCount++;
      });

      if (defaultEmailCount > 1) {
        throw new Error("More than one default email found");
      }
    }

    // Ensure the updated emails array replaces the existing one
    const updatedUser = await User.findOneAndUpdate(
      { clerkId },
      { 
        $set: {
          emails: user.emails,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          photo: user.photo,
        } 
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error('Error in updateUser:', error);
    handleError(error);
  }
}


// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connect();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

