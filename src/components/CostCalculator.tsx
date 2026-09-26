"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calculator, Check, ShieldCheck, Sparkles, Loader2 } from "lucide-react";

const rateCard: Record<string, { label: string; ratePerSqFt: number; unit: string; description: string }> = {
  invisible_grill: {
    label: "Invisible Grills (SS 316 Grade)",
    ratePerSqFt: 150,
    unit: "sq. ft.",
    description: "High tensile stainless steel cables, rust-proof, up to 600kg breaking force.",
  },
  bird_netting: {
    label: "Pigeon & Bird Netting",
    ratePerSqFt: 35,
    unit: "sq. ft.",
    description: "UV-stabilized virgin nylon net, almost invisible, 100% harmless to birds.",
  },
  mosquito_net: {
    label: "Mosquito Mesh & Screens",
    ratePerSqFt: 95,
    unit: "sq. ft.",
    description: "Custom pleated or roller mesh for windows and balconies with fine airflow.",
  },
  zip_screen: {
    label: "Motorized Zip Screen Mesh",
    ratePerSqFt: 380,
    unit: "sq. ft.",
    description: "Automated remote-controlled weather & insect shield for large patio openings.",
  },
};

const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z
    .string()
    .min(10, "Please enter a valid 10-digit number")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  notes: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export default function CostCalculator() {
  const [selectedService, setSelectedService] = useState<string>("invisible_grill");
  const [length, setLength] = useState<number>(12);
  const [height, setHeight] = useState<number>(6);
  const [isSaved, setIsSaved] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const currentRate = rateCard[selectedService];
  const totalSqFt = Math.max(0, length * height);
  const estimatedCost = Math.round(totalSqFt * currentRate.ratePerSqFt);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      notes: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setErrorMsg(null);
    try {
      const payload = {
        fullName: data.fullName,
        mobile: data.mobile,
        email: data.email,
        serviceType: currentRate.label,
        lengthFeet: Number(length),
        heightFeet: Number(height),
        totalSqFt: Number(totalSqFt),
        estimatedPrice: Number(estimatedCost),
        notes: data.notes || `Calculated online: ${length}ft x ${height}ft (${totalSqFt} sq ft)`,
      };

      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Failed to save quote");
      }

      setIsSaved(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Failed to submit quote estimate.");
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Instant Cost Estimator
          </span>
          <h3 className="text-2xl font-bold">Calculate Your Protection Budget</h3>
          <p className="text-slate-400 text-sm mt-1">
            Get an instant estimate for your balcony, window, or terrace space.
          </p>
        </div>
        <div className="bg-primary/20 border border-primary/30 rounded-2xl p-4 text-center shrink-0">
          <p className="text-xs text-sky-200">Starting from</p>
          <p className="text-2xl font-extrabold text-white">₹35<span className="text-xs font-normal text-slate-300">/sq.ft</span></p>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col: Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Service Selector */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              1. Select Solution
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(rateCard).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedService(key)}
                  className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                    selectedService === key
                      ? "border-primary bg-sky-50 text-primary-dark font-semibold shadow-sm"
                      : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {selectedService === key && (
                      <span className="w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center shrink-0 text-[10px]">
                        ✓
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">₹{item.ratePerSqFt}/{item.unit}</div>
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2 italic">{currentRate.description}</p>
          </div>

          {/* Dimension Sliders / Inputs */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              2. Enter Approximate Dimensions (in Feet)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-slate-600">Width / Length</span>
                  <span className="text-sm font-bold text-primary">{length} ft</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="50"
                  step="1"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-slate-600">Height</span>
                  <span className="text-sm font-bold text-primary">{height} ft</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="1"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          </div>

          {/* Calculation summary banner */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">Calculated Area</p>
              <p className="text-xl font-bold text-slate-800">{totalSqFt} <span className="text-xs font-normal">sq. ft.</span></p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Estimated Cost Range</p>
              <p className="text-2xl font-extrabold text-primary">₹{estimatedCost.toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>

        {/* Right Col: Save Quote / Book Inspection Form */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1">Lock This Price & Book Site Visit</h4>
            <p className="text-xs text-slate-500 mb-4">
              Enter your details to receive an official itemized quotation and book a free laser measurement visit.
            </p>

            {isSaved ? (
              <div className="bg-white border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-slate-800 text-base">Estimate Saved!</h5>
                <p className="text-xs text-slate-600">
                  Our team has saved your estimate of <strong>₹{estimatedCost.toLocaleString("en-IN")}</strong>. We will call you to confirm your site visit.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSaved(false)}
                  className="text-xs text-primary font-semibold hover:underline"
                >
                  Calculate another estimate
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                {errorMsg && (
                  <div className="text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
                    {errorMsg}
                  </div>
                )}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Your Name *</label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-primary outline-none bg-white"
                  />
                  {errors.fullName && <span className="text-[10px] text-red-500">{errors.fullName.message}</span>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Mobile Number *</label>
                  <input
                    type="tel"
                    {...register("mobile")}
                    placeholder="10-digit number"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-primary outline-none bg-white"
                  />
                  {errors.mobile && <span className="text-[10px] text-red-500">{errors.mobile.message}</span>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Email (Optional)</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-primary outline-none bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 rounded-lg text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving Estimate...</span>
                    </>
                  ) : (
                    <>
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Get Final Discounted Quote</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="pt-4 border-t border-slate-200 mt-4 flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>5-Year Manufacturer Warranty included with every SS316 installation.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
