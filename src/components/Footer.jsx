import './footer.css';

function Footer() {
    return (
      <footer>
        <article className='compani-profile'>
          <h3>AVIVA Equity Management Ltd.</h3>
          <p>
            AVIVA Equity Management Ltd. is providing best priority on customer demand 
            through endless effort to assure best satisfaction and sustainable growth 
            in investment.
          </p>
        </article>
        <article className='links'>
          <h3>Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>FAQ</a></li>
            <li><a href='/'>Downloads</a></li>
          </ul>
        </article>
        <article className='contact'>
          <h3>Contact Us</h3>
          
          <ul>
            <li><span class="material-symbols-outlined">call</span><a href="tel:+8802-41040425">+8802-41040425</a></li>
            <li><span class="material-symbols-outlined">call</span><a href="tel:+8802-41040426">+8802-41040426</a></li>
            <li><address><i class="material-symbols-outlined">location_on</i>68 WW Tower, Motijheel, Dhaka, Bangladesh</address></li>
            <li></li>
          </ul>
        </article>
      </footer>
    );
  }
  
  export default Footer