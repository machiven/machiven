import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.47.10"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")

interface QuoteRequest {
  type: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
  product: string
  message: string
  submitted_at: string
}

const generateEmailHTML = (data: QuoteRequest): string => {
  const fullName = `${data.first_name || ""} ${data.last_name || ""}`.trim()
  const submittedDate = new Date(data.submitted_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #0066cc 0%, #004a99 100%);
      padding: 40px 20px;
      text-align: center;
      color: white;
    }
    .header-logo {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
      letter-spacing: 1px;
    }
    .header-subtitle {
      font-size: 14px;
      opacity: 0.9;
      margin: 0;
    }
    .content {
      padding: 40px;
    }
    .section {
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #0066cc;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #0066cc;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }
    .info-item {
      margin-bottom: 12px;
    }
    .info-label {
      font-size: 12px;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
      font-weight: 600;
    }
    .info-value {
      font-size: 14px;
      color: #333;
    }
    .message-box {
      background-color: #f9f9f9;
      border-left: 4px solid #0066cc;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
    }
    .message-box p {
      margin: 0;
      font-size: 14px;
      color: #333;
      line-height: 1.6;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .footer {
      background-color: #f5f5f5;
      padding: 20px;
      text-align: center;
      border-top: 1px solid #e0e0e0;
    }
    .footer-text {
      font-size: 12px;
      color: #666;
      margin: 8px 0;
    }
    .badge {
      display: inline-block;
      background-color: #0066cc;
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    @media (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
      .content {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="header-logo">⚙️ MACHIVEN</div>
      <p class="header-subtitle">Industrial Machinery Solutions</p>
    </div>

    <div class="content">
      <div class="badge">NEW QUOTE REQUEST</div>

      <div class="section">
        <h2 class="section-title">From</h2>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Full Name</div>
            <div class="info-value">${fullName}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value">${data.email || "—"}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Phone</div>
            <div class="info-value">${data.phone || "—"}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Company</div>
            <div class="info-value">${data.company || "—"}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Request Details</h2>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Request Type</div>
            <div class="info-value">${data.type || "—"}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Product/Service</div>
            <div class="info-value">${data.product || "General Inquiry"}</div>
          </div>
        </div>
      </div>

      ${
        data.message
          ? `
      <div class="section">
        <h2 class="section-title">Message</h2>
        <div class="message-box">
          <p>${data.message}</p>
        </div>
      </div>
      `
          : ""
      }

      <div class="section">
        <p style="font-size: 12px; color: #999; margin: 0;">
          Submitted on <strong>${submittedDate}</strong>
        </p>
      </div>
    </div>

    <div class="footer">
      <p class="footer-text"><strong>Machiven LLC</strong></p>
      <p class="footer-text">Industrial Machinery Sales, Sourcing & Repairs</p>
      <p class="footer-text">📧 admin@machiven.com | 📞 +1 (305) 897-6773</p>
      <p class="footer-text">🌐 https://machiven.com</p>
    </div>
  </div>
</body>
</html>
  `
}

serve(async (req) => {
  // CORS headers
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
  }

  try {
    const data: QuoteRequest = await req.json()

    if (!data.email || !data.first_name || !data.last_name) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    // Generate HTML email
    const htmlContent = generateEmailHTML(data)

    // Send email via Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@machiven.com",
        to: "admin@machiven.com",
        subject: `🔧 Quote Request - ${data.last_name} - ${data.product || "Inquiry"}`,
        html: htmlContent,
        reply_to: data.email,
      }),
    })

    const emailResult = await emailResponse.json()

    if (!emailResponse.ok) {
      console.error("Resend error:", emailResult)
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: emailResult }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Quote request email sent successfully",
        emailId: emailResult.id,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
  } catch (error) {
    console.error("Error:", error)
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
})
