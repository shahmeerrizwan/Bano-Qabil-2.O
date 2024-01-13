function Footer() {
    return (<footer>

        <div style={{ background: 'bisque', display: 'flex' }} >
            <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" alt="" ></img>
            <div style={{ textAlign: 'left', marginLeft: '2rem' }}>
                <p style={{ fontSize: '2rem', }} >TRY THE OLX APP</p>
                <p  >Buy, sell and find just about anything using <br/>
                 the app on your mobile.</p>
            </div >

            <div style={{width:'30%', marginTop:'2rem' , marginLeft:'2rem'}}>
                <h3>GET YOUR APP TODAY</h3>
                <img style={{ width: '25%', marginLeft: '4rem' }} src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt=""></img>
                <img style={{ width: '25%' }} src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" ></img>
                <img style={{ width: '25%' , marginRight:'2rem'  }} src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" ></img>
            </div>
        </div>

        <div style={{ width: '100%', height: 194, display: "flex", backgroundColor: '#EBEEEF' }}>
            <div style={{ marginLeft: '2rem', fontSize: 11, textAlign: "left" }}>
                <h2>POPULAR CATEGORIES</h2>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Cars</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Flats for rent</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Mobile Phones</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Jobs</p>
            </div>
            <div style={{ marginLeft: '5rem', fontSize: 11, textAlign: "left" }}>
                <h2>TRENDING SEARCHES</h2>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Bikes</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Watches</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Books</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Dogs</p>
            </div>
            <div style={{ marginLeft: '5rem', fontSize: 11, textAlign: "left" }}>
                <h2>ABOUT US</h2>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>About Dubizzle Group</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>OLX Blog</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Contact Us</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>OLX for Businesses</p>
            </div>
            <div style={{ marginLeft: '5rem', fontSize: 11, textAlign: "left" }}>
                <h2>OLX</h2>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Help</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Sitemap</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Terms of use</p>
                <p style={{ margin: '0 0 5px 0', color: 'rgb(123, 123, 123)' }}>Privacy Policy</p>
            </div>

        </div>

        <div style={{ width: '100%', height: 50, backgroundColor: '#002F34', color: "white", fontSize: 12.4 }}>
            <p style={{ textAlign: "right", marginRight: 30, padding: '1rem' }}>Free Classifieds in Pakistan . © 2006-2024 OLX</p>

        </div>

    </footer>
    )
}

export default Footer;