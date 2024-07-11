import { clerkClient } from "@clerk/nextjs";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

import { createUser, deleteUser, updateUser } from "@/lib/actions/user.action";
import { createOrganization, deleteOrganization, updateOrganization } from "@/lib/actions/organization.actions";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  // CREATE
  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;
  
    if (!email_addresses || !email_addresses[0] || !email_addresses[0].email_address) {
      console.error("Email address is missing, user creation aborted.");
      return new Response("Invalid data: Email address is required", { status: 400 });
    }
  
    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username!,  // Ensure username is not null
      firstName: first_name,  // Optional, ensure not null
      lastName: last_name,  // Optional, ensure not null
      photo: image_url,  // Optional, ensure not null
    };
    console.log(user);
    const newUser = await createUser(user);
  
    // Set public metadata
    if (newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
        },
      });
    }
  
    return NextResponse.json({ message: "new user created", user: newUser });
  }

  // UPDATE
  if (eventType === "user.updated") {
    const { id, image_url, first_name, last_name, username } = evt.data;
  
    const user = {
      firstName: first_name || "",  // Optional, ensure not null
      lastName: last_name || "",  // Optional, ensure not null
      username: username || "",  // Ensure username is not null
      photo: image_url || "",  // Optional, ensure not null
    };
  
    const updatedUser = await updateUser(id, user);
  
    return NextResponse.json({ message: "OK", user: updatedUser });
  }
  

  // DELETE
  if (eventType === "user.deleted") {
    const { id } = evt.data;

    const deletedUser = await deleteUser(id!);

    return NextResponse.json({ message: "OK", user: deletedUser });
  }

  // CREATE Organization
  if (eventType === "organization.created") {
    const { id, name, created_by, created_at, image_url, slug, } = evt.data;

    const organization = {
      clerkId: id,
      name: name,
      createdBy: created_by,
      createdAt: new Date(created_at),
      imageUrl: image_url,
      slug: slug,
    };

    const newOrganization = await createOrganization(organization);

    if (newOrganization) {
    await clerkClient.organizations.updateOrganizationMetadata(id, {
    publicMetadata: {
    organizationId: newOrganization._id
    },
    });
    }
    return NextResponse.json({ message: "OK", user: newOrganization });
  }

  // UPDATE ORGANIZATION
  if (eventType === "organization.updated") {
    const { id, name, created_by, updated_at, image_url } = evt.data;

    const organization = {
      name: name,
      
      created_by: created_by,
      updatedAt: new Date(updated_at),
      imageUrl: image_url,
      // Added new field for logo URL
    };

    const updatedOrganization = await updateOrganization(id, organization);

    return NextResponse.json({ message: "OK", organization: updatedOrganization });
  }

  // DELETE Organization
  if (eventType === "organization.deleted") {
    const { id } = evt.data;

    const deletedOrganization = await deleteOrganization(id!);

    return NextResponse.json({ message: "OK", deletedOrganization });
  }

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
