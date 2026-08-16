import { TrendingUp, Users, UserMinus, HeartHandshake, Target, Link2, FileText, Percent, PiggyBank, Megaphone, Boxes, ShoppingCart, Filter, CalendarClock, Wallet, Repeat, Gauge } from "lucide-react";

// Icon per tool card key — shared by the free-tools hub and the category pages
// so both render the exact same card pattern.
export const toolIconMap = {
  arr: TrendingUp,
  mrr: CalendarClock,
  arpa: Wallet,
  nrr: Repeat,
  rule40: Gauge,
  cac: Users,
  churn: UserMinus,
  ltv: HeartHandshake,
  roas: Target,
  utm: Link2,
  llms: FileText,
  gross: Percent,
  net: PiggyBank,
  conversion: Filter,
} as const;

export const categoryIconMap = {
  marketing: Megaphone,
  saas: Boxes,
  ecommerce: ShoppingCart,
} as const;
