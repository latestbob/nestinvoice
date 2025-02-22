import { Controller, Get, Post, Body, Param, Delete, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dtos/createInvoiceDto';

@Controller('invoices')
export class InvoicesController {
    constructor(private readonly invoicesService: InvoicesService) {}

    // get invoices

@Get()
findAll() {
    return this.invoicesService.findAll();
}

// @Post()
// create(@Body() createInvoiceDto: CreateInvoiceDto) {
//     return this.invoicesService.create(createInvoiceDto);
// }
  

}
