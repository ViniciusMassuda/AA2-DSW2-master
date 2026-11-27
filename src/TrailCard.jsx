import { Star, MapPin, Route, TrendingUp, Clock } from 'lucide-react';

export default function TrailCard({ trilha }) {
  return (
    <article className="card pt-0 transition duration-300 hover:-translate-y-1 hover:shadow-xl group">
      <div className="relative overflow-hidden bg-muted aspect-[16/10]">
        <img
          className="size-full object-cover"
          src={`/img/${trilha.imagem}-720.webp`}
          alt={trilha.nome}
        />
        <span className="badge absolute top-3 left-3 z-10 bg-black/55 text-white">
          {trilha.tipo}
        </span>
        <span className="absolute right-3 bottom-3 z-10 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-xs font-bold text-stone-900">
          <Star className="size-3.5 fill-amber-400 text-amber-400" />
          {trilha.nota}
        </span>
      </div>

      <section className="grid gap-3">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-bold">{trilha.nome}</h3>
            <span className="badge bg-card" data-variant="outline">
              {trilha.dificuldade}
            </span>
          </div>
          <p className="mt-1 flex items-center gap-1 text-muted-foreground">
            <MapPin className="size-3.5" />
            {trilha.cidade}
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-2 border-t border-border pt-3">
          <div>
            <dt className="text-xs text-muted-foreground flex items-center gap-1">
              <Route className="size-3.5" /> Distância
            </dt>
            <dd className="font-bold">{trilha.distancia}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="size-3.5" /> Subida
            </dt>
            <dd className="font-bold">{trilha.subida}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="size-3.5" /> Tempo
            </dt>
            <dd className="font-bold">{trilha.tempo}</dd>
          </div>
        </dl>
      </section>
    </article>
  );
}