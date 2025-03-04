import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { DataService } from './data.service';
import { PostListComponent } from './post-list/post-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PostItemComponent } from './post-item/post-item.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { NavBarComponent } from './Navbar/NavBarComponent';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    PostDetailComponent,
    NavBarComponent,
    PostItemComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClientModule,
  ],
  providers: [
    DataService,
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




