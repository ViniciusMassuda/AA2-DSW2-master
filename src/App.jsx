import { useState } from 'react';
import {
  Mountain,
  Compass,
  Users,
  Plus,
  User,
  Search,
  SlidersHorizontal,
  Navigation,
  ArrowRight,
} from 'lucide-react';
import TrailCard from './TrailCard';

const TRILHAS = [
  {
    id: 1,
    nome: 'Trilha da Cachoeira Escondida',
    tipo: 'Trilha',
    dificuldade: 'Moderada',
    cidade: 'Brotas, SP · a 38 km',
    distancia: '6,2 km',
    distanciaKm: 6.2,
    subida: '320 m',
    tempo: '2h30',
    nota: '4,6',
    imagem: 'cachoeira',
    temCachoeira: true,
  },
  {
    id: 2,
    nome: 'Circuito da Lagoa',
    tipo: 'Corrida',
    dificuldade: 'Fácil',
    cidade: 'São Carlos, SP · a 3 km',
    distancia: '5,0 km',
    distanciaKm: 5.0,
    subida: '20 m',
    tempo: '30 min',
    nota: '4,8',
    imagem: 'lagoa',
    temCachoeira: false,
  },
  {
    id: 3,
    nome: 'Pico do Gavião',
    tipo: 'Trilha',
    dificuldade: 'Difícil',
    cidade: 'São Bento do Sapucaí, SP · a 210 km',
    distancia: '9,8 km',
    distanciaKm: 9.8,
    subida: '780 m',
    tempo: '5h',
    nota: '4,9',
    imagem: 'pico',
    temCachoeira: false,
  },
  {
    id: 4,
    nome: 'Caminho do Mirante',
    tipo: 'Trilha',
    dificuldade: 'Fácil',
    cidade: 'Analândia, SP · a 52 km',
    distancia: '3,4 km',
    distanciaKm: 3.4,
    subida: '110 m',
    tempo: '1h15',
    nota: '4,7',
    imagem: 'mirante',
    temCachoeira: true,
  },
  {
    id: 5,
    nome: 'Volta do Campus',
    tipo: 'Corrida',
    dificuldade: 'Moderada',
    cidade: 'São Carlos, SP · a 5 km',
    distancia: '7,5 km',
    distanciaKm: 7.5,
    subida: '60 m',
    tempo: '45 min',
    nota: '4,5',
    imagem: 'corrida',
    temCachoeira: false,
  },
  {
    id: 6,
    nome: 'Serra das Araras',
    tipo: 'Trilha',
    dificuldade: 'Difícil',
    cidade: 'Itirapina, SP · a 30 km',
    distancia: '12 km',
    distanciaKm: 12,
    subida: '640 m',
    tempo: '4h30',
    nota: '4,8',
    imagem: 'serra',
    temCachoeira: false,
  },
];

const FILTROS = [
  'Todas',
  'Trilhas',
  'Corridas',
  'Fácil',
  'Moderada',
  'Difícil',
  'Até 5 km',
  'Com cachoeira',
];

