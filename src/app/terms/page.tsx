import type { Metadata } from "next";
import { LegalPage } from "@/components/v3/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="July 19, 2026">
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to and use of the{" "}
        {site.name} website (the &quot;Site&quot;). By using the Site, you agree to
        these Terms. If you do not agree, please do not use the Site.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Who we are
      </h2>
      <p>
        {site.name} is a software studio and the team behind {site.productName}.
        This Site provides information about our studio, team, and products. It is
        separate from the {site.productName} product experience, which has its own
        terms where applicable.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Acceptable use
      </h2>
      <p>You agree not to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Use the Site in any way that violates applicable law</li>
        <li>Attempt to disrupt, scrape abusively, or compromise the Site</li>
        <li>Misrepresent your identity when contacting us</li>
        <li>Copy or reuse Site content in a misleading or unauthorized way</li>
      </ul>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Intellectual property
      </h2>
      <p>
        Unless otherwise noted, the Site&apos;s text, design, logos, and other
        materials are owned by {site.name} or used with permission. You may view
        and share links to the Site for personal or ordinary business reference,
        but you may not reproduce substantial portions for commercial use without
        our prior written consent.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Third-party links
      </h2>
      <p>
        The Site may link to third-party websites or products, including{" "}
        {site.productName}. We are not responsible for the content, policies, or
        practices of third-party sites.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Disclaimers
      </h2>
      <p>
        The Site is provided &quot;as is&quot; and &quot;as available.&quot; We do
        not warrant that the Site will be uninterrupted, error-free, or free of
        harmful components. Information on the Site is for general informational
        purposes and may change without notice.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Limitation of liability
      </h2>
      <p>
        To the fullest extent permitted by law, {site.name} and its founders will
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages arising from your use of the Site. Our total liability for
        any claim related to the Site will not exceed one hundred U.S. dollars
        (US$100).
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Governing law
      </h2>
      <p>
        These Terms are governed by the laws of the United States and the State of
        Michigan, without regard to conflict-of-law rules, unless mandatory local
        law requires otherwise.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Changes
      </h2>
      <p>
        We may update these Terms from time to time. Continued use of the Site
        after changes are posted means you accept the updated Terms. The &quot;Last
        updated&quot; date at the top will change when we revise them.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Contact
      </h2>
      <p>
        Questions about these Terms:{" "}
        <a
          href={`mailto:${site.email}`}
          className="underline underline-offset-2"
          style={{ color: "var(--fg)" }}
        >
          {site.email}
        </a>
        .
      </p>
      <p className="text-sm" style={{ color: "var(--faint)" }}>
        This page is a starting template for {site.name}. Have counsel review it
        before public launch if your situation requires it.
      </p>
    </LegalPage>
  );
}
