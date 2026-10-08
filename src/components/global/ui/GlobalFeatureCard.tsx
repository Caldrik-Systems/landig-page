import { GlobalGridPattern, cardSquares } from "./GlobalGridPattern";

export function GlobalFeatureCard({ title, description }: { title: string; description: string }) {
  const squares = cardSquares();

  return (
    <div className="relative overflow-hidden p-6 md:p-8">
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GlobalGridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={squares}
            className="fill-brand/8 stroke-brand/20 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      <h3 className="text-base font-bold text-white">{title}</h3>
      <p className="text-gray-400 relative z-20 mt-2 text-sm leading-6">{description}</p>
    </div>
  );
}
