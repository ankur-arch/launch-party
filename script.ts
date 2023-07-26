import { PrismaClient } from "@prisma/client";
import { query, queryWithAccelerate } from "./lib/utils/query";

const prisma = new PrismaClient();

async function main() {
  for (let index = 0; index < 10; index++) {
    const { time } = await query();
    console.log(`Count query without Accelerate took ${time}ms`);

    // const { time: acceleratedTime, info } = await queryWithAccelerate();
    // console.log(
    //   `Count query with Accelerate took ${acceleratedTime}ms - Cache status ${
    //     info?.cacheStatus == "ttl" || info?.cacheStatus == "swr"
    //       ? "Hit"
    //       : "Miss"
    //   }`
    // );
    console.log("------------------------------------");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