export default function App() {
  const [filtro, setFiltro] = useState('Todas');
  const [busca, setBusca] = useState('');

  const trilhasFiltradas = TRILHAS.filter((t) => {
    const termo = busca.trim().toLowerCase();
    const bateBusca =
      !termo ||
      t.nome.toLowerCase().includes(termo) ||
      t.cidade.toLowerCase().includes(termo) ||
      t.tipo.toLowerCase().includes(termo);

    if (!bateBusca) return false;

    if (filtro === 'Todas') return true;
    if (filtro === 'Trilhas') return t.tipo === 'Trilha';
    if (filtro === 'Corridas') return t.tipo === 'Corrida';
    if (filtro === 'Até 5 km') return t.distanciaKm <= 5;
    if (filtro === 'Com cachoeira') return t.temCachoeira;
    return t.dificuldade === filtro;
  });

  return (
    <div className="min-h-dvh bg-background pb-[calc(4.25rem+env(safe-area-inset-bottom))] md:pb-0 font-sans text-foreground antialiased">
      <header className="sticky top-0 z-20 border-b border-border bg-background md:bg-background/85 md:backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 lg:px-6">
          <a href="#" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Mountain className="size-5" aria-hidden="true" />
            </span>
            <span>
              Trilha<span className="text-brasa-600">BR</span>
            </span>
          </a>

          <nav
            className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-card pb-[env(safe-area-inset-bottom)] md:static md:border-0 md:bg-transparent md:pb-0 md:items-center md:gap-1"
            aria-label="Navegação principal"
          >
            <a
              href="#"
              aria-current="page"
              className="flex flex-1 flex-col items-center gap-1 py-2 text-[0.6875rem] font-semibold text-muted-foreground aria-[current=page]:text-primary md:flex-none md:flex-row md:gap-2 md:rounded-lg md:px-3 md:text-sm md:hover:bg-muted md:aria-[current=page]:bg-secondary [&>svg]:size-5 md:[&>svg]:size-4"
            >
              <Compass className="size-4 flex-none" aria-hidden="true" />
              Explorar
            </a>
            <a
              href="#saidas"
              className="flex flex-1 flex-col items-center gap-1 py-2 text-[0.6875rem] font-semibold text-muted-foreground aria-[current=page]:text-primary md:flex-none md:flex-row md:gap-2 md:rounded-lg md:px-3 md:text-sm md:hover:bg-muted md:aria-[current=page]:bg-secondary [&>svg]:size-5 md:[&>svg]:size-4"
            >
              <Users className="size-4 flex-none" aria-hidden="true" />
              Saídas
            </a>
            <a
              href="#criar"
              className="flex flex-1 flex-col items-center gap-1 py-2 text-[0.6875rem] font-semibold text-muted-foreground aria-[current=page]:text-primary md:flex-none md:flex-row md:gap-2 md:rounded-lg md:px-3 md:text-sm md:hover:bg-muted md:aria-[current=page]:bg-secondary [&>svg]:size-5 md:[&>svg]:size-4"
            >
              <Plus className="size-4 flex-none" aria-hidden="true" />
              Criar
            </a>
            <a
              href="#perfil"
              className="flex flex-1 flex-col items-center gap-1 py-2 text-[0.6875rem] font-semibold text-muted-foreground aria-[current=page]:text-primary md:flex-none md:flex-row md:gap-2 md:rounded-lg md:px-3 md:text-sm md:hover:bg-muted md:aria-[current=page]:bg-secondary [&>svg]:size-5 md:[&>svg]:size-4"
            >
              <User className="size-4 flex-none" aria-hidden="true" />
              Perfil
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#criar"
              className="btn hidden lg:inline-flex bg-brasa-600 shadow-sm hover:bg-brasa-700"
            >
              <Plus className="size-4 flex-none" aria-hidden="true" />
              Criar saída
            </a>
            <a href="#perfil" className="avatar" data-size="lg" aria-label="Meu perfil">
              <span className="bg-terra-700! font-bold text-white!">PV</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pt-4 lg:px-6 lg:pt-6">
        <section className="min-h-[30rem] md:min-h-[28rem] lg:min-h-[34rem] relative isolate flex items-end overflow-hidden rounded-3xl bg-floresta-900 text-white shadow-xl md:items-center">
          <img
            src="/img/hero-serra-fina-720.webp"
            srcSet="/img/hero-serra-fina-720.webp 720w, /img/hero-serra-fina.webp 1600w"
            sizes="(min-width: 72rem) 72rem, 100vw"
            alt="Duas pessoas caminhando no alto de uma crista coberta de mata, com nuvens sobre a serra"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-20 size-full object-cover object-[70%_center]"
          />
          <div
            className="bg-linear-to-t from-black/85 to-black/10 md:bg-linear-to-r md:from-black/80 md:to-transparent absolute inset-0 -z-10"
            aria-hidden="true"
          />
          <div className="w-full max-w-xl p-6 sm:p-8 md:p-12">
            <span className="motion-safe:animate-surgir badge border-white/25! bg-white/15! text-white! backdrop-blur-md">
              <Mountain className="size-4 flex-none" aria-hidden="true" />
              Mais de 120 trilhas e percursos
            </span>
            <h1 className="motion-safe:animate-surgir [animation-delay:80ms] mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Sua próxima aventura começa aqui
            </h1>
            <p className="motion-safe:animate-surgir [animation-delay:160ms] mt-4 max-w-md text-base text-white/85 sm:text-lg">
              Descubra trilhas e percursos de corrida perto de você e marque saídas em grupo.
            </p>
            <form
              className="motion-safe:animate-surgir [animation-delay:240ms] mt-6 flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-2xl sm:flex-row"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="busca" className="sr-only">
                Buscar
              </label>
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  id="busca"
                  type="search"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Trilha, cidade ou percurso"
                  className="h-11 w-full rounded-xl bg-transparent pr-3 pl-10 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <button type="submit" className="btn h-11 px-5" data-size="lg">
                Buscar
              </button>
            </form>
          </div>
        </section>

        <div className="mt-8 flex items-center gap-3">
          <div
            className="-mx-4 px-4 [scrollbar-width:none] md:mx-0 md:px-0 flex flex-1 gap-2 overflow-x-auto py-1 lg:flex-wrap"
            role="group"
            aria-label="Filtros"
          >
            {FILTROS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFiltro(item)}
                aria-pressed={filtro === item}
                className="inline-flex h-9 flex-none cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-4 text-sm font-medium transition-colors hover:bg-secondary aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
              >
                {item}
              </button>
            ))}
          </div>
          <button type="button" className="btn hidden md:inline-flex" data-variant="outline">
            <SlidersHorizontal className="size-4 flex-none" aria-hidden="true" />
            Mais filtros
          </button>
        </div>

        <div className="mt-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Perto de você</h2>
            <p className="mt-1 flex items-center gap-1.5 text-muted-foreground">
              <Navigation className="size-3.5" aria-hidden="true" />
              São Carlos e região
            </p>
          </div>
          <a href="#" className="btn" data-variant="ghost">
            Ver mapa
            <ArrowRight className="size-4 flex-none" aria-hidden="true" />
          </a>
        </div>

        <section
          className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Trilhas perto de você"
        >
          {trilhasFiltradas.map((trilha) => (
            <TrailCard key={trilha.id} trilha={trilha} />
          ))}
        </section>

        <section
          id="saidas"
          className="relative isolate mt-14 overflow-hidden rounded-3xl bg-floresta-900 text-white"
        >
          <img
            src="/img/por-do-sol-720.webp"
            srcSet="/img/por-do-sol-720.webp 720w, /img/por-do-sol.webp 1600w"
            sizes="100vw"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 size-full object-cover"
          />
          <div
            className="absolute inset-0 -z-10 bg-linear-to-r from-floresta-900/95 via-floresta-900/70 to-floresta-900/10"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-6 p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <p className="text-sm font-bold tracking-widest text-brasa-300 uppercase">
                Saídas em grupo
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Não vá sozinho. 14 saídas marcadas nesta semana.
              </h2>
              <p className="mt-2 text-white/80">
                Encontre gente no seu ritmo e combine carona, horário e ponto de encontro.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#saidas"
                className="btn bg-brasa-600 shadow-sm hover:bg-brasa-700 h-11 px-5"
                data-size="lg"
              >
                Ver saídas
                <ArrowRight className="size-4 flex-none" aria-hidden="true" />
              </a>
              <a
                href="#criar"
                className="btn border-white/25 bg-white/15 text-white backdrop-blur-md hover:bg-white/25 hover:text-white h-11 px-5"
                data-variant="outline"
                data-size="lg"
              >
                <Plus className="size-4 flex-none" aria-hidden="true" />
                Criar saída
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <p>
            <strong className="text-foreground">
              Trilha<span className="text-brasa-600">BR</span>
            </strong>{' '}
            · Pedro Vinicius, Lucas Crempe e Vinicius Massuda · DSW2, DC-UFSCar
          </p>
          <p>
            Fotos: Wikimedia Commons (
            <a href="/img/CREDITOS.md" className="underline underline-offset-4 hover:text-foreground">
              créditos
            </a>
            )
          </p>
        </div>
      </footer>
    </div>
  );
}