export const drawRandomCard = (deck) => {
  let randomCardObj = {};
  const updatedDeck = deck;
  const randomIndex = Math.floor(Math.random() * updatedDeck.length);
  const randomCard = updatedDeck[randomIndex];
  updatedDeck.splice(randomIndex, 1);
  randomCardObj = { randomCard, updatedDeck };
  return randomCardObj;
};
