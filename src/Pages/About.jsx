import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ minHeight: "100vh",paddingTop: "80px",textAlign: "center",
        backgroundImage: "url('https://i.pinimg.com/originals/19/9f/d2/199fd29184c6cff24e3445f849af463e.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",}}>

        <div className='header' style={{display:'flex', justifyContent:'space-evenly', marginLeft:'600px', fontSize:''        }}>
            <h1 style={{fontSizeAdjust:'from-font', fontSize:'larger'}}> <u>About Single & Multi Page Webpage</u></h1>
            <a href="https://www.justinmind.com/web-design/single-page-vs-multi-page-websites-battle" style={{color:'red', fontSize:'large'}}><u>To Know More</u></a>
        </div>
        <p style={{
            marginLeft:'300px', color:'yellow',fontSize:'larger'
        }}>What is a multi-page website?</p>
        <aside style={{marginLeft:'800px'        }}>
        <p>
            <li>In contrast to their single-page counterparts, multi-page websites consist of several pages under a single domain, each dedicated to a different aspect of the business or topic. This standard website structure allows for a more extensive and detailed presentation of content, with a clear hierarchy and navigation system. </li>
            <li>For instance, an e-commerce website will typically use a multi-page website to separate product categories, provide detailed product pages, offer an about us section and host a blog. This separation helps users find specific information quickly and efficiently.
            </li>
        </p>
        <p style={{ marginLeft:'300px', color:'yellow',fontSize:'larger'}}>Advantages of multi-page websites</p>
        <p>Multi-page websites are the go-to structure for many businesses due to their ability to handle complex information and provide a detailed user experience. Here are some of the advantages they offer:</p>
        <p>
            <li>Improved SEO opportunities: With multiple pages, you have more opportunities to target a variety of keywords, which can improve your site's visibility in search engine results.</li>
            <li>Scalability: As your business grows, so can your website. Adding new products, services, or content sections is straightforward with a multi-page design.</li>
            <li>Content organization: A multi-page layout allows for better organization of content into categories and subcategories, making it easier for website users to navigate and find what they're looking for.</li>
        
        </p>
        <br />
         <Link
        to="/"
        style={{
          marginTop: "20px",
          display: "inline-block",
          padding: "10px 15px",
          background: "#ff00fbff",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        ⬅ Back to User List
      </Link>
        
        
        </aside>
        

    </div>
  )
}

export default About
