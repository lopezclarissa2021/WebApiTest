import { Component } from '@angular/core';


export interface PostLink{
  slug: string;
  component: Component | undefined;
  path: string;
}

