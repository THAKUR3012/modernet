import { db } from "./index";
import { users, inquiries, quotes } from "./schema";

async function seed() {
  console.log("Seeding database...");

  // Seed Users
  await db.insert(users).values([
    {
      name: "Mr. Krishna",
      email: "Msmartkrish.81089@gmail.com",
      password: "password123",
      role: "super_admin",
      permissions: JSON.stringify([
        "leads:view",
        "leads:edit",
        "leads:delete",
        "leads:assign",
        "quotes:manage",
        "users:manage",
        "export:data",
      ]),
      isActive: true,
    },
  ]).onDuplicateKeyUpdate({
    set: { name: "Mr. Krishna" },
  });

  // Seed Sample Inquiries
  await db.insert(inquiries).values([
    {
      fullName: "Rajesh Sharma",
      mobile: "9820198201",
      email: "rajesh.sharma@gmail.com",
      address: "Flat 1204, Tower B, Hiranandani Gardens, Powai, Mumbai",
      service: "Invisible Grill Installation",
      propertyType: "Residential",
      message: "Looking for 316 grade invisible grills for 2 large balconies facing the lake. High floor with kids at home.",
      status: "scheduled",
      preferredDate: "2026-10-02 (11:00 AM)",
      assignedTo: "Mr. Krishna",
      technicianNotes: "Site visit confirmed. Carry sample wires and catalog.",
    },
    {
      fullName: "Pooja Deshmukh",
      mobile: "9769012345",
      email: "pooja.d@yahoo.com",
      address: "Flat 402, Thakur Complex, Kandivali East, Mumbai",
      service: "Bird Nets",
      propertyType: "Residential",
      message: "Severe pigeon nuisance in AC duct area and kitchen balcony. Need durable net that doesn't block sunlight.",
      status: "contacted",
      preferredDate: "2026-10-03 (3:00 PM)",
      assignedTo: "Mr. Krishna",
      technicianNotes: "Called client. Quoted standard nylon netting rate.",
    },
    {
      fullName: "Vikram Malhotra",
      mobile: "9819554321",
      email: "v.malhotra@zenithinfra.com",
      address: "Commercial Tower, Andheri East, Mumbai",
      service: "Construction Safety Nets",
      propertyType: "Construction",
      message: "Need 25,000 sq ft debris and fall arrest safety nets for our new commercial project. Need certified ISI standard nets.",
      status: "in_review",
      preferredDate: "2026-10-05",
      assignedTo: "Mr. Krishna",
      technicianNotes: "Awaiting site floor plans.",
    },
    {
      fullName: "Sunita Iyer",
      mobile: "9930887766",
      email: "sunita.iyer@gmail.com",
      address: "Flat 701, Regency Park, Sector 19, Kharghar, Navi Mumbai",
      service: "Motorized Mosquito Mesh (Zip Screen)",
      propertyType: "Residential",
      message: "Interested in automated zip screens for ground floor patio opening.",
      status: "pending",
      preferredDate: "2026-10-04",
    },
  ]);

  // Seed Sample Quotes
  await db.insert(quotes).values([
    {
      fullName: "Anand Kulkarni",
      mobile: "9820551122",
      email: "anand.k@gmail.com",
      serviceType: "Invisible Grill Installation",
      lengthFeet: "18.00",
      heightFeet: "7.00",
      totalSqFt: "126.00",
      estimatedPrice: "18900.00",
      status: "new",
      notes: "Calculated online for Balcony SS316 2.5mm cables",
    },
    {
      fullName: "Sneha Patel",
      mobile: "9870334411",
      email: "sneha.p@outlook.com",
      serviceType: "Bird Nets",
      lengthFeet: "24.00",
      heightFeet: "9.00",
      totalSqFt: "216.00",
      estimatedPrice: "7560.00",
      status: "contacted",
      notes: "Pigeon net for 2 balconies",
    },
  ]);

  console.log("Seeding completed successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
