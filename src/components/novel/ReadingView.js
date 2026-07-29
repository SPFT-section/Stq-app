import React from 'react';

export const ReadingView = ({ chapter, styles }) => {
  if (!chapter) return null;

  const paragraphsHtml = (chapter.content || '')
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => `<p>${line}</p>`)
    .join('');

  return (
    <div className="reader-content" style={styles}>
      <h1 className="reader-chapter-title">{chapter.title}</h1>
      <div
        className="reader-chapter-content"
        dangerouslySetInnerHTML={{ __html: paragraphsHtml }}
      />
    </div>
  );
};

export default ReadingView;
