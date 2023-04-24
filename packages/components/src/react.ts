import * as React from 'react';
import { createComponent } from '@lit-labs/react';

// Components

import { Breadcrumb as Lit101Breadcrumb } from './lit101/breadcrumb/breadcrumb';
export const Breadcrumb = createComponent( {
  tagName: 'lit101-breadcrumb',
  elementClass: Lit101Breadcrumb,
  react: React,
} );

import { Container as Lit101Container } from './lit101/container/container';
export const Container = createComponent( {
  tagName: 'lit101-container',
  elementClass: Lit101Container,
  react: React,
} );

import { Divider as Lit101Divider } from './lit101/divider/divider';
export const Divider = createComponent( {
  tagName: 'lit101-divider',
  elementClass: Lit101Divider,
  react: React,
} );

import { Avatar as Lit101Avatar } from './lit101/avatar/avatar';
export const Avatar = createComponent( {
  tagName: 'lit101-avatar',
  elementClass: Lit101Avatar,
  react: React,
} );

import { Theme as Lit101Theme } from './lit101/theme/theme';
export const Theme = createComponent( {
  tagName: 'lit101-theme',
  elementClass: Lit101Theme,
  react: React,
} );

// Appbar component

import { Appbar as Lit101Appbar } from './lit101/appbar/appbar';
export const Appbar = createComponent( {
  tagName: 'lit101-appbar',
  elementClass: Lit101Appbar,
  react: React,
} );

import { Appbaritem as Lit101Appbaritem } from './lit101/appbar/appbaritem';
export const Appbaritem = createComponent( {
  tagName: 'lit101-appbaritem',
  elementClass: Lit101Appbaritem,
  react: React,
} );

// Sidebar component

import { Nav as Lit101Nav } from './lit101/nav/nav';
export const Nav = createComponent( {
  tagName: 'lit101-nav',
  elementClass: Lit101Nav,
  react: React,
} );

import { Navitem as Lit101Navitem } from './lit101/nav/navitem';
export const Navitem = createComponent( {
  tagName: 'lit101-navitem',
  elementClass: Lit101Navitem,
  react: React,
} );

// Card component

import { Card as Lit101Card } from './lit101/card/card';
export const Card = createComponent( {
  tagName: 'lit101-card',
  elementClass: Lit101Card,
  react: React,
} );

import { Cardheader as Lit101Cardheader } from './lit101/card/cardheader';
export const Cardheader = createComponent( {
  tagName: 'lit101-cardheader',
  elementClass: Lit101Cardheader,
  react: React,
} );

import { Cardbody as Lit101Cardbody } from './lit101/card/cardbody';
export const Cardbody = createComponent({
  tagName: 'lit101-cardbody',
  elementClass: Lit101Cardbody,
  react: React,
});

import { Cardfooter as Lit101Cardfooter } from './lit101/card/cardfooter';
export const Cardfooter = createComponent({
  tagName: 'lit101-cardfooter',
  elementClass: Lit101Cardfooter,
  react: React,
});

// Layouts

import { Applayout as Lit101Applayout } from './lit101/layouts/applayout';
export const Applayout = createComponent( {
  tagName: 'lit101-applayout',
  elementClass: Lit101Applayout,
  react: React,
} );
