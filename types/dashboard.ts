import React from "react";

export type ProductType = "all" | "edura" | "dinora" | "institute";

export interface ProductInfo {
  id: "edura" | "dinora" | "institute";
  name: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgLight: string;
  textColor: string;
  borderColor: string;
  tenants: number;
  activeUsers: string;
  health: string;
  latency: string;
  pods: number;
  mrr: string;
  version: string;
  status: string;
  logoUrl?: string;
  description?: string;
  modules?: string[];
  microservicesList?: string[];
  databaseType?: string;
}

export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  change?: string;
  badgeText?: string;
  icon: React.ComponentType<{ className?: string }>;
  colorScheme: "peach" | "cyan" | "emerald" | "amber";
}

export interface SubMetric {
  id: string;
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface MicroserviceItem {
  name: string;
  product: string;
  k8sCluster: string;
  pods: string;
  latency: string;
  cpu: string;
  memory: string;
  status: "Operational" | "Degraded" | "Scaling";
}

export interface ProvisionRecord {
  tenant: string;
  product: string;
  plan?: string;
  region: string;
  status: "Active" | "Pending" | "Deploying";
  time: string;
}

export interface NewTenantForm {
  name: string;
  product: "edura" | "dinora" | "institute";
  tier: string;
  adminEmail: string;
  region: string;
  subdomain: string;
}
