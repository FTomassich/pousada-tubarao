"use client"

import { useState } from "react";
import { FaSnowflake } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

export default function PousadaTubaraoLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-sky-600">Pousada Tubarão</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <div className="flex items-center space-x-6">
                  
                  <a href="#hospedagem" className="text-gray-700 hover:text-sky-600 font-semibold transition">
                    Hospedagem
                  </a>
                  <a href="#servicos" className="text-gray-700 hover:text-sky-600 font-semibold transition">
                    Serviços
                  </a>
                  <a href="#restaurante" className="text-gray-700 hover:text-sky-600 font-semibold transition">
                    Restaurante
                  </a>
                  <a href="#localizacao" className="text-gray-700 hover:text-sky-600 font-semibold transition">
                    Localização
                  </a>
                  <a href="#contato" className="text-gray-700 hover:text-sky-600 font-semibold transition">
                    Contato
                  </a>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                aria-label="Abrir menú de navegación"
                aria-expanded={mobileMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t border-slate-200 py-4 z-40 shadow-lg">
              <div className="flex flex-col space-y-3">
                <a
                  href="#hospedagem"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-sky-600 font-semibold transition px-4 py-2 rounded-lg hover:bg-slate-50"
                >
                  Hospedagem
                </a>
                <a
                  href="#servicos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-sky-600 font-semibold transition px-4 py-2 rounded-lg hover:bg-slate-50"
                >
                  Serviços
                </a>
                <a
                  href="#restaurante"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-sky-600 font-semibold transition px-4 py-2 rounded-lg hover:bg-slate-50"
                >
                  Restaurante
                </a>
                <a
                  href="#localizacao"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-sky-600 font-semibold transition px-4 py-2 rounded-lg hover:bg-slate-50"
                >
                  Localização
                </a>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-sky-600 font-semibold transition px-4 py-2 rounded-lg hover:bg-slate-50"
                >
                  Contato
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pousada Tubarão – Encantadas, Ilha do Mel
            </h2>
            <p className="text-lg text-gray-700 mb-8">Conforto, natureza e hospitalidade a poucos passos da praia.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-sky-600 text-white hover:bg-sky-700 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                aria-label="Reserve agora na Pousada Tubarão"
              >
                Reserve agora
              </a>
              <a
                href="#hospedagem"
                className="inline-flex items-center justify-center bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                aria-label="Ver opções de hospedagem"
              >
                Ver hospedagem
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
            <img
              src="/images/483051518.jpg"
              alt="Entrada da Pousada Tubarão Camping na Ilha do Mel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Hospedagem Section */}
      <section id="hospedagem" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 scroll-mt-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Hospedagem</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-2">
            Escolha entre nossas opções de hospedagem e encontre o quarto ideal para sua estadia na Ilha do Mel.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Oferecemos chalés com banheiro compartilhado, quartos com banheiro privado para até quatro pessoas e opções
            para casal com banheiro privativo. Também dispomos de suítes e quartos para famílias, todos em ambiente
            acolhedor e tranquilo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Quarto Casal */}
          <div className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden ring-1 ring-slate-200 group">
            <div className="relative aspect-[4/3]">
              <img
                src="/images/674130310.jpg"
                alt="Quarto de casal confortável com cama de casal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Popular
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">Quarto Casal</h3>
                <div className="flex items-center gap-1 text-amber-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Quarto aconchegante com cama de casal, ideal para casais que buscam conforto e privacidade.
              </p>
              <span className="inline-block bg-green-50 border border-green-600 text-green-700 font-bold px-3 py-1 rounded-lg text-sm shadow-sm mb-4">
  R$ 500
