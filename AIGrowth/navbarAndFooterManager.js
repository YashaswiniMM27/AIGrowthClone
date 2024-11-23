class aiGrowthNavbar extends HTMLElement{
    connectedCallback() {
        console.log('aiGrowthNavbar is loaded!');
        this.innerHTML = `
        <nav class="navbar">
            <a href="/AIGrowth/homepage.html">
                <img src="/AIGrowth/Images/ai-growth.svg">
            </a>
            <a href="/AIGrowth/homepage.html#leadership" class="ourTeamButton" style="color: white; text-decoration: none; ">
                Our Team
            </a>
        </nav>
        `
    }
}

class aiGrowthFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer class="wrapperfooter">
            <div class="contactUsInfoSection">
                <div class="row justify-content-center">
                    <div class="col col-sm-10 col-12">
                        <div class="contactUs">
                            Contact Us
                        </div>
                        <div class="ReachUs">
                            Reach us at
                            <a href="mailto:info@aigrowth.in" style="color: white; text-decoration: underline!important;">info@aigrowth.in</a>
                        </div>
                        <div class="row row-cols-sm-auto row-cols-1 gap-4">
                            <div class="col">
                                <div class="addressHeader">
                                    Bangalore
                                </div>
                                <div class="addressDetails" >
                                    No. 371, St.Johns Hospital Road, Santoshpuram, <br> Koramangala 3rd Block, Bangalore South, Karnataka - 560034
                                </div>
                            </div>
                            <div class="col">
                                <div class="addressHeader">
                                    Mumbai
                                </div>
                                <div class="addressDetails">
                                    10th floor, Parinee Crescenzo, G Block BKC, Bandra Kurla <br> Complex, Bandra East, Mumbai, Maharashtra - 400051
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-2 d-flex justify-content-sm-end justify-content-center">
                        <div class="isoLogo">
                            <img src="/AIGrowth/Images/ISO_Seal.webp">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-xl-8 col-lg-6 order-sm-first order-last">
                        <div class="copyrightText">
                            Copyright © 2024, AI Growth Pvt. Ltd. All rights reserved.
                        </div>
                    </div>
                    <div class="col col-xl-4 col-sm-6 col-12 d-flex justify-content-sm-end align-items-sm-end justify-content-center align-items-center order-sm-last order-first">
                        <div class="row">
                            <div class="col col-7">
                                <div class="footerLink">
                                    <a href="/AIGrowth/privacyPolicy.html" target="_blank" style="color: inherit;">Privacy Policy</a>
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="footerLink">
                                    <a href="/AIGrowth/disclaimer.html" target="_blank" style="color: inherit;">Disclaimer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
        `
    }
}

customElements.define('ai-growth-navbar', aiGrowthNavbar)
customElements.define('ai-growth-footer' , aiGrowthFooter)