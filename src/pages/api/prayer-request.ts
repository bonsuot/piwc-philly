import type { APIRoute } from "astro";
import { Resend } from "resend";

console.log(
  "RESEND API KEY AVAILABLE:",
  Boolean(import.meta.env.RESEND_API_KEY)
);

export const prerender = false;

const resend = new Resend(
  import.meta.env.RESEND_API_KEY
);

function json(
  body: Record<string, unknown>,
  status = 200
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType =
      request.headers.get("content-type") ?? "";

    if (
      !contentType.includes(
        "application/x-www-form-urlencoded"
      ) &&
      !contentType.includes("multipart/form-data")
    ) {
      return json(
        {
          message: "Invalid form submission format.",
        },
        415
      );
    }

    const formData = await request.formData();

    const name =
      formData.get("name")?.toString().trim() ?? "";

    const email =
      formData.get("email")?.toString().trim() ?? "";

    const prayerRequest =
      formData.get("request")?.toString().trim() ?? "";

    const honeypot =
      formData.get("website")?.toString().trim() ?? "";

    const contactRequested =
      formData.get("contactRequested") === "yes";

    const shareWithPrayerTeam =
      formData.get("shareWithPrayerTeam") === "yes";

    // Silently accept obvious bot submissions.
    if (honeypot) {
      return json({
        message: "Request received.",
      });
    }

    if (!prayerRequest) {
      return json(
        {
          message: "Please enter your prayer request.",
        },
        400
      );
    }

    if (prayerRequest.length > 5000) {
      return json(
        {
          message: "Prayer request is too long.",
        },
        400
      );
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return json(
        {
          message: "Please enter a valid email address.",
        },
        400
      );
    }

    const toEmail =
      import.meta.env.PRAYER_TO_EMAIL;

    const fromEmail =
      import.meta.env.PRAYER_FROM_EMAIL;

    if (
      !import.meta.env.RESEND_API_KEY ||
      !toEmail ||
      !fromEmail
    ) {
      console.error(
        "Prayer email environment variables are missing."
      );

      return json(
        {
          message:
            "Prayer request delivery is temporarily unavailable.",
        },
        500
      );
    }

    const safeName =
      escapeHtml(name || "Anonymous");

    const safeEmail =
      escapeHtml(email || "Not provided");

    const safePrayer =
      escapeHtml(prayerRequest)
        .replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: fromEmail,

      to: [toEmail],

      subject: `New Prayer Request${
        name ? ` — ${name}` : ""
      }`,

      replyTo: email || undefined,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 640px;
            margin: 0 auto;
            color: #1f2933;
          "
        >
          <h1
            style="
              font-size: 24px;
              margin-bottom: 24px;
            "
          >
            New Prayer Request
          </h1>

          <p>
            A new prayer request was submitted
            through the PIWC Philadelphia website.
          </p>

          <hr
            style="
              margin: 24px 0;
              border: 0;
              border-top: 1px solid #ddd;
            "
          />

          <p>
            <strong>Name</strong><br />
            ${safeName}
          </p>

          <p>
            <strong>Email</strong><br />
            ${safeEmail}
          </p>

          <p>
            <strong>Would like to be contacted?</strong><br />
            ${contactRequested ? "Yes" : "No"}
          </p>

          <p>
            <strong>
              Permission to share with prayer team?
            </strong><br />
            ${shareWithPrayerTeam ? "Yes" : "No"}
          </p>

          <hr
            style="
              margin: 24px 0;
              border: 0;
              border-top: 1px solid #ddd;
            "
          />

          <p>
            <strong>Prayer Request</strong>
          </p>

          <div
            style="
              padding: 18px;
              background: #f6f4ee;
              line-height: 1.7;
            "
          >
            ${safePrayer}
          </div>

          <p
            style="
              margin-top: 28px;
              font-size: 12px;
              color: #6b7280;
            "
          >
            Submitted through piwcphilly.com.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error(
        "Resend prayer email failed:",
        error
      );

      return json(
        {
          message:
            "We couldn't submit your request right now. Please try again.",
        },
        500
      );
    }

    return json({
      message:
        "Thank you. Your prayer request has been received.",
    });
  } catch (error) {
    console.error(
      "Prayer request submission failed:",
      error
    );

    return json(
      {
        message:
          "We couldn't submit your request right now. Please try again.",
      },
      500
    );
  }
};