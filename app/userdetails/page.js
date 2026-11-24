
"use client";
import { useSearchParams } from "next/navigation";
export default function UserDetails() {
    const searchParams = useSearchParams()
    const email = searchParams.get("email")
    const password = searchParams.get("password")
  return (
    <div>
     <div>Email:{email}</div>
     <div>password:{password}</div>

    </div>
  );
  
}