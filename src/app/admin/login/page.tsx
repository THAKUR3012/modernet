"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Shield, Lock, Mail, AlertCircle, Loader2, KeyRound } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@modernet.in",
      password: "admin123",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setErrorMessage(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Login failed");
      }

      router.push("/admin");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred during login.");
      }
    }
  };

  const setDemoCredentials = (email: string, pass: string) => {
    setValue("email", email);
    setValue("password", pass);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200">
        
        {/* Header & Logo */}
        <div className="text-center space-y-3">
          <div className="relative h-12 w-48 mx-auto">
            <Image
              src="/img/modernet_logo1.jpeg"
              alt="ModerNet"
              fill
              className="object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            <Shield className="w-3.5 h-3.5" /> Staff & Lead Management Portal
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Sign In to Dashboard</h2>
          <p className="text-xs text-slate-500">
            Role-Based Access Control with custom permissions
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                {...register("email")}
                placeholder="admin@modernet.in"
                className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            </div>
            {errors.email && (
              <span className="text-[11px] text-red-500 mt-1 block">{errors.email.message}</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                {...register("password")}
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            </div>
            {errors.password && (
              <span className="text-[11px] text-red-500 mt-1 block">{errors.password.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <KeyRound className="w-4 h-4" />
                <span>Sign In to Dashboard</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Switcher */}
        <div className="pt-4 border-t border-slate-100">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-center mb-2">
            Click to fill pre-configured roles:
          </p>
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <button
              type="button"
              onClick={() => setDemoCredentials("admin@modernet.in", "admin123")}
              className="p-2 border border-slate-200 rounded-lg hover:border-primary text-slate-700 bg-slate-50 hover:bg-sky-50 transition-colors"
            >
              <span className="font-bold block text-primary">Super Admin</span>
              <span>All Perms</span>
            </button>
            <button
              type="button"
              onClick={() => setDemoCredentials("manager@modernet.in", "manager123")}
              className="p-2 border border-slate-200 rounded-lg hover:border-primary text-slate-700 bg-slate-50 hover:bg-sky-50 transition-colors"
            >
              <span className="font-bold block text-emerald-600">Manager</span>
              <span>Leads & Quotes</span>
            </button>
            <button
              type="button"
              onClick={() => setDemoCredentials("tech@modernet.in", "tech123")}
              className="p-2 border border-slate-200 rounded-lg hover:border-primary text-slate-700 bg-slate-50 hover:bg-sky-50 transition-colors"
            >
              <span className="font-bold block text-slate-800">Technician</span>
              <span>Site Visits</span>
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs text-slate-500 hover:text-primary">
            ← Back to ModerNet Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
