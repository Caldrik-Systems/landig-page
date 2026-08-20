import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  CircleStackIcon,
  CloudIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  CubeIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  GlobeAltIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  ShareIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserIcon,
  UsersIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";

const sidebarFeatures = [
  {
    icon: ShieldCheckIcon,
    title: "Built for the enterprise",
    description: "Security, identity and governance at every step.",
  },
  {
    icon: UserIcon,
    title: "Human in the loop",
    description: "AI augments people, it doesn't remove them.",
  },
  {
    icon: ChartBarIcon,
    title: "Observable & reliable",
    description: "Every action is evaluated, monitored and improved.",
  },
];

const environmentBoxes = [
  { icon: CircleStackIcon, title: "Data", description: "Databases, files, documents, events" },
  { icon: CubeIcon, title: "Systems & Applications", description: "ERP, CRM, core systems, APIs, SaaS, legacy" },
  { icon: UsersIcon, title: "Identities", description: "Users, roles, groups, service accounts" },
  { icon: GlobeAltIcon, title: "External Sources", description: "Web, partners, market data, feeds" },
];

const workflowSteps = [
  { icon: ViewfinderCircleIcon, title: "1. Context", description: "Understand request, user, intent" },
  { icon: MagnifyingGlassIcon, title: "2. Retrieve", description: "Search & retrieve relevant context" },
  { icon: CpuChipIcon, title: "3. Reason", description: "Model reasoning & planning" },
  { icon: ShareIcon, title: "4. Orchestrate", description: "Decide next steps, select tools" },
  { icon: CheckBadgeIcon, title: "5. Validate", description: "Apply rules, guardrails, checks" },
];

const toolsAndActions = [
  { icon: CloudIcon, title: "APIs" },
  { icon: CircleStackIcon, title: "Databases" },
  { icon: MagnifyingGlassIcon, title: "Search" },
  { icon: Squares2X2Icon, title: "Applications" },
  { icon: Cog6ToothIcon, title: "Workflow Engine" },
  { icon: EllipsisHorizontalIcon, title: "More" },
];

const loopSteps = [
  { icon: PlayIcon, title: "Execution", description: "Act in systems, update records, trigger workflows" },
  { icon: DocumentTextIcon, title: "Observe & Log", description: "Capture traces, logs, and outcomes" },
  { icon: ChartBarIcon, title: "Evaluate", description: "Quality, accuracy, safety, policy checks" },
  { icon: ArrowTrendingUpIcon, title: "Improve", description: "Feedback loop, continuous learning" },
];

function DiagramBox({
  icon: Icon,
  title,
  description,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-white/15 bg-gray-900 p-4 ${className}`}>
      <div className="flex items-center gap-2">
        <Icon aria-hidden className="size-5 shrink-0 text-brand" />
        <p className="text-sm font-semibold text-white uppercase">{title}</p>
      </div>
      {description && <p className="mt-1.5 text-xs text-gray-400">{description}</p>}
    </div>
  );
}

function DottedConnector({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto h-6 w-px border-l border-dashed border-brand/40 ${className}`} aria-hidden />
  );
}

function StepArrow() {
  return (
    <div className="flex shrink-0 items-center px-1" aria-hidden>
      <ArrowRightIcon className="size-4 text-brand/60" />
    </div>
  );
}

