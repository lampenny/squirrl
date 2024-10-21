import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="md:text-2xl font-bold">
        <Link href="/dashboard">
          Squirrl
        </Link>
      </div>

      <div className="flex space-x-10 text-sm md:text-base">
        <Link href="/dashboard/settings">
          Settings
        </Link>
        <Link href="/">
          Logout
        </Link>
      </div>

    </div>
  );
}