</span>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 bg-slate-100 px-2 py-1 rounded">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  2 pessoas
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 bg-slate-100 px-2 py-1 rounded">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Privativo
                </span>
              </div>
              <a
                href="#contato"
                className="block w-full text-center bg-sky-600 text-white hover:bg-sky-700 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                aria-label="Reservar quarto de casal"
              >
                Reservar
              </a>
            </div>
          </div>

          {/* Card 2: Quarto Família */}
          <div className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden ring-1 ring-slate-200 group">
            <div className="relative aspect-[4/3]">
              <img
                src="/images/661312456.jpg"
                alt="Quarto família com múltiplas camas e varanda"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Família
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">Quarto Família</h3>
                <div className="flex items-center gap-1 text-amber-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Espaço amplo com camas para até quatro pessoas, perfeito para famílias que querem ficar juntas.
              </p>
              <span className="inline-block bg-green-50 border border-green-600 text-green-700 font-bold px-3 py-1 rounded-lg text-sm shadow-sm mb-4">
  R$ 700
</span>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 bg-slate-100 px-2 py-1 rounded">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  Até 4 pessoas
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 bg-slate-100 px-2 py-1 rounded">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  Vista varanda
                </span>
              </div>
              <a
                href="#contato"
                className="block w-full text-center bg-sky-600 text-white hover:bg-sky-700 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                aria-label="Reservar quarto família"
              >
                Reservar
              </a>
            </div>
          </div>

          {/* Card 3: Chalé */}
          <div className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden ring-1 ring-slate-200 group">
            <div className="relative aspect-[4/3]">
              <img
                src="/images/336410150.jpg"
                alt="Chalé colorido com cama de casal e beliche"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Natureza
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">Chalé</h3>
                <div className="flex items-center gap-1 text-amber-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Chalé charmoso com decoração alegre, oferecendo uma experiência única em meio à natureza.
              </p>
              <span className="inline-block bg-green-50 border border-green-600 text-green-700 font-bold px-3 py-1 rounded-lg text-sm shadow-sm mb-4">
  R$ 900
</span>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 bg-slate-100 px-2 py-1 rounded">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    Design único
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 bg-slate-100 px-2 py-1 rounded">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    Experiência imersiva
                  </span>
                </div>
                <a
                  href="#contato"
                  className="block w-full text-center bg-sky-600 text-white hover:bg-sky-700 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                  aria-label="Reservar chalé"
                >
                  Reservar
                </a>
              </div>
            </div>
          </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-white scroll-mt-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Serviços e Comodidades</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Desfrute de todas as facilidades que oferecemos para tornar sua estadia ainda mais confortável e prazerosa.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
  <svg
    className="w-6 h-6 lg:w-8 lg:h-8 text-sky-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 20h.01M9.172 16.172a4 4 0 015.656 0M6.343 12.343a8 8 0 0111.314 0M3.515 8.515a12 12 0 0116.97 0"
    />
  </svg>
</div>


              <div>
                <h3 className="font-bold text-gray-900 text-sm lg:text-base">Wi-Fi</h3>
                <span className="inline-block mt-1 text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                  Incluído
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <svg
                  className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm lg:text-base">Limpeza diária</h3>
                <span className="inline-block mt-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Premium
                </span>
              </div>
            </div>
          </div>

          {/* Vista mar */}


      <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
  <div className="flex flex-col items-center text-center gap-3">
    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
      <svg
        className="w-6 h-6 lg:w-8 lg:h-8 text-amber-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        
        <rect
          x="3"
          y="7"
          width="18"
          height="13"
          rx="2"
          ry="2"
          strokeWidth={2}
        />
        
        <path
          strokeWidth={2}
          d="M8 7l2-3h4l2 3"
        />
      
        <circle
          cx="12"
          cy="13"
          r="3"
          strokeWidth={2}
        />
      </svg>
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-sm lg:text-base">Vista mar</h3>
      <span className="inline-block mt-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
        Exclusivo
      </span>
    </div>
  </div>
</div>

{/* Varanda Privativa*/}

          <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-violet-100 flex items-center justify-center group-hover:bg-violet-200 transition-colors">
  <svg
    className="w-6 h-6 lg:w-8 lg:h-8 text-violet-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 11V7a5 5 0 0110 0v4"
    />
   
    <rect
      x="5"
      y="11"
      width="14"
      height="10"
      rx="2"
      ry="2"
      strokeWidth={2}
    />
    
    <circle
      cx="12"
      cy="16"
      r="1.5"
      strokeWidth={2}
    />
  </svg>
