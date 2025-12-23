"use client"

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function SiteFooter() {
    const { t } = useLanguage()

    return (
        <footer className="bg-secondary/50 border-t border-border mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 relative rounded-lg overflow-hidden flex items-center justify-center">
                                <Image src="/new-logo.png" alt="Food EM Logo" fill className="object-cover" />
                            </div>
                            <span className="font-bold text-foreground">FoodEM</span>
                        </div>
                        <p className="text-foreground/60 text-sm">{t.footer.tagline}</p>
                        <div className="flex gap-4 mt-2">
                            <Link href="https://www.facebook.com/profile.php?id=61585397791156" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary/10 text-foreground/60 hover:text-primary transition-colors">
                                <Facebook className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="md:pl-12">
                        <h4 className="font-semibold text-foreground mb-4">{t.footer.product}</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/#features" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                                    {t.footer.features}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                                    {t.footer.download}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                                    {t.footer.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">{t.footer.legal}</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                                    {t.footer.privacy}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                                    {t.footer.terms}
                                </Link>
                            </li>
                            <li>
                                <Link href="/delete-account" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                                    {t.footer.deleteAccount}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border pt-8">
                    <p className="text-center text-foreground/50 text-sm">{t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    )
}
