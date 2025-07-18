import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export interface NavItem {
  link: string;
  className: string;
  activeClassName: string
}

export const navItems: NavItem[] = [
  {
    link: 'about',
    className: 'link',
    activeClassName: 'active'
  },
  {
    link: 'skills',
    className: 'link',
    activeClassName: 'active'
  },
  {
    link: 'experience',
    className: 'link',
    activeClassName: 'active'
  },
  {
    link: 'projects',
    className: 'link',
    activeClassName: 'active'
  },
  {
    link: 'education',
    className: 'link',
    activeClassName: 'active'
  },
  {
    link: 'contact',
    className: 'link',
    activeClassName: 'active'
  },
];

export const sidenavAnimations = trigger('slideInOut', [
  state(
    'in',
    style({
      transform: 'translate3d(0,0,0)',
    })
  ),
  state(
    'out',
    style({
      transform: 'translate3d(100%, 0, 0)',
    })
  ),
  transition('in => out', animate('400ms ease-in-out')),
  transition('out => in', animate('400ms ease-in-out')),
]);
