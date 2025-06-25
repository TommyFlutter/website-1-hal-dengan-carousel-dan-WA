import FotoAkuntansi from '../../public/image/accounting.jpg';
import FotoOffice from '../../public/image/ms office.jpg';
import FotoEnglish from '../../public/image/general english.jpg';

import FotoBimbel from '../../public/image/bimbel4.jpg';



class Article extends HTMLElement {
  constructor() {
    super();

    this.render();
  }
  render() {
    this.innerHTML = `



<article>
   <section>
    <h2 id="Program BIMBEL">Program BIMBEL</h2>
<h2>1. Program Bimbel SD (4,5 & 6)</h2>
<h2>2. Program Bimbel SMP</h2>
<h2>3. Program Bimbel SMA/Sederajat</h2>
<h2>4. (Siap UTBK; US;PTS;PAT)</h2>
   </section>

   <section>
<h2 id="Program KURSUS">Program KURSUS</h2>
<h2>1. ACCOUNTING<br>
    <cite>(Program Kursus Akuntansi merupakan kebutuhan mendasar untuk menjalankan  bisnis)</cite></h2>
<img src="${FotoAkuntansi}" />

<article id="ACCOUNTING" class="card">
   
<p lang="id" translate="no">Program ini bertujuan agar peserta dapat memahami dengan Accounting Cycle (alur pencatatan) akuntansi untuk perusahaan jasa, dagang dan industry. Peserta akan dapat memahami membuat laporan keuangan yang diperlukan perusahaan seperti Laporan Laba Rugi,  Perubahan Modal dan Neraca.
<strong>Sangat cocok di ikuti oleh mereka yang berminat menjadi staf accounting atau staf keuangan perusahaan.</strong></p>
    
<h2>2. MS. OFFICE</h2>
<img src="${FotoOffice}" />

        </section>
<article id="MS. OFFICE" class="card">
    <section>
<p>Paket ini di rancang untuk peserta yang <strong>ingin mempunyai kemampuan untuk dapat bekerja sebagai tenaga administrasi perkantoran yang memiliki kemampuan untuk mengoperasikan komputer dengan perangkat lunak Microsoft Windows, Word, Excel dan Power Point.</strong></p>
    </section>

    <section>
<h2>3. GENERAL ENGLISH</h2>
<img src="${FotoEnglish}" />
    </section>

<article id="GENERAL ENGLISH" class="card">
    <section>
<p>Selama program berlangsung <strong>siswa akan di berikan tes tertulis</strong> untuk mengetahui hasil belajar dan di pantau oleh guru yang bermutu.</p>
    </section>

    <section>
<h2 id="Tentang Kami">Tentang Kami</h2>
<img src="${FotoBimbel}"/>

    
<h3> Bimbingan Belajar Scientists<br> 
Berdiri Sejak tahun 2006<br>  
Alamat Perum Mutiara Bekasi Jaya<br>
Cibarusah Bekasi jawa Barat<br>
Visi : Mencerdaskan Masyarakat<br>
Misi : Menyelenggarakan Bimbingan Belajar<br></h3>
<h2>LANGSUNG SAJA MENDAFTAR DI <cite>WA 0858 8652 8913</cite></h2> 
    </section>

</article>`;

      }
}

customElements.define('main-article', Article);

