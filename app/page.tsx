"use client"

import { ChevronRight, Leaf, Clock, AlertCircle, Bell, Search, BarChart3, Download, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleFeatures((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-index]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const featureIcons = {
    0: Clock,
    1: Bell,
    2: Search,
    3: BarChart3,
    4: AlertCircle,
    5: Leaf,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary to-background overflow-hidden">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 ${isVisible ? "animate-slide-in-down" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div
            className={`flex items-center gap-2 transition-all duration-700 ${isVisible ? "animate-fade-in-left" : ""}`}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Food EM</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              {t.nav.features}
            </a>
            <a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              {t.nav.howItWorks}
            </a>
            <a href="#benefits" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              {t.nav.benefits}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded transition-colors duration-300 ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted-foreground/10"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("vi")}
                className={`px-3 py-1 rounded transition-colors duration-300 ${
                  language === "vi"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted-foreground/10"
                }`}
              >
                VI
              </button>
            </div>
          </div>
          <Button
            className={`bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-700 ml-4 ${isVisible ? "animate-fade-in-right" : ""}`}
          >
            {t.nav.downloadNow}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className={`text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight transition-all duration-1000 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
            >
              {t.hero.title1} <span className="text-primary">{t.hero.title2}</span> {t.hero.title3}
            </h1>
            <p
              className={`text-xl text-foreground/70 mb-8 leading-relaxed transition-all duration-1000 delay-100 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
            >
              {t.hero.subtitle}
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5" />
                {t.hero.downloadApp}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent hover:scale-105 transition-transform"
              >
                {t.hero.learnMore}
              </Button>
            </div>
            <div
              className={`mt-12 flex gap-8 text-sm transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
            >
              <div className="hover:scale-110 transition-transform">
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-foreground/60">{t.hero.activeUsers}</p>
              </div>
              <div className="hover:scale-110 transition-transform">
                <p className="text-2xl font-bold text-primary">2.5M</p>
                <p className="text-foreground/60">{t.hero.foodTracked}</p>
              </div>
              <div className="hover:scale-110 transition-transform">
                <p className="text-2xl font-bold text-primary">800K</p>
                <p className="text-foreground/60">{t.hero.wastePrevented}</p>
              </div>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 aspect-square flex items-end justify-center overflow-hidden hover:border-primary/50 border border-primary/20 transition-all duration-500">
              <svg className="w-full h-full text-primary/30 animate-float" viewBox="0 0 200 300" fill="none">
                <rect
                  x="20"
                  y="40"
                  width="160"
                  height="200"
                  rx="20"
                  fill="currentColor"
                  opacity="0.1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="100" cy="80" r="30" fill="currentColor" opacity="0.2" />
                <rect x="40" y="130" width="120" height="60" rx="8" fill="currentColor" opacity="0.15" />
                <circle cx="60" cy="170" r="8" fill="currentColor" opacity="0.3" />
                <circle cx="100" cy="170" r="8" fill="currentColor" opacity="0.3" />
                <circle cx="140" cy="170" r="8" fill="currentColor" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in-up">{t.features.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.list.map((feature, idx) => {
            const IconComponent = featureIcons[idx as keyof typeof featureIcons]
            return (
              <div
                key={idx}
                data-index={idx}
                className={`bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-500 ${visibleFeatures.includes(idx) ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <IconComponent className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-card-foreground/70">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in-up">
          {t.howItWorks.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {t.howItWorks.steps.map((item, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`text-center transition-all duration-700 ${visibleFeatures.includes(idx + 10) ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:scale-110 hover:shadow-lg transition-all duration-300">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/60">{item.desc}</p>
              {idx < 3 && (
                <ChevronRight className="w-6 h-6 text-primary/40 mx-auto mt-4 hidden md:block animate-pulse-soft" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-foreground animate-fade-in-left">{t.benefits.title}</h2>
            <div className="space-y-6">
              {t.benefits.list.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`flex gap-4 items-start transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 mt-1 hover:scale-125 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 hover:shadow-xl transition-all duration-500 animate-fade-in-right">
            <div className="space-y-6 text-center">
              <div className="text-5xl font-bold text-primary hover:scale-110 transition-transform">
                {t.benefits.savings}
              </div>
              <p className="text-xl text-foreground/70">{t.benefits.savingsDesc}</p>
              <div className="pt-6 border-t border-border">
                <p className="text-foreground/60 mb-4">{t.benefits.joinCommunity}</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 hover:scale-105 transition-transform">
                  <Download className="w-5 h-5" />
                  {t.hero.downloadApp}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary/90 to-accent/90 rounded-3xl p-16 text-center hover:shadow-2xl transition-all duration-500 animate-fade-in-up relative overflow-hidden group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-primary transition-opacity duration-500" />
          <div className="relative">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">{t.cta.title}</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary gap-2 hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5" />
                {t.cta.downloadFree}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:scale-105 transition-transform"
              >
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">Food EM</span>
              </div>
              <p className="text-foreground/60 text-sm">{t.footer.tagline}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                    {t.footer.features}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                    {t.footer.pricing}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                    {t.footer.download}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                    {t.footer.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                    {t.footer.blog}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                    {t.footer.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                    {t.footer.terms}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                    {t.footer.cookies}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-foreground/50 text-sm">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
