"use client"

import { Leaf, Moon, Sun, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { language, setLanguage, t } = useLanguage()
    const pathname = usePathname()
    const isHome = pathname === "/"

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const getLinkHref = (hash: string) => {
        return isHome ? hash : `/${hash}`
    }

    return (
        <nav
            className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 ${isVisible ? "animate-slide-in-down" : ""}`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className={`flex items-center gap-2 transition-all duration-700 ${isVisible ? "animate-fade-in-left" : ""}`}>
                    <div className="w-8 h-8 relative rounded-lg overflow-hidden hover:scale-110 transition-transform">
                        <Image src="/new-logo.png" alt="Food EM Logo" fill className="object-cover" />
                    </div>
                    <span className="text-xl font-bold text-foreground">FoodEM</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 items-center">
                    <Link href={getLinkHref("#features")} className="text-foreground/70 hover:text-primary transition-colors duration-300">
                        {t.nav.features}
                    </Link>
                    <Link href={getLinkHref("#how-it-works")} className="text-foreground/70 hover:text-primary transition-colors duration-300">
                        {t.nav.interface}
                    </Link>
                    <Link href={getLinkHref("#benefits")} className="text-foreground/70 hover:text-primary transition-colors duration-300">
                        {t.nav.benefits}
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-3">
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
                            className={`px-3 py-1 rounded transition-colors duration-300 ${language === "en"
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-muted-foreground/10"
                                }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage("vi")}
                            className={`px-3 py-1 rounded transition-colors duration-300 ${language === "vi"
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-muted-foreground/10"
                                }`}
                        >
                            VI
                        </button>
                    </div>
                    <Button
                        className={`bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-700 ml-4 ${isVisible ? "animate-fade-in-right" : ""}`}
                        asChild
                    >
                        <Link href={getLinkHref("#download")}>
                            {t.nav.downloadNow}
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
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
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-foreground"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4 animate-fade-in-up">
                    <Link href={getLinkHref("#features")} className="block text-foreground/70 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        {t.nav.features}
                    </Link>
                    <Link href={getLinkHref("#how-it-works")} className="block text-foreground/70 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        {t.nav.interface}
                    </Link>
                    <Link href={getLinkHref("#benefits")} className="block text-foreground/70 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        {t.nav.benefits}
                    </Link>
                    <div className="flex items-center gap-1 bg-muted rounded-lg p-1 w-fit">
                        <button
                            onClick={() => setLanguage("en")}
                            className={`px-3 py-1 rounded transition-colors duration-300 ${language === "en"
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-muted-foreground/10"
                                }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage("vi")}
                            className={`px-3 py-1 rounded transition-colors duration-300 ${language === "vi"
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-muted-foreground/10"
                                }`}
                        >
                            VI
                        </button>
                    </div>
                    <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                    >
                        <Link href={getLinkHref("#download")}>
                            {t.nav.downloadNow}
                        </Link>
                    </Button>
                </div>
            )}
        </nav>
    )
}
