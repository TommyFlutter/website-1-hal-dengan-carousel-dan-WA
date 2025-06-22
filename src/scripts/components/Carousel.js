class Aside extends HTMLElement {
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
        <img src="../public/image/bimbel office.jpg" alt="Gambar 1" class="active">
        <img src="../public/image/Logo Bimbel.jpg" alt="Gambar 2">
        <img src="../public/image/bimbel1.jpg" alt="Gambar 3">
        <img src="../public/image/bimbel2.jpg" alt="Gambar 4">
        <img src="../public/image/bimbel3.jpg" alt="Gambar 5">
        <img src="../public/image/bimbel4.jpg" alt="Gambar 6">
        <img src="../public/image/bimbel5.jpg" alt="Gambar 7">
        <img src="../public/image/bimbel6.jpg" alt="Gambar 8">

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
 