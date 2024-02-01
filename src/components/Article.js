import React from "react";

const Article = ({ title, date, preview, minutesToRead }) => {
  // Default date if no prop is passed
  const defaultDate = "January 1, 1970";

  // Function to generate coffee cup emojis for less than 30 minutes
  const generateCoffeeCups = (minutes) => {
    const coffeeCupsCount = Math.ceil(minutes / 5);
    return "☕️".repeat(coffeeCupsCount) + ` ${minutes} min read`;
  };

  // Function to generate bento box emojis for 30 minutes or longer
  const generateBentoBoxes = (minutes) => {
    const bentoBoxesCount = Math.ceil(minutes / 10);
    return "🍱".repeat(bentoBoxesCount) + ` ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      {minutesToRead && (
        <div>
          {minutesToRead < 30
            ? generateCoffeeCups(minutesToRead)
            : generateBentoBoxes(minutesToRead)}
        </div>
      )}
    </article>
  );
};

export default Article;
