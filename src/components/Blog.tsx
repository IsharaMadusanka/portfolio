import React from 'react';

const postImages = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&q=80'
];

const Blog = () => {
  const posts = [
    {
      title: 'How to Build a Modern Portfolio with React',
      date: 'June 2025',
      summary: 'A step-by-step guide to creating a beautiful, responsive portfolio using React and Tailwind CSS.'
    },
    {
      title: 'Tips for Junior Developers',
      date: 'May 2025',
      summary: 'Advice and best practices for those starting their journey in web development.'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center drop-shadow-lg">Blog & Articles</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post, idx) => (
            <div key={idx} className="relative bg-slate-800/60 rounded-2xl p-0 border border-blue-400/30 shadow-xl hover:shadow-blue-400/20 transition-all flex flex-col overflow-hidden group">
              <div className="h-40 w-full bg-gradient-to-tr from-blue-400/30 to-purple-400/20 flex items-center justify-center">
                <img src={postImages[idx % postImages.length]} alt={post.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="font-semibold text-white text-lg mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow">
                  {post.title}
                </span>
                <span className="block text-slate-400 text-xs mb-2">{post.date}</span>
                <p className="text-slate-300 flex-1">{post.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
