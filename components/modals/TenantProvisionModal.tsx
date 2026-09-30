"use client";

import React, { useState } from "react";
import { X, AlertCircle } from "lucide-react";
import { NewTenantForm } from "@/types/dashboard";

interface TenantProvisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (tenant: NewTenantForm) => void;
}

export const TenantProvisionModal: React.FC<TenantProvisionModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [form, setForm] = useState<NewTenantForm>({
    name: "",
    product: "edura",
    tier: "Enterprise",
    adminEmail: "",
    region: "us-east-1",
    subdomain: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSuccess) {
      onSuccess(form);
    } else {
      alert(`Tenant "${form.name || "New Organization"}" provisioning initiated!`);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Provision New Organization Tenant
            </h3>
            <p className="text-xs text-slate-500">
              Automated cluster provisioning with strict database isolation
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Organization / Tenant Name
            </label>
            <input
              type="text"
              placeholder="e.g. Oxford Global Academy"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#F4F6FA] border border-slate-200 px-3.5 py-2.5 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D97757]/40"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Target Product</label>
              <select
                value={form.product}
                onChange={(e) =>
                  setForm({
                    ...form,
                    product: e.target.value as "edura" | "dinora" | "institute",
                  })
                }
                className="w-full bg-[#F4F6FA] border border-slate-200 px-3.5 py-2.5 rounded-lg text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#D97757]/40"
              >
                <option value="edura">Edura (LMS Platform)</option>
                <option value="dinora">Dinora (Restaurant Ops)</option>
                <option value="institute">Institute Platform</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Cloud Region</label>
              <select
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
                className="w-full bg-[#F4F6FA] border border-slate-200 px-3.5 py-2.5 rounded-lg text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#D97757]/40"
              >
                <option value="us-east-1">US East (N. Virginia)</option>
                <option value="eu-west-1">EU West (Ireland)</option>
                <option value="ap-south-1">AP South (Mumbai)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Admin Email (Root IAM)</label>
            <input
              type="email"
              placeholder="admin@organization.org"
              required
              value={form.adminEmail}
              onChange={(e) => setForm({ ...form, adminEmail: e.target.value })}
              className="w-full bg-[#F4F6FA] border border-slate-200 px-3.5 py-2.5 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D97757]/40"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Isolated Subdomain</label>
            <div className="flex items-center bg-[#F4F6FA] border border-slate-200 rounded-lg px-3.5 py-2">
              <input
                type="text"
                placeholder="oxford"
                required
                value={form.subdomain}
                onChange={(e) => setForm({ ...form, subdomain: e.target.value })}
                className="w-full bg-transparent text-slate-800 focus:outline-none font-semibold"
              />
              <span className="text-slate-400 font-mono text-[11px]">.nuralis.app</span>
            </div>
          </div>

          <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-lg flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Provisioning automatically generates an isolated tenant schema, KMS encryption key,
              and routes DNS traffic through the Nuralis IAM Gateway.
            </p>
          </div>

          <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg text-xs font-bold bg-[#D97757] hover:bg-[#C86A4B] text-white shadow-md shadow-orange-200 transition-all cursor-pointer"
            >
              Deploy Isolated Tenant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
