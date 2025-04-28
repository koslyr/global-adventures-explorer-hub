
import React from 'react';
import { Card } from '@/components/ui/card';

interface InfoCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon }) => {
  return (
    <Card className="bg-white p-4 flex items-center space-x-4">
      <div className="text-travel-blue p-3 bg-blue-50 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="font-medium">{value}</p>
      </div>
    </Card>
  );
};

interface DestinationInfoProps {
  language: string;
  currency: string;
  timezone: string;
  bestTime: string;
}

const DestinationInfo: React.FC<DestinationInfoProps> = ({
  language,
  currency,
  timezone,
  bestTime
}) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <InfoCard
        title="Γλώσσα"
        value={language}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        }
      />
      <InfoCard
        title="Νόμισμα"
        value={currency}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
      <InfoCard
        title="Ζώνη Ώρας"
        value={timezone}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
      <InfoCard
        title="Καλύτερη Περίοδος"
        value={bestTime}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
      />
    </div>
  );
};

export default DestinationInfo;
