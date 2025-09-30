import styles from "./page.module.css";
import {prismaClient} from 'db/client'
export default async function Home() {
  const todo = await prismaClient.todo.findFirst({
    include:{
      user:true
    }
  });

  return (
    <div className={styles.page}>
     Todos : {JSON.stringify(todo) || ''}
     Users : {todo?.user?.username || ''}
    </div>
  );
}
export const dynamic = "force-dynamic";