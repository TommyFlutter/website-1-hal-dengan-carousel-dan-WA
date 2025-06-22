class Aside extends HTMLElement {
  constructor() {
    super();

    this.render();
  }
  render() {
    this.innerHTML = `

    <aside>
    <article class="profile">
        <header >
        <h2>Tommy Azwar Muslim</h2>
    
        <figure>
        <img src="../public/image/Foto Tommy Azwar Muslim.jpg"
        alt="Tommy Azwar Muslim" width="100 px">
        <figcaption>Foto Diri</figcaption>
        </figure>
        
        </header>
        
        <section>
            Informasi Lainnya<br>
            Lahir di Jakarta 061168<br>
            pekerjaan pengurus Bimbel Scientists
            
        </section>
        
    </article>
</aside>
`;
      }
}

customElements.define('main-aside', Aside);
