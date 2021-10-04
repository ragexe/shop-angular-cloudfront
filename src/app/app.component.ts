import { ChangeDetectionStrategy, Component } from '@angular/core';
import packageJSON from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public version = `v${packageJSON.version}`;
}
