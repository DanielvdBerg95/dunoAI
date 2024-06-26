import { Document, Schema, model, models } from "mongoose";

// Enum types for fixed options
enum Industry {
    Retail = "Retail",
    Technology = "Technology",
    Healthcare = "Healthcare",
    Finance = "Finance",
    Education = "Education",
    Other = "Other",
}

enum Size {
    SoleProprietorship = "Sole proprietorship",
    Small = "Small (1-10 employees)",
    Medium = "Medium (11-50 employees)",
    Large = "Large (51+ employees)",
}

enum Role {
    Owner = "Owner",
    Manager = "Manager",
    Employee = "Employee",
    Freelancer = "Freelancer",
    Other = "Other",
}

enum Responsibility {
    Sales = "Sales",
    Marketing = "Marketing",
    Finance = "Finance",
    Operations = "Operations",
    HR = "HR",
    ProductDevelopment = "Product Development",
    CustomerSupport = "Customer Support",
}

export interface OrganizationDocument extends Document {
    clerkId: string;
    name: string;
    idea: string;
    industry: Industry;
    size: Size;
    location: string;
    age: number;
    primaryProductsOrServices: string[];
    role: Role;
    mainResponsibilities: Responsibility[];
    businessGoals: string[];
    slug: string;
    createdBy: string;
    createdAt: Date;
    updatedAt?: Date | null;
    imageUrl: string;
    maxAllowedMemberships: number;
    affiliationEmailAddress?: string | null;
    enrollmentMode?: string | null;
    organizationId?: string | null;
    totalPendingInvitations?: number;
    totalPendingSuggestions?: number;
    verification?: string | null;
    status?: string | null;
}

const OrganizationSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    idea: { type: String, required: true },
    industry: { type: String, required: true, enum: Object.values(Industry) },
    size: { type: String, required: true, enum: Object.values(Size) },
    location: { type: String, required: true },
    age: { type: Number, required: true },
    primaryProductsOrServices: { type: [String], required: true },
    role: { type: String, required: true, enum: Object.values(Role) },
    mainResponsibilities: { type: [String], required: true, enum: Object.values(Responsibility) },
    businessGoals: { type: [String], required: true },
    slug: { type: String, required: true, unique: true },
    createdBy: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: false, default: Date.now },
    imageUrl: { type: String },
    maxAllowedMemberships: { type: Number, required: true },
    affiliationEmailAddress: { type: String, default: null }, // Default value for optional fields
    enrollmentMode: { type: String, default: null },
    organizationId: { type: String, default: null },
    totalPendingInvitations: { type: Number, default: 0 }, // Default value for numeric fields
    totalPendingSuggestions: { type: Number, default: 0 }, // Default value for numeric fields
    verification: { type: String, default: null },
    status: { type: String, default: null }
});

const Organization = models.Organization || model<OrganizationDocument>("Organization", OrganizationSchema);

export default Organization;
