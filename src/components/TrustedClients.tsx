// HIDDEN in production — visible in dev only (see page.tsx)
import Image from "next/image";

const clients = [
  { name: "HDFC Bank",           logo: "/logos/hdfc.svg",         w: 714,  h: 119 },
  { name: "ICICI Bank",          logo: "/logos/icici.svg",        w: 311,  h: 59  },
  { name: "Bajaj Finserv",       logo: "/logos/bajaj.svg",        w: 480,  h: 208 },
  { name: "Fortis Healthcare",   logo: "/logos/fortis.svg",       w: 516,  h: 194 },
  { name: "Max Healthcare",      logo: "/logos/maxhealthcare.svg",w: 310,  h: 103 },
  { name: "Cipla",               logo: "/logos/cipla.svg",        w: 1024, h: 355 },
  { name: "SBI",                 logo: "/logos/sbi.svg",          w: 161,  h: 55  },
  { name: "Aditya Birla Capital",logo: "/logos/adityabirla.svg",  w: 159,  h: 36  },
];

export default function TrustedClients() {
  return (
    <section className="bg-[#080f19] pb-10 md:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-500 mb-8">
          Trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((c) => (
            <div key={c.name} className="flex items-center h-7">
              <Image
                src={c.logo}
                alt={c.name}
                width={c.w}
                height={c.h}
                className="h-full w-auto"
                style={{ opacity: 0.85 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
