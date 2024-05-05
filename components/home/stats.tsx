import { Counter } from "../common/counter";

const stats = [
  { id: 1, name: "Creators on the platform", value: 8000 },
  { id: 2, name: "Flat platform fee", value: 3 },
  { id: 3, name: "Uptime guarantee", value: 99.9 },
  { id: 4, name: "Paid out to creators", value: 70 },
];

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-none lg:mx-0 lg:max-w-3xl">
          <h2 className="text-base font-semibold leading-8  text-primary">
            Our track record
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight  text-foreground sm:text-6xl">
            We provide the effective ideas that grow businesses.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10  text-muted-foreground sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l  border-foreground/10 pl-6"
            >
              <dt className="text-sm leading-6">{stat.name}</dt>
              <dd className="order-first text-5xl font-semibold text-foreground tracking-tight">
                <Counter start={0} end={stat.value} duration={2000} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
