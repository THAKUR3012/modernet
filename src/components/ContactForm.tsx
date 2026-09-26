"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Shield, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name (minimum 2 characters)"),
  mobile: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  address: z.string().min(3, "Please enter your building, area or locality"),
  service: z.string().min(1, "Please choose a service"),
  propertyType: z.string().min(1, "Please select property type"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      service: "Invisible Grill Installation",
      propertyType: "Residential",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setErrorMessage(null);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Failed to submit inquiry");
      }

      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again or call directly.");
      }
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800">Inquiry Received!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          Thank you for reaching out to ModerNet Pvt. Ltd. Our technical expert will call you shortly with exact pricing and schedule a free site measurement visit.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="E.g. Jane Sterling"
            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.fullName && (
            <span className="text-[11px] text-red-500 mt-1 block">{errors.fullName.message}</span>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Contact Number *
          </label>
          <input
            type="tel"
            {...register("mobile")}
            placeholder="10-digit mobile number"
            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.mobile && (
            <span className="text-[11px] text-red-500 mt-1 block">{errors.mobile.message}</span>
          )}
        </div>
      </div>

      {/* Row 2: Email & Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="name@example.com"
            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.email && (
            <span className="text-[11px] text-red-500 mt-1 block">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Project / Site Address *
          </label>
          <input
            type="text"
            {...register("address")}
            placeholder="Building / Area / City"
            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.address && (
            <span className="text-[11px] text-red-500 mt-1 block">{errors.address.message}</span>
          )}
        </div>
      </div>

      {/* Row 3: Select Service & Property Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Select Service *
          </label>
          <select
            {...register("service")}
            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white transition-all"
          >
            <option value="Invisible Grill Installation">Invisible Grill Installation</option>
            <option value="Mosquito Nets">Mosquito Nets</option>
            <option value="Motorized Mosquito Mesh (Zip Screen)">Motorized Mosquito Mesh (Zip Screen)</option>
            <option value="Construction Safety Nets">Construction Safety Nets</option>
            <option value="Bird Nets">Bird Nets</option>
            <option value="Balcony & Window Safety Solutions">Balcony & Window Safety Solutions</option>
          </select>
          {errors.service && (
            <span className="text-[11px] text-red-500 mt-1 block">{errors.service.message}</span>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Property Type *
          </label>
          <select
            {...register("propertyType")}
            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white transition-all"
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Construction">Construction</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Message & Requirements
        </label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Tell us about your home and requirements..."
          className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none transition-all"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Request Free Site Visit & Quotation</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
        <Shield className="w-3.5 h-3.5 text-primary" />
        <span>Free measurements • No obligation • Direct factory rates</span>
      </div>
    </form>
  );
}
