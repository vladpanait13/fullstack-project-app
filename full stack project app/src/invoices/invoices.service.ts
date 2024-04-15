// Create services to handle business logic

// src/invoices/invoices.service.ts
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.invoice.findMany();
  }

  async findOne(id: number) {
    return this.prisma.invoice.findUnique({
      where: { id },
    });
  }
}
