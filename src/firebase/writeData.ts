import { getDatabase, push, ref, set } from "firebase/database";

const writeData = (text: string) => {
  // Get a reference to the database service
  const db = getDatabase();
  const notsRef = ref(db, `testData`);
  const newNotification = push(notsRef);
  set(newNotification, {
    text,
  });
};

export default writeData;
