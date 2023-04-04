import React from 'react';
import { useState } from 'react';
import './faq.css';

const Faq = () => {
    const [selected , setSelected] = useState(null)
    const toggle = (i) => {
        if ( selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className='Faq'>
            <div className='faq_heading'>
                <h1> Frequently Asked Questions </h1>
                <p> As with any new platform, users may have questions regarding how it works and what it can offer them.
                    To address these concerns, the RateYourSkill website features a Frequently Asked Questions (FAQ) section.
                    The FAQ section contains a list of common questions that users may have about the platform, such as how to sign up, how to take an assessment, and how to view their results.
                </p>
            </div>
            <div className='faq_questions'>
                <div className='accordion'>
                    {data.map((item, i) => (
                        <div className='item'>
                            <div className='title' onClick={ () => toggle(i)} >
                                <h4> {item.question} </h4>
                                <span> { selected === i ? '-' : '+'} </span>
                            </div>
                            <div className={ selected === i ? 'content_show' : 'content'}> {item.answer} </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

const data = [
    {
        question: 'What do I need to have to take any of the skill Test?',
        answer: 'To take the Test, you need to have a desktop or laptop with stable internet connection. Please note that the test cannot be taken on mobile or tablet.'
    },
    {
        question: 'Will the test be conducted in English?',
        answer: 'Yes all the test conducted by our platform will be conducted in English. '
    },
    {
        question: 'Is the test free?',
        answer: 'Yes, it is free.'
    },
    {
        question: 'Whom should I contact if I have any queries or complaints regarding the Test?',
        answer: 'You can reach out to us on chat support or write to us at support@rys.com.'
    },

]

export default Faq
