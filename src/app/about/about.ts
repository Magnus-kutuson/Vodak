import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';



interface SkillCard {
  src: string;
  alt: string;
  label: string;
}


@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {

  skills: SkillCard[] = [
    { src: '/images/beaute.jpg',         alt: 'Beauty Branding Project',      label: 'Branding & Identity'  },
    { src: '/images/pent.jpg',           alt: 'Interior Design Concept',      label: 'UI / Concept Design'  },
    { src: '/images/szoboszlai.jpg',     alt: 'Digital Graphics',             label: 'Digital Illustration' },
    { src: '/images/sobolo 1.jpg',       alt: 'Product Photography/Graphics', label: 'Product Design'       },
    { src: '/images/naya1.jpg',          alt: 'Product Photography/Graphics', label: 'Product Design'       },
    { src: '/images/Matchday_Image.jpg', alt: 'Product Photography/Graphics', label: 'Product Design'       },
    { src: '/images/bikinis.jpg',        alt: 'Product Photography/Graphics', label: 'Product Design'       },
    { src: '/images/vals.jpg',           alt: 'Product Photography/Graphics', label: 'Product Design'       },
    { src: '/images/gmhs.jpg',           alt: 'Product Photography/Graphics', label: 'Product Design'       },
  ];

   ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll<HTMLElement>('.skill-fill');
            fills.forEach((fill) => {
              fill.style.width = fill.style.width;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.skills-grid').forEach((el) => {
      observer.observe(el);
    });
  }
}
