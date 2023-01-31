'use client';

import React from 'react';
import { Header, Footer } from '@components/KnowledgeCenter/layout';

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-w-screen flex min-h-screen flex-col">
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
