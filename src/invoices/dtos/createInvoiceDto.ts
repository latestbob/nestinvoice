import { IsString, IsNumber, IsDateString, IsEnum, IsOptional, IsArray, IsObject, } from 'class-validator';
import { InvoiceStatus } from '@prisma/client';
export class CreateInvoiceDto {
  @IsString()
  invoiceNumber: string;

  @IsString()
  customerName: string;

  @IsDateString()
  dueDate: string;

  @IsNumber()
  grandTotal: number;

  @IsArray()
  @IsObject({ each: true })  // Ensures each item in the array is an object
  items: Record<string, any>[];  // Accepts an array of objects// JSON can be stored as a string

  @IsEnum(InvoiceStatus)
  status: InvoiceStatus;

  @IsOptional()
  @IsString()
  uploadUrl?: string;
}
