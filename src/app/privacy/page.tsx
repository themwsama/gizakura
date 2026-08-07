import type { Metadata } from "next";
import { LegalPage } from "@/components/v3/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 19, 2026">
      <p>
        This Privacy Policy describes how {site.name} (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) handles information when you visit{" "}
        <span style={{ color: "var(--fg)" }}>{site.domainHint}</span> or contact us
        through this website. {site.name} is the studio behind {site.productName}.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Information we collect
      </h2>
      <p>
        This site is primarily informational. We may collect information you choose
        to send us (for example, your name, email address, and message content when
        you email {site.email}).
      </p>
      <p>
        Like most websites, our hosting provider may automatically collect standard
        technical data such as IP address, browser type, device information, and
        pages visited, for security, reliability, and basic analytics.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        How we use information
      </h2>
      <p>We use information to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Respond to inquiries and partnership requests</li>
        <li>Operate, maintain, and improve this website</li>
        <li>Protect against abuse, fraud, or security issues</li>
        <li>Comply with applicable law</li>
      </ul>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Cookies and similar technologies
      </h2>
      <p>
        We may use essential cookies or similar technologies required for the site
        to function. If we add optional analytics or marketing cookies later, we
        will update this policy and provide any required notices or choices.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Third-party services and products
      </h2>
      <p>
        Links on this site may take you to third-party services, including{" "}
        {site.productName} at{" "}
        <a
          href={site.productUrl}
          className="underline underline-offset-2"
          style={{ color: "var(--fg)" }}
        >
          {site.productUrl.replace(/^https?:\/\//, "")}
        </a>
        . Those services have their own privacy practices. This policy covers the{" "}
        {site.name} studio website only.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Sharing of information
      </h2>
      <p>
        We do not sell your personal information. We may share information with
        service providers who help us host or operate the site, when required by
        law, or to protect our rights and users.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Data retention
      </h2>
      <p>
        We retain contact and technical information only as long as needed for the
        purposes above, unless a longer period is required by law.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Your choices
      </h2>
      <p>
        You can email us to ask what personal information we hold about you from
        this site, request a correction, or ask us to delete contact messages where
        applicable. Depending on where you live, you may have additional rights
        under local privacy laws.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Children
      </h2>
      <p>
        This website is not directed at children under 13, and we do not knowingly
        collect personal information from children under 13.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Changes
      </h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last
        updated&quot; date at the top will change when we do.
      </p>

      <h2 className="font-display pt-2 text-xl" style={{ color: "var(--fg)" }}>
        Contact
      </h2>
      <p>
        Questions about privacy:{" "}
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
