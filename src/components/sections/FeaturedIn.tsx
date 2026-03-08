const FeaturedIn = () => {
  return (
    <section className="border-b border-border bg-card py-12">
      <div className="container">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {/* AP News */}
          <div className="opacity-40 grayscale transition-all duration-300 hover:opacity-75 hover:grayscale-0 cursor-default select-none">
            <span className="font-display text-5xl font-bold tracking-tight text-foreground">
              AP NEWS
            </span>
          </div>

          {/* USA Today */}
          <div className="flex items-center opacity-40 grayscale transition-all duration-300 hover:opacity-75 hover:grayscale-0 cursor-default select-none">
            <span className="mr-2 text-4xl text-[#009BFF]">●</span>
            <span className="font-display text-5xl font-black uppercase text-foreground">
              USA TODAY
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
