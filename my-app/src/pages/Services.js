import React from 'react'

export default function Services() {
  return (
    <React.Fragment>
        <header>
        <a href="#" class="logo">Nashaat family</a>
        <nav class="navigation">
            <a href="#services">services</a>
            <a href="#Videos">Videos</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>


    <section class="main">
        <div>
            <h2>Hello, we are a Nashaat Family<span>entertainment channel</span></h2>
            <h3>We offer you family videos</h3>
            <a href="#Videos" class="main-btn">View our work</a>
            <div class="social-icons">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-snapchat"></i></a>
            </div>
        </div>
    </section>

    <section class="cards" id="services">
        <h2 class="title">services</h2>
        <div class="content">
            <div class="card">
                <div class="icon">
                    <i class="fa-solid fa-video"></i>
                </div>
                <div class="info">
                    <h3>Script Writing</h3>
                    <p>Search for different topics, you can then sign up and like the video</p>
                </div> 
            </div>   
            <div class="card">
                <div class="icon">
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div class="info">
                    <h3>Advertising</h3>
                    <p>You can gladly advertise on our channel</p>
                </div> 
            </div>
        </div>
    </section>

    <section class="cards videos" id="videos">
        <h2 class="title">videos</h2>
        <div class="content">
            <div class="video-card">
                <div class="video-image">
                    <img src="assets/images/Please.png" />
                </div>
                <div class="video-info">
                    <p class="video-category">Script Writing & video production</p>
                    <strong class="video-title">
                        <span>Ice and Lemon Experience</span>
                        <a href="https://youtu.be/hdytCz_YztA" class="more-details">Click here</a>
                    </strong>
                </div>
            </div>
            <div class="video-card">
                <div class="video-image">
                    <img src="assets/images/10 Scary Side Effects of Eating JUNK FOOD!!! (1).png" />
                </div>
                <div class="video-info">
                    <p class="video-category">Script Writing & video production</p>
                    <strong class="video-title">
                        <span>Smell Challenge</span>
                        <a href="https://youtu.be/Yr7uNOTcEd0" class="more-details">Click here</a>
                    </strong>
                </div>
            </div>
            <div class="video-card">
                <div class="video-image">
                    <img src="assets/images/game.png" />
                </div>
                <div class="video-info">
                    <p class="video-category">Script Writing & video production</p>
                    <strong class="video-title">
                        <span>Blow Challenge</span>
                        <a href="https://youtu.be/5h7-FEhZZ7g" class="more-details">Click here</a>
                    </strong>
                </div>
            </div>
            <div class="video-card">
                <div class="video-image">
                    <img src="assets/images/اطول سندويتش (1).png" />
                </div>
                <div class="video-info">
                    <p class="video-category">Script Writing & video production</p>
                    <strong class="video-title">
                        <span>longest sandwich</span>
                        <a href="https://youtu.be/55Q2aRxm5jo" class="more-details">Click here</a>
                    </strong>
                </div>
            </div>
            <div class="video-card">
                <div class="video-image">
                    <img src="assets/images/Trying Best Reviewed Pizza.png" />
                </div>
                <div class="video-info">
                    <p class="video-category">Script Writing & video production</p>
                    <strong class="video-title">
                        <span>Pizza Challenge</span>
                        <a href="https://youtu.be/qDfFoOBqKFI" class="more-details">Click here</a>
                    </strong>
                </div>
            </div>
            <div class="video-card">
                <div class="video-image">
                    <img src="assets/images/vibes (1).png" />
                </div>
                <div class="video-info">
                    <p class="video-category">Script Writing & video production</p>
                    <strong class="video-title">
                        <span>Balloon Challenge</span>
                        <a href="https://youtu.be/ARVHAsX7kS8" class="more-details">Click here</a>
                    </strong>
                </div>
            </div>
        </div>
    </section>

    <section class="cards contact" id="contect">
        <h2 class="title">to contact us</h2>
        <div class="content">
            <div class="card">
                <div class="icon">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="info">
                    <h3>phone</h3>
                    <p>+9050000000</p>
                </div> 
            </div>   
            <div class="card">
                <div class="icon">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="info">
                    <h3>Email</h3>
                    <p>nashaat@gamil.com</p>
                </div> 
            </div>
        </div>
    </section>

    <footer class="footer">
        <p class="footer-title">copyrights @ <span>Nashaat mehyedin</span></p>
        <div class="social-icons">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-snapchat"></i></a>
        </div>
    </footer>

    </React.Fragment>
 )
}
