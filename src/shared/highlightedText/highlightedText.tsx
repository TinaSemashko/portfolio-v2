import React from 'react';
import { Typography } from '@mui/material';

interface HighlightProps {
  phrase: string;
  wordsWithColors?: { word: string; color: string }[]; // Существующий функционал
  highlightWords?: { words: string; color: string }; // Новый функционал
}

const HighlightedText: React.FC<HighlightProps> = ({ phrase, wordsWithColors, highlightWords }) => {
  let allWordsWithColors: { word: string; color: string }[] = [];

  if (highlightWords) {
    const { words, color } = highlightWords;
    const wordsArray = words.split(',').map(word => word.trim());
    allWordsWithColors = wordsArray.map(word => ({ word, color }));
  }

  if (wordsWithColors) {
    allWordsWithColors = [...allWordsWithColors, ...wordsWithColors];
  }

  const parts = phrase.split(new RegExp(`(${allWordsWithColors.map(w => w.word).join('|')})`, 'g'));

  return (
    <Typography variant="h6" sx={{ pt: 4 }}>
      {parts.map((part, index) => {
        const wordData = allWordsWithColors.find(w => w.word === part);
        return wordData ? (
          <span key={index} style={{ color: wordData.color }}>
            {part}
          </span>
        ) : (
          part
        );
      })}
    </Typography>
  );
};

export default HighlightedText;