</div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm lg:text-base">Varanda privativa</h3>
                <span className="inline-block mt-1 text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-0.5 rounded">
                  Conforto e privacidade
                </span>
              </div>
            </div>
          </div>

          {/* R CONDICIONADO*/}
          <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
            <div className="flex flex-col items-center text-center gap-3">
           <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
  <FaSnowflake className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600 opacity-70" />
</div>



              <div>
                <h3 className="font-bold text-gray-900 text-sm lg:text-base">Ar Condicionado</h3>
                <span className="inline-block mt-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Incluído
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <svg
                  className="w-6 h-6 lg:w-8 lg:h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm lg:text-base">Churrasqueira</h3>
                <span className="inline-block mt-1 text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                  Disponível
                </span>
              </div>
            </div>
          </div>
          {/* cocinha */}

                  <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
  <div className="flex flex-col items-center text-center gap-3">
    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
      {/* Ícono de cocina */}
      <FaUtensils className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600 opacity-80"/>
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-sm lg:text-base">Cozinha</h3>
      <span className="inline-block mt-1 text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
        Equipada
      </span>
    </div>
  </div>
</div>
          {/* Roupa de cama */}

         <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
  <div className="flex flex-col items-center text-center gap-3">
    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
      {/* Ícono de cama */}
      <FaBed className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600 opacity-80" />
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-sm lg:text-base">Roupa de cama</h3>
      <span className="inline-block mt-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
        Incluído
      </span>
    </div>
  </div>
</div>
{/*Flexibilidade check in*/}
          <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                <svg
                  className="w-6 h-6 lg:w-8 lg:h-8 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm lg:text-base">Flexibilidade</h3>
                <span className="inline-block mt-1 text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                  Check-in
                </span>
              </div>
            </div>
          </div>
{/* Pet Friendly  */}
         <div className="bg-slate-50 rounded-xl p-4 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ring-1 ring-slate-200 group">
  <div className="flex flex-col items-center text-center gap-3">
    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
      {/* Ícono de huella para pet friendly */}
      <FaPaw className="w-6 h-6 lg:w-8 lg:h-8 text-indigo-600 opacity-80" />
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-sm lg:text-base">Pet friendly</h3>
      <span className="inline-block mt-1 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
        Bem-vindo
      </span>
    </div>
  </div>
</div>
        </div>
      </section>

     {/* Restaurante Section */}
<section
  id="restaurante"
  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 scroll-mt-10"
