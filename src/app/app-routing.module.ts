import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './hooks/parent/parent.component';
import { AppComponent } from './app.component';
import { ChildComponent } from './hooks/child/child.component';
import { AsyncComponent } from './asyncPipes/async-component/async.component';
import { CustomPreloadingStrategyService } from './services/CustomPreloadingStrategyService';
import { NetworkAwarePreloadingStrategyService } from './services/NetworkAwarePreloadingStrategyService ';
import { ResolverSampleComponent } from './resolver-sample/resolver-sample.component';
import { UserResolver } from './resolvers/user.resolver';
import { CDParentComponent } from './ChangeDetection/cdparent/cdparent.component';
import { AngularTemplatesComponent } from './angular-templates/angular-templates.component';

// npm i network-information-types

const routes: Routes = [
  {
    path: 'onChanges',
    component: ParentComponent,
    data: { preload: true },
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: 'asyncPipe',
    component: AsyncComponent,
  },
  {
    path: 'erp',
    loadChildren: () =>
      import('./modules/erp/erp.module').then((m) => m.ErpModule),
  },
  {
    path: 'crm',
    loadChildren: () =>
      import('./modules/crm/crm.module').then((m) => m.CrmModule),
  },
  {
    path: 'resolverSample',
    component: ResolverSampleComponent,
    resolve: {
      // data.users
      users: UserResolver, // sayfayı açmadan önce buradaki bağlantı üzerinden veriyi senkronlaştırıcaz.
    },
  },
  {
    path: 'changeDetection',
    component: CDParentComponent,
  },
  {
    path: 'angularTemplates',
    component: AngularTemplatesComponent,
  },
];

@NgModule({
  imports: [
    // Buyük ölçekli projelerde bu ayarı aktif hale getirmeyelim
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    // RouterModule.forRoot(routes, {
    //   preloadingStrategy: CustomPreloadingStrategyService,
    // }),
    RouterModule.forRoot(routes, {
      preloadingStrategy: NetworkAwarePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
