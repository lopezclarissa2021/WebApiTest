import { Component } from '@angular/core';


export interface PageLink{
  slug: string;
  component: Component | undefined;
  path: string;
}

