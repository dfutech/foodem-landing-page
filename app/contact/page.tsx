"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Mail } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <SiteHeader />
            <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-muted-foreground mb-12 max-w-lg">
                    Have questions or need support? We will respond within 24 hours.
                </p>

                <div className="bg-card border border-border rounded-3xl p-8 w-full max-w-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h2 className="text-lg font-semibold">Email Support</h2>
                        <a
                            href="mailto:support@dfulabs.com"
                            className="text-xl text-primary hover:underline font-medium"
                        >
                            support@dfulabs.com
                        </a>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    )
}
