import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TaskService {

    constructor(private prisma: PrismaService){}

    async create(data: TaskDTO) {

        const taskExists = await this.prisma.task.findFirst({
            where: {
                title: data.title,
                authorId: data.authorId
            }
        })

        if(taskExists){
            throw new Error('Task already exists')
        }

        const task = await this.prisma.task.create({
            data: {
                title: data.title,
                status: data.status,
                authorId: data.authorId
            },
        })

        return task
    }
}
