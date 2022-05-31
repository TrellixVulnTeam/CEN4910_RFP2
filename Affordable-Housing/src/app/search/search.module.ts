import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgParticlesModule } from 'ng-particles';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { SearchHeroComponent } from './search-list/search-hero/search-hero.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [SearchListComponent, SearchDetailsComponent, SearchHeroComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    MatExpansionModule,
    NgParticlesModule,
    NgxSkeletonLoaderModule
  ]
})
export class SearchModule { }