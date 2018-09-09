// JavaScript source code
import React, { Component } from "react";
//import bulmaCarousel from "bulma-carousel";
import ImageGallery from 'react-image-gallery';

class Home extends Component {

    //componentDidMount() {
    //    var carousels = bulmaCarousel.attach();
    //}

    state = {
        showIndex: false,
        showBullets: false,
        autoPlay: true,
        slideInterval: 3000,
        infinite: true,
        showThumbnails: false,
        showFullscreenButton: false,
        showGalleryFullscreenButton: false,
        showPlayButton: false,
        showGalleryPlayButton: false,
        showNav: false
    };


    render() {

        const images = [
            {
                original: '/img/pexels-photo-1189261.jpeg',
                thumbnail: '/img/pexels-photo-1189261.jpeg'
            },
            {
                original: '/img/pexels-photo-605408.jpeg',
                thumbnail: '/img/pexels-photo-605408.jpeg'
            },
            {
                original: '/img/pexels-photo-1283219.jpeg',
                thumbnail: '/img/pexels-photo-1283219.jpeg'
            },
            {
                original: '/img/pexels-photo-544961.jpeg',
                thumbnail: '/img/pexels-photo-544961.jpeg'
            }
        ];

        return (
            <div>
                <div className="columns">

                    <ImageGallery
                        items={images}
                        showBullets={this.state.showBullets}
                        showIndex={this.state.showIndex}
                        autoPlay={this.state.autoPlay}
                        infinite={this.state.infinite}
                        showThumbnails={this.state.showThumbnails}
                        showFullscreenButton={this.state.showFullscreenButton}
                        showPlayButton={this.state.showPlayButton}
                        showGalleryPlayButton={this.state.showGalleryPlayButton}
                        showNav={this.state.showNav}
                    />

                </div>

                <br />

                <span className="anchor" id="about"/>
                <div className="columns homefirst">
                    <div className="column">
                        <div className="card cardborder1">
                            <div className="card-content">
                                <p className="title cardtitletext">
                                    What is Mix And Ming?
                        </p>
                                <p className="subtitle">
                                    <span>Mix and Ming is a fun, interactive, educational addition to any event. You and your guests will share the experience of learning to make your favorite cocktails.</span>
                                    <p />
                                    <span>Activities are led by our highly skilled bartenders who are both fun and informative.  You'll have the opportunity to master the shake, the pour and the layer.  You'll learn fun facts about cocktails and the sprits used to make them. We offer non stop fun from start to finish. There are prizes and every guest leaves with a special gift they can use to practice what they have learned.</span>
                                    <p />
                                    <span>If you are looking for something different for an adult birthday, bridal shower, bachelor or bachelorette party, couple’s night, girl’s night, or hanging with the buddies, create your Mix And Ming event now.</span>
                                    <p />
                                </p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <span className="button1text">
                                        <img className="goldicon" src="/img/faviconb.jpg" alt="MAndM" />
                                        Create Your Event Now!!
                            </span>
                                </p>
                                <p className="card-footer-item">
                                    <span className="button1text">
                                        Share on <a href="#">Facebook</a>
                                    </span>
                                </p>
                            </footer>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card cardborder1">
                            <div className="card-content">
                                <p className="title cardtitletext">
                                    About Us
                        </p>
                                <p className="subtitle">
                                    <span>We get caught up in our lives, with work, school, taking care of family.</span>
                                    <p />
                                    <span>We often don’t get to mix and mingle with friends and acquaintances.</span>
                                    <p />
                                    <span>Mix and Ming was conceived in the summer of 2018 as an activity for the owner's brother's birthday.  The weekend is always a time for gathering, having a delicious meal and good drinks with family and friends.</span>
                                    <p />
                                    <span>This particular weekend a bartender was hired to teach the guests how to make different cocktails. An extraordinary time was had by all. Mix and Ming is an event where friends and family come together to learn to make cocktaile, laugh and spend time.</span>
                                    <p />
                                </p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <span className="button1text">
                                        <img className="goldicon" src="/img/faviconb.jpg" alt="MAndM" />
                                        Create Your Event Now!!
                            </span>
                                </p>
                                <p className="card-footer-item">
                                    <span className="button1text">
                                        Share on <a href="#">Facebook</a>
                                    </span>
                                </p>
                            </footer>
                        </div>
                    </div>
                </div>
                <br />

                <span className="anchor" id="services" />
                <div className="columns homefirst is-paddingless is-marginless">
                    <div className="column is-paddingless is-marginless">
                        <p className="title boxtitletext cleartheline">
                            Our Services
                </p>
                    </div>
                </div>

                <div className="tile is-ancestor">
                    <div className="tile is-vertical">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification">
                                    <figure className="image is-120x120">
                                        <img src="/img/pexels-photo-338609.jpeg" alt="Placeholder image" />
                                    </figure>
                                    <p className="servtitletext">Mix And Ming Event</p>
                                    <p className="">Standard 2 hour Mix And Ming event featuring bartender, 6 drinks, trivia and prizes and bartender tool gift set.</p>
                                    <figure className="image is-48x48">
                                        <img src="/img/favicona.png" alt="Placeholder image" />
                                    </figure>
                                </article>
                                <article className="tile is-child notification">
                                    <figure className="image is-120x120">
                                        <img src="/img/pexels-photo-965703.jpeg" alt="Placeholder image" />
                                    </figure>
                                    <p className="servtitletext">Bartender Service</p>
                                    <p className="">Extend traditional cocktail preparation for the duration of your event.</p>
                                    <figure className="image is-48x48">
                                        <img src="/img/favicona.png" alt="Placeholder image" />
                                    </figure>
                                </article>
                            </div>
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification">
                                    <figure className="image is-120x120">
                                        <img src="/img/pexels-photo-878992.jpeg" alt="Placeholder image" />
                                    </figure>
                                    <p className="servtitletext">Event Customization</p>
                                    <p className="">We can customize our product and service to align with your event type and purpose.</p>
                                    <figure className="image is-48x48">
                                        <img src="/img/favicona.png" alt="Placeholder image" />
                                    </figure>
                                </article>
                                <article className="tile is-child notification">
                                    <figure className="image is-120x120">
                                        <img src="/img/cigar.jpg" alt="Placeholder image" />
                                    </figure>
                                    <p className="servtitletext">Cigar Service</p>
                                    <p className="">Nothing pairs with a good drink like a good cigar.  We'll happily provide those also.</p>
                                    <figure className="image is-48x48">
                                        <img src="/img/favicona.png" alt="Placeholder image" />
                                    </figure>
                                </article>
                            </div>
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification">
                                    <figure className="image is-120x120">
                                        <img src="/img/pexels-photo-109275.jpeg" alt="Placeholder image" />
                                    </figure>
                                    <p className="servtitletext">Theme Drinks</p>
                                    <p className="">In addition to our standard drink selection, we can tailor a special cocktail for your occasion.</p>
                                    <figure className="image is-48x48">
                                        <img src="/img/favicona.png" alt="Placeholder image" />
                                    </figure>
                                </article>
                                <article className="tile is-child notification">
                                    <figure className="image is-120x120">
                                        <img src="/img/red-couple-night-romantic.jpg" alt="Placeholder image" />
                                    </figure>
                                    <p className="servtitletext">Wine Tasting</p>
                                    <p className="">If you want something a little softer, we also do wine tastings with suggestions on what foods pair well with them.</p>
                                    <figure className="image is-48x48">
                                        <img src="/img/favicona.png" alt="Placeholder image" />
                                    </figure>
                                </article>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default Home;