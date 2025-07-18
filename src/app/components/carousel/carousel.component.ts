import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  OnDestroy,
  Input
} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [NgFor],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @Input() images: string[] = [];

  @ViewChild('viewbox') viewBox!: ElementRef<HTMLElement>;
  @ViewChild('content') content!: ElementRef<HTMLElement>;

  items: HTMLElement[] = [];
  navigationDots: number[] = [];
  currentDot = 0;
  itemWidth = 0;
  position = 0;
  progress = 0;
  intervalId: any;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.items = Array.from(this.content.nativeElement.children) as HTMLElement[];
      this.navigationDots = Array(this.items.length).fill(0).map((_, i) => i);
      this.calculateDimension();
      this.startAutoScroll();
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  @HostListener('window:resize') onResize() {
    this.calculateDimension();
  }

  calculateDimension(): void {
    const width = this.viewBox.nativeElement.clientWidth;
    this.itemWidth = width;

    this.items.forEach(item => {
      this.renderer.setStyle(item, 'flex', '0 0 ' + width + 'px');
      this.renderer.setStyle(item, 'width', width + 'px');
    });

    this.position = -this.itemWidth * this.currentDot;
  }
  startAutoScroll(): void {
    const duration = 2000;
    const stepTime = 50;
    const steps = duration / stepTime;
    clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      this.progress += 100 / steps;
      if (this.progress >= 100) {
        this.progress = 0;
        const next = (this.currentDot + 1) % this.navigationDots.length;
        this.scrollTo(next);
      }
    }, stepTime);
  }

  scrollTo(dotIndex: number): void {
    if (dotIndex < 0 || dotIndex >= this.navigationDots.length) return;

    this.currentDot = dotIndex;
    this.position = -this.itemWidth * dotIndex;

    this.renderer.setStyle(this.content.nativeElement, 'transition-duration', '0.5s');
    this.progress = 0;

    clearInterval(this.intervalId);

    setTimeout(() => {
      this.renderer.setStyle(this.content.nativeElement, 'transition-duration', '0s');
      this.startAutoScroll();
    }, 500);
  }
}
