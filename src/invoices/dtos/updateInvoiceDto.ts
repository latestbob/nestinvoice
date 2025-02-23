import { IsString, IsNumber, IsDateString, IsEnum, IsOptional, IsArray, IsObject, } from 'class-validator';
import { InvoiceStatus } from '@prisma/client';
export class UpdateInvoiceDto {
@IsOptional()
    
  @IsString()
  invoiceNumber: string;

  @IsString()
  customerName: string;

  @IsDateString()
  dueDate: string;

  
  @IsNumber()
  grandTotal: number;

  @IsString()// Ensures each item in the array is an object
  items: string;  // Accepts an array of objects// JSON can be stored as a string

  @IsEnum(InvoiceStatus)
  status: InvoiceStatus;

  @IsOptional()
  @IsString()
  uploadUrl?: string;
}
