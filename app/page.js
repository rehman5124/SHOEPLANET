import { Navbar, HeroSection, PopularSales, Highlights, TopSales, Featured, SportCategories, Footer } from "@/components"

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PopularSales />
      <Highlights />
      <TopSales />
      <Featured />
      <SportCategories />
      <Footer />
    </div>
  )
}
