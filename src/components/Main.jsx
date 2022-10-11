import './main.css';
function Main() {
    return (
      <main>
        <section className='home'>
            <article className='profile'>
                <figure>
                    <img src="logo192.png" alt="Official pictures of Aviva equity management ltd."/>
                </figure>
                <p>Profile msg</p>
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