import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {

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
