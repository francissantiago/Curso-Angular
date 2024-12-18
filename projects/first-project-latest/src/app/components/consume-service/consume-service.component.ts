import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {
  // Angular >= 17
  #apiService = inject(ApiService);

  public getListTask = this.#apiService.getListTask;
  public getTaskId = this.#apiService.getTaskId;

  ngOnInit(): void {
    this.#apiService.httpListTask$().subscribe();
    this.#apiService.httpTaskId$('jUuCaR46y3uatLpusrHa').subscribe();
  }
}
