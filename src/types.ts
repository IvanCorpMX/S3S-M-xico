import React from 'react';

export interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
  details: string;
  specs: string[];
  images: string[];
  highlight?: {
    quote: string;
    text: string;
    callout: string;
  };
}
