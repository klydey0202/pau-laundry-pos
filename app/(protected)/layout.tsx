// import { DeployButton } from "@/components/deploy-button";
// import { EnvVarWarning } from "@/components/env-var-warning";
// import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
// import { hasEnvVars } from "@/lib/utils";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
// import Link from "next/link";
// import PauLogo from '../../assets/images/logos/palaundry_logo_raw_stroked.png'
// import Image from "next/image";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <Header />
        <HeaderMobile />
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          {children}
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-6">
          <p>
            Powered by{" "}
            <span className="font-bold hover:underline">
              Pandaline
            </span>
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
