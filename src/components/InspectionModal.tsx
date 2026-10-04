"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, CheckCircle2, Shield, Calendar, AlertCircle, Loader2 } from "lucide-react";

const inspectionSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  mobile: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  address: z.string().min(5, "Please enter your building, area or locality"),
  service: z.string().min(1, "Please select a service"),
  propertyType: z.string().default("Residential"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type InspectionFormData = z.infer<typeof inspectionSchema>;

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function InspectionModal({
  isOpen,
  onClose,
  defaultService = "Invisible Grill Installation",
}: InspectionModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InspectionFormData>({
    resolver: zodResolver(inspectionSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      service: defaultService,
      propertyType: "Residential",
      preferredDate: "",
      message: "",
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: InspectionFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit booking request");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("Something went wrong. Please call us directly.");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-dark to-primary px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-lg">
              <Shield className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Book Free Site Visit</h3>
              <p className="text-xs text-sky-100">Zero charges • Free measurements • 3 Years Free Repairing • Mumbai & Navi Mumbai</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsSuccess(false);
              onClose();
            }}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Visit Request Confirmed!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Thank you! Our safety technician will call you shortly to confirm your preferred timing and site address.
              </p>
              <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 text-xs text-primary font-medium">
                Need immediate urgent help? Call Mr. Krishna at{" "}
                <a href="tel:+919082754119" className="font-bold hover:underline">
                  +91 9082754119
                </a>{" "}
                /{" "}
                <a href="tel:+918692873408" className="font-bold hover:underline">
                  +91 8692873408
                </a>
              </div>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {serverError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="E.g. Rajesh Sharma"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500">{errors.fullName.message}</span>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    {...register("mobile")}
                    placeholder="10-digit number"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                  {errors.mobile && (
                    <span className="text-[11px] text-red-500">{errors.mobile.message}</span>
                  )}
                </div>
              </div>

              {/* Service & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Required Service *
                  </label>
                  <select
                    {...register("service")}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                  >
                    <option value="Invisible Grill Installation">Invisible Grill (SS316)</option>
                    <option value="Bird Nets">Bird & Pigeon Nets</option>
                    <option value="Mosquito Nets">Mosquito Nets & Screens</option>
                    <option value="Motorized Mosquito Mesh (Zip Screen)">Motorized Zip Screen</option>
                    <option value="Construction Safety Nets">Construction Safety Nets</option>
                    <option value="Balcony & Window Safety Solutions">Child & Pet Balcony Safety</option>
                  </select>
                  {errors.service && (
                    <span className="text-[11px] text-red-500">{errors.service.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Property Type
                  </label>
                  <select
                    {...register("propertyType")}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                  >
                    <option value="Residential">Residential (Flat/Villa)</option>
                    <option value="Commercial">Commercial (Office/Shop)</option>
                    <option value="Construction">Construction Site</option>
                  </select>
                </div>
              </div>

              {/* Address / Location */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Site / Building Address & Locality *
                </label>
                <input
                  type="text"
                  {...register("address")}
                  placeholder="Tower, Society name, Area (e.g., Seawoods, Navi Mumbai)"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                {errors.address && (
                  <span className="text-[11px] text-red-500">{errors.address.message}</span>
                )}
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Inspection Timing
                </label>
                <div className="relative">
                  <input
                    type="text"
                    {...register("preferredDate")}
                    placeholder="e.g. Tomorrow 11 AM or Weekend morning"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                </div>
              </div>

              {/* Optional message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={2}
                  placeholder="Any specific balcony dimensions, floor number, or concerns..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Confirming Booking...</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    <span>Confirm Free Site Inspection</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-slate-500 pt-1">
                🔒 We respect your privacy. No spam. 100% free with no obligation to buy.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
