import { TrendingUp, Users, UserMinus, HeartHandshake, Target, Link2, FileText, Percent, PiggyBank, Megaphone, Boxes, ShoppingCart } from "lucide-react";

// Icon per tool card key — shared by the free-tools hub and the category pages
// so both render the exact same card pattern.
export const toolIconMap = {
  arr: TrendingUp,
  cac: Users,
  churn: UserMinus,
  ltv: HeartHandshake,
  roas: Target,
  utm: Link2,
  llms: FileText,
  gross: Percent,
  net: PiggyBank,
} as const;

export const categoryIconMap = {
  marketing: Megaphone,
  saas: Boxes,
  ecommerce: ShoppingCart,
} as const;
