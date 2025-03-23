// components/ClientChart.tsx
'use client';

import dynamic from 'next/dynamic';

const ClientChart = dynamic(() => import('./Chart'), { ssr: false });

export default ClientChart;
