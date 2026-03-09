const FeaturedIn = () => {
  return (
    <section className="border-b border-border bg-card py-12">
      <div className="container">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border" />
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground whitespace-nowrap">
            Featured In
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex items-center">
          {/* USA Today — left side, pushed toward center */}
          <div className="flex flex-1 justify-end pr-10 md:pr-16 items-center opacity-75 cursor-default select-none">
            <span className="mr-2 text-4xl text-[#009BFF]">●</span>
            <span className="font-display text-5xl font-black text-foreground">
              USA Today
            </span>
          </div>

          {/* AP News — right side, pushed from center */}
          <div className="flex flex-1 justify-start pl-10 md:pl-16 opacity-75 cursor-default select-none">
            <span className="font-display text-5xl font-bold tracking-tight text-foreground">
              AP News
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
