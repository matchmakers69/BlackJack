import cards from '../../../data/cards';
import suits from '../../../data/suits';

// returns not randomly changed deck of cards
export const createDeck = () => {
  let deck = [];
  for (let suit of suits) {
    for (let card of cards) {
      deck.push({ suit, face: card });
    }
  }
  return deck;
};

// swap every index of the array with a randomly chosen index
export const shuffleCardsRandomly = (deck) => {
  let copyDeck = [...deck];
  for (let index in copyDeck) {
    // pick random index
    let swapIndex = Math.floor(Math.random() * copyDeck.length);
    // swap two cards between current index and random index
    let temporaryCard = copyDeck[swapIndex];
    copyDeck[swapIndex] = copyDeck[index];
    copyDeck[index] = temporaryCard;
  }
  return copyDeck;
};

export const countPointsByCardType = (cards) => {
  let rearrangedCardsForDeal = [];
  cards.forEach((card) => {
    if (card.face === 'Ace') {
      rearrangedCardsForDeal = [...rearrangedCardsForDeal, card];
    } else if (card.face) {
      rearrangedCardsForDeal = [card, ...rearrangedCardsForDeal];
    }
  });

  return rearrangedCardsForDeal.reduce((sum, card) => {
    if (card.reversed) return sum;
    if (card) {
      if (
        card.face === 'Jack' ||
        card.face === 'Queen' ||
        card.face === 'King'
      ) {
        return sum + 10;
      } else if (card.face === 'Ace') {
        return sum + 11 <= 21 ? sum + 11 : sum + 1;
      } else {
        return sum + card.face;
      }
    }
    return true;
  }, 0);
};

export const getPlayersPointsBeforeTheGame = (playerCards) => {
  let playerPoints = 0;

  playerPoints = countPointsByCardType(playerCards);
  return playerPoints;
};

export const getDealersPointsBeforeTheGame = (dealerCards) => {
  let dealerPoints = 0;

  dealerPoints = countPointsByCardType(dealerCards);
  return dealerPoints;
};
