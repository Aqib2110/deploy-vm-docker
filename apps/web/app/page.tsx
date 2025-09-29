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
     Todo : {JSON.stringify(todo) || ''}
     User : {todo?.user?.username || ''}
    </div>
  );
}
export const dynamic = "force-dynamic";