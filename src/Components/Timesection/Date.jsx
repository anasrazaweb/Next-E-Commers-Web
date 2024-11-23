"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RunTimer from '../RunTimer';

const CountdownTimer = () => {
    const [timerDays, setTimerDays] = useState("");
    const [timerHours, setTimerHours] = useState("");
    const [timerMinutes, setTimerMinutes] = useState("");
    const [timerSeconds, setTimerSeconds] = useState("");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('March 19, 2024 00:00:00').getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance <= 0) {
                clearInterval(interval.current);
                setTimerDays(12);
                setTimerHours(4);
                setTimerMinutes(47);
                setTimerSeconds(32);
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
        <div className='mt-5 w-full flex justify-between items-center'>
            <div className='flex gap-20 items-center'>
                <h1 className='md:text-[36px] text-[23px] font-semibold'>Flash Sales</h1>

              <div className='md:block hidden'>  <RunTimer /></div>

            </div>
            <div className='flex gap-5'>
                <div className=' rounded-full bg-[#F5F5F5] flex justify-center items-center p-[6px] md:h-10 md:w-10 md:p-[10px] h-8 w-8 '> < ArrowLeft /></div>
                <div className=' rounded-full bg-[#F5F5F5] flex justify-center items-center p-[6px] md:h-10 md:w-10 md:p-[10px] h-8 w-8 '> < ArrowRight /></div>

            </div>
        </div>
    );
};

export default CountdownTimer;
