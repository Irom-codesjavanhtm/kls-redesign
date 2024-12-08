import React from 'react';

export default function Header() {
  return (
    <div className="flex flex-row justify-center items-center top-0 w-full bg-zinc-800">
        <div className="container flex justify-between items-center">
            <div className="contacts"><p className="text-muted">info@koneloneshin.com</p></div>
            <div className="links flex flex-row">
                <a href="https://www.linkedin.com/koneloneshin" className="p-2" target="_blank">
                    <img src="/assets/linkedin-logo.svg" alt="LinkedIn Icon" style={{ width: '15px', height: '15px' }} />
                </a>
                <a href="https://www.facebook.com/koneloneshin" className="p-2" target="_blank">
                    <img src="/assets/facebook-logo.svg" alt="Facebook Icon" style={{ width: '15px', height: '15px' }} />
                </a>
                <a href="https://www.twitter.com/koneloneshin" className="p-2" target="_blank">
                    <img src="/assets/twitter-logo.svg" alt="Twitter Icon" style={{ width: '15px', height: '15px' }} />
                </a>
            </div>
        </div>
    </div>
  );
}

