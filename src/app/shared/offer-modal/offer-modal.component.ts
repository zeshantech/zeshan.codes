import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { OfferModalService } from './offer-modal.service';

@Component({
  selector: 'app-offer-modal',
  templateUrl: './offer-modal.component.html',
  styleUrl: './offer-modal.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    MatTabsModule,
    MatSelectModule,
    MatDividerModule,
    ReactiveFormsModule,
  ],
})
export class OfferModalComponent {
  contactOption: string = 'email';
  offerFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<OfferModalComponent>,
    private formBuilder: FormBuilder,
    private offerModalService: OfferModalService
  ) {
    this.offerFormGroup = this.formBuilder.group({
      contactOption: ['email'],
      email: [''],
      phoneNumber: [''],
      purpose: [''],
      targetAudience: [''],
      features: [''],
      platform: [''],
      technologyPreferences: [''],
      designPreferences: [''],
      integrationRequirements: [''],
      timeline: [''],
      budget: [''],
      additionalComments: [''],
    });
  }

  async createOffer(): Promise<void> {
    const formData = this.offerFormGroup.value;
    const doc = this.offerModalService.generatePdf(formData);
    const url = await this.offerModalService.uploadPdfToCloud(doc);

    if (url) {
      await this.offerModalService.sendPDFViaWhatsApp(url);
    }

    this.dialogRef.close();
  }
}
