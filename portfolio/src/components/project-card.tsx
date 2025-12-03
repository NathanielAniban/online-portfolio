import React from 'react';

// --- Interface for Project Properties (Modern TS Practice) ---
interface ProjectProps {
    img: string;
    title: string;
    description: string;
    status: 'Complete' | 'In Progress' | 'On Hold';
  linkUrl: string; // Added explicit URL for the button
}

// --- Project Card Component ---
const ProjectCard: React.FC<ProjectProps> = ({ img, title, description, status, linkUrl }) => {
    
  // Determine status color
  const statusColor = status === 'Complete' 
    ? 'bg-green-100 text-green-700 border-green-300' 
    : status === 'In Progress' 
    ? 'bg-yellow-100 text-yellow-700 border-yellow-300' 
    : 'bg-red-100 text-red-700 border-red-300';

  return (
        <figure 
      className="p-4 border border-gray-200 bg-white shadow-xl rounded-xl flex flex-col w-full max-w-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      {/* Image and Title */}
      <img 
        src={img} 
        alt={`Image for ${title}`} 
        className="rounded-lg mb-4 w-full h-40 object-cover border border-gray-100" 
        onError={(e) => {
            // Fallback for broken images
            (e.target as HTMLImageElement).onerror = null; 
            (e.target as HTMLImageElement).src = "https://placehold.co/400x160/F3F4F6/9CA3AF?text=No+Image";
        }}
/>
        <figcaption className="text-lg font-bold text-gray-800 mb-2">{title}</figcaption>
        
      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
        {description}
      </p>
      
      {/* Status Badge */}
      <div className="flex justify-between items-center mb-4 border-t pt-3 border-dashed border-gray-100">
        <p className={`text-xs font-semibold px-2 py-1 rounded-full border ${statusColor}`}>
          Status: {status}
        </p>
        
        {/* Action Button (Fixed: Replaced <Link> with standard <a>) */}
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-indigo-700 shadow-md"
>
          Learn more
        </a>
      </div>
      </figure>
    );
};


export default ProjectCard;