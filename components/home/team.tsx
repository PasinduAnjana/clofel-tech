import shashimalImg from "@/public/img/team/sashimal.webp";
import savinduImg from "@/public/img/team/savindu.jpg";
import yasasImg from "@/public/img/team/yasas.jpg";
import hashenImg from "@/public/img/team/hashen.jpg";
import Image from "next/image";

const people = [
  {
    name: "Shashimal Mudalige",
    role: "Founder / CEO",
    imageUrl: shashimalImg,
  },
  {
    name: "Savindu Rachinthana",
    role: "COO",
    imageUrl: savinduImg,
  },
  {
    name: "Yasas Sadeepa",
    role: "CTO",
    imageUrl: yasasImg,
  },
  {
    name: "Hashen Udara",
    role: "CPO",
    imageUrl: hashenImg,
  },
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are strong team who brings innovative ideas into production.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className=" size-20 rounded-full object-cover  grayscale"
                  src={person.imageUrl}
                  alt={person.name}
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-background/70">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-background/50">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
