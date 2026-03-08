import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardUI from "./DashboardUI";

export const metadata = {
  title: "Bid Portal Dashboard | UDGOK",
  description: "View active projects and submit bids on the UDGOK Subcontractor Portal.",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/portal");
  }

  const user = session.user as { name?: string; email?: string; role?: string; company?: string };

  return <DashboardUI user={{ name: user.name || "", email: user.email || "", role: user.role || "bidder", company: user.company || "" }} />;
}
