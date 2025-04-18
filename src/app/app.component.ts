import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { IUserInput } from './user-input/interfaces/IUserInput';
import { InvestmentResultusComponent } from './investment-resultus/investment-resultus.component';
import { IResults } from './investment-resultus/interfaces/IResults';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultusComponent],
})
export class AppComponent {

  resultsData?: IResults[];

  onCalculateInvestmentResults(data: IUserInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}
