import React from 'react';

interface ResumeEmailProps {
  name: string;
}

export default function ResumeEmail({ name }: ResumeEmailProps) {
  return (
    <html dir="ltr" lang="en">
      <head>
        <meta content="width=device-width" name="viewport" />
        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="telephone=no,address=no,email=no,date=no,url=no" name="format-detection" />
        <title>Thanks for stopping by! Here is the resume you requested...</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @media (prefers-color-scheme: dark) {
                li::marker { color: #c4c4c4 }
              }
            `,
          }}
        />
      </head>

      <body dir="ltr" lang="en">
        <div
          style={{
            display: 'none',
            overflow: 'hidden',
            lineHeight: '1px',
            opacity: 0,
            maxHeight: 0,
            maxWidth: 0,
          }}
        >
          Thanks for stopping by! Here is the resume you requested...
          &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>

        <table border={0} width="100%" cellPadding={0} cellSpacing={0} role="presentation" align="center">
          <tbody>
            <tr>
              <td
                dir="ltr"
                lang="en"
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                  fontSize: '1em',
                  minHeight: '100%',
                  lineHeight: '155%',
                }}
              >
                <table
                  align="center"
                  width="100%"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  role="presentation"
                  style={{
                    maxWidth: '600px',
                    width: '100%',
                    borderRadius: '0px',
                    lineHeight: '155%',
                  }}
                >
                  <tbody>
                    <tr style={{ width: '100%' }}>
                      <td style={{ paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}>
                        <h2
                          style={{
                            margin: 0,
                            padding: 0,
                            fontSize: '1.8em',
                            lineHeight: '1.44em',
                            paddingTop: '0.389em',
                            fontWeight: 600,
                          }}
                        >
                          Here's my resume, as requested
                        </h2>

                        <p style={{ margin: 0, padding: 0, fontSize: '1em', paddingTop: '0.5em', paddingBottom: '0.5em' }}>
                          Hi {name},
                        </p>

                        <p style={{ margin: 0, padding: 0, fontSize: '1em', paddingTop: '0.5em', paddingBottom: '0.5em' }}>
                          Thanks for stopping by my portfolio and requesting my resume. I've attached it to this email for your review.
                        </p>

                        <p style={{ margin: 0, padding: 0, fontSize: '1em', paddingTop: '0.5em', paddingBottom: '0.5em' }}>
                          If you'd like to chat about a potential role, collaboration, or just want to connect, feel free to reply to this email. I'd love to hear more about what you're working on.
                        </p>

                        <p style={{ margin: 0, padding: 0, fontSize: '1em', paddingTop: '0.5em', paddingBottom: '0.5em' }}>
                          You can also explore more of my work here:
                        </p>

                        <p style={{ margin: 0, padding: 0, fontSize: '1em', paddingTop: '0.5em', paddingBottom: '0.5em' }}>
                          Looking forward to connecting.
                        </p>

                        <p style={{ margin: 0, padding: 0, fontSize: '1em', paddingTop: '0.5em', paddingBottom: '0.5em' }}>
                          Best,
                        </p>

                        <p style={{ margin: 0, padding: 0, fontSize: '1em', paddingTop: '0.5em', paddingBottom: '0.5em' }}>
                          Kaung Sat Oo (Kev)
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}