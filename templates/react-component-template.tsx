import React from 'react';

interface ComponentNameProps {
  // Define props here
  title: string;
  description?: string;
  // Add more as needed
}

const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  description,
}) => {
  return (
    <div className="component-name">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {/* Add component content */}
    </div>
  );
};

export default ComponentName;
