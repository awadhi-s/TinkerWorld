import React, { useState,useEffect } from 'react';

import './Chapters.css';

const chapters = [
  { id: 1, title: "The Origin", description: "Learn about Tinkerbell's beginnings in Pixie Hollow." },
  { id: 2, title: "Adventures in Neverland", description: "Her magical journey with Peter Pan." },
  { id: 3, title: "The Fairy Friend", description: "Tinkerbell's friendships and their importance." },
  { id: 4, title: "Guardian of the Pixie Dust", description: "How Tinkerbell protected the essence of magic." },
];

const Chapters = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleChapterClick = (id) => {
    setSelectedChapter(id);
  };

  const handleBackClick = () => {
    setSelectedChapter(null);
  };

  return (
    <div className="chapters">
      <h1 className="chapters-title">Tinkerbell's Journey</h1>
      {selectedChapter === null ? (
        <div className="chapters-list">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="chapter-card"
              onClick={() => handleChapterClick(chapter.id)}
            >
              <h2>{chapter.title}</h2>
              <p>{chapter.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="story-box">
          <button className="back-button" onClick={handleBackClick}>Back</button>
          <Story chapterId={selectedChapter} />
        </div>
      )}
    </div>
  );
};


const Story = ({ chapterId }) => {
    const storyData = {
      1: [
        "Tinkerbell was born in Pixie Hollow, a magical place where fairies are made.",
        "She was the smallest of all the fairies but had a heart full of adventure.",
        "Her first adventure was to the human world, where she discovered the magic of dust."
      ],
      2: [
        "Tinkerbell followed Peter Pan to Neverland, where she learned the power of belief.",
        "She met pirates, mermaids, and Indians, and grew fond of her adventures.",
        "Her friendship with Peter was tested but ultimately grew stronger."
      ],
      3: [
        "Tinkerbell made many friends in Neverland, including the Lost Boys.",
        "She learned the importance of loyalty and sacrifice for those you care about.",
        "Her friendships were tested when jealousy crept into her heart."
      ],
      4: [
        "Tinkerbell became the guardian of Pixie Dust, protecting it from those who would misuse it.",
        "She fought against dark forces, proving that even the smallest fairy could make a big difference.",
        "Her bravery saved Pixie Hollow from disaster, and she became a true hero."
      ]
    };
  
    const lines = storyData[chapterId] || [];
    const [currentLine, setCurrentLine] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(false); // To control typing animation
  
    useEffect(() => {
      if (currentLine < lines.length) {
        const words = lines[currentLine].split(' ');
        let wordIndex = 0;
        setIsTyping(true); // Start typing effect
  
        const wordInterval = setInterval(() => {
          setCurrentText((prevText) => prevText + ' ' + words[wordIndex]);
          wordIndex++;
  
          if (wordIndex === words.length) {
            clearInterval(wordInterval);
            setTimeout(() => {
              setCurrentLine((prev) => prev + 1); // Move to next line
              setCurrentText(''); // Reset current text
            }, 1000); // Wait 1 second before starting next line
          }
        }, 150); // Adjust typing speed here
  
        return () => clearInterval(wordInterval); // Cleanup interval
      }
    }, [currentLine, lines]);
  
    return (
      <div className="story-box">
        <h2>Chapter {chapterId}</h2>
        <div className="story-content">
          {lines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="story-line">
              <span>{index === currentLine ? currentText : line}</span>
            </div>
          ))}
        </div>
        {currentLine === lines.length && (
          <button className="back-button" onClick={() => setCurrentLine(0)}>
            Back to Chapters
          </button>
        )}
      </div>
    );
  };
export default Chapters;
