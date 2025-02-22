import { Controller, Get, Post, Body, Param, Delete, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dtos/createInvoiceDto';
import { UpdateInvoiceDto } from './dtos/updateInvoiceDto';

@Controller('api/invoices')
export class InvoicesController {
    constructor(private readonly invoicesService: InvoicesService) {}

    // get invoices

@Get()
findAll() {
    return this.invoicesService.findAll();
}

@Post()
@UsePipes(new ValidationPipe({ whitelist: true }))
create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoicesService.create(createInvoiceDto);
}
  
//get unique

@Get(':id')
findOne(@Param('id') id: string) {
  return this.invoicesService.findOne(+id);

}

//update invoice

@Put(':id')
@UsePipes(new ValidationPipe({ whitelist: true }))
update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoicesService.update(+id, updateInvoiceDto);
}

// delete invoice

@Delete(':id')
remove(@Param('id') id: string) {
    return this.invoicesService.remove(+id);
}


}