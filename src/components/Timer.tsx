import React, {useRef, useState} from 'react';
import MyButton from "../components/MyButton";

const Timer = () => {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [now, setNow] = useState<number | null>(null);
    const intervalRef = useRef<any>( null);
    const handleClickStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }
    const handleClickStop = () => {
        clearInterval(intervalRef.current)
    }

    let secondsPassed = 0;
    if (startTime !== null && now !== null){
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <div>
            <div>
                Время: { startTime }
            </div>
            <div>
                Текущее время: { now }
            </div>
            <div>
                Прошедшее время: { secondsPassed }
            </div>
            <MyButton onClick={handleClickStart}>Старт</MyButton>
            <MyButton onClick={handleClickStop}>Стоп</MyButton>
        </div>
    );
};

export default Timer;