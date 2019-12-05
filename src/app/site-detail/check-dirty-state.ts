import { AddSiteComponent } from '../add-site/add-site.component';

export function checkDirtyState (component: AddSiteComponent) {
    if (component.isDirty)
        return window.confirm('You have not save this form. Are you sure you want to cancel?')
    return true;
}