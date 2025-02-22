import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateInvoiceDto } from './dtos/createInvoiceDto';
import { UpdateInvoiceDto } from './dtos/updateInvoiceDto';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateInvoiceDto) {

    data.invoiceNumber = Math.floor(Math.random() * 1000000).toString();
    return this.prisma.invoice.create({ data });
  }

  async findAll() {
    return this.prisma.invoice.findMany();
  }


//   find invoice by id
  async findOne(id: number) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id }
    });

    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }

    return invoice;
  }


  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
    });

    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }

    return this.prisma.invoice.update({
      where: { id },
      data: updateInvoiceDto,
    });
  }



  async remove(id: number) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
    });

    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }

   
  await this.prisma.invoice.delete({
    where: { id },
  });

  return {
    message: `Invoice with ID ${id} has been successfully deleted`,
    success: true,
  };

    
  }
//   async filterInvoices(dateRange: { start: Date; end: Date }, paymentStatus: string) {
//     return this.prisma.invoice.findMany({
//       where: {
//         date: {
//           gte: dateRange.start,
//           lte: dateRange.end,
//         },
//         paymentStatus,
//       },
//     });
//   }
}