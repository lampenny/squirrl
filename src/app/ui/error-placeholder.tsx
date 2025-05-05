import { ChartSkeleton } from './skeletons'

export default function ErrorPlaceHolder() {
  return (
    <>
      <div
        className={`relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <p className="absolute pt-10 text-5xl">
        Something went wrong. Please try again.
      </p>
      <div className="mt-10">
        <ChartSkeleton />
      </div>
    </>
  )
}
