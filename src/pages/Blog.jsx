import React, { useState, useEffect } from 'react';
import heroBg from '../assets/hero-tailor.png';
import PageHeroSection from '../components/PageHeroSection';
const FiSearch = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>;
const FiMessageSquare = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>;
const FiTag = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5.99M7 3v5.99m5.99-5.99L20 17H4L14 3m-4 5h5"></path></svg>;
const FiUser = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
const Link = ({ to, children, className, onClick }) => <a href={to} className={className} onClick={onClick}>{children}</a>;

// --- DATA ---
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
const initialBlogPosts = [
  {
    id: 1,
    image: "https://th.bing.com/th/id/OIP.hr_c47xxnGeoPL6W29Go-AHaHa?rs=1&pid=ImgDetMain",
    date: "15 Jan",
    title: "Top 5 Fabric Choices for Summer 2023",
    snippet: "Discover the best breathable and lightweight fabrics to keep you cool and stylish this summer season.",
    fullContent: `
      <p>As temperatures rise, choosing the right fabric becomes crucial for both comfort and style. Here are our top picks for summer fabrics:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. Linen - The Classic Summer Choice</h3>
      <p>Linen is a natural fiber made from the flax plant. It's highly breathable, moisture-wicking, and gets softer with each wash. Perfect for suits, shirts, and dresses.</p>
      <p class="py-2"><strong>Rating:</strong> 5/5 for breathability, 4/5 for durability</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">2. Cotton - The All-Rounder</h3>
      <p>Lightweight cotton, especially Egyptian or Pima cotton, offers excellent comfort. Opt for looser weaves like poplin or seersucker for maximum airflow.</p>
      <p class="py-2"><strong>Rating:</strong> 4.5/5 for comfort, 4/5 for versatility</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. Chambray - Denim's Lighter Cousin</h3>
      <p>Chambray provides the denim look without the weight. It's perfect for casual shirts and summer dresses that need a bit of structure.</p>
      <p class="py-2"><strong>Rating:</strong> 4/5 for style, 4/5 for comfort</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">4. Silk - Luxurious and Light</h3>
      <p>Natural silk regulates temperature well and feels luxurious against the skin. Ideal for formal summer wear and evening outfits.</p>
      <p class="py-2"><strong>Rating:</strong> 5/5 for elegance, 3.5/5 for maintenance</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">5. Bamboo Rayon - The Eco Option</h3>
      <p>This sustainable fabric is naturally antimicrobial, moisture-wicking, and incredibly soft. Great for activewear and casual summer clothing.</p>
      <p class="py-2"><strong>Rating:</strong> 4.5/5 for sustainability, 4/5 for performance</p>
      
      <p class="py-4 px-6 bg-gray-100 italic border-l-4 border-red-500 my-4">"The right summer fabric can make the difference between suffering through the heat and enjoying the season in style." - Master Tailor James Wilson</p>
    `,
    category: "Fabrics, Summer",
    comments: 8,
    tags: ["summer", "fabrics", "linen", "cotton"],
    relatedProducts: [
      { 
        id: 'fabric1', 
        name: 'Premium Linen', 
        image: 'https://images.unsplash.com/photo-1618354691373-d8514fec8f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.8,
        price: '$24.99/yd'
      },
      { 
        id: 'fabric2', 
        name: 'Egyptian Cotton', 
        image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.5,
        price: '$19.99/yd'
      },
    ],
    commentSection: [
      { user: 'Sarah Johnson', date: 'January 16, 2023 at 3:12 pm', text: 'Great list! I would add lightweight wool as well - merino wool is surprisingly cool in summer.' },
      { user: 'Michael Chen', date: 'January 16, 2023 at 4:45 pm', text: 'How do you care for bamboo rayon? I love how it feels but worry about maintenance.' },
      { user: 'Emma Wilson', date: 'January 17, 2023 at 9:30 am', text: 'I swear by linen for summer suits. Yes, it wrinkles, but that\'s part of the charm!' },
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "12 Feb",
    title: "Tailoring Trends: What's Hot in 2023",
    snippet: "From bold shoulders to sustainable practices, discover the tailoring trends dominating fashion this year.",
    fullContent: `
      <p>The world of tailoring is evolving with exciting new trends in 2023. Here's what's making waves this year:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. Sustainable Tailoring</h3>
      <p>Eco-conscious tailoring is no longer niche. Expect more organic fabrics, zero-waste patterns, and upcycled materials. Our shop now offers a full line of sustainable wool and cotton options.</p>
      <p class="py-2"><strong>Customer Rating:</strong> 4.7/5 for sustainable options</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">2. Bold Shoulders & Structured Silhouettes</h3>
      <p>The 80s influence continues with strong shoulders and defined waists. We're seeing this in both women's and men's tailoring.</p>
      <p class="py-2"><strong>Popularity:</strong> 85% of our clients opting for structured looks</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. Mixed Materials</h3>
      <p>Combining different fabrics in one garment - think wool sleeves with leather panels or silk lapels on cotton jackets.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">4. Custom Embroidery & Personalization</h3>
      <p>Clients are requesting more personalized touches like monograms, custom linings, and unique button choices.</p>
      <p class="py-2"><strong>Rating:</strong> 4.9/5 for personalized service</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">5. Relaxed Tailoring</h3>
      <p>For those who want the polish of tailoring without the formality, looser cuts and softer structures are gaining popularity.</p>
    `,
    category: "Trends, Tailoring",
    comments: 12,
    tags: ["trends", "tailoring", "fashion"],
    relatedProducts: [
      { 
        id: 'service1', 
        name: 'Custom Suit Package', 
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.9,
        price: 'From $499'
      },
      { 
        id: 'fabric3', 
        name: 'Organic Wool', 
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.6,
        price: '$34.99/yd'
      },
    ],
    commentSection: [
      { user: 'David Miller', date: 'February 13, 2023 at 10:15 am', text: 'The mixed materials trend is fascinating! Can you combine denim with more formal fabrics?' },
      { user: 'Lisa Rodriguez', date: 'February 13, 2023 at 2:30 pm', text: 'I love the personalized touches. Just had a suit made with my initials embroidered inside - such a nice detail.' },
      { user: 'Thomas Kim', date: 'February 14, 2023 at 8:45 am', text: 'How sustainable are your sustainable options really? Do you have certifications?' },
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "5 Mar",
    title: "How to Care for Your Tailored Clothing",
    snippet: "Expert tips on maintaining your custom garments to ensure they last for years while looking their best.",
    fullContent: `
      <p>Investing in tailored clothing means little if you don't care for it properly. Follow these expert tips to maintain your garments:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. Proper Storage</h3>
      <p>- Use wide, padded hangers for jackets to maintain shoulder shape<br>
         - Allow 24 hours between wears for wool garments to recover<br>
         - Store in breathable garment bags, not plastic</p>
      <p class="py-2"><strong>Effectiveness:</strong> Proper storage can extend garment life by 3-5 years</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">2. Cleaning Guidelines</h3>
      <p>- Dry clean wool suits only 2-3 times per year maximum<br>
         - Spot clean when possible<br>
         - Steam instead of ironing when you can</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. Seasonal Care</h3>
      <p>- Before summer storage: clean thoroughly and use cedar blocks to deter moths<br>
         - In winter: brush coats regularly to remove salt and dirt</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">4. Professional Maintenance</h3>
      <p>Visit your tailor for:</p>
      <p>- Annual inspections and minor repairs<br>
         - Re-pressing and shaping<br>
         - Adjustments for weight fluctuations</p>
      <p class="py-2"><strong>Customer Satisfaction:</strong> 98% of clients who follow this regimen report garments lasting 7+ years</p>
    `,
    category: "Care, Maintenance",
    comments: 5,
    tags: ["care", "maintenance", "tailoring"],
    relatedProducts: [
      { 
        id: 'product1', 
        name: 'Garment Care Kit', 
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.7,
        price: '$39.99'
      },
      { 
        id: 'service2', 
        name: 'Annual Maintenance', 
        image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.8,
        price: '$79.99'
      },
    ],
    commentSection: [
      { user: 'Robert Smith', date: 'March 6, 2023 at 9:30 am', text: 'The storage tips are gold! I ruined two suits before learning about proper hangers.' },
      { user: 'Jennifer Lee', date: 'March 7, 2023 at 2:15 pm', text: 'How often should I steam vs. iron my dress shirts?' },
    ]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "22 Apr",
    title: "The Art of Bespoke: Our Tailoring Process",
    snippet: "A behind-the-scenes look at how we create custom garments from initial consultation to final fitting.",
    fullContent: `
      <p>True bespoke tailoring is a dying art, but we maintain traditional techniques combined with modern precision. Here's our process:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. Initial Consultation (1-2 hours)</h3>
      <p>- Discuss lifestyle needs and garment purpose<br>
         - Select fabrics from our 500+ swatch library<br>
         - Take 25+ body measurements<br>
         - Determine style preferences</p>
      <p class="py-2"><strong>Client Rating:</strong> 4.9/5 for consultation experience</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">2. Pattern Creation (3-5 days)</h3>
      <p>- Draft a unique paper pattern based on measurements<br>
         - Adjust for posture and body idiosyncrasies<br>
         - Create a "toile" (test garment) for complex commissions</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. First Fitting (3-4 weeks later)</h3>
      <p>- Try on the basted garment (loosely assembled)<br>
         - Mark adjustments with chalk<br>
         - Refine fit and balance</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">4. Second Fitting (2 weeks later)</h3>
      <p>- Garment is more complete but still adjustable<br>
         - Finalize sleeve length, trouser break, etc.<br>
         - Confirm all details</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">5. Final Delivery (1 week later)</h3>
      <p>- Hand-finished garment ready for wear<br>
         - Includes care instructions and follow-up offer<br>
         - Satisfaction guaranteed</p>
      <p class="py-2"><strong>Average Completion Time:</strong> 6-8 weeks for a suit</p>
      <p class="py-4 px-6 bg-gray-100 italic border-l-4 border-red-500 my-4">"A well-made bespoke garment should feel like a second skin - comfortable yet refined, personal yet professional." - Master Tailor Elena Rodriguez</p>
    `,
    category: "Bespoke, Tailoring",
    comments: 7,
    tags: ["bespoke", "process", "tailoring"],
    relatedProducts: [
      { 
        id: 'service3', 
        name: 'Bespoke Suit', 
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 5.0,
        price: 'From $899'
      },
      { 
        id: 'service4', 
        name: 'Shirt Fitting', 
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.8,
        price: 'From $149'
      },
    ],
    commentSection: [
      { user: 'Daniel Brown', date: 'April 23, 2023 at 11:45 am', text: 'The attention to detail in the fitting process is incredible. My suit fits better than anything I\'ve ever owned.' },
      { user: 'Olivia Martinez', date: 'April 24, 2023 at 3:20 pm', text: 'How does this compare to made-to-measure? Is it worth the extra cost?' },
    ]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "10 May",
    title: "Wedding Season Style Guide for Grooms",
    snippet: "From classic morning coats to modern slim-fit suits, we break down the best options for wedding attire.",
    fullContent: `
      <p>Wedding season is upon us, and grooms have more options than ever. Here's our comprehensive guide to looking your best on the big day.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. Traditional Morning Coat</h3>
      <p>- The most formal option for daytime weddings<br>
         - Typically in grey with striped trousers<br>
         - Pair with ascot or cravat<br>
         <strong>Popularity:</strong> 15% of our wedding clients</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">2. Classic Black Tie</h3>
      <p>- For evening weddings<br>
         - Peak or shawl lapel dinner jacket<br>
         - Black bow tie and cummerbund<br>
         <strong>Rating:</strong> 4.8/5 for elegance</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. Modern Slim-Fit Suit</h3>
      <p>- Most popular choice for contemporary weddings<br>
         - Navy or charcoal are safest colors<br>
         - Can be dressed up with vest or pocket square<br>
         <strong>Popularity:</strong> 60% of our wedding clients</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">4. Themed Wedding Attire</h3>
      <p>- For beach, rustic, or destination weddings<br>
         - Lighter fabrics and colors<br>
         - More relaxed fit<br>
         <strong>Examples:</strong> Linen suits, seersucker, light wool</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">5. Cultural Attire</h3>
      <p>- We specialize in adapting traditional garments:<br>
         - Sherwani for Indian weddings<br>
         - Barong Tagalog for Filipino weddings<br>
         - Kilt for Scottish weddings</p>
      <p class="py-2"><strong>Client Satisfaction:</strong> 97% for cultural attire</p>
    `,
    category: "Wedding, Style",
    comments: 9,
    tags: ["wedding", "groom", "style"],
    relatedProducts: [
      { 
        id: 'service5', 
        name: 'Wedding Suit Package', 
        image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.9,
        price: 'From $699'
      },
      { 
        id: 'fabric4', 
        name: 'Wedding Linen', 
        image: 'https://images.unsplash.com/photo-1618354691373-d8514fec8f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.7,
        price: '$29.99/yd'
      },
    ],
    commentSection: [
      { user: 'James Wilson', date: 'May 11, 2023 at 8:30 pm', text: 'What color suit would you recommend for a beach wedding at sunset?' },
      { user: 'Sophia Chen', date: 'May 12, 2023 at 10:15 am', text: 'We\'re having a morning wedding but want something less formal than morning coat. Suggestions?' },
    ]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    date: "18 Jun",
    title: "How to Choose the Perfect Suit for Your Body Type",
    snippet: "Tailoring experts explain how to select suit styles that flatter your unique physique and proportions.",
    fullContent: `
      <p>Every body is unique, and the right suit can highlight your best features while minimizing areas you're less confident about. Here's our expert guide:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. Tall & Slim</h3>
      <p>- Opt for double-breasted or wider lapels to add visual width<br>
         - Consider patterns like windowpane or chalk stripe<br>
         - Avoid overly slim fits that can exaggerate height<br>
         <strong>Recommended:</strong> 3-piece suits add dimension</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">2. Athletic Build</h3>
      <p>- Look for jackets with slight waist suppression<br>
         - Trousers with a slight taper balance broad shoulders<br>
         - Medium-width lapels work best<br>
         <strong>Tip:</strong> Avoid overly structured shoulders that can look bulky</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">3. Shorter Stature</h3>
      <p>- Choose single-breasted jackets with lower button stance<br>
         - Opt for thinner lapels and minimal break on trousers<br>
         - Vertical pinstripes can create length illusion<br>
         <strong>Avoid:</strong> Double-breasted or long jackets</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">4. Larger Frame</h3>
      <p>- Darker solid colors are most slimming<br>
         - Medium-width lapels balance proportions<br>
         - Higher armholes and slightly tapered legs<br>
         <strong>Key:</strong> Proper fit is crucial - never size up hoping it will look looser</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">5. Pear Shape</h3>
      <p>- Draw attention upward with patterned jackets<br>
         - Slightly fuller cut trousers balance hips<br>
         - Structured shoulders create top-heavy balance<br>
         <strong>Fabric Tip:</strong> Medium-weight fabrics drape best</p>
    `,
    category: "Style, Fit",
    comments: 6,
    tags: ["fit", "style", "suits"],
    relatedProducts: [
      { 
        id: 'service6', 
        name: 'Style Consultation', 
        image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.8,
        price: '$99'
      },
      { 
        id: 'fabric5', 
        name: 'Slim Fit Worsted', 
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
        rating: 4.6,
        price: '$39.99/yd'
      },
    ],
    commentSection: [
      { user: 'Michael Brown', date: 'June 19, 2023 at 9:30 am', text: 'This is so helpful! I\'m tall and slim and always struggle with suits looking too boxy.' },
      { user: 'David Kim', date: 'June 20, 2023 at 11:45 am', text: 'Any recommendations for athletic builds with shorter legs/longer torso?' },
    ]
  }
];

const categories = [
  { name: "Fabrics", count: 12 },
  { name: "Tailoring", count: 18 },
  { name: "Style", count: 15 },
  { name: "Care", count: 7 },
  { name: "Wedding", count: 9 },
  { name: "Trends", count: 11 },
];

const recentPosts = [
  { id: 1, title: "Top 5 Fabric Choices for Summer 2023", date: "January 15, 2023", image: "https://th.bing.com/th/id/OIP.hr_c47xxnGeoPL6W29Go-AHaHa?rs=1&pid=ImgDetMain" },
  { id: 2, title: "Tailoring Trends: What's Hot in 2023", date: "February 12, 2023", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80" },
  { id: 3, title: "How to Care for Your Tailored Clothing", date: "March 5, 2023", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80" },
  { id: 4, title: "The Art of Bespoke: Our Tailoring Process", date: "April 22, 2023", image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80" },
];

const tagClouds = ["summer", "fabrics", "linen", "cotton", "trends", "tailoring", "fashion", "bespoke", "process", "wedding", "groom", "style", "fit", "suits", "care", "maintenance"];

const instagramFeeds = [
  "https://th.bing.com/th/id/OIP.hr_c47xxnGeoPL6W29Go-AHaHa?rs=1&pid=ImgDetMain",
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGvVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
];

// FIX 1: Moved BlogDetail outside of the Blog component.
// This prevents it from being re-created on every render of the parent,
// allowing it to manage its own state (like the comment form) effectively.
const BlogDetail = ({
  post,
  onBack,
  onCommentSubmit,
  onSearchSubmit,
  onCategoryClick,
  onTagClick,
  onRecentPostClick,
  searchQuery
}) => {
  // State for the sidebar search bar
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  // FIX 2: Comment form state is now local to BlogDetail.
  // This stops the parent from re-rendering every time you type.
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    website: '',
    comment: ''
  });

  const handleLocalSearchChange = (e) => {
    setLocalSearchQuery(e.target.value);
  };

  const handleLocalSearchSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(localSearchQuery);
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.email || !commentForm.comment) return;

    const newComment = {
      user: commentForm.name,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) + ' at ' + new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
      }),
      text: commentForm.comment
    };

    // Call the function passed from the parent to update the global state
    onCommentSubmit(newComment);

    // Reset the local form state
    setCommentForm({
      name: '',
      email: '',
      website: '',
      comment: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#0f172a] py-10 text-center w-full">
        <h1 className="text-3xl font-semibold text-white mb-2">Blog Details</h1>
        <p className="text-sm text-white">
          <Link to="/blog" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:underline text-white font-medium">Blog</Link> | Details
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-2/3 space-y-6">
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
          <h2 className="text-3xl font-bold text-gray-800 mt-4">{post.title}</h2>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span className="flex items-center mr-4">
              <FiTag className="mr-1 text-red-500" /> {post.category}
            </span>
            <span className="flex items-center">
              <FiMessageSquare className="mr-1 text-red-500" /> {post.comments} Comments
            </span>
          </div>
          <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.fullContent }}></div>

          {post.relatedProducts && post.relatedProducts.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Products</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {post.relatedProducts.map(product => (
                  <div key={product.id} className="text-center group">
                    <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-md mb-2 group-hover:opacity-75 transition-opacity duration-200" />
                    <p className="text-sm text-gray-700 font-medium group-hover:text-red-600 transition-colors duration-200">{product.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{post.commentSection.length} Comments</h3>
            {post.commentSection.length > 0 ? (
              <ul className="space-y-6">
                {post.commentSection.map((comment, index) => (
                  <li key={index} className="flex items-start space-x-4 border-b pb-4 last:border-b-0">
                    <img src={`https://ui-avatars.com/api/?name=${comment.user.replace(' ', '+')}&background=random`} alt={comment.user} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-800">{comment.user}</p>
                          <p className="text-sm text-gray-500 mb-2">{comment.date}</p>
                        </div>
                        <button className="text-sm text-gray-500 hover:text-red-600 transition-colors duration-200">REPLY</button>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No comments yet. Be the first to comment!</p>
            )}

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Leave a Reply</h3>
              <form className="space-y-4" onSubmit={handleCommentSubmit}>
                <textarea name="comment" placeholder="Write Comment" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-32" value={commentForm.comment} onChange={handleCommentChange} required></textarea>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Name" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" value={commentForm.name} onChange={handleCommentChange} required />
                  <input type="email" name="email" placeholder="Email" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" value={commentForm.email} onChange={handleCommentChange} required />
                </div>
                <input type="text" name="website" placeholder="Website (Optional)" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" value={commentForm.website} onChange={handleCommentChange} />
                <button type="submit" className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Search Keyword</h3>
            <form className="relative" onSubmit={handleLocalSearchSubmit}>
              <input type="text" placeholder="Search Keyword" className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" value={localSearchQuery} onChange={handleLocalSearchChange} />
              <button type="submit" className="absolute right-0 top-0 h-full px-4 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition-colors duration-200">
                <FiSearch />
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Category</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.name} className="flex justify-between items-center text-gray-700 hover:text-red-600 transition-colors duration-200 cursor-pointer group" onClick={() => onCategoryClick(cat.name)}>
                  <span>{cat.name}</span>
                  <span className="text-gray-500 group-hover:text-red-600 transition-colors duration-200">({cat.count})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Post</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-center space-x-3 group cursor-pointer" onClick={() => onRecentPostClick(post.id)}>
                  <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                  <div>
                    <h4 className="text-gray-800 font-medium group-hover:text-red-600 transition-colors duration-200">{post.title}</h4>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tag Clouds</h3>
            <div className="flex flex-wrap gap-2">
              {tagClouds.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-600 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => onTagClick(tag)}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Instagram Feeds</h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramFeeds.map((img, index) => (
                <img key={index} src={img} alt={`Instagram Post ${index + 1}`} className="w-full h-full object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-200" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Blog = () => {
  // --- STATE MANAGEMENT ---
  const [allBlogPosts, setAllBlogPosts] = useState(initialBlogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  


  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // --- EFFECTS ---
  useEffect(() => {
    const filtered = allBlogPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [searchQuery, allBlogPosts]);

  // --- HANDLERS ---
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  

  const handleAddComment = (newComment) => {
    if (!selectedPost) return;

    const updatedPost = {
      ...selectedPost,
      commentSection: [...selectedPost.commentSection, newComment],
      comments: selectedPost.comments + 1
    };
    
    const updatedAllPosts = allBlogPosts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    );

    setAllBlogPosts(updatedAllPosts);
    setSelectedPost(updatedPost); // Update the view with the new comment immediately
  };
  
  // --- Sidebar Handlers for BlogDetail ---
  const handleSearchSubmitFromDetail = (query) => {
      setSearchQuery(query);
      handleBackToBlog();
  };

  const handleCategoryClickFromDetail = (category) => {
      setSearchQuery(category);
      handleBackToBlog();
  };

  const handleTagClickFromDetail = (tag) => {
      setSearchQuery(tag);
      handleBackToBlog();
  };

  const handleRecentPostClickFromDetail = (postId) => {
      const postToView = allBlogPosts.find(p => p.id === postId);
      if (postToView) {
          handlePostClick(postToView);
      }
  };


  if (selectedPost) {
   
    return (
      <BlogDetail
        post={selectedPost}
        onBack={handleBackToBlog}
        onCommentSubmit={handleAddComment}
        onSearchSubmit={handleSearchSubmitFromDetail}
        onCategoryClick={handleCategoryClickFromDetail}
        onTagClick={handleTagClickFromDetail}
        onRecentPostClick={handleRecentPostClickFromDetail}
        searchQuery={searchQuery}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeroSection title="Blog" bgImage={heroBg} />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 space-y-10">
            {filteredPosts.length > 0 ? (
              <>
                {currentPosts.map((post) => (
                  <div key={post.id} className="b p-6  shadow-md">
                    <div className="relative mb-6 group">
                      <img src={post.image} alt={post.title} className="w-full h-120 " />
                      <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300  cursor-pointer" onClick={() => handlePostClick(post)}></div>
                      <div className="absolute bottom-4 left-4 bg-red-600 text-white p-3  text-center font-bold">
                        <span className="block text-xl">{post.date.split(' ')[0]}</span>
                        <span className="block text-sm">{post.date.split(' ')[1]}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-red-600 transition-colors duration-200 cursor-pointer" onClick={() => handlePostClick(post)}>
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{post.snippet}</p>
                    <div className="flex items-center text-gray-500 text-sm border-t pt-4">
                      <span className="flex items-center mr-4">
                        <FiTag className="mr-1 text-red-500" /> {post.category}
                      </span>
                      <span className="flex items-center">
                        <FiMessageSquare className="mr-1 text-red-500" /> {post.comments} Comments
                      </span>
                    </div>
                  </div>
                ))}

                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2 mt-8">
                    <button className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                      {'<'}
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                      <button key={number} className={`px-4 py-2 rounded-md ${currentPage === number ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => handlePageChange(number)}>
                        {number}
                      </button>
                    ))}
                    <button className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                      {'>'}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600 mb-4">No blog posts found for your search.</h3>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200" onClick={() => setSearchQuery('')}>
                  Clear Search
                </button>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Search Keyword</h3>
              <div className="relative">
                <input type="text" placeholder="Search Keyword" className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" value={searchQuery} onChange={handleSearchChange} />
                <button className="absolute right-0 top-0 h-full px-4 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition-colors duration-200">
                  <FiSearch />
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Category</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.name} className="flex justify-between items-center text-gray-700 hover:text-red-600 transition-colors duration-200 cursor-pointer group" onClick={() => setSearchQuery(cat.name)}>
                    <span>{cat.name}</span>
                    <span className="text-gray-500 group-hover:text-red-600 transition-colors duration-200">({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Post</h3>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.id} className="flex items-center space-x-3 group cursor-pointer" onClick={() => handlePostClick(allBlogPosts.find(p => p.id === post.id))}>
                    <img src={post.image} alt={post.title} className="w-20 h-20 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-800 font-medium group-hover:text-red-600 transition-colors duration-200">{post.title}</h4>
                      <p className="text-gray-500 text-sm">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tag Clouds</h3>
              <div className="flex flex-wrap gap-2">
                {tagClouds.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-600 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => setSearchQuery(tag)}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Instagram Feeds</h3>
              <div className="grid grid-cols-3 gap-2">
                {instagramFeeds.map((img, index) => (
                  <img key={index} src={img} alt={`Instagram Post ${index + 1}`} className="w-full h-full object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-200" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;