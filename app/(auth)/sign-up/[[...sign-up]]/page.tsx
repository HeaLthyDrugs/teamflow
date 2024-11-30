import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <main className="flex flex-col justify-center items-center bg-background min-h-screen">
      <Link href="/" className="mb-8">
        <Image 
          src="/assets/t.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-xl"
          priority
        />
      </Link>
      <SignUp />
    </main>
  ) 
};

export default SignUpPage;
