import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;
  @HostBinding('style.backgroundColor') bg!: string;

  @HostBinding('style.outline') outline: string = 'none';

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.bg = this.possibleColors[colorPick];
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.outline = 'white solid 5px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.outline = 'none';
  }
}
