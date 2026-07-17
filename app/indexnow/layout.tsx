import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IndexNow Console | OBX Studio',
  description: 'Manage search engine index requests and URLs for SEO optimization via IndexNow.',
}

export default function IndexNowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
