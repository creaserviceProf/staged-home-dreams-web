
import React from 'react';
import { Button } from '@/components/ui/button';

interface SegmentProps {
  title: string;
  tagline: string;
  description: string;
}

const Segment: React.FC<SegmentProps> = ({ title, tagline, description }) => {
  return (
    <div className="bg-white p-6 rounded-sm shadow-sm flex flex-col items-center text-center">
      <h3 className="text-2xl font-serif font-semibold mb-3">{title}</h3>
      <p className="font-medium text-gray-700 mb-4">{tagline}</p>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
      <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
    </div>
  );
};

const CustomerSegments = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <Segment
            title="Homeowners"
            tagline="Want to sell your vacant home for more money?"
            description="Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor. Aliquam congue."
          />
          <Segment
            title="Investors"
            tagline="Want to turn your inventory faster?"
            description="Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor. Aliquam congue."
          />
          <Segment
            title="Realtors"
            tagline="Want to sell your vacant listing easier and faster?"
            description="Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor. Aliquam congue."
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSegments;
