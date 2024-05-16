function Header() {
  return (
    <div className=" px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7   text-brand-800">
          Get the help you need
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight  text-foreground sm:text-6xl">
          The challenges of glass production
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Being among the most mechanized production lines in the world, glass
          factories deal with a lot of obstacles in their operations.
        </p>
      </div>
    </div>
  );
}

export default function Challenges() {
  return (
    <div className="py-24 sm:py-32">
      <Header />
      <div className="mx-auto max-w-7xl px-6 lg:px-8"></div>
    </div>
  );
}
