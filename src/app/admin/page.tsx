"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Calendar,
  Clock,
  Search,
  Filter,
  Download,
  Trash2,
  Edit,
  Phone,
  Shield,
  LogOut,
  RefreshCw,
  Plus,
  Calculator,
  MessageSquare,
} from "lucide-react";

interface Inquiry {
  id: number;
  fullName: string;
  mobile: string;
  email: string | null;
  address: string;
  service: string;
  propertyType: string;
  message: string | null;
  status: string;
  preferredDate: string | null;
  assignedTo: string | null;
  technicianNotes: string | null;
  createdAt: string;
}

interface Quote {
  id: number;
  fullName: string;
  mobile: string;
  email: string | null;
  serviceType: string;
  lengthFeet: string;
  heightFeet: string;
  totalSqFt: string;
  estimatedPrice: string;
  status: string;
  notes: string | null;
  createdAt: string;
}

interface UserItem {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: string[];
  isActive: boolean;
  createdAt: string;
}

interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: string[];
}

const ALL_AVAILABLE_PERMISSIONS = [
  { key: "leads:view", label: "View Leads & Inquiries" },
  { key: "leads:edit", label: "Update Status & Add Notes" },
  { key: "leads:assign", label: "Assign Technicians" },
  { key: "leads:delete", label: "Delete Inquiries" },
  { key: "quotes:manage", label: "Manage Calculator Quotes" },
  { key: "users:manage", label: "Manage Users & Permissions" },
  { key: "export:data", label: "Export Data to CSV" },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Tabs: 'leads' | 'quotes' | 'users'
  const [activeTab, setActiveTab] = useState<"leads" | "quotes" | "users">("leads");

  // Data states
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [usersList, setUsersList] = useState<UserItem[]>([]);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Modals
  const [editingInquiry, setEditingInquiry] = useState<Inquiry | null>(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "manager",
    permissions: ["leads:view", "leads:edit"],
  });

  // Verify authentication
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        const json = await res.json();
        if (!res.ok || !json.authenticated) {
          router.push("/admin/login");
          return;
        }
        setCurrentUser(json.user);
        loadDashboardData();
      } catch {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  const loadDashboardData = async () => {
    try {
      const [resInq, resQuotes, resUsers] = await Promise.all([
        fetch("/api/inquiries"),
        fetch("/api/quotes"),
        fetch("/api/users"),
      ]);

      if (resInq.ok) {
        const inqData = await resInq.json();
        setInquiries(inqData.inquiries || []);
      }
      if (resQuotes.ok) {
        const quotesData = await resQuotes.json();
        setQuotes(quotesData.quotes || []);
      }
      if (resUsers.ok) {
        const usersData = await resUsers.json();
        setUsersList(usersData.users || []);
      }
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  // Permission helpers
  const hasPermission = (permission: string) => {
    if (!currentUser) return false;
    if (currentUser.role === "super_admin") return true;
    return currentUser.permissions.includes(permission);
  };

  // Inquiries status update
  const handleUpdateInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingInquiry) return;
    try {
      const res = await fetch(`/api/inquiries/${editingInquiry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: editingInquiry.status,
          assignedTo: editingInquiry.assignedTo,
          preferredDate: editingInquiry.preferredDate,
          technicianNotes: editingInquiry.technicianNotes,
        }),
      });

      if (res.ok) {
        setEditingInquiry(null);
        loadDashboardData();
      }
    } catch (err) {
      console.error("Failed to update inquiry:", err);
    }
  };

  // Inquiry delete
  const handleDeleteInquiry = async (id: number) => {
    if (!hasPermission("leads:delete")) {
      alert("Permission Denied: You do not have permission to delete leads.");
      return;
    }
    if (!confirm("Are you sure you want to delete this inquiry record?")) return;

    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
      if (res.ok) {
        loadDashboardData();
      }
    } catch (err) {
      console.error("Failed to delete inquiry:", err);
    }
  };

  // User creation with permissions
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasPermission("users:manage")) {
      alert("Permission Denied: You cannot create or manage users.");
      return;
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserData),
      });

      if (res.ok) {
        setShowAddUserModal(false);
        setNewUserData({
          name: "",
          email: "",
          password: "",
          role: "manager",
          permissions: ["leads:view", "leads:edit"],
        });
        loadDashboardData();
      }
    } catch (err) {
      console.error("Failed to create user:", err);
    }
  };

  // CSV Export
  const handleExportCSV = () => {
    if (!hasPermission("export:data")) {
      alert("Permission Denied: You do not have permission to export data.");
      return;
    }

    const headers = [
      "ID",
      "Full Name",
      "Mobile",
      "Email",
      "Address",
      "Service",
      "Property Type",
      "Status",
      "Preferred Date",
      "Assigned To",
      "Created At",
    ];

    const rows = inquiries.map((inq) => [
      inq.id,
      `"${inq.fullName.replace(/"/g, '""')}"`,
      inq.mobile,
      inq.email || "",
      `"${inq.address.replace(/"/g, '""')}"`,
      `"${inq.service.replace(/"/g, '""')}"`,
      inq.propertyType,
      inq.status,
      inq.preferredDate || "",
      inq.assignedTo || "",
      new Date(inq.createdAt).toLocaleString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `modernet_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((item) => {
    const matchesSearch =
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mobile.includes(searchQuery) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.service.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="flex items-center gap-3 text-slate-700">
          <RefreshCw className="w-5 h-5 animate-spin text-primary" />
          <span>Loading ModerNet Admin Panel...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pb-16">
      {/* Top Admin Bar */}
      <header className="bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-xl border border-primary/30">
              <Shield className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h1 className="font-extrabold text-xl tracking-tight">ModerNet Admin & Lead Hub</h1>
              <p className="text-xs text-slate-400">
                Logged in as: <strong className="text-white">{currentUser?.name}</strong> (
                <span className="text-sky-300 capitalize">{currentUser?.role}</span>)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadDashboardData}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 bg-red-600/80 hover:bg-red-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">Total Inquiries</p>
              <h3 className="text-2xl font-black text-slate-900 mt-1">{inquiries.length}</h3>
            </div>
            <div className="w-12 h-12 bg-sky-50 text-primary rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">Scheduled Visits</p>
              <h3 className="text-2xl font-black text-emerald-600 mt-1">
                {inquiries.filter((i) => i.status === "scheduled").length}
              </h3>
            </div>
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">Pending Review</p>
              <h3 className="text-2xl font-black text-amber-500 mt-1">
                {inquiries.filter((i) => i.status === "pending").length}
              </h3>
            </div>
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">Cost Calculator Quotes</p>
              <h3 className="text-2xl font-black text-primary-dark mt-1">{quotes.length}</h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 gap-6">
          <button
            onClick={() => setActiveTab("leads")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors border-b-2 ${
              activeTab === "leads"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Users className="w-4 h-4" /> Customer Leads ({inquiries.length})
          </button>

          {hasPermission("quotes:manage") && (
            <button
              onClick={() => setActiveTab("quotes")}
              className={`pb-3 text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors border-b-2 ${
                activeTab === "quotes"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Calculator className="w-4 h-4" /> Online Quotes ({quotes.length})
            </button>
          )}

          {hasPermission("users:manage") && (
            <button
              onClick={() => setActiveTab("users")}
              className={`pb-3 text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors border-b-2 ${
                activeTab === "users"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Shield className="w-4 h-4" /> User & Permission Management ({usersList.length})
            </button>
          )}
        </div>

        {/* ===================== TAB 1: CUSTOMER LEADS ===================== */}
        {activeTab === "leads" && (
          <div className="space-y-4">
            {/* Search & Actions Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search name, phone, address, or service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-xl focus:ring-1 focus:ring-primary outline-none"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
                {/* Status Dropdown */}
                <div className="flex items-center gap-2 text-xs">
                  <Filter className="w-4 h-4 text-slate-500" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-slate-300 rounded-xl px-3 py-2 text-xs outline-none bg-white font-medium"
                  >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                {/* Export CSV button */}
                {hasPermission("export:data") && (
                  <button
                    onClick={handleExportCSV}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Export CSV
                  </button>
                )}
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-semibold">
                      <th className="py-3.5 px-4">Customer Details</th>
                      <th className="py-3.5 px-4">Service & Property</th>
                      <th className="py-3.5 px-4">Site Address</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Inspection Date / Assigned</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-400">
                          No inquiries found.
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inq) => {
                        const statusColors: Record<string, string> = {
                          pending: "bg-amber-50 text-amber-700 border-amber-200",
                          contacted: "bg-blue-50 text-blue-700 border-blue-200",
                          scheduled: "bg-emerald-50 text-emerald-700 border-emerald-200",
                          completed: "bg-purple-50 text-purple-700 border-purple-200",
                          cancelled: "bg-red-50 text-red-700 border-red-200",
                        };

                        return (
                          <tr key={inq.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-4 px-4 space-y-1">
                              <p className="font-bold text-slate-900 text-sm">{inq.fullName}</p>
                              <div className="flex items-center gap-2 text-slate-600">
                                <a
                                  href={`tel:${inq.mobile}`}
                                  className="text-primary font-semibold hover:underline flex items-center gap-1"
                                >
                                  <Phone className="w-3 h-3" /> {inq.mobile}
                                </a>
                                <a
                                  href={`https://wa.me/91${inq.mobile.replace(/\D/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-600 hover:text-emerald-700"
                                  title="WhatsApp"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" />
                                </a>
                              </div>
                              {inq.email && <p className="text-slate-400 text-[11px]">{inq.email}</p>}
                            </td>

                            <td className="py-4 px-4 space-y-1">
                              <span className="font-semibold text-slate-800 block">{inq.service}</span>
                              <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px]">
                                {inq.propertyType}
                              </span>
                            </td>

                            <td className="py-4 px-4 max-w-xs">
                              <p className="text-slate-700 line-clamp-2 text-[11px]">{inq.address}</p>
                              {inq.message && (
                                <p className="text-slate-400 italic text-[10px] mt-1 line-clamp-1">
                                  &ldquo;{inq.message}&rdquo;
                                </p>
                              )}
                            </td>

                            <td className="py-4 px-4">
                              <span
                                className={`px-2.5 py-1 rounded-full text-[11px] font-bold border capitalize ${
                                  statusColors[inq.status] || "bg-slate-100 text-slate-700 border-slate-200"
                                }`}
                              >
                                {inq.status}
                              </span>
                            </td>

                            <td className="py-4 px-4 space-y-1 text-[11px]">
                              {inq.preferredDate ? (
                                <p className="text-slate-800 font-medium">📅 {inq.preferredDate}</p>
                              ) : (
                                <p className="text-slate-400">Not scheduled</p>
                              )}
                              {inq.assignedTo && (
                                <p className="text-primary font-medium">👤 {inq.assignedTo}</p>
                              )}
                            </td>

                            <td className="py-4 px-4 text-right space-x-2">
                              {hasPermission("leads:edit") && (
                                <button
                                  onClick={() => setEditingInquiry(inq)}
                                  className="p-1.5 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                                  title="Edit Status & Schedule"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                              )}
                              {hasPermission("leads:delete") && (
                                <button
                                  onClick={() => handleDeleteInquiry(inq.id)}
                                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                  title="Delete Lead"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 2: CALCULATOR QUOTES ===================== */}
        {activeTab === "quotes" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Online Calculator Estimates</h3>
                <p className="text-xs text-slate-500">Estimates generated by visitors on website</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-semibold">
                    <th className="py-3 px-4">Client</th>
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Dimensions</th>
                    <th className="py-3 px-4">Area (Sq Ft)</th>
                    <th className="py-3 px-4">Estimated Price</th>
                    <th className="py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {quotes.map((q) => (
                    <tr key={q.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <strong className="block text-slate-900">{q.fullName}</strong>
                        <a href={`tel:${q.mobile}`} className="text-primary hover:underline">
                          {q.mobile}
                        </a>
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-700">{q.serviceType}</td>
                      <td className="py-3 px-4 text-slate-600">
                        {q.lengthFeet} ft x {q.heightFeet} ft
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-800">{q.totalSqFt} sq ft</td>
                      <td className="py-3 px-4 font-extrabold text-emerald-600">
                        ₹{Number(q.estimatedPrice).toLocaleString("en-IN")}
                      </td>
                      <td className="py-3 px-4 text-slate-400 text-[11px]">
                        {new Date(q.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ===================== TAB 3: USER & PERMISSION MANAGEMENT ===================== */}
        {activeTab === "users" && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Staff & Roles Administration</h3>
                <p className="text-xs text-slate-500">Configure role permissions and add new staff members</p>
              </div>
              <button
                onClick={() => setShowAddUserModal(true)}
                className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add New Staff Member
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {usersList.map((u) => (
                <div
                  key={u.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                        {u.role.replace("_", " ")}
                      </span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          u.isActive ? "bg-emerald-500" : "bg-slate-300"
                        }`}
                        title={u.isActive ? "Active" : "Inactive"}
                      />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">{u.name}</h4>
                    <p className="text-xs text-slate-500">{u.email}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-700 mb-1.5">Granted Permissions:</p>
                    <div className="flex flex-wrap gap-1">
                      {u.permissions.map((p, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded font-mono"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ===================== EDIT INQUIRY MODAL ===================== */}
      {editingInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-base text-slate-900">
                Update Lead: {editingInquiry.fullName}
              </h3>
              <button
                onClick={() => setEditingInquiry(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateInquiry} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Lead Status</label>
                <select
                  value={editingInquiry.status}
                  onChange={(e) =>
                    setEditingInquiry({ ...editingInquiry, status: e.target.value })
                  }
                  className="w-full p-2 border border-slate-300 rounded-lg outline-none bg-white font-medium"
                >
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="scheduled">Scheduled for Site Visit</option>
                  <option value="completed">Completed / Installed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Scheduled Inspection Date & Time
                </label>
                <input
                  type="text"
                  value={editingInquiry.preferredDate || ""}
                  onChange={(e) =>
                    setEditingInquiry({ ...editingInquiry, preferredDate: e.target.value })
                  }
                  placeholder="e.g. 2026-10-04 at 2:00 PM"
                  className="w-full p-2 border border-slate-300 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Assigned Technician / Supervisor
                </label>
                <input
                  type="text"
                  value={editingInquiry.assignedTo || ""}
                  onChange={(e) =>
                    setEditingInquiry({ ...editingInquiry, assignedTo: e.target.value })
                  }
                  placeholder="e.g. Mr. Atul Adhav"
                  className="w-full p-2 border border-slate-300 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Technician Notes & Measurement Summary
                </label>
                <textarea
                  rows={3}
                  value={editingInquiry.technicianNotes || ""}
                  onChange={(e) =>
                    setEditingInquiry({ ...editingInquiry, technicianNotes: e.target.value })
                  }
                  placeholder="Wire pitch discussed, customer requested sample cable..."
                  className="w-full p-2 border border-slate-300 rounded-lg outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingInquiry(null)}
                  className="px-4 py-2 border rounded-lg text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== ADD USER MODAL ===================== */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-base text-slate-900">Create Staff User</h3>
              <button
                onClick={() => setShowAddUserModal(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-0.5">Staff Name *</label>
                <input
                  type="text"
                  required
                  value={newUserData.name}
                  onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full p-2 border border-slate-300 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-0.5">Staff Email *</label>
                <input
                  type="email"
                  required
                  value={newUserData.email}
                  onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                  placeholder="ramesh@modernet.in"
                  className="w-full p-2 border border-slate-300 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-0.5">Password *</label>
                <input
                  type="password"
                  required
                  value={newUserData.password}
                  onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full p-2 border border-slate-300 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-0.5">System Role</label>
                <select
                  value={newUserData.role}
                  onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg outline-none bg-white"
                >
                  <option value="sales_manager">Sales Manager</option>
                  <option value="technician">Site Technician</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Assign Granular Permissions:
                </label>
                <div className="space-y-1.5 max-h-40 overflow-y-auto bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  {ALL_AVAILABLE_PERMISSIONS.map((perm) => {
                    const isChecked = newUserData.permissions.includes(perm.key);
                    return (
                      <label
                        key={perm.key}
                        className="flex items-center gap-2 text-slate-700 text-[11px] cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setNewUserData({
                                ...newUserData,
                                permissions: [...newUserData.permissions, perm.key],
                              });
                            } else {
                              setNewUserData({
                                ...newUserData,
                                permissions: newUserData.permissions.filter((p) => p !== perm.key),
                              });
                            }
                          }}
                          className="rounded text-primary"
                        />
                        <span>{perm.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddUserModal(false)}
                  className="px-4 py-2 border rounded-lg text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
