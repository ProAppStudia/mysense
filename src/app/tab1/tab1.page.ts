import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { notificationsOutline } from 'ionicons/icons';
import { IONIC_STANDALONE_IMPORTS } from '../ionic-standalone-imports';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [...IONIC_STANDALONE_IMPORTS, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {
    addIcons({ 'notifications-outline': notificationsOutline });
  }
}
