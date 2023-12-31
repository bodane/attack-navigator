import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatrixCommon } from '../matrix-common';
import { ConfigService } from '../../services/config.service';
import { ViewModelsService } from '../../services/viewmodels.service';

@Component({
  selector: 'matrix-side',
  templateUrl: './matrix-side.component.html',
  styleUrls: ['./matrix-side.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MatrixSideComponent extends MatrixCommon implements OnInit {

  constructor(configService: ConfigService, viewModelsService: ViewModelsService) {
    super(configService, viewModelsService);
  }

  ngOnInit(): void {
    // intentionally left blank
  }
}
