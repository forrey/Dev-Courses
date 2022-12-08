import AuthForm from "../components/auth/auth-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function AuthPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (session && status !== "loading") {
    router.push("/");
  }

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session && status !== "loading") {
    return <AuthForm />;
  }
}

export default AuthPage;
