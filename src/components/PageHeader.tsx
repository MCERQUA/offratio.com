export default function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-brass/10 bg-gradient-to-b from-oxblood-dark/40 via-void to-void py-20 sm:py-28">
      <img
        src="/images/dossier-texture.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="stamp mb-4 text-xs text-brass">{kicker}</p>
        <h1 className="font-display text-4xl tracking-wide text-bone sm:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bone/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
