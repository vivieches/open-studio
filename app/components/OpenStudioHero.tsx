import { AbstractHeroShapes } from "./AbstractHeroShapes";

export function OpenStudioHero() {
  return (
    <section className="relative min-h-[280px]" aria-labelledby="dashboard-hero-title">
      <AbstractHeroShapes />

      <div className="relative z-10 max-w-[625px] pt-[44px]">
        <h1
          id="dashboard-hero-title"
          aria-label="Crea, organiza y publica más rápido."
          className="font-sans text-[54px] font-medium leading-[0.99] tracking-tight text-[#F5F2F4] sm:text-[64px] xl:text-[70px]"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Crea, organiza y
          <br />
          publica{" "}
          <em className="font-medium italic text-accent">más rápido.</em>
        </h1>

        <p className="mt-[27px] max-w-[430px] text-[16px] leading-[1.55] text-[#A0A3AD]">
          Todo lo que necesitas para guiones, miniaturas,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          música y assets creativos. En un solo lugar.
        </p>

        <div className="mt-[30px] h-px w-[34px] bg-accent shadow-[0_0_16px_rgba(208,111,167,0.30)]" />
      </div>
    </section>
  );
}
