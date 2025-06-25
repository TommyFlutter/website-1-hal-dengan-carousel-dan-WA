import FotoTommy from '../../public/image/Foto Tommy Azwar Muslim.jpg';

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
    
        
        <img src="${FotoTommy}" />
        
        </header>
        
        <section>
            Informasi Lainnya<br>
            pekerjaan pengurus Bimbel Scientists
            
        </section>
        
    </article>
</aside>
`;
  }
}

customElements.define('main-aside', Aside);
