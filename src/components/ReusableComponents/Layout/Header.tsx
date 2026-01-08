import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type User = {
  id: string;
  name: string;
  clerkId: string;
  email: string;
  profileImage: string;
  stripeConnectId: string | null;
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date | null;
  subscription: boolean;
  stripeCustomerId: string | null;
};

type Props = {
  user: User;
};
const Header = ({ user }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full px-4 pt-10 sticky top-0 z-10 flex justify-between items-center flex-wrap gap-4 bg-background">
      {pathname.includes("pipeline") ? (
        <Button
          className="bg-primary/10 border border-border rounded-xl"
          variant={"outline"}
          onClick={() => router.push("/webinar")}
        >
          <ArrowLeft /> Back to Webinars
        </Button>
      ) : (
        <div className="px-4 py-2 flex justify-center text-bold items-center rounded-xl bg-background border border-border text-primary capitalize">
          {pathname.split("/")[1]}
        </div>
      )}
    </div>
  );
};

export default Header;
