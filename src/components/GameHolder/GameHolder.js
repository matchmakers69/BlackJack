import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-styled-flexboxgrid';
import { withRouter } from 'react-router-dom';
import {
  createDeck,
  shuffleCardsRandomly,
  countPointsByCardType,
  getPlayersPointsBeforeTheGame,
  getDealersPointsBeforeTheGame,
} from './service/getDeck';
import GameContext from '../../GameContext';
import PlayerFunds from '../../components/PlayerFunds';
import PlayerFundsInput from '../../components/PlayerFundsInput';
import CallToActionsButtonsContainer from '../../components/CallToActionsButtonsContainer';
import GameContent from '../../components/GameContent';
import WinnersStatusBar from '../../components/WinnersStatusBar';
import { drawRandomCard } from './service/helpers';
import constants from '../../constants';

const GameHolder = ({ history }) => {
  const componentIsMounted = useRef(true);
  const [deck, setDeck] = useState([]);
  const [funds, setFunds] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [playerCards, setPlayer] = useState([]);
  const [dealerCards, setDealer] = useState([]);
  const [betValue, setBetValue] = useState({
    value: '',
  });

  const [startedGame, setStartedGame] = useState(false);
  const [hideDealButton, setHideDealButton] = useState(false);
  const [showGameContent, setShowGameContent] = useState(false);
  const [standClicked, setStandClicked] = useState(false);
  const [gameInfoMessage, setGameInfoMessage] = useState('');
  const [winnersStatus, setWinnersStatus] = useState(false);

  const shuffleDeck = (deck) => {
    const shuffledDeck = shuffleCardsRandomly(deck);
    setDeck(shuffledDeck);
  };

  useEffect(() => {
    const startNewGame = () => {
      if (componentIsMounted.current) {
        setFunds(100);
        const deck = createDeck();
        setDeck(deck);
        if (deck.length > 0) {
          shuffleDeck(deck);
        }
      } else {
        const playerPoints = getPlayersPointsBeforeTheGame(playerCards);
        const dealerPoints = getDealersPointsBeforeTheGame(dealerCards);
        if (playerPoints === 21) {
          setGameInfoMessage(constants.PLAYER_WINS);
          setWinnersStatus(true);
        } else if (playerPoints === 21 && dealerPoints === 21) {
          setGameInfoMessage(constants.NO_ONE_WINS);
          setWinnersStatus(true);
        } else if (dealerPoints === 21) {
          setGameInfoMessage(constants.DEALER_WINS);
          setWinnersStatus(true);
        }
      }
    };
    startNewGame();
    return () => {
      componentIsMounted.current = false;
    };
  }, [dealerCards, deck, funds, playerCards]);

  const handleBetValueInputChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    const regexNumbers = /^[0-9\s]*$/;
    const checkIfNumber = regexNumbers.test(value);
    if (!Number.isNaN(Number(value)) && checkIfNumber) {
      setBetValue((prevProps) => ({
        ...prevProps,
        [name]: value.trim(),
      }));
      setAlertMessage('');
    } else {
      setAlertMessage(constants.ONLY_NUMBERS);
    }
  };

  const handlePlaceBet = () => {
    const { value } = betValue;
    const currentBet = value;
    if (currentBet > funds) {
      setAlertMessage(constants.NO_FUNDS);
    } else {
      setFunds(funds - currentBet);
      setBetValue({ value: '' });
      setStartedGame(true);
    }
    setHideDealButton(true);
  };

  const handleDeal = () => {
    const deckCopy = [...deck];
    const cardsPassedToDealerArray = [
      deckCopy.pop(),
      { ...deckCopy.pop(), reversed: true },
    ];
    const cardsPassedToPlayerArray = [deckCopy.pop(), deckCopy.pop()];
    setDeck(deckCopy);
    setDealer(cardsPassedToDealerArray);
    setPlayer(cardsPassedToPlayerArray);
    setHideDealButton(false);
    setShowGameContent(true);
  };

  const handleHit = () => {
    const deckCopy = [...deck];
    const updatedPlayerArray = [...playerCards, deckCopy.pop()];
    const playerPoints = countPointsByCardType(updatedPlayerArray);
    const dealerPoints = countPointsByCardType(dealerCards);

    setDeck(deckCopy);
    setPlayer(updatedPlayerArray);

    if (playerPoints > 21 && dealerPoints <= 21) {
      setGameInfoMessage(constants.PLAYER_LOST);
      setWinnersStatus(true);
    } else if (playerPoints === 21) {
      setGameInfoMessage(constants.PLAYER_WINS);
      setWinnersStatus(true);
    }
  };

  const dealerDraw = (dealerCards, deck) => {
    const { randomCard, updatedDeck } = drawRandomCard(deck);
    dealerCards.push(randomCard);
    countPointsByCardType(dealerCards);
    return { dealerCards, updatedDeck };
  };

  const dealerHand = () => {
    let deckCopy = [...deck];
    let hand = dealerCards;
    const playerPoints = countPointsByCardType(playerCards);
    hand[1].reversed = false;

    let dealerPoints = countPointsByCardType(hand);

    while (dealerPoints <= playerPoints && dealerPoints < 21) {
      let { dealerCards, updatedDeck } = dealerDraw(hand, deckCopy);
      deckCopy = updatedDeck;
      hand = dealerCards;
      dealerPoints = countPointsByCardType(hand);
    }

    setDeck(deckCopy);
    setDealer(hand);

    if (
      (playerPoints <= 21 && playerPoints > dealerPoints) ||
      (dealerPoints > 21 && playerPoints <= 21)
    ) {
      setGameInfoMessage(constants.DEALER_LOST);
      setWinnersStatus(true);
    } else {
      setGameInfoMessage(constants.DEALER_WINS);
      setWinnersStatus(true);
    }
  };

  const handleStand = () => {
    setPlayer(playerCards);
    setStandClicked(true);
    dealerHand();
  };

  const handleStartAgain = () => {
    history.push('/');
  };

  return (
    <GameContext.Provider
      value={{
        startedGame,
        onChange: handleBetValueInputChange,
        betValue,
        handlePlaceBet: handlePlaceBet,
        alertMessage,
        hideDealButton,
        standClicked,
        dealDeck: handleDeal,
        hitDeck: handleHit,
        standDeck: handleStand,
        showGameContent,
        playerCards,
        dealerCards,
        getScoreByPlayer: countPointsByCardType,
        gameInfoMessage,
        resetGame: handleStartAgain,
      }}
    >
      <Row>
        <Col className='text-center' xs={12}>
          <PlayerFunds funds={funds} />
        </Col>

        <PlayerFundsInput />
        {!winnersStatus && <CallToActionsButtonsContainer />}
        {winnersStatus && <WinnersStatusBar />}
        <GameContent />
      </Row>
    </GameContext.Provider>
  );
};

GameHolder.propTypes = {
  history: PropTypes.instanceOf(Object),
};
GameHolder.defaultProps = {
  history: {},
};

export default withRouter(GameHolder);
