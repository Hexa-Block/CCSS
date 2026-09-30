import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy and cookies",
  alternates: { canonical: "https://ccssnavigator.com/privacy" },
}

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12 text-sm leading-6 sm:px-8">
      <h1 className="text-2xl font-semibold tracking-tight">Privacy and cookies</h1>
      <p className="mt-2 text-muted-foreground">Effective date: 30 September 2026</p>

      <div className="mt-8 space-y-8 text-muted-foreground">
        <section>
          <p>
            CCSS Navigator is an open-source informational catalog operated by Hexa
            Consulting LLC, 30 N Gould St, STE R, Sheridan, WY 82801, USA. It has no
            user accounts, advertising or contact forms.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Information we process</h2>
          <p className="mt-2">
            Our hosting service processes technical request information, such as IP
            address and the requested page, to deliver, secure and troubleshoot the
            site. We process this information under our legitimate interest in operating
            a reliable and secure website.
          </p>
          <p className="mt-2">
            If you accept analytics cookies, PostHog processes visits, page interactions
            and browser or device information to help us understand and improve the
            catalog. This cookie-based processing is based on your consent.
          </p>
          <p className="mt-2">
            If you reject analytics cookies, PostHog still measures limited site usage
            without analytics cookies or a persistent browser identifier. We use this
            only to produce audience statistics under our legitimate interest in
            understanding and improving the site.
          </p>
          <p className="mt-2">
            We do not use analytics for advertising or create session replays of
            individual visits.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Cookies and browser storage</h2>
          <h3 className="mt-3 font-medium text-foreground">Necessary</h3>
          <p className="mt-2">
            Necessary browser storage remembers your privacy choice and requested site
            preferences, such as the theme and sidebar state. It cannot be disabled in
            the preferences panel because those choices would otherwise not persist.
          </p>
          <h3 className="mt-5 font-medium text-foreground">Analytics</h3>
          <p className="mt-2">
            These cookies recognise your browser across visits. You can change your
            choice at any time using the cookie button at the bottom right of any page,
            without losing access to the catalog. Saving a rejection removes
            PostHog&apos;s analytics cookies and stored identifiers while keeping your
            privacy choice.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Service providers and retention</h2>
          <p className="mt-2">
            We use service providers for hosting and analytics. If you contact us by
            email, our email provider processes your message. Our analytics data is
            hosted in the European Union through PostHog Cloud EU. Some supporting
            services may involve processing outside the European Economic Area. PostHog
            describes its transfer safeguards and how to request a copy in its{" "}
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="https://posthog.com/privacy#international-transfer-of-personal-information"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            .
          </p>
          <p className="mt-2">
            Analytics events are retained for up to one year. Browser preferences
            remain until they expire, you change them or you clear the site data.
            Hosting and security logs are kept only as long as needed to operate and
            protect the site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Your rights</h2>
          <p className="mt-2">
            Under applicable data protection law, you may exercise your rights of
            access, rectification, erasure, restriction, objection and data portability,
            and withdraw your consent at any time without affecting the lawfulness of
            processing before withdrawal. To exercise these rights, contact{" "}
            <a className="underline underline-offset-4 hover:text-foreground" href="mailto:privacy@ccssnavigator.com">
              privacy@ccssnavigator.com
            </a>
            . You may also complain to your local data protection authority. In Spain,
            this is the{" "}
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="https://www.aepd.es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agencia Española de Protección de Datos
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Changes</h2>
          <p className="mt-2">
            We may update this page when our privacy or cookie practices change. If a
            change requires fresh consent, we will ask before enabling that processing.
          </p>
        </section>
      </div>
    </article>
  )
}
