
export const AppRoutes = [
    { path: 'phones', loadChildren: 'app/phones/phones.module#PhonesModule' },
    { path: '', pathMatch: 'full', redirectTo: 'phones' }
];
