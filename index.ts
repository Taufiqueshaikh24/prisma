import { PrismaClient } from "@prisma/client";
import { pid } from "process";

const prisma  =  new PrismaClient()


async function main(){

    // // Create a User 
    // const user = await prisma.user.create({
    //       data: {
    //          name : 'Taufique Shaikh', 
    //          email : 'taufique@email.com'

    //       }
    // })

    // Find all users 
    // const allusers = await prisma.user.findMany();

  //  Create Articles
        // const article = await prisma.article.create({
        //      data : {
        //            title: 'This is the first Article',
        //            body : 'This is the Body',
        //            author : {
        //                 connect : {
        //                      id : 1 
        //                 }
        //            }
        //      }
        // })

        // Get all Articles
        // const articles  = await prisma.article.findMany();

        // Create Users and Articles at the same time 

        // const user = await prisma.user.create({
        //     data : {
        //           name : 'sara Smith', 
        //           email : 'sara@email.com',
        //           articles: {
        //                create : {
        //                  title : 'This is sara\'s title ',
        //                  body  : 'this is sars\'s body'
        //                }
        //           }
        //     }
        // })


        // Users wiht including article we need to 

        // const usernarticles = await prisma.user.findMany({
        //       include: {
        //          articles: true
        //       }
        // })


        // UPdate the data 

        // const updatename = await prisma.user.update({
        //        where: {
        //          id : 1 , 
        //        }, 
        //        data : {
        //             name :'Taufiqur jR'
        //        }
        // })


        // Remove data
        const remove  = await prisma.user.findMany()

      console.log(remove);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
          console.error(e)
          await prisma.$disconnect();
          process.exit(1);
    })