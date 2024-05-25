'use client'
import React from 'react';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;