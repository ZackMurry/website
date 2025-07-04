import { Noto_Sans, Noto_Sans_Mono } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap'
})

const notoMono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-noto-mono',
  display: 'swap'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Zack Murry</title>
        <meta name='title' content='Zack Murry | Software Engineer' />
        <meta
          name='description'
          content='CS and Math student at University of Missouri. Software Engineering Intern at Garmin.'
        />
        <meta
          name='keywords'
          content='zack,murry,zackmurry,columbia,springfield,missouri,software,research,intern,garmin,mizzou'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <link rel='canonical' href='https://zackmurry.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Zack Murry' />
        <meta
          property='og:description'
          content='CS and Math student at University of Missouri. Software Engineering Intern at Garmin.'
        />
        <meta property='og:url' content='https://zackmurry.com' />
        <meta property='og:image' content='https://zackmurry.com/headshot.jpg' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script type='application/ld+json'>
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Zack Murry",
            "url": "https://zackmurry.com",
            "sameAs": ["https://github.com/zackmurry", "https://linkedin.com/in/zack-murry"],
            "jobTitle": "Software Engineering Intern",
            "worksFor": {
              "@type": "Organization",
              "name": "Garmin"
            },
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "University of Missouri"
            }
          }`}
        </script>
      </head>
      <body className={`${notoSans.variable} ${notoMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
