import FotoOffice from '../../public/image/bimbel office.jpg';
import FotoLogo from '../../public/image/Logo Bimbel.jpg';
import FotoSatu from '../../public/image/bimbel1.jpg';
import FotoDua from '../../public/image/bimbel2.jpg';
import FotoTiga from '../../public/image/bimbel3.jpg';
import FotoEmpat from '../../public/image/bimbel4.jpg';
import FotoLima from '../../public/image/bimbel5.jpg';
import FotoEnam from '../../public/image/bimbel6.jpg';



class Carousel extends HTMLElement {
  constructor() {
    super();

    this.render();
  }
  render() {
    this.innerHTML = `
<style>
    .carousel {
            position: relative;
            width: 800px;
            height: 500px;
            margin: 10px auto;
            overflow: hidden;
        }

        .carousel img {
            width: 100%;
            height: 70%;
            object-fit: cover;
            display: none;
        }

        .carousel img.active {
            display: block;
        }

        .prev, .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 24px;
            cursor: pointer;
        }

        .prev {
            left: 20px;
        }

        .next {
            right: 20px;
        }
        </style>

    <div class="carousel">
        <img src="${FotoOffice}" alt="Gambar 1" class="active"/>
        <img src="${FotoLogo}" alt="Gambar 2"/>
        <img src="${FotoSatu}" alt="Gambar 3"/>
        <img src="${FotoDua}" alt="Gambar 4"/>
        <img src="${FotoTiga}" alt="Gambar 5"/>
        <img src="${FotoEmpat}" alt="Gambar 6"/>
        <img src="${FotoLima}" alt="Gambar 7"/>
        <img src="${FotoEnam}" alt="Gambar 8"/>

        <span class="prev">&#10094;</span>
        <span class="next">&#10095;</span>
    </div>

    <script>
        let carousel = document.querySelector('.carousel');
        let images = carousel.querySelectorAll('img');
        let prev = carousel.querySelector('.prev');
        let next = carousel.querySelector('.next');
        let currentImage = 0;

        prev.addEventListener('click', () => {
            images[currentImage].classList.remove('active');
            currentImage = (currentImage - 1 + images.length) % images.length;
            images[currentImage].classList.add('active');
        });

        next.addEventListener('click', () => {
            images[currentImage].classList.remove('active');
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].classList.add('active');
        });

        setInterval(() => {
            images[currentImage].classList.remove('active');
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].classList.add('active');
        }, 3000);
    </script>



   `;
      }
}

customElements.define('main-carousel', Carousel);
 