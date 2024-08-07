import prisma from "./prisma";
import { User } from "@prisma/client";

export async function createUser(data: User) {
    try {
        const user = await prisma.user.create({data});
        return {user};
    } catch (error) {
        return {error};
    }
}

export async function getUserById({id, clerkId}: {id?: string, clerkId?: string}) {
    try {
        if (!id && !clerkId) {
            throw new Error("Either id or clerkId must be provided");
        }

        const query = id ? { id } : { clerkId };

        const user = await prisma.user.findUnique({ where: query });

        
      
    } catch (error) {
        return {error};
    }

}

export async function updateUser(id: string, data: Partial<User>) {
    try {
        const user = await prisma.user.update({
            where: { id },
            data,
        });
        return { user };
    } catch (error) {
        return { error };
    }
}
