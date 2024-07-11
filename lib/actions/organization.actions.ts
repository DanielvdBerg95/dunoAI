'use server'

import { UpdateQuery } from "mongoose";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Organization from "../database/models/organization.model";

// CREATE
export async function createOrganization(organization: any) {
  try {
    await connectToDatabase();

    const newOrganization = await Organization.create(organization);

    return JSON.parse(JSON.stringify(newOrganization));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getOrganizationById(organizationId: string) {
  try {
    await connectToDatabase();

    const organization = await Organization.findOne({ clerkId: organizationId });

    if (!organization) throw new Error("Organization not found");

    return JSON.parse(JSON.stringify(organization));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateOrganization(clerkId: string, organization: UpdateOrganizationParams) {
  try {
    await connectToDatabase();

    const existingOrganization = await Organization.findOne({ clerkId });
    if (!existingOrganization) {
      throw new Error("Organization not found");
    }

    // Ensure slug is a string, if it's null, provide a default value
    const slug = organization.slug || '';

    // Construct update query
    const updateQuery: UpdateQuery<typeof organization> = {
      $set: {
        name: organization.name,
        idea: organization.idea,
        industry: organization.industry,
        size: organization.size,
        location: organization.location,
        age: organization.age,
        primaryProductsOrServices: organization.primaryProductsOrServices,
        role: organization.role,
        mainResponsibilities: organization.mainResponsibilities,
        businessGoals: organization.businessGoals,
        slug, // Use the modified slug here
        createdBy: organization.createdBy,
        createdAt: organization.createdAt,
        updatedAt: organization.updatedAt,
        imageUrl: organization.imageUrl,
        maxAllowedMemberships: organization.maxAllowedMemberships,
        affiliationEmailAddress: organization.affiliationEmailAddress,
        enrollmentMode: organization.enrollmentMode,
        organizationId: organization.organizationId,
        totalPendingInvitations: organization.totalPendingInvitations,
        totalPendingSuggestions: organization.totalPendingSuggestions,
        verification: organization.verification,
        status: organization.status,
      },
    };

    // Perform update
    const updatedOrganization = await Organization.findOneAndUpdate(
      { clerkId },
      updateQuery,
      { new: true, runValidators: true }
    );

    if (!updatedOrganization) {
      throw new Error("Organization update failed");
    }

    return updatedOrganization.toJSON(); // toJSON() is equivalent to JSON.parse(JSON.stringify())

  } catch (error) {
    console.error('Error in updateOrganization:', error);
    handleError(error); // Ensure handleError handles the error appropriately
  }
}

// DELETE
export async function deleteOrganization(clerkId: string) {
  try {
    await connectToDatabase();

    // Find organization to delete
    const organizationToDelete = await Organization.findOne({ clerkId });

    if (!organizationToDelete) {
      throw new Error("Organization not found");
    }

    // Delete organization
    await Organization.findByIdAndDelete(organizationToDelete._id);
    revalidatePath("/");

    return { message: "Organization deleted successfully" };
  } catch (error) {
    handleError(error);
  }
}
