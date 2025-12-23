"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/components/language-provider"

export default function DeleteAccountPage() {
    const { t } = useLanguage()

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <SiteHeader />
            <div className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="prose prose-blue dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-8">{t.deleteAccountPage.title}</h1>
                    <p className="lead text-xl text-muted-foreground mb-8">
                        {t.deleteAccountPage.lead}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t.deleteAccountPage.dataDeletion.title}</h2>
                        <p className="mb-4">
                            {t.deleteAccountPage.dataDeletion.content}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t.deleteAccountPage.steps.title}</h2>
                        <ol className="list-decimal pl-6 mb-4 space-y-4">
                            {t.deleteAccountPage.steps.list.map((step, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
                            ))}
                        </ol>
                        <p className="mt-6 text-muted-foreground italic">
                            {t.deleteAccountPage.steps.note}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t.deleteAccountPage.contact.title}</h2>
                        <p className="mb-4">
                            {t.deleteAccountPage.contact.content}
                        </p>
                        <p className="font-medium">
                            Email: support@dfulabs.com
                        </p>
                    </section>
                </article>
            </div>
            <SiteFooter />
        </div>
    )
}
