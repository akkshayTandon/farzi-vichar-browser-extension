import { useState } from "react";
import './Card.css'

/* eslint-disable react/prop-types */

export default function Card({ quote, author, loader, CallShayari }) {
    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }


    const handleCopyClick = () => {

        copyTextToClipboard(quote)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="main">

            <div className="card h-100 bg-transparent  border-0" >
                <div className="card-body">
                    <h1 className="card-title text-light"><img src="/shayarilogo.png" alt="" /></h1>

                    <hr className='text-light' />


                    {
                        loader ?
                            <p className="placeholder-glow ">
                                <span className="placeholder col-12"></span>
                            </p> :
                            <p className='card-title  fs-3' style={{ color: "burlywood" }}>{quote}</p>
                    }
                    {
                        loader ?
                            <p className="placeholder-glow ">
                                <span className="placeholder col-12"></span>
                            </p> :
                            null
                    }

                    {
                        loader ?
                            <p className="placeholder-glow ">
                                <span className="placeholder col-12"></span>
                            </p> :
                            null
                    }

                    {
                        loader ?
                            <p className="placeholder-glow position-absolute end-0 me-3" style={{ width: "10rem" }}>
                                <span className="placeholder col-12"></span>
                            </p> :
                            <p className='card-title author text-light fs-4'> - {author}</p>
                    }



                    <button onClick={CallShayari} type="button" className="stack-btn-26 mt-5"><span>अगली शायरी</span></button>
                </div>
                <span onClick={handleCopyClick} className="share m-1"> <img src="/clipboard-outline.svg" alt="clipboard-icon" />
                    <span className="fs-5">{isCopied ? 'Copied!' : null}</span>
                </span>
                <a href="https://www.instagram.com/farzivichar/" className="insta m-1" target="_blank" rel="noreferrer"> <img src="/insta-page-link.svg" alt="external-link" />
                    {/* <span className="fs-5">{isCopied ? 'Copied!' : null}</span> */}
                </a>
            </div>

            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>

        </div>
    )
}