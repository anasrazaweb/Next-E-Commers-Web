"use client";
import React, { useEffect, useRef, useState } from 'react';

const RunTimer = () => {
    const [timerDays, setTimerDays] = useState("");
    const [timerHours, setTimerHours] = useState("");
    const [timerMinutes, setTimerMinutes] = useState("");
    const [timerSeconds, setTimerSeconds] = useState("");

    let interval = useRef();

    const startTimer = () => {
        // end date
        const countdownDate = new Date('November 28, 2024 00:00:00').getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance <= 0) {
                // Reset the countdown to the original date if it reaches zero
                const newCountdownDate = new Date('November 30, 2024 00:00:00').getTime();
                const newDistance = newCountdownDate - now;

                const days = Math.floor(newDistance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((newDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((newDistance % (1000 * 60)) / 1000);

                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();

        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return (
        <div>
            <div className="timer-counter flex md:gap-5 gap-3 items-center">
                <section className="section text-center">
                    <h5 className='text-[12px]'>Day</h5>
                    <h2 className='md:text-[32px] text-[25px] font-semibold'>{timerDays}</h2>
                </section>
                <h1 className='font-bold text-[#DB4444] text-4xl mt-5'>:</h1>
                <section className="section text-center">
                    <h5 className='text-[12px]'>Hours</h5>
                    <h2 className='md:text-[32px] text-[25px] font-semibold'>{timerHours}</h2>
                </section>
                <h1 className='font-bold text-[#DB4444] text-4xl mt-5'>:</h1>
                <section className="section text-center">
                    <h5 className='text-[12px]'>Minutes</h5>
                    <h2 className='md:text-[32px] text-[25px] font-semibold'>{timerMinutes}</h2>
                </section>
                <h1 className='font-bold text-[#DB4444] text-4xl mt-5'>:</h1>
                <section className="section text-center">
                    <h5 className='text-[12px]'>Seconds</h5>
                    <h2 className='md:text-[32px] text-[25px] font-semibold'>{timerSeconds}</h2>
                </section>
            </div>
        </div>
    )
}

export default RunTimer;
