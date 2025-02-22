import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
// import { CreateInvoiceDto, UpdateInvoiceDto } from './dto';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

//   async create(createInvoiceDto: CreateInvoiceDto) {
//     return this.prisma.invoice.create({
//       data: createInvoiceDto,
//     });
//   }

  async findAll() {
    return this.prisma.invoice.findMany();
  }

//   async findOne(id: number) {
//     return this.prisma.invoice.findUnique({
//       where: { id },
//     });
//   }

//   async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
//     return this.prisma.invoice.update({
//       where: { id },
//       data: updateInvoiceDto,
//     });
//   }

//   async remove(id: number) {
//     return this.prisma.invoice.delete({
//       where: { id },
//     });
//   }

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