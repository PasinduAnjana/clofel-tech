import RevealText from "@/components/home/reveal-animation";

const features = [
  {
    name: "Intricate setup processes",
    description:
      "In glass production, no setup process is the same. Workers need to make numerous adjustments when switching to new products – this lack of uniformity due to reliance on analog techniques increases costs and risks.",
  },
  {
    name: "Sustainability",
    description:
      "Lack of efficiency can lead to the waste of resources and time as well as scrap and high energy consumption. This not only results in increased costs but also in failed opportunities for promoting sustainability.",
  },
  {
    name: "Heterogeneous system and equipment",
    description:
      "Collecting data can be challenging, especially in environments with diverse glass manufacturing software systems and equipment. Nonetheless, gathering structured data over extended periods is the key to optimizing any glass factory.",
  },
  {
    name: "High dependency on experienced workers",
    description:
      "In the highly specialized glass manufacturing industry, the ability to depend on historical data and systematically enhance SOPs has gained immense importance, especially in the context of a growing skill-shortage.",
  },
];

function Header() {
  return (
    <div className=" px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <RevealText>
          <p className="text-base font-semibold leading-7   text-brand-800">
            Get the help you need
          </p>
        </RevealText>

        <RevealText>
          <h2 className="mt-2 text-4xl font-bold tracking-tight  text-foreground sm:text-6xl">
            The challenges of glass production
          </h2>
        </RevealText>
        <RevealText>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Being among the most mechanized production lines in the world, glass
            factories deal with a lot of obstacles in their operations.
          </p>
        </RevealText>
      </div>
    </div>
  );
}

export default function Challenges() {
  return (
    <div className="py-24 sm:py-32">
      <Header />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl  mt-4 lg:max-w-5xl">
          <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none  lg:grid-cols-2  ">
            {features.map((feature, index) => (
              <RevealText
                key={feature.name}
                className="relative bg-muted/50 rounded-2xl px-8 py-8 "
              >
                <div className=" text-lg text-muted-foreground/90">
                  0{index + 1}
                </div>
                <dt className="text-2xl mt-4 font-semibold leading-7  text-foreground">
                  {feature.name}
                </dt>
                <dd className="mt-6  text-md leading-7  text-muted-foreground">
                  {feature.description}
                </dd>
              </RevealText>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
