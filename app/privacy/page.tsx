"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <SiteHeader />
            <div className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="prose prose-blue dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                    <p className="lead text-xl text-muted-foreground mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to FoodEM ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application
                            and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                        <p className="mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes email address and telephone number.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data</strong> includes information about how you use our website, products and services (e.g., food inventory data).</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
                        <p className="mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                        <p className="mb-4">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
