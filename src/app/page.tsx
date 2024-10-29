import Image from "next/image";
import Header from "./ui/dashboard/header";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center text-center p-8 pb-10 gap-16 sm:p-20">
        <h1>Squirrl</h1>
        Your personal financial overview.

        Track your personal finances all in one place from everyday budgeting and credit cards to investments and pensions.
        <div className="flex flex-row space-x-5">
          <Button>Log In</Button> <Button> Register </Button>
        </div>
      </div>
    </>
  );
}
