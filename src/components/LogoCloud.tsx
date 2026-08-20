const placeholders = ["Client A", "Client B", "Client C", "Client D", "Client E"];

function LogoBlock({ name }: { name: string }) {
  return (
    <div className="flex h-12 w-40 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm font-medium text-gray-500 ring-1 ring-white/10 sm:w-full">
      {name}
    </div>
  );
}

export default function LogoCloud() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 sm:pb-24 lg:px-8">
      <h2 className="text-center text-lg/8 font-semibold text-white">
        Trusted by teams building what matters.
      </h2>

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:hidden">
        <div className="animate-marquee flex w-max gap-4">
          {[...placeholders, ...placeholders].map((name, i) => (
            <LogoBlock key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 hidden max-w-lg grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid sm:max-w-3xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {placeholders.map((name) => (
          <LogoBlock key={name} name={name} />
        ))}
      </div>
    </div>
  );
}
