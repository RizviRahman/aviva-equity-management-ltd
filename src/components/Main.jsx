import './main.css';
function Main() {
    return (
      <main>
        <section className='home'>
            <article className='profile'>
                <figure className='profileImg'>
                    <img src="logo192.png" alt="Official pictures of Aviva equity management ltd."/>
                </figure>
                <p className='profileMsg'>
                    <strong>AVIVA Equity Management Limited</strong> a subsidiary of 
                    <strong> AVIVA Finance Limited</strong> is one of the leading brokerage 
                    companies in Bangladesh offering full-fledged standard brokerage 
                    services for the retail, institutional, NRB, and foreign clients 
                    with a dedicated team of skilled professionals having membership 
                    at both the Dhaka Stock Exchange <strong>(DSE)</strong> and the 
                    Chittagong Stock Exchange <strong>(CSE)</strong>.
                </p>
            </article>
            <article className='links'>
                <ul>
                    <li>Notice board 1</li>
                    <li>Notice board 2</li>
                    <li>Notice board 3</li>
                </ul>
                <ul>
                    <li>useful link 1</li>
                    <li>useful link 2</li>
                    <li>useful link 3</li>
                </ul>
            </article>
        </section>
        
        <article className='others'>
            <p>Other contents</p>
        </article>
      </main>
    );
  }
  
  export default Main;