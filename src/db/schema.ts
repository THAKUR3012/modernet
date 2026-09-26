import { mysqlTable, serial, varchar, text, timestamp, boolean, decimal } from "drizzle-orm/mysql-core";

export const inquiries = mysqlTable("inquiries", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  mobile: varchar("mobile", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }),
  address: text("address").notNull(),
  service: varchar("service", { length: 150 }).notNull(),
  propertyType: varchar("property_type", { length: 50 }).default("Residential"),
  message: text("message"),
  status: varchar("status", { length: 50 }).default("pending").notNull(), // pending, contacted, scheduled, completed, cancelled
  preferredDate: varchar("preferred_date", { length: 100 }),
  assignedTo: varchar("assigned_to", { length: 255 }),
  technicianNotes: text("technician_notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const quotes = mysqlTable("quotes", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  mobile: varchar("mobile", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }),
  serviceType: varchar("service_type", { length: 100 }).notNull(),
  lengthFeet: decimal("length_feet", { precision: 10, scale: 2 }).notNull(),
  heightFeet: decimal("height_feet", { precision: 10, scale: 2 }).notNull(),
  totalSqFt: decimal("total_sq_ft", { precision: 10, scale: 2 }).notNull(),
  estimatedPrice: decimal("estimated_price", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 50 }).default("new").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).default("manager").notNull(), // super_admin, sales_manager, technician
  permissions: text("permissions").notNull(), // JSON string array of permissions
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const auditLogs = mysqlTable("audit_logs", {
  id: serial("id").primaryKey(),
  userEmail: varchar("user_email", { length: 255 }),
  action: varchar("action", { length: 100 }).notNull(),
  details: text("details"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;
export type Quote = typeof quotes.$inferSelect;
export type NewQuote = typeof quotes.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
