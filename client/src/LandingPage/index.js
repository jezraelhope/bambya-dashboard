import React from 'react'
import './landingPage.css'
import wsdbImage from '../assets/wsdb.png'
function LandingPage() {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <nav>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#Terms">Terms</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li>
                        <a href="#WSDB">WSDB</a>
                    </li>
                </nav>
            </header>
            <section className="landing-logo">
                <h1>
                    Wheel Strategy in <span>Action</span>
                </h1>
                <div className="landing-logo--cta">
                    <p>Keep track and analyze your trades</p>
                    <div className="landing-logo--cta-links">
                        <a href="/trades">WSDB</a>
                        <a href="#learnMore">Learn More</a>
                    </div>
                </div>
            </section>
            <section className="landing-steps">
                <h2>Visualize your profits easily</h2>
                <div className="landing-steps-container">
                    <div className="landing-steps--visual">
                        <div className="visual-number">1</div>
                        <div className="visual-info">
                            <h3 className="visual-info--heading">Add</h3>
                            <p className="visual-info--more-info">
                                User add trades created using the built-in form.
                            </p>
                        </div>
                    </div>
                    <div className="landing-steps--visual">
                        <div className="visual-number">2</div>
                        <div className="visual-info">
                            <h3 className="visual-info--heading">Filter</h3>
                            <p className="visual-info--more-info">
                                User can filter their trade using the inbuilt
                                filter functionality sorted by year. For ease of
                                use.
                            </p>
                        </div>
                    </div>
                    <div className="landing-steps--visual">
                        <div className="visual-number">3</div>
                        <div className="visual-info">
                            <h3 className="visual-info--heading">Analyze</h3>
                            <p className="visual-info--more-info">
                                User can analyze the information in a easy to
                                see table format in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="landing-more-info">
                <h2>Know the options wheel Strategy</h2>
                <p>
                    If you're looking at this page, then you probably know what
                    the wheel strategy is, but just in case you didn't, the
                    wheel strategy is based on the options wheel strategy that
                    involves choosing several strikes, and then choosing the one
                    that gives the most profit, while minimizing the risk. The
                    wheel strategy is very popular due to its ease of use and
                    low risk.
                </p>
            </section>
            <section className="landing-visit-app">
                <h2>How Wheel Strategy Dashboard Helps</h2>
                <img src={wsdbImage} alt="wheel strategy website image" />
                <p>View your trades in our state-of-the-art dashboard</p>
                <a href="/trades" className="landing-visit-app--button">
                    Try our website for free
                </a>
            </section>
            <footer>Copyright 2022</footer>
        </div>
    )
}

export default LandingPage
