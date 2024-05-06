import { Check } from "lucide-react";

const timeline = [
  {
    name: "Discovery & Consultation",
    description:
      "For your case studies, they are critical to attention of your audience.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Planning & Strategy",
    description:
      " Strategic planning for optimal results in a Concise and effective approach.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Project development",
    description:
      "Create seamless experiences through innovative design and dev.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Quality Assurance",
    description:
      " Ensuring excellence through meticulous Testing and validation. ",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
];

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. iste dolor cupiditate blanditiis ratione.",
    icon: Check,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunti lorem cupidatat commodo.",
    icon: Check,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat  Et magna sit morbi lobortis.",
    icon: Check,
  },
];

function Header() {
  return (
    <div className=" px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Get the help you need
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Workflow Insights
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>
    </div>
  );
}

export default function Workflow() {
  return (
    <div className=" bg-white py-24 sm:py-32">
      <Header />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item, index) => (
            <div key={item.name}>
              <div className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                Step 0{index + 1}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7  text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative text-sm pl-8">
                    <dt className="inline font-semibold ">
                      <feature.icon
                        className="absolute left-1 top-1 size-4 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
