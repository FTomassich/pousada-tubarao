import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pousada Tubarão – Encantadas, Ilha do Mel | Hospedagem em Paraná",
  description:
    "Pousada Tubarão na Praia de Encantadas, Ilha do Mel. Conforto, natureza e hospitalidade a poucos passos da praia. Reserve agora sua estadia!",
}

export const viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
