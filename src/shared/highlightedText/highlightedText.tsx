import React from 'react';
import { Typography } from '@mui/material';

interface HighlightProps {
  phrase: string;
  wordsWithColors: { word: string; color: string }[];
}

const HighlightedText: React.FC<HighlightProps> = ({ phrase, wordsWithColors }) => {
  const parts = phrase.split(new RegExp(`(${wordsWithColors.map(w => w.word).join('|')})`, 'g'));

  return (
    <Typography variant="h6" sx={{ pt: 4 }}>
      {parts.map((part, index) => {
        const wordData = wordsWithColors.find(w => w.word === part);
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
