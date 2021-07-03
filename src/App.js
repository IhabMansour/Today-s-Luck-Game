import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/style.scss';
import ButtonsOfLuck from './Components/ButtonsOfLuck';
import Message from './Components/Message';

const App = () => {
  const { t } = useTranslation();

  const [luck, setLuck] = useState({
    0: {
      id: '?',
      flag: 0,
      color: 'gray',
    },
    1: {
      id: '?',
      flag: 0,
      color: 'gray',
    },
    2: {
      id: '?',
      flag: 0,
      color: 'gray',
    },
    3: {
      id: '?',
      flag: 0,
      color: 'gray',
    },
    4: {
      id: '?',
      flag: 0,
      color: 'gray',
    },
    5: {
      id: '?',
      flag: 0,
      color: 'gray',
    },
    6: {
      id: '?',
      flag: 0,
      color: 'gray',
    },
    7: {
      id: '?',
      flag: 0,
      color: 'gray',
    },
    8: {
      id: '?',
      flag: 0,
      color: 'gray',
    },
  });

  const [message, setMessage] = useState({
    default: "Your message comes here!",
    onClick: "Make your selections.",
    isClicked: false,
    zero: "Opps!! You did not find anything. Try again",
    twoAndLess: "Good, You can do better. Let's try again.",
    moreThanTwo: "Congratulations!! You found all the treasures",
  });

  const [numberOfClicks, setnumberOfClicks] = useState(5);

  const [totalPoints, settotalPoints] = useState(0);

  const [timer, setTimer] = useState(0);

  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn])

  const handleClickButton = (e, luckOfButton, idOfButton) => {

    if (message.isClicked) {
      if (numberOfClicks === 1) {
        setTimerOn(false);
      }

      var sign = luckOfButton.id;
      if (!luckOfButton.flag && numberOfClicks > 0) {
        setnumberOfClicks(numberOfClicks - 1);
        let yourLuck = Math.random() * 100;
        if (yourLuck <= 50) {
          sign = 'X';
          setLuck((prevState) => ({
            ...prevState,
            [idOfButton]: {
              id: sign,
              flag: 1,
              color: 'red'
            }
          }));
        }
        else {
          sign = '$';
          settotalPoints(totalPoints + 1);
          setLuck((prevState) => ({
            ...prevState,
            [idOfButton]: {
              id: sign,
              flag: 1,
              color: 'yellow'
            }
          }));
        }
      }

    }
  }

  const handleReset = () => {

    setLuck({
      0: {
        id: '?',
        flag: 0,
        color: 'gray'
      },
      1: {
        id: '?',
        flag: 0,
        color: 'gray'
      },
      2: {
        id: '?',
        flag: 0,
        color: 'gray'
      },
      3: {
        id: '?',
        flag: 0,
        color: 'gray'
      },
      4: {
        id: '?',
        flag: 0,
        color: 'gray'
      },
      5: {
        id: '?',
        flag: 0,
        color: 'gray'
      },
      6: {
        id: '?',
        flag: 0,
        color: 'gray'
      },
      7: {
        id: '?',
        flag: 0,
        color: 'gray'
      },
      8: {
        id: '?',
        flag: 0,
        color: 'gray'
      },
    });

    setnumberOfClicks(5);

    settotalPoints(0);

    setMessage((prevState) => ({
      ...prevState,
      isClicked: true,
    }));

  }

  return (
    <React.Fragment>
      <div className="containerOfGame">
        <div className="nameOfGame">
          <p>{t("Today'sLuckGame")}</p>
        </div>

        <div className="contentsOfGame">

          <div className="leftOfButtons">
            <hr className="horizantal_Line_Animation"></hr>
            <p className="titleOfLeftOfButtons">{t('LOREMIPSUM')}</p>
            <hr className="horizantalLine"></hr>
            <p className="contentOfLeftOfButtons">{t('AgamebyIhabmadetochangetheworld!')}</p>
          </div>

          <div className="borderOfBottons">
            <ButtonsOfLuck luck={luck} handleClickButton={handleClickButton} />
          </div>

          <div className="rightOfButtons">
            <hr className="horizantal_Line_Animation"></hr>
            <p className="textOfrightButton">
              {t('Paragraph1')}
              <br />
              {t('Paragraph2')}
              <br />
              <br />
              {t('Copyright')} <span>&copy;</span> 2001-2018<br />
              {t('Allrightsreserved.')}
            </p>
          </div>

          <div className="resultOfGame">
            <div className="timer">
              <div>{t('Timer')}:</div>
              <div>{timer}</div>
            </div>
            <div className="numberOfClicks">
              <div>{t('NumberOfClicks')}:</div>
              <div>{numberOfClicks}</div>
            </div>
            <div className="totalPoints">
              <div>{t('TotalPoints')}:</div>
              <div>{totalPoints}</div>
            </div>
          </div>

          <div className="bottomOfGame">
            <Message message={message} numberOfClicks={numberOfClicks} totalPoints={totalPoints} />
            <div className="play">
              <button onClick={() => {
                handleReset();
                setTimerOn(true)
                setTimer(0)
              }}>
                <p>{t('Play')}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
