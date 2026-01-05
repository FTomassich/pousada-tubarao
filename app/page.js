"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Hospedagem", href: "#hospedagem" },
    { name: "Serviços", href: "#servicos" },
    { name: "Restaurante", href: "#restaurante" },
    { name: "Localização", href: "#localizacao" },
    { name: "Contato", href: "#contato" },
  ]

  const hospedagemCards = [
    {
      title: "Quarto Casal",
      description: "Quarto acolhedor para casal com banheiro privativo, ar-condicionado e geladeira.",
      image: "/images/674130310.jpg",
      alt: "Quarto de casal com cama e banheiro privativo",
    },
    {
      title: "Quarto Família",
      description: "Quarto espaçoso para família com beliches e camas, ideal para grupos.",
      image: "/images/336410150.jpg",
      alt: "Quarto familiar com beliches e cores vibrantes",
    },
    {
      title: "Chalé",
      description: "Chalé rústico com vista para o mar e ambiente tranquilo.",
      image: "/images/661312456.jpg",
      alt: "Chalé rústico com vista para o mar",
    },
  ]

  const servicosList = [
    "Café da manhã incluso",
    "Wi‑Fi gratuita e de alta velocidade",
    "Estacionamento público e pago nos arredores",
    "Bar/lounge",
    "Praia próxima",
    "Atividades para a família",
    "Serviço de traslado",
    "Churrasqueira",
    "Hotel para não fumantes",
    "Locação de caiaques",
  ]

  const comodidadesQuartos = [
    "Ar-condicionado",
    "Geladeira",
    "Quartos para não fumantes",
    "Suítes",
    "Quartos para família",
  ]

  return (
    <div className="bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold text-sky-700">Pousada Tubarão</span>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:block">
              <div className="flex items-center gap-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold text-gray-700 hover:text-sky-600 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-sky-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-semibold text-gray-700 hover:text-sky-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Principal Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                Pousada Tubarão – Encantadas, Ilha do Mel
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-8">
                Conforto, natureza e hospitalidade a poucos passos da praia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center bg-sky-600 text-white hover:bg-sky-700 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                  aria-label="Reservar agora na Pousada Tubarão"
                >
                  Reserve agora
                </a>
                <a
                  href="#hospedagem"
                  className="inline-flex items-center justify-center bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                >
                  Ver hospedagem
                </a>
              </div>
            </div>
            <div>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
                <Image
                  src="/images/483051518.jpg"
                  alt="Entrada da Pousada Tubarão com placa de madeira e teto de palha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospedagem Section */}
      <section id="hospedagem" className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Hospedagem</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
              Escolha entre nossas opções de hospedagem e encontre o quarto ideal para sua estadia na Ilha do Mel.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Oferecemos chalés com banheiro compartilhado, quartos com banheiro privado para até quatro pessoas e
              opções para casal com banheiro privativo. Também dispomos de suítes e quartos para famílias, todos em
              ambiente acolhedor e tranquilo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospedagemCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden ring-1 ring-slate-200"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={card.image || "/placeholder.svg"} alt={card.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <a
                    href="#contato"
                    className="block w-full text-center bg-sky-600 text-white hover:bg-sky-700 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                    aria-label={`Reservar ${card.title}`}
                  >
                    Reservar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Serviços e Comodidades</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Nossas diárias incluem café da manhã completo e internet Wi‑Fi gratuita. A pousada conta com bar/lounge,
              churrasqueira, serviço de traslado e recreação para toda a família. Estamos próximos da praia e oferecemos
              locação de caiaques para explorar a Ilha do Mel.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Serviços inclusos</h3>
            <div className="flex flex-wrap gap-3">
              {servicosList.map((servico, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-sky-50 text-sky-700 text-sm font-medium ring-1 ring-inset ring-sky-200"
                >
                  {servico}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Comodidades nos quartos</h3>
            <div className="flex flex-wrap gap-3">
              {comodidadesQuartos.map((comodidade, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-100 text-gray-700 text-sm font-medium ring-1 ring-inset ring-slate-200"
                >
                  {comodidade}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
                <Image
                  src="/images/414357339.jpg"
                  alt="Deck de madeira com palmeira e vista para o mar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
                <Image
                  src="/images/661308225.jpg"
                  alt="Quarto com porta aberta para área externa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurante Section */}
      <section id="restaurante" className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Restaurante Caribe</h2>
              <p className="text-gray-700 text-lg">
                A Pousada Tubarão também faz parte do Restaurante Caribe, localizado na praça de alimentação da Praia de
                Fora, a apenas 10 minutos da pousada. Uma opção deliciosa para completar sua experiência.
              </p>
            </div>
            <div>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
                <Image
                  src="/images/483051518.jpg"
                  alt="Entrada do restaurante com placas coloridas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section id="localizacao" className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Localização</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Estamos a apenas cinco minutos da famosa Gruta das Encantadas, um dos principais atrativos da Ilha do Mel.
              Também estamos próximos de supermercados locais, onde é possível realizar compras com cartão de crédito.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
                <Image
                  src="/images/414357339.jpg"
                  alt="Praia de Encantadas com deck de madeira e palmeira"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
                <Image
                  src="/images/674130507.jpg"
                  alt="Vista para área natural da Ilha do Mel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.0!2d-48.3!3d-25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiUyA0OMKwMTgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr&q=Pousada%20Tubarão%20Ilha%20do%20Mel%20Encantadas"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Pousada Tubarão na Ilha do Mel"
            />
          </div>
        </div>
      </section>

      {/* Detalhes e Contato Section */}
      <section id="contato" className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Detalhes úteis</h2>
              <p className="text-gray-700 text-lg mb-8">
                Nosso estabelecimento é econômico e familiar, ideal para quem busca simplicidade com conforto. Aceitamos
                pagamentos em cartões e dinheiro.
              </p>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-200 shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações adicionais</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Check-in a partir das 14h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Check-out até 12h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Café da manhã servido das 8h às 10h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Animais de estimação não são permitidos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Contato</h2>
              <p className="text-gray-700 text-lg mb-8">Entre em contato e garanta sua reserva.</p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5541999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-sky-600 text-white hover:bg-sky-700 rounded-lg font-semibold px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                  aria-label="Contatar via WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+5541999999999"
                  className="flex items-center justify-center gap-3 w-full bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50 rounded-lg font-semibold px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                  aria-label="Ligar para a pousada"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Telefone
                </a>
                <a
                  href="mailto:contato@pousadatubarao.com"
                  className="flex items-center justify-center gap-3 w-full bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50 rounded-lg font-semibold px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                  aria-label="Enviar email para a pousada"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pousada Tubarão</h3>
              <p className="text-sky-100">
                Praia de Encantadas, Ilha do Mel
                <br />
                Paraná – Brasil
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sky-100 hover:text-white transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Fale conosco</h3>
              <p className="text-sky-100 mb-2">WhatsApp: (41) 99999-9999</p>
              <p className="text-sky-100">Email: contato@pousadatubarao.com</p>
            </div>
          </div>
          <div className="border-t border-sky-800 pt-8 text-center text-sky-100">
            <p>&copy; 2025 Pousada Tubarão. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
