// app/admin/page.tsx
import React from 'react';
import { PrismaClient } from '@prisma/client';
import ClientChart from '../components/ClientChart';

export default async function AdminPage() {
  const prisma = new PrismaClient();
  const submissions = await prisma.submission.findMany();

  const counts = submissions.reduce((acc: { [key: string]: number }, submission) => {
    acc[submission.method] = (acc[submission.method] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ padding: '20px' }}>
      <h1>Panel Administratora</h1>
      <h2>Wykres zgłoszeń</h2>
      <ClientChart data={counts} />
    </div>
  );
}
