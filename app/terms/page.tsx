"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <SiteHeader />
            <div className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="prose prose-blue dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                    <p className="lead text-xl text-muted-foreground mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                        <p className="mb-4">
                            By accessing or using the FoodEM application and website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                        <p className="mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on FoodEM's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on FoodEM's website;</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
                        <p className="mb-4">
                            The materials on FoodEM's website are provided on an 'as is' basis. FoodEM makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
                        <p className="mb-4">
                            In no event shall FoodEM or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FoodEM's website, even if FoodEM or a FoodEM authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
                        <p className="mb-4">
                            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>
                </article>
            </div>
            <SiteFooter />
        </div>
    )
}
