import { NgFor, NgIf } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ScrollDirective } from "../../directives/scroll-directive";
import { SidenavComponent } from "../sidenav/sidenav.component";

export const HEADER_DEPS = [NgIf, NgFor, RouterModule, ScrollDirective, SidenavComponent];