export default function SystemArchitecture() {
  return (
    <section id="systems" className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-[minmax(0,380px)_1fr]">
          {/* Left column */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-brand uppercase">
              02 / AI in the Enterprise
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-white">AI doesn&apos;t replace your enterprise.</span>{" "}
              <span className="text-brand">It becomes part of it.</span>
            </h2>
            <div className="mt-6 h-px w-12 bg-brand" />
            <p className="mt-6 text-base/7 text-gray-300">
              Production AI has to operate within the systems, data, identities, controls and workflows
              already in place. That&apos;s why we engineer the entire system — not just the model.
            </p>

            <ul className="mt-10 space-y-6">
              {sidebarFeatures.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5">
                    <feature.icon aria-hidden className="size-5 text-brand" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{feature.title}</p>
                    <p className="mt-0.5 text-sm text-gray-400">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-2 border-t border-white/10 pt-6 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-white/40" aria-hidden />
                Data / Control Flow
              </div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 border-t border-dashed border-white/40" aria-hidden />
                Feedback Loop
              </div>
              <div className="flex items-center gap-2">
                <LockClosedIcon aria-hidden className="size-3.5 text-white/40" />
                Security &amp; Governance Boundary
              </div>
            </div>
          </div>

          {/* Right column: diagram, horizontal scroll on narrow viewports */}
          <div className="overflow-x-auto">
            <div className="w-[1000px]">
              {/* Enterprise environment */}
              <div className="rounded-2xl border border-white/15 p-5">
                <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase">
                  Enterprise Environment
                </p>
                <div className="mt-4 grid grid-cols-4 gap-4">
                  {environmentBoxes.map((box) => (
                    <DiagramBox key={box.title} {...box} />
                  ))}
                </div>
              </div>

              {/* Comb connector: 4 stubs merging into 1 */}
              <div className="relative mx-8">
                <div className="grid grid-cols-4">
                  {environmentBoxes.map((box) => (
                    <DottedConnector key={box.title} />
                  ))}
                </div>
                <div className="absolute inset-x-0 top-6 border-t border-dashed border-brand/40" aria-hidden />
              </div>
              <DottedConnector />

              {/* Security & governance boundary */}
              <div className="relative rounded-2xl border-2 border-dashed border-white/15 p-5">
                <LockClosedIcon
                  aria-hidden
                  className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rounded-full bg-gray-950 p-1 text-gray-500"
                />
                <LockClosedIcon
                  aria-hidden
                  className="absolute top-1/2 -right-3 size-6 -translate-y-1/2 rounded-full bg-gray-950 p-1 text-gray-500"
                />

                <div className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-brand">
                    <ShieldCheckIcon aria-hidden className="size-4" />
                    Security · Identity · Governance
                  </div>
                  <p className="mt-1 text-xs text-gray-400">
                    Authentication · Authorization · Secrets · Data Access · Compliance · Audit
                  </p>
                </div>

                <DottedConnector />

                <div className="rounded-xl border border-white/15 p-4">
                  <p className="text-center text-xs font-semibold tracking-widest text-brand uppercase">
                    AI-Enabled Workflow
                  </p>
                  <div className="mt-4 flex items-stretch">
                    {workflowSteps.map((step, i) => (
                      <div key={step.title} className="flex flex-1 items-stretch">
                        <DiagramBox {...step} className="flex-1" />
                        {i < workflowSteps.length - 1 && <StepArrow />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-[1fr_260px] gap-4">
                  <div>
                    <DottedConnector />
                    <div className="rounded-xl border border-white/15 p-4">
                      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase">
                        Tools &amp; Actions
                      </p>
                      <div className="mt-3 grid grid-cols-6 gap-2">
                        {toolsAndActions.map((tool) => (
                          <div key={tool.title} className="flex flex-col items-center gap-1 text-center">
                            <tool.icon aria-hidden className="size-5 text-brand" />
                            <p className="text-[10px] text-gray-400">{tool.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <DottedConnector />
                    <DiagramBox
                      icon={UsersIcon}
                      title="Human in the Loop"
                      description="Review, approve, provide input"
                    />
                  </div>
                </div>
              </div>

              <DottedConnector />

              {/* Execution loop */}
              <div className="flex items-stretch">
                {loopSteps.map((step, i) => (
                  <div key={step.title} className="flex flex-1 items-stretch">
                    <DiagramBox {...step} className="flex-1" />
                    {i < loopSteps.length - 1 && <StepArrow />}
                  </div>
                ))}
              </div>

              <DottedConnector />

              {/* Enterprise action */}
              <div className="flex items-center gap-3 rounded-xl border border-brand/40 bg-brand/10 p-4">
                <CheckCircleIcon aria-hidden className="size-6 shrink-0 text-brand" />
                <div>
                  <p className="text-sm font-semibold text-white">Enterprise Action</p>
                  <p className="text-xs text-gray-400">Committed actions, outcomes, and business impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
