import { Suspense } from 'react';
import { format } from 'date-fns';
import CardWrapper from "@/app/ui/dashboard/cardwrapper";
import { CardSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  const now = new Date();
  const date = format(now, "EEEE do MMMM");

  return (
    <div>
      <h1 className="text-2xl pb-4">{date}</h1>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
    </div>
  );
}
