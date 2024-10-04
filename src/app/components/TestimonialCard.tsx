// src/app/components/TestimonialCard.tsx

import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import { StarIcon } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating }) => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="mt-4">{content}</p>
      <div className="mt-4">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)} {/* Simple way to display the rating */}
      </div>
    </div>
  );
};


export default TestimonialCard;
