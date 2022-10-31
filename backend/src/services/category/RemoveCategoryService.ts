import prismaClient from "../../prisma";

  interface CategoryRequest {
    category_id: string;
  }
  
  class RemoveCategoryService {
    async execute({category_id}:CategoryRequest) {

        const category = prismaClient.category.delete({
            where: {
                id: category_id,
            }
        })

        return category;
    }
  }

  export { RemoveCategoryService }