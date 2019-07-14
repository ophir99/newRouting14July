import { NgModule } from "@angular/core";
import { GalleryComponent } from "./gallery.component";
import { ThirdComponent } from "./third/third.component";
import { SecondComponent } from "./second/second.component";
import { RouterModule } from "@angular/router";
import { FirstComponent } from "./first/first.component";

@NgModule({
  declarations: [
    GalleryComponent,
    FirstComponent,
    ThirdComponent,
    SecondComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: GalleryComponent,
        children: [
          {
            path: "",
            component: FirstComponent
          },
          {
            path: "second",
            component: SecondComponent
          },
          {
            path: "third",
            component: ThirdComponent
          }
        ]
      }
    ])
  ]
})
export class GalleryModule {}
