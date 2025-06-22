class Apps extends HTMLElement {
  constructor() {
    super();

    this.render();
  }
  render() {
    this.innerHTML = `



<header>
    
    <div class="jumbotron">
    <h1>BIMBEL SCIENTISTS <cite>SISWA PULANG MEMBAWA ILMU<cite></cite> </h1>
    </div>

<nav>
    <ul>
        <li><a href="#Program BIMBEL">Program BIMBEL</a></li>       
        <li><a href="#Program KURSUS">Program KURSUS</a></li>
        <li><a href="#Tentang Kami">Tentang Kami</a></li>
     </ul>
</nav>
    
    </header>

    `;

      }
}

customElements.define('main-apps', Apps);