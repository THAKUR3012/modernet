# ModerNet Web Application

A full-stack recreation of [ModerNet](https://www.modernet.in/) built with **Next.js (App Router)**, **MySQL**, **Drizzle ORM**, **Tailwind CSS**, and **React Hook Form**.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Database**: [MySQL 8.0](https://www.mysql.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) & `drizzle-kit`
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Features & Pages

1. **Home (`/`)**:
   - High-impact hero section with dynamic CTAs
   - About ModerNet overview featuring Directors **Mr. Atul Adhav** & **Mr. Satnam Singh Sagoo**
   - Service cards for all protective solutions (Invisible Grills SS316, Mosquito Nets, Motorized Zip Screen, Bird Nets, Construction Safety Nets, Balcony Safety)
   - **Interactive Before / After Balcony Comparison Slider**
   - Technical advantages (SS316 marine-grade tensile strength, fire evacuation compliance, panoramic view preservation)
   - **Interactive Instant Cost & Budget Calculator**
   - Customer testimonials and real reviews
   - Quick Free Site Inspection Booking Modal & Lead Capture Form

2. **About Us (`/about`)**:
   - Company background & mission
   - Directors profile with direct contact points
   - Facilities:
     - **Belapur Corporate Office**: 601, Pujit Plaza, Sector 11, CBD Belapur, Navi Mumbai - 400614
     - **Mahape Manufacturing & Fabrication Unit**: PAP-A254/255, MIDC Industrial Area, Mahape, Navi Mumbai - 400710

3. **Protective Solutions / Services (`/services`)**:
   - In-depth specifications, use cases, installation timelines, maintenance requirements, and benefits for:
     - *Invisible Grills (SS316 nano-cables with 600kg breaking strength)*
     - *Mosquito Nets & Pleated Screens*
     - *Motorized Mosquito Mesh (Zip Screen Automation)*
     - *Anti-Bird & Pigeon Netting*
     - *Construction Safety Nets*
     - *Child & Pet Balcony Safety Solutions*

4. **FAQ (`/faq`)**:
   - Real-time search filter
   - Category filtering (Invisible Grills, Bird Nets, Mosquito Nets, Installation & Warranty)
   - Smooth accordion interface

5. **Contact Us (`/contact`)**:
   - Contact form with React Hook Form + Zod validation
   - Immediate feedback and database persistence
   - Office addresses, direct phone (`+91 97000 99235`), email (`info@modernet.in`), and interactive Google Maps embed

6. **Admin Portal & RBAC Permission Management (`/admin`)**:
   - Login page (`/admin/login`) with session cookies
   - **Role-Based Access Control (RBAC)**:
     - `super_admin`: Full access to leads, quotes, user permissions, and deletions
     - `sales_manager`: Lead management, scheduling, and quote handling
     - `technician`: Site inspection view and technician notes
   - **Granular Permissions Supported**:
     - `leads:view`: View all customer inquiries
     - `leads:edit`: Update status (Pending, Contacted, Scheduled, Completed, Cancelled) & notes
     - `leads:assign`: Assign supervisor / technician for site measurement
     - `leads:delete`: Remove inquiries
     - `quotes:manage`: Access cost calculator quotation requests
     - `users:manage`: Add new staff members and customize permission checkboxes
     - `export:data`: Export full inquiries database to CSV

---

## 🔑 Default Credentials for Testing

| Role | Email | Password | Permissions |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `admin@modernet.in` | `admin123` | All permissions |
| **Sales Manager** | `manager@modernet.in` | `manager123` | View/Edit leads, Quotes, Export |
| **Technician** | `tech@modernet.in` | `tech123` | View/Edit assigned visits |

---

## 💻 Quick Start & Commands

```bash
# 1. Navigate to the project directory
cd modernet

# 2. Database migrations / push with Drizzle ORM
npm run db:push

# 3. Seed sample data (users, leads, quotes)
npx tsx src/db/seed.ts

# 4. Start development server on port 3005
PORT=3005 npm run dev

# 5. Build for production
npm run build
PORT=3005 npm run start
```

---

## 🗄️ Database Configuration

Configured in `.env`:
```env
DATABASE_URL="mysql://root:root_secure_password_2026@127.0.0.1:3306/modernet"
DB_HOST="127.0.0.1"
DB_PORT="3306"
DB_USER="root"
DB_PASSWORD="root_secure_password_2026"
DB_NAME="modernet"
```