>
  <div className="grid lg:grid-cols-2 gap-8 items-center">
    <div>
      {/* Título centrado */}
      <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
        Restaurante Caribe
      </h2>

      {/* Descripción con más separación respecto a la imagen */}
      <p className="text-gray-700 mb-8 text-center lg:text-left">
        A Pousada Tubarão também faz parte do Restaurante Caribe, localizado na praça de alimentação da Praia de
        Fora, a apenas 10 minutos da pousada. Uma opção deliciosa para completar sua experiência.
      </p>

      <div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
        <img
          src="/images/comer.jpeg"
          alt="Restaurante Caribe na Praia de Fora"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* Atrativos Próximos Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 scroll-mt-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Atrativos Próximos</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore as maravilhas naturais ao redor da Pousada Tubarão e descubra os encantos da Ilha do Mel.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Gruta das Encantadas */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden ring-1 ring-slate-200">
            <div className="relative aspect-[4/3]">
              <img
                src="/images/a-gruta-das-encantadas.jpg"
                alt="Gruta das Encantadas com formações rochosas e passarelas de madeira"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gruta das Encantadas</h3>
              <p className="text-gray-700 mb-4">
                A apenas cinco minutos da pousada, a famosa Gruta das Encantadas encanta visitantes com suas formações
                rochosas e passarelas de madeira que levam até o interior da caverna.
              </p>
              <button className="inline-flex items-center justify-center bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50 rounded-lg font-semibold px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition">
                Saiba mais
              </button>
            </div>
          </div>

          {/* Card 2: Praia de Encantadas */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden ring-1 ring-slate-200">
            <div className="relative aspect-[4/3]">
              <img
                src="/images/414357339.jpg"
                alt="Praia de Encantadas com areia clara e mar calmo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Praia de Encantadas</h3>
              <p className="text-gray-700 mb-4">
                Praia principal da região, ideal para caminhadas, banhos de mar e momentos de relaxamento em meio à
                natureza.
              </p>
              <button className="inline-flex items-center justify-center bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50 rounded-lg font-semibold px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition">
                Saiba mais
              </button>
            </div>
          </div>

          {/* Card 3: Farol das Conchas */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden ring-1 ring-slate-200">
            <div className="relative aspect-[4/3]">
              <img
                src="/images/full-1-ilhadomel.jpg"
                alt="Farol das Conchas com vista panorâmica da Ilha do Mel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Farol das Conchas</h3>
              <p className="text-gray-700 mb-4">
                Localizado em outra parte da ilha, o Farol das Conchas oferece uma vista panorâmica incrível após uma
                curta caminhada.
              </p>
              <button className="inline-flex items-center justify-center bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50 rounded-lg font-semibold px-4 py-2 text-sm focus-visible:outline-none focus-visble:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section id="localizacao" className="bg-white py-12 lg:py-16 scroll-mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">Localização</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Estamos a apenas cinco minutos da famosa Gruta das Encantadas, um dos principais atrativos da Ilha do Mel.
            Também estamos próximos de supermercados locais, onde é possível realizar compras com cartão de crédito.
          </p>

<div className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white mb-4">
            <iframe
              src="https://www.google.com/maps?q=Pousada%20Tubar%C3%A3o%20Ilha%20do%20Mel%20Encantadas&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Pousada Tubarão na Ilha do Mel"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
              <img
                src="/images/414357339.jpg"
                alt="Praia de Encantadas com águas calmas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
              <img src="/images/pousada.jpeg" 
              alt="Gruta das Encantadas" 
              className="w-full h-full object-cover" />
            </div>
          </div>

          
        </div>
      </section>

      {/* Detalhes e Contato Section */}
      <section  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 scroll-mt-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow ring-1 ring-slate-200 p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Detalhes úteis</h2>
            <p className="text-gray-700">
              Nosso estabelecimento é econômico e familiar, ideal para quem busca simplicidade com conforto. Aceitamos
              pagamentos em cartões e dinheiro.
            </p>
            <ul className="space-y-3 text-gray-700 mt-4">
              <li className="flex items-center gap-2">
                <span className="text-sky-600">•</span>
                <span>Check-in a partir das 14h</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-600">•</span>
                <span>Check-out até 12h</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-600">•</span>
                <span>Café da manhã servido das 8h às 10h</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-600">•</span>
                <span>Animais de estimação são permitidos</span>
              </li>
            </ul>

          </div>

          <div id="contato" className="bg-white rounded-xl shadow ring-1 ring-slate-200 p-8 scroll-mt-18">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Contato</h2>
            <p className="text-gray-700 mb-6">Entre em contato e garanta sua reserva.</p>
            <div className="space-y-3">
              <a
                href="https://wa.me/554198647543"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-sky-600 text-white hover:bg-sky-700 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                aria-label="Entrar em contato via WhatsApp"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+554198647543"
                className="flex items-center justify-center bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                aria-label="Ligar para a pousada"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                href="mailto:pousadatubaraoencantadas@gmail.com"
                className="flex items-center justify-center bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50 rounded-lg font-semibold px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 transition"
                aria-label="Enviar email para a pousada"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-sky-400 mb-2">Pousada Tubarão</h3>
              <p className="text-gray-400">Encantadas, Ilha do Mel - PR, Brasil</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#hospedagem" className="text-gray-400 hover:text-sky-400 transition">
                Hospedagem
              </a>
              <a href="#servicos" className="text-gray-400 hover:text-sky-400 transition">
                Serviços
              </a>
              <a href="#restaurante" className="text-gray-400 hover:text-sky-400 transition">
                Restaurante
              </a>
              <a href="#localizacao" className="text-gray-400 hover:text-sky-400 transition">
                Localização
              </a>
              <a href="#contato" className="text-gray-400 hover:text-sky-400 transition">
                Contato
              </a>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Pousada Tubarão. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
