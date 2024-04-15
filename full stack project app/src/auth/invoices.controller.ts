// src/invoices/invoices.controller.ts

// Implement API routes - Create controller for the invoices API

import { Controller, Get, Param } from "@nestjs/common";
import { InvoiceService } from "./invoices.service";

@Controller("invoices")
export class InvoicesController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.invoiceService.findOne(+id);
  }
}
