"use client"

import { Clock, AlertCircle, Bell, Search, BarChart3, Download, Leaf, Apple, Play } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MockupCard } from "@/components/mockup-card"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)
  const { t } = useLanguage()

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
      <SiteHeader />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h1
              className={`text-5xl lg:text-6xl font-bold text-foreground mb-3 leading-tight transition-all duration-1000 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
            >
              {t.hero.title1} <span className="text-primary">{t.hero.title2}</span> {t.hero.title3}
            </h1>
            <p
              className={`text-xl text-foreground/70 mb-4 leading-relaxed transition-all duration-1000 delay-100 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
            >
              {t.hero.subtitle}
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
            >
              <Button
                size="lg"
                className="bg-slate-500 hover:bg-slate-600 text-white h-auto py-2 px-6 gap-3 hover:scale-105 transition-transform"
                id="download-ios"
              >
                <Apple className="w-8 h-8" />
                <div className="flex flex-col items-start mt-1">
                  <span className="text-[10px] uppercase leading-none opacity-80">{t.hero.comingSoon}</span>
                  <span className="text-xl font-bold leading-none">{t.hero.appStore}</span>
                </div>
              </Button>
              <Button
                size="lg"
                className="bg-slate-500 hover:bg-slate-600 text-white h-auto py-2 px-6 gap-3 hover:scale-105 transition-transform"
                id="download-android"
              >
                <Play className="w-8 h-8 fill-current" />
                <div className="flex flex-col items-start mt-1">
                  <span className="text-[10px] uppercase leading-none opacity-80">{t.hero.comingSoon}</span>
                  <span className="text-xl font-bold leading-none">{t.hero.googlePlay}</span>
                </div>
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
            <div className="relative w-full flex justify-center h-[500px] lg:h-[650px] overflow-hidden">
              <Image
                src="/mockups/mockup-2.png"
                alt="FoodEM App Interface"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto", maxWidth: "none" }}
                className="scale-125 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-foreground animate-fade-in-up">{t.features.title}</h2>
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
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-foreground animate-fade-in-up">
          {t.interface.title}
        </h2>
        {/* Mockup Gallery */}
        <div className={`mt-0 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.interface.featuresList.map((feature, idx) => (
              <MockupCard
                key={idx}
                index={idx}
                src={`/mockups/mockup-${idx + 1}.png`}
                alt={`FoodEM Screen ${idx + 1}`}
                title={feature.title}
                description={feature.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-foreground animate-fade-in-left">{t.benefits.title}</h2>
            <div className="space-y-6">
              {t.benefits.list.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`flex gap-4 items-start transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 mt-1 hover:scale-125 transition-transform">
                    {/* chevron right again. I will import it properly this time. */}
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-gradient-to-r from-primary/90 to-accent/90 rounded-3xl p-16 text-center hover:shadow-2xl transition-all duration-500 animate-fade-in-up relative overflow-hidden group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-primary transition-opacity duration-500" />
          <div className="relative">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">{t.cta.title}</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-slate-500 hover:bg-slate-600 text-white h-auto py-2 px-6 gap-3 hover:scale-105 transition-transform border-0"
              >
                <Apple className="w-8 h-8" />
                <div className="flex flex-col items-start mt-1">
                  <span className="text-[10px] uppercase leading-none opacity-80">{t.hero.comingSoon}</span>
                  <span className="text-xl font-bold leading-none">{t.hero.appStore}</span>
                </div>
              </Button>
              <Button
                size="lg"
                className="bg-slate-500 hover:bg-slate-600 text-white h-auto py-2 px-6 gap-3 hover:scale-105 transition-transform border-0"
              >
                <Play className="w-8 h-8 fill-current" />
                <div className="flex flex-col items-start mt-1">
                  <span className="text-[10px] uppercase leading-none opacity-80">{t.hero.comingSoon}</span>
                  <span className="text-xl font-bold leading-none">{t.hero.googlePlay}</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
