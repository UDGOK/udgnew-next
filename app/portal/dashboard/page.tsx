import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardUI from "./DashboardUI";
import { isAdmin } from "@/lib/db";

export const metadata = {
  title: "Bid Portal Dashboard | UDGOK",
  description: "View active projects and submit bids on the UDGOK Subcontractor Portal.",
};

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/portal");
  }

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress || "";
  const name = `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || email;
  const role = isAdmin(email) ? "admin" : "bidder";

  return (
    <DashboardUI
      user={{
        name,
        email,
        role,
        company: (user?.publicMetadata?.company as string) || "",
      }}
    />
  );
}
