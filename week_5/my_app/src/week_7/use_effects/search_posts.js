import React, { useEffect, useState } from 'react';

export default function SearchPosts() {
  const [keyword, setKeyword] = useState('');
  const [allPosts, setAllPosts] = useState([]); // Store all posts
  const [filteredPosts, setFilteredPosts] = useState([]); // Store filtered posts

  // Fetch all posts on mount
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data);
        setFilteredPosts(data); // Initially show all posts
      });
  }, []);

  // Filter posts based on keyword
  useEffect(() => {
    if (keyword.trim() === '') {
      setFilteredPosts(allPosts); // Show all posts if keyword is empty
    } else {
      const filtered = allPosts.filter((post) =>
        post.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [keyword, allPosts]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul>
        {filteredPosts.map((post) => (
            <div>
                <li key={post.id}>----{post.title}---</li>
                <br/>
            </div>
          
        ))}
      </ul>
    </div>
  );
}
