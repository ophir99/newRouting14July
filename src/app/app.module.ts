import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";
import { PosthomeComponent } from "./posts/posthome/posthome.component";
import { SportsComponent } from "./posts/sports/sports.component";
import { ScienceComponent } from "./posts/science/science.component";
import { TechComponent } from "./posts/tech/tech.component";
import { ErrComponent } from "./err/err.component";
import { AppRoutes } from "./app.routes";
import { GalleryModule } from "./gallery/gallery.module";
import { ServicesModule } from "./services/services.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostsComponent,
    PosthomeComponent,
    SportsComponent,
    ScienceComponent,
    TechComponent,
    ErrComponent
  ],
  imports: [BrowserModule, ServicesModule, AppRoutes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
