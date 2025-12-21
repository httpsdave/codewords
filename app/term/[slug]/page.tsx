import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { terms } from '@/data/terms';
import CopyButton from '@/components/CopyButton';
import ShareButton from '@/components/ShareButton';

interface TermPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all terms
export async function generateStaticParams() {
  return terms.map((term) => ({
    slug: term.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: TermPageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = terms.find((t) => t.id === slug);

  if (!term) {
    return {
      title: 'Term Not Found - CodeWords',
    };
  }

  return {
    title: `${term.title} - CodeWords Dictionary`,
    description: term.definition.substring(0, 160),
    openGraph: {
      title: `${term.title} - CodeWords Dictionary`,
      description: term.definition.substring(0, 160),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${term.title} - CodeWords Dictionary`,
      description: term.definition.substring(0, 160),
    },
  };
}

export default async function TermPage({ params }: TermPageProps) {
  const { slug } = await params;
  const term = terms.find((t) => t.id === slug);

  if (!term) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.title,
    description: term.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'CodeWords CS & IT Dictionary',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="min-h-screen p-4 sm:p-8 lg:p-20 bg-gray-50 dark:bg-gray-900">
      <main className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-gray-100">{term.title}</li>
          </ol>
        </nav>

        {/* Term Card */}
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {term.title}
              </h1>
              <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full 
                             bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                {term.category}
              </span>
            </div>
            <ShareButton term={term} />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Definition
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
              {term.definition}
            </p>

            {term.example && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Example
                  </h2>
                  <CopyButton code={term.example} />
                </div>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-800 dark:text-gray-200">
                    {term.example}
                  </code>
                </pre>
              </div>
            )}

            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Related Terms
                </h2>
                <div className="flex flex-wrap gap-3">
                  {term.relatedTerms.map((relatedId) => {
                    const relatedTerm = terms.find((t) => t.id === relatedId);
                    return (
                      <Link
                        key={relatedId}
                        href={`/term/${relatedId}`}
                        className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                                 text-gray-700 dark:text-gray-300 hover:bg-blue-100 
                                 dark:hover:bg-blue-900 hover:text-blue-700 
                                 dark:hover:text-blue-300 transition-colors font-medium"
                      >
                        {relatedTerm?.title || relatedId}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 
                     text-white hover:bg-blue-700 transition-colors font-medium"
          >
            ← Back to Dictionary
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
