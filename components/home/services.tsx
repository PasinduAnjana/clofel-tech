import { Separator } from "../ui/separator";

const tiers = [
  {
    name: "Software Development",
    id: "Dev",
    href: "#",
    featured: false,
    description:
      "Clofel Tech is your partner in innovative Software Development. Our experienced developers use cutting-edge technologies to create custom software solutions. From web applications to mobile apps and everything in between, we deliver high-quality software that drives your business forward.",
    price: { monthly: "$15", annually: "$144" },
  },
  {
    name: "Artificial Intelligence",
    id: "AI",
    href: "#",
    featured: true,
    description:
      "We harness the power of Artificial Intelligence (AI) & Machine Learning (ML) to revolutionize the way businesses operate. Our experts specializes in developing AI-powered solutions that automate processes, analyze data, and provide valuable insights. Whether you need natural language processing, image recognition, or predictive analytics, we have the expertise to turn your AI ambitions into reality.",

    price: { monthly: "$60", annually: "$576" },
  },
  {
    name: "IoT Solutions",
    id: "IoT",
    href: "#",
    featured: false,
    description:
      "Experience the future of industry with our cutting-edge IIOT solutions. From smart sensors to advanced analytics, we empower businesses to optimize operations, increase efficiency, and unlock new possibilities in Industry 5.0 . Discover how our innovative IIOT technologies can propel your business forward.",
    price: { monthly: "$30", annually: "$288" },
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <div className="isolate overflow-hidden  bg-brand-800">
      <div className="flow-root pb-16 pt-24 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10">
            <h2 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight  text-background">
              Simple pricing, no commitment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8  text-background/60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              numquam eligendi quos odit doloribus molestiae voluptatum quos
              odit doloribus.
            </p>
          </div>
          <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none  lg:grid-cols-3">
            {/* <svg
              viewBox="0 0 1208 1024"
              aria-hidden="true"
              className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
            >
              <ellipse
                cx={604}
                cy={512}
                fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg> */}
            <div
              className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-background lg:ring-1 lg:ring-white/10"
              aria-hidden="true"
            />
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "z-10  bg-foreground shadow-xl ring-1 ring-gray-900/5"
                    : "bg-background ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0",
                  "relative rounded-2xl"
                )}
              >
                <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? "text-gray-900" : " text-foreground",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    <span
                      className={classNames(
                        tier.featured ? "text-muted/60" : ""
                      )}
                    >
                      Our Services
                    </span>{" "}
                    {tier.id}
                  </h3>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div className="mt-2 flex items-center gap-x-4">
                      <p
                        className={classNames(
                          tier.featured ? "text-gray-900" : " text-foreground",
                          "text-4xl font-bold tracking-tight "
                        )}
                      >
                        {tier.name}
                      </p>
                    </div>
                    <div>
                      <Separator />
                    </div>
                  </div>
                  <div className="mt-8 flow-root sm:mt-10">
                    <div
                      className={classNames(
                        tier.featured
                          ? "divide-gray-900/5 border-gray-900/5 text-gray-600"
                          : "divide-white/5 border-white/5  text-foreground",
                        "-my-2 divide-y border-t text-sm leading-6 lg:border-t-0"
                      )}
                    >
                      {tier.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-white border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8"></div>
      </div>
    </div>
  );
}
