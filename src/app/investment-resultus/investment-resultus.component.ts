import { Component, Input } from '@angular/core';
import { IResults } from './interfaces/IResults';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-resultus',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-resultus.component.html',
  styleUrl: './investment-resultus.component.css'
})
export class InvestmentResultusComponent {

  @Input() results?: IResults[];
}
