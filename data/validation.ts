import { terms } from './terms';

// Validate that all relatedTerms references exist
export function validateRelatedTerms() {
  const termIds = new Set(terms.map(t => t.id));
  const issues: string[] = [];

  terms.forEach(term => {
    if (term.relatedTerms) {
      term.relatedTerms.forEach(relatedId => {
        if (!termIds.has(relatedId)) {
          issues.push(`Term "${term.id}" references non-existent term "${relatedId}"`);
        }
      });
    }
  });

  return issues;
}

// Get valid related terms only
export function getValidRelatedTerms(termId: string) {
  const term = terms.find(t => t.id === termId);
  if (!term?.relatedTerms) return [];

  const termIds = new Set(terms.map(t => t.id));
  return term.relatedTerms.filter(id => termIds.has(id));
}

// Run validation in development
if (process.env.NODE_ENV === 'development') {
  const issues = validateRelatedTerms();
  if (issues.length > 0) {
    console.warn('⚠️ Related Terms Validation Issues:');
    issues.forEach(issue => console.warn(`  - ${issue}`));
  }
}
