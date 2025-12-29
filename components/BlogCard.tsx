import React, { useState } from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-zinc-100 pb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left hover:bg-zinc-50 transition-colors p-4 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <time className="text-xs text-zinc-400 font-mono">{blog.date}</time>
              <div className="flex gap-2">
                {blog.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-[10px] px-2 py-1 bg-zinc-100 text-zinc-600 rounded font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold text-zinc-900">{blog.title}</h3>
          </div>
          <svg
            className={`w-5 h-5 text-zinc-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-4 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {blog.images && blog.images.length > 0 && (
            <div className="mb-6">
              <img 
                src={blog.images[0]} 
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
          <div className="prose prose-zinc max-w-none">
            <div className="whitespace-pre-wrap text-zinc-600 leading-relaxed">
              {blog.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
