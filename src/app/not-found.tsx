import { NotFound, Illustration } from "@/components/ui/not-found";

export default function NotFoundPage() {
  return (
    <div className="relative flex flex-col w-full justify-center min-h-svh bg-[#080f19] p-6 md:p-10">
      <div className="relative max-w-5xl mx-auto w-full">
        <Illustration className="absolute inset-0 w-full h-[50vh] opacity-[0.06] text-[#5170ff]" />
        <NotFound />
      </div>
    </div>
  );
}
