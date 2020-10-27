import { Component, OnInit } from '@angular/core';
import { Contract_Status } from 'src/app/1/models/enums';
import { Contract } from 'src/app/1/models/models';
import { ContractService } from 'src/app/1/services/contract.service';

@Component({
  selector: "app-list1",
  templateUrl: "./list1.component.html",
  styleUrls: ["./list1.component.scss"],
})
export class List1Component implements OnInit {
  constructor(private contractService: ContractService) {}

  isLoading = true;
  contracts: Contract[] = [];
  async ngOnInit() {
    this.isLoading = true;
    this.contracts = await this.contractService.readMyContracts({
      isEmployer: false,
      status: Contract_Status.STARTED,
    });
    this.isLoading = false;
  }
}